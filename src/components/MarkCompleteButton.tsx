import { useState } from 'react';
import { isLessonComplete, markCompleted } from '../lib/progress';

interface Props {
  lessonId: string;
}

export default function MarkCompleteButton({ lessonId }: Props) {
  const [done, setDone] = useState(() => isLessonComplete(lessonId, false));

  if (done) {
    return (
      <div className="tag tag-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, padding: '8px 14px' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      className="btn btn-primary"
    >
      Đánh dấu đã hoàn thành
    </button>
  );
}
