const VISIT_COUNT_KEY = 'gap-visit-count';

const apiBase = (): string | null => {
  const url = import.meta.env.VITE_VISITOR_API;
  return url ? String(url).replace(/\/$/, '') : null;
};

const readLocal = (): number => {
  try {
    return parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0');
  } catch {
    return 0;
  }
};

const writeLocal = (count: number) => {
  try {
    localStorage.setItem(VISIT_COUNT_KEY, String(count));
  } catch {
    // localStorage unavailable
  }
};

export const trackVisitor = async (): Promise<number | null> => {
  const local = readLocal() + 1;
  writeLocal(local);

  const api = apiBase();
  if (!api) return local;

  try {
    await fetch(`${api}/api/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: window.location.pathname }),
    });
  } catch {
    return local;
  }

  try {
    const res = await fetch(`${api}/api/count`);
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    return typeof data?.views === 'number' ? data.views : local;
  } catch {
    return local;
  }
};