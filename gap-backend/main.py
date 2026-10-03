"""GAP Backend - FastAPI.

Provides:
  - GPA calculation API (same logic as the GAP frontend)
  - Visitor tracking for the GAP home page
  - Admin dashboard to monitor visits and calculations

Run:  uvicorn main:app --host 0.0.0.0 --port 8000
"""

import hashlib
import hmac
import os
import time
from collections import defaultdict, deque
from pathlib import Path

from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
from typing import List, Optional

import gpa as gpa_logic
import storage

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(
    title="GAP Backend",
    description="GPA calculator API + visitor monitoring for the GAP home page",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in os.environ.get("ALLOWED_ORIGIN", "*").split(",") if o.strip()],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "change-me")
RATE_LIMIT_PER_MINUTE = int(os.environ.get("RATE_LIMIT_PER_MINUTE", "25"))

_hits: "dict[str, deque[float]]" = defaultdict(deque)


def _client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _visitor_id(request: Request) -> str:
    raw = f"{_client_ip(request)}|{request.headers.get('user-agent', 'unknown')}"
    return hashlib.sha256(raw.encode()).hexdigest()[:32]


def _rate_limited(request: Request) -> bool:
    ip = _client_ip(request)
    now = time.time()
    bucket = _hits[ip]
    while bucket and bucket[0] < now - 60:
        bucket.popleft()
    if len(bucket) >= RATE_LIMIT_PER_MINUTE:
        return True
    bucket.append(now)
    return False


def _is_authed(request: Request) -> bool:
    header = (request.headers.get("authorization") or "").replace("Bearer ", "", 1)
    token = request.query_params.get("token") or header
    return bool(token) and hmac.compare_digest(token, ADMIN_TOKEN)


def _require_admin(request: Request) -> None:
    if not _is_authed(request):
        raise HTTPException(status_code=401, detail="Unauthorized - missing or invalid ADMIN_TOKEN")


@app.on_event("startup")
def startup() -> None:
    storage.init_db()


class CreditModule(BaseModel):
    code: Optional[str] = None
    name: Optional[str] = None
    creditHours: float = 0
    gradePoint: Optional[float] = None
    grade: Optional[str] = None


class Semester(BaseModel):
    semesterNumber: Optional[int] = None
    semesterName: Optional[str] = None
    programmeName: Optional[str] = None
    gpa: float = 0
    totalCreditHours: float = 0


class SemesterGPARequest(BaseModel):
    modules: List[CreditModule]
    record: bool = True


class CGPARequest(BaseModel):
    semesters: List[Semester]
    record: bool = True


class VisitPayload(BaseModel):
    path: Optional[str] = None


# ---------------------------------------------------------------------------
# Health + root
# ---------------------------------------------------------------------------
@app.get("/")
def root():
    return {
        "name": "GAP Backend",
        "version": "1.0.0",
        "endpoints": [
            "/health",
            "/api/gpa/grading-scale",
            "/api/gpa/semester",
            "/api/gpa/cgpa",
            "/api/gpa/grade-for-score",
            "/api/visit",
            "/api/count",
            "/api/stats (admin)",
            "/admin (admin dashboard)",
        ],
    }


@app.get("/health")
def health():
    return {"ok": True}


# ---------------------------------------------------------------------------
# GPA API
# ---------------------------------------------------------------------------
@app.get("/api/gpa/grading-scale")
def get_grading_scale():
    return {"gradingScale": gpa_logic.GRADING_SCALE}


@app.get("/api/gpa/grade-for-score")
def grade_for_score(score: float):
    if not (0 <= score <= 100):
        raise HTTPException(status_code=400, detail="Score must be between 0 and 100")
    letter = gpa_logic.letter_grade_for_score(score)
    return {
        "score": score,
        "letterGrade": letter,
        "gradePoint": gpa_logic.grade_point_for_grade(letter),
    }


@app.post("/api/gpa/semester")
def semester_gpa(req: SemesterGPARequest, request: Request):
    if _rate_limited(request):
        raise HTTPException(status_code=429, detail="Too many requests. Slow down.")
    if not req.modules:
        raise HTTPException(status_code=400, detail="modules must not be empty")

    modules = [m.model_dump() for m in req.modules]
    result = gpa_logic.calculate_semester_gpa(modules)

    if req.record:
        visitor = _visitor_id(request)
        try:
            storage.record_calculation(
                visitor,
                "semester_gpa",
                result["gpa"],
                detail=f"{result['totalModules']} modules, {result['totalCreditHours']} credits",
            )
        except Exception:
            pass  # logging must never break the response
    return result


@app.post("/api/gpa/cgpa")
def cgpa(req: CGPARequest, request: Request):
    if _rate_limited(request):
        raise HTTPException(status_code=429, detail="Too many requests. Slow down.")
    if not req.semesters:
        raise HTTPException(status_code=400, detail="semesters must not be empty")

    semesters = [s.model_dump() for s in req.semesters]
    result = gpa_logic.calculate_cgpa(semesters)

    if req.record:
        visitor = _visitor_id(request)
        try:
            storage.record_calculation(
                visitor,
                "cgpa",
                result["cgpa"],
                detail=f"{result['totalSemesters']} semesters, {result['totalCreditHours']} credits",
            )
        except Exception:
            pass
    return result


# ---------------------------------------------------------------------------
# Visitor tracking
# ---------------------------------------------------------------------------
@app.post("/api/visit")
def track_visit(request: Request, payload: Optional[VisitPayload] = None):
    if _rate_limited(request):
        raise HTTPException(status_code=429, detail="Too many requests. Slow down.")

    path = payload.path if payload and payload.path else (request.headers.get("referer") or "/")

    visitor = _visitor_id(request)
    storage.record_view(visitor, path)
    return {"ok": True}


@app.get("/api/count")
def get_count():
    return storage.totals()


# ---------------------------------------------------------------------------
# Admin dashboard
# ---------------------------------------------------------------------------
@app.get("/api/stats")
def get_stats(request: Request, days: int = 30):
    _require_admin(request)
    if days < 1 or days > 365:
        raise HTTPException(status_code=400, detail="days must be between 1 and 365")
    return {
        "totals": storage.totals(),
        "today": storage.today_stats(),
        "daily": storage.daily_series(days),
        "topPaths": storage.top_paths(),
        "recent": storage.recent_activity(),
    }


@app.get("/admin")
def admin_dashboard(request: Request):
    if not _is_authed(request):
        return JSONResponse(
            content={"error": "Unauthorized"},
            status_code=401,
        )
    return FileResponse(BASE_DIR / "static" / "admin.html", media_type="text/html")


@app.get("/admin/clear", include_in_schema=False)
def clear_data(request: Request):
    _require_admin(request)
    storage.clear_all()
    return {"ok": True}