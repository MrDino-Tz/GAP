"""SQLite storage for visitor tracking and (optionally) calculation history."""

import os
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timedelta

_DB_PATH = os.environ.get("SQLITE_PATH", os.path.join(os.path.dirname(os.path.abspath(__file__)), "gap.db"))


@contextmanager
def get_conn():
    conn = sqlite3.connect(_DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL;")
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init_db() -> None:
    os.makedirs(os.path.dirname(_DB_PATH) or ".", exist_ok=True)
    with get_conn() as conn:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS views (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                visitor_id TEXT NOT NULL,
                path TEXT,
                viewed_at TEXT NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_views_visitor ON views(visitor_id);
            CREATE INDEX IF NOT EXISTS idx_views_time ON views(viewed_at);

            CREATE TABLE IF NOT EXISTS calculations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                visitor_id TEXT,
                calc_type TEXT NOT NULL,
                result REAL,
                detail TEXT,
                created_at TEXT NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_calculations_time ON calculations(created_at);
            CREATE INDEX IF NOT EXISTS idx_calculations_type ON calculations(calc_type);
        """)


def record_view(visitor_id: str, path: str) -> None:
    now = datetime.utcnow().isoformat()
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO views (visitor_id, path, viewed_at) VALUES (?, ?, ?)",
            (visitor_id, path, now),
        )


def record_calculation(visitor_id: str, calc_type: str, result: float, detail: str = "") -> None:
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO calculations (visitor_id, calc_type, result, detail, created_at) VALUES (?, ?, ?, ?, ?)",
            (visitor_id, calc_type, result, detail, datetime.utcnow().isoformat()),
        )


def totals() -> dict:
    with get_conn() as conn:
        row = conn.execute(
            "SELECT COUNT(*) AS views, COUNT(DISTINCT visitor_id) AS unique_visitors FROM views"
        ).fetchone()
        calc = conn.execute("SELECT COUNT(*) AS c FROM calculations").fetchone()
    return {
        "views": row["views"],
        "unique": row["unique_visitors"],
        "calculations": calc["c"],
    }


def today_stats() -> dict:
    today = datetime.utcnow().date().isoformat()
    with get_conn() as conn:
        row = conn.execute(
            "SELECT COUNT(*) AS views, COUNT(DISTINCT visitor_id) AS unique_visitors "
            "FROM views WHERE substr(viewed_at,1,10) = ?",
            (today,),
        ).fetchone()
        calc = conn.execute(
            "SELECT COUNT(*) AS c FROM calculations WHERE substr(created_at,1,10) = ?", (today,)
        ).fetchone()
    return {
        "views": row["views"],
        "unique": row["unique_visitors"],
        "calculations": calc["c"],
        "date": today,
    }


def daily_series(days: int = 30) -> list:
    since = (datetime.utcnow() - timedelta(days=days)).date().isoformat()
    with get_conn() as conn:
        rows = conn.execute(
            """
            SELECT substr(viewed_at,1,10) AS day,
                   COUNT(*) AS views,
                   COUNT(DISTINCT visitor_id) AS unique_visitors
            FROM views
            WHERE substr(viewed_at,1,10) >= ?
            GROUP BY day
            ORDER BY day ASC
            """,
            (since,),
        ).fetchall()
        calc_rows = conn.execute(
            """
            SELECT substr(created_at,1,10) AS day, COUNT(*) AS calculations
            FROM calculations
            WHERE substr(created_at,1,10) >= ?
            GROUP BY day ORDER BY day ASC
            """,
            (since,),
        ).fetchall()
    calc_map = {r["day"]: r["calculations"] for r in calc_rows}
    return [
        {
            "day": r["day"],
            "views": r["views"],
            "unique_visitors": r["unique_visitors"],
            "calculations": calc_map.get(r["day"], 0),
        }
        for r in rows
    ]


def top_paths(limit: int = 10) -> list:
    with get_conn() as conn:
        rows = conn.execute(
            "SELECT path, COUNT(*) AS views FROM views GROUP BY path ORDER BY views DESC LIMIT ?",
            (limit,),
        ).fetchall()
    return [{"path": r["path"], "views": r["views"]} for r in rows]


CALC_LABELS = {
    "semester_gpa": "Semester GPA",
    "cgpa": "CGPA",
    "target_gpa": "Target GPA",
}


def calc_breakdown(limit: int = 10) -> list:
    with get_conn() as conn:
        rows = conn.execute(
            """
            SELECT calc_type,
                   COUNT(*) AS count,
                   ROUND(AVG(result), 2) AS avg_result,
                   MAX(created_at) AS last_at
            FROM calculations
            GROUP BY calc_type
            ORDER BY count DESC
            LIMIT ?
            """,
            (limit,),
        ).fetchall()
    return [
        {
            "type": r["calc_type"],
            "label": CALC_LABELS.get(r["calc_type"], r["calc_type"]),
            "count": r["count"],
            "avgResult": r["avg_result"],
            "lastAt": r["last_at"],
        }
        for r in rows
    ]


def recent_calculations(limit: int = 20) -> list:
    with get_conn() as conn:
        rows = conn.execute(
            """
            SELECT created_at AS at, calc_type AS type,
                   result, COALESCE(detail, '') AS detail
            FROM calculations
            ORDER BY id DESC LIMIT ?
            """,
            (limit,),
        ).fetchall()
    return [
        {
            "at": r["at"],
            "type": r["type"],
            "label": CALC_LABELS.get(r["type"], r["type"]),
            "result": r["result"],
            "detail": r["detail"],
        }
        for r in rows
    ]


def recent_activity(limit: int = 20) -> list:
    with get_conn() as conn:
        views = conn.execute(
            "SELECT viewed_at AS at, 'visit' AS kind, path AS label FROM views ORDER BY id DESC LIMIT ?",
            (limit,),
        ).fetchall()
        calcs = conn.execute(
            "SELECT created_at AS at, 'calculation' AS kind, "
            "calc_type || ' -> ' || result AS label FROM calculations ORDER BY id DESC LIMIT ?",
            (limit,),
        ).fetchall()
    rows = sorted(
        [dict(r) for r in views] + [dict(r) for r in calcs],
        key=lambda r: r["at"],
        reverse=True,
    )
    return rows[:limit]


def clear_all() -> int:
    with get_conn() as conn:
        conn.execute("DELETE FROM views")
        conn.execute("DELETE FROM calculations")
    return 0