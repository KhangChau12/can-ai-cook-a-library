// Client-side submodule gating: soft-lock submodules after the first one
// that isn't fully complete yet. Runs only in the browser (depends on
// localStorage progress) — pages pass down a lightweight LockInfo (lesson
// ids + whether each has a quiz) computed server-side, and this module does
// the actual "which submodule is locked" math plus DOM locking.
import { isLessonComplete } from './progress';

export interface LockLessonInfo {
  id: string;
  hasQuiz: boolean;
}

export type LockInfo = LockLessonInfo[][]; // one array per submodule, in display order

// Index of the first submodule that still has an incomplete lesson.
// Returns lockInfo.length if every submodule is fully done (nothing locked).
export function firstIncompleteSubmoduleIndex(lockInfo: LockInfo): number {
  for (let i = 0; i < lockInfo.length; i++) {
    const allDone = lockInfo[i].every((l) => isLessonComplete(l.id, l.hasQuiz));
    if (!allDone) return i;
  }
  return lockInfo.length;
}

// Locks every element matching `[data-submodule-section="N"]` under `root`
// for N > firstIncomplete: dims it, disables its lesson links, and injects
// a small lock note. This is a *soft* lock — direct URL access still works,
// it's purely a navigational nudge in sidebar/module-list UI.
export function applySubmoduleLocks(root: ParentNode, lockInfo: LockInfo) {
  if (lockInfo.length === 0) return;
  const firstIncomplete = firstIncompleteSubmoduleIndex(lockInfo);

  root.querySelectorAll<HTMLElement>('[data-submodule-section]').forEach((section) => {
    const idx = Number(section.dataset.submoduleSection);
    if (Number.isNaN(idx) || idx <= firstIncomplete) return;

    section.classList.add('opacity-50');
    section.setAttribute('data-locked', 'true');

    section.querySelectorAll<HTMLAnchorElement>('a[data-lesson-row], a[data-lesson-nav]').forEach((a) => {
      a.setAttribute('aria-disabled', 'true');
      a.dataset.href = a.getAttribute('href') ?? '';
      a.removeAttribute('href');
      a.classList.add('pointer-events-none', 'cursor-not-allowed');
    });

    if (!section.querySelector('[data-lock-note]')) {
      const note = document.createElement('div');
      note.dataset.lockNote = 'true';
      note.className = 'mt-2 flex items-center gap-1.5 text-[11.5px] font-semibold text-text-disabled';
      note.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' +
        '<span>Hoàn thành submodule trước để mở khoá</span>';
      section.appendChild(note);
    }
  });
}
