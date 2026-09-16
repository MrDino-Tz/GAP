import express from 'express';
import cors from 'cors';
import crypto from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { recordView, getTotals, getViewsToday, getDailySeries, getTopPaths } from './storage.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = process.env.PORT || 3000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'change-me';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// ---- simple in-memory rate limit (25 requests / minute / IP) ----
const hits = new Map();
const rateLimit = (req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const windowStart = now - 60_000;
  const list = (hits.get(ip) || []).filter((t) => t > windowStart);
  if (list.length >= 25) {
    return res.status(429).json({ error: 'Too many requests. Slow down.' });
  }
  list.push(now);
  hits.set(ip, list);
  next();
};

const visitorId = (req) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const ua = req.headers['user-agent'] || 'unknown';
  return crypto.createHash('sha256').update(`${ip}|${ua}`).digest('hex').slice(0, 32);
};

// Auth helpers
const isAuthed = (req) => {
  const header = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const token = req.query.token || header;
  return token && token === ADMIN_TOKEN;
};

const requireAuth = (req, res, next) => {
  if (!isAuthed(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

const nowIso = () => new Date().toISOString();

// ---- public endpoints ----
app.post('/api/visit', rateLimit, (req, res) => {
  const id = visitorId(req);
  const path = req.body?.path || req.headers.referer || '/';
  recordView({ visitorId: id, path, now: nowIso() });
  res.json({ ok: true });
});

app.get('/api/count', (req, res) => {
  res.json(getTotals());
});

// ---- stats + dashboard (admin only) ----
app.get('/api/stats', requireAuth, (req, res) => {
  res.json({
    totals: getTotals(),
    today: getViewsToday(),
    daily: getDailySeries(req.query.days ? parseInt(req.query.days, 10) : 30),
    topPaths: getTopPaths(),
  });
});

app.get('/admin', (req, res) => {
  if (!isAuthed(req)) {
    return res
      .status(401)
      .send('<h3>Unauthorized</h3><p>Visit /admin?token=YOUR_ADMIN_TOKEN</p>');
  }
  res.sendFile(join(__dirname, 'public', 'admin.html'));
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Visitor API running on http://localhost:${PORT}`);
  console.log(`Admin dashboard: http://localhost:${PORT}/admin?token=${ADMIN_TOKEN}`);
});