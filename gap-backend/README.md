# GAP Backend (FastAPI)

A FastAPI backend for the GAP (GPA Academic Planner) app. It provides the GPA calculation logic the frontend uses, plus a visitor counter and an admin dashboard to monitor the GAP home page.

## What it does

- **GPA calculator API** — the same semester-GPA and CGPA logic as the GAP frontend, using the official IAA grading scale.
- **Visitor tracking** — records anonymous page views from the GAP site (`POST /api/visit`).
- **Admin dashboard** — monitors the GAP home page: total/unique visits, calculations, daily chart, top pages and recent activity.

## Endpoints

| Method | Path                       | Auth   | Purpose                                              |
| ------ | -------------------------- | ------ | ---------------------------------------------------- |
| GET    | `/health`                  | public | Health check                                         |
| GET    | `/api/gpa/grading-scale`   | public | Official IAA grading scale                           |
| GET    | `/api/gpa/grade-for-score` | public | Letter grade + grade point for a score (0-100)       |
| POST   | `/api/gpa/semester`        | public | Compute semester GPA from module grades              |
| POST   | `/api/gpa/cgpa`            | public | Compute cumulative GPA across semesters              |
| POST   | `/api/gpa/target`          | public | Required GPA to reach a target CGPA                  |
| POST   | `/api/visit`               | public | Record a page view (`{"path": "/"}`)                 |
| GET    | `/api/count`               | public | Total `{views, unique, calculations}`                |
| GET    | `/api/stats`               | admin  | Detailed stats (daily series, top paths, recent)     |
| GET    | `/admin`                   | admin  | Admin dashboard page (`/admin?token=YOUR_TOKEN`)     |
| GET    | `/admin/clear`             | admin  | Reset all stored data                                |

Admin auth: `?token=` query param or `Authorization: Bearer <token>`, compared against `ADMIN_TOKEN`.

## Example GPA calls

Semester GPA (grades as grade points):

```json
POST /api/gpa/semester
{
  "modules": [
    { "code": "ICT101", "name": "ICT Basics", "creditHours": 4, "gradePoint": 5.0 },
    { "code": "ACC102", "name": "Accounting", "creditHours": 3, "grade": "B+" }
  ]
}
```

CGPA:

```json
POST /api/gpa/cgpa
{
  "semesters": [
    { "semesterName": "Semester 1", "gpa": 3.8, "totalCreditHours": 18 },
    { "semesterName": "Semester 2", "gpa": 4.1, "totalCreditHours": 21 }
  ]
}
```

Target GPA (what you need this semester to reach a desired CGPA):

```json
POST /api/gpa/target
{
  "currentCgpa": 3.2,
  "completedCreditHours": 84,
  "semesterCreditHours": 18,
  "targetCgpa": 3.5
}
```

All GPA endpoints support `"record": false` to skip writing an entry to the calculations log (use it for live slider/one-shot recomputes).

## Run locally

```bash
cd gap-backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

export ADMIN_TOKEN=some-long-secret
export ALLOWED_ORIGIN=*
uvicorn main:app --host 0.0.0.0 --port 8000
```

Then:

- API docs:  http://localhost:8000/docs
- Dashboard: http://localhost:8000/admin?token=some-long-secret

## Deploy

1. Push this folder (e.g. as a repo, or the `gap-backend` directory) to GitHub.
2. On **Render**: New → Web Service →
   - Root directory: `gap-backend`
   - Build: `pip install -r requirements.txt`
   - Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Env vars: `ADMIN_TOKEN`, `ALLOWED_ORIGIN`
3. Or run on **Railway / Fly.io / any VPS** the same way.
4. To persist data across restarts, attach a persistent disk and set `SQLITE_PATH` to a path on that disk.

## Connecting the GAP site

Set in the GAP frontend `.env`:

```
VITE_VISITOR_API=https://your-backend-url.com
```

The site will then send a visit on each page load and show the global view count in the nav (falling back to a per-browser local count if the API is unreachable).