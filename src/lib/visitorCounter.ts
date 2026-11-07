const VISIT_COUNT_KEY = 'gap-visit-count';

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

export const trackVisitor = async (): Promise<number> => {
  const local = readLocal() + 1;
  writeLocal(local);
  return local;
};