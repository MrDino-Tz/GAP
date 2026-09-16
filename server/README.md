# GAP Visitor API + Admin Dashboard

A tiny Node.js backend that counts visits to the GAP site and shows you the numbers in an admin dashboard.

## How it works

```
GAP site (GitHub Pages)            Your server (Render/Railway/VPS)
        │  POST /api/visit  ───────────────────►  records view  ──►  SQLite (visits.db)
        │
        │  (you open a browser)
        └  GET /admin?token=…  ────────────────►  dashboard page
```

- Unique visitors are derived from a hash of the visitor's IP + user-agent (no personal data stored)
- Data is stored in an SQLite file (`visits.db`) — no external database needed
- Node 22.5+ uses the built-in `node:sqlite`, so there are only 2 dependencies (`express`, `cors`)

## Run locally

```bash
cd server
npm install
export ADMIN_TOKEN=some-long-secret      # or use a .env with dotenv (see below)
npm start
```

Then:

- Dashboard: http://localhost:3000/admin?token=some-long-secret
- Health:     http://localhost:3000/health
- Public:     POST /api/visit, GET /api/count

### Using a .env file

This repo does not ship the `dotenv` package to keep deps minimal. Two options:

1. Set env vars in your hosting dashboard (recommended, e.g. Render "Environment").
2. Or run with an inline env: `ADMIN_TOKEN=secret PORT=3000 npm start`.

## Endpoints

| Method | Path            | Auth    | Purpose                                        |
| ------ | --------------- | ------- | ---------------------------------------------- |
| POST   | `/api/visit`    | public  | Called by the GAP site on every page load      |
| GET    | `/api/count`    | public  | Total `{ views, unique }` (for the site nav)   |
| GET    | `/api/stats`    | admin   | Detailed stats (daily series, top paths)       |
| GET    | `/admin`        | admin   | The dashboard page                             |
| GET    | `/health`       | public  | Uptime check                                   |

Admin auth is via `?token=` query param or `Authorization: Bearer <token>` header, compared against `ADMIN_TOKEN`.

## Deploy options

### Render (easiest, free tier)
1. Push this repo to GitHub.
2. On render.com → New → Web Service → pick the repo.
3. Root directory: `server`
4. Build command: `npm install`
5. Start command: `npm start`
6. Add env vars: `ADMIN_TOKEN`, `ALLOWED_ORIGIN`
7. Deploy → you get a URL like `https://gap-visits.onrender.com`
8. Dashboard: `https://gap-visits.onrender.com/admin?token=YOUR_TOKEN`

### Railway / Fly.io / any VPS
Same idea: run `npm install && npm start`, expose port `PORT`, and keep the SQLite file on a persistent disk (attach a volume to the data path) so counts survive restarts.

## Connecting the GAP site

In the GAP frontend `.env`:

```
VITE_VISITOR_API=https://gap-visits.onrender.com
```

The site will then POST a visit on each page load and show the global view count in the nav (falling back to a local per-browser count if the API is unreachable).