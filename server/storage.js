import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbDir = process.env.SQLITE_PATH ? dirname(process.env.SQLITE_PATH) : __dirname;
const dbPath = process.env.SQLITE_PATH || join(__dirname, 'visits.db');

mkdirSync(dbDir, { recursive: true });

export const db = new DatabaseSync(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT NOT NULL,
    path TEXT,
    viewed_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_views_visitor ON views(visitor_id);
  CREATE INDEX IF NOT EXISTS idx_views_time ON views(viewed_at);
`);

const insertView = db.prepare(
  'INSERT INTO views (visitor_id, path, viewed_at) VALUES (?, ?, ?)'
);

export const recordView = ({ visitorId, path, now }) => {
  insertView.run(visitorId, path ?? '/', now);
};

export const getTotals = () => {
  const totals = db
    .prepare('SELECT COUNT(*) AS views, COUNT(DISTINCT visitor_id) AS unique_visitors FROM views')
    .get();
  return { views: totals.views, unique: totals.unique_visitors };
};

export const getViewsToday = () => {
  const today = new Date().toISOString().slice(0, 10);
  const row = db
    .prepare('SELECT COUNT(*) AS views, COUNT(DISTINCT visitor_id) AS unique_visitors FROM views WHERE viewed_at >= ?')
    .get(`${today}T00:00:00`);
  return { views: row.views, unique: row.unique_visitors };
};

export const getDailySeries = (days = 30) => {
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const rows = db
    .prepare(
      `SELECT substr(viewed_at, 1, 10) AS day,
              COUNT(*) AS views,
              COUNT(DISTINCT visitor_id) AS unique_visitors
       FROM views
       WHERE substr(viewed_at, 1, 10) >= ?
       GROUP BY day
       ORDER BY day ASC`
    )
    .all(since);
  return rows;
};

export const getTopPaths = (limit = 10) => {
  return db
    .prepare(
      `SELECT path, COUNT(*) AS views
       FROM views
       GROUP BY path
       ORDER BY views DESC
       LIMIT ?`
    )
    .all(limit);
};