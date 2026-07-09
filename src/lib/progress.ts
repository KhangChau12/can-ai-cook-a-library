// Client-side reading progress, localStorage-only (no auth/backend — see
// CLAUDE.md, this is a static site). Keyed by route id (e.g.
// "foundations-track/computer-vision/co-ban/cnn") rather than raw filename,
// since ids are stable across any future content reshuffling and match how
// the site actually addresses lessons.
export type ProgressState = 'unread' | 'viewed' | 'quiz_done';

const STORAGE_KEY = 'ai-learn-progress-v3';

type ProgressMap = Record<string, ProgressState>;

function loadMap(): ProgressMap {
  if (typeof localStorage === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveMap(map: ProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* storage unavailable (private mode, quota) — progress just won't persist */
  }
}

export function getProgress(id: string): ProgressState {
  return loadMap()[id] ?? 'unread';
}

export function getAllProgress(): ProgressMap {
  return loadMap();
}

export function markViewed(id: string) {
  const map = loadMap();
  if (map[id]) return;
  map[id] = 'viewed';
  saveMap(map);
}

export function markQuizDone(id: string) {
  const map = loadMap();
  if (map[id] === 'quiz_done') return;
  map[id] = 'quiz_done';
  saveMap(map);
}
