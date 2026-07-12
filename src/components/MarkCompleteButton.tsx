import { useState } from 'react';
import { isLessonComplete, markCompleted } from '../lib/progress';

interface Props {
  lessonId: string;
}

export default function MarkCompleteButton({ lessonId }: Props) {
  const [done, setDone] = useState(() => isLessonComplete(lessonId, false));

  if (done) {
    return (
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-success/25 bg-success/10 px-5 py-4 text-[14px] font-bold text-success">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Đã hoàn thành bài này
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        markCompleted(lessonId);
        setDone(true);
      }}
      className="mt-2 rounded-xl border border-border-default bg-bg-surface px-5 py-4 text-[14px] font-bold text-text-primary transition hover:border-primary-blue/50 hover:bg-primary-blue/10"
    >
      Đánh dấu đã hoàn thành
    </button>
  );
}
