import { useState } from 'react';
import { markQuizDone } from '../lib/progress';

interface QuizOption {
  text: string;
  correct: boolean;
}
interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
  explanation: string;
}

interface Props {
  lessonId: string;
  questions: QuizQuestion[];
}

export default function QuizIsland({ lessonId, questions }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([qIdx, optIdx]) => questions[Number(qIdx)].options[optIdx].correct,
  ).length;

  function select(qIdx: number, optIdx: number) {
    if (answers[qIdx] !== undefined) return;
    const next = { ...answers, [qIdx]: optIdx };
    setAnswers(next);
    if (Object.keys(next).length === questions.length) {
      markQuizDone(lessonId);
    }
  }

  function retry() {
    setAnswers({});
  }

  return (
    <div>
      <div className="progress-track" style={{ marginBottom: 'var(--cl-space-4)' }}>
        <div
          className="progress-fill"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        />
      </div>

      {questions.map((q, qIdx) => {
        const selected = answers[qIdx];
        const answered = selected !== undefined;
        return (
          <div key={qIdx} className="quiz-q">
            <p style={{ fontFamily: 'var(--cl-font-heading)', fontWeight: 600, fontSize: 15, margin: '0 0 4px', color: 'var(--cl-text)' }}>
              Câu {qIdx + 1}. {q.prompt}
            </p>
            {q.options.map((opt, optIdx) => {
              const isSelected = selected === optIdx;
              let stateClass = '';
              if (answered && opt.correct) stateClass = 'correct';
              else if (answered && isSelected && !opt.correct) stateClass = 'wrong';
              return (
                <button
                  key={optIdx}
                  type="button"
                  disabled={answered}
                  onClick={() => select(qIdx, optIdx)}
                  className={`quiz-opt ${stateClass}`}
                  style={{ width: '100%', textAlign: 'left', background: 'transparent', font: 'inherit', color: 'inherit' }}
                >
                  <span className="opt-dot"></span>
                  <span>{opt.text}</span>
                </button>
              );
            })}
            {answered && (
              <p
                style={{
                  marginTop: 'var(--cl-space-3)',
                  fontSize: 13,
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                  color: 'color-mix(in srgb, var(--cl-text) 72%, transparent)',
                }}
              >
                {q.explanation}
              </p>
            )}
          </div>
        );
      })}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 'var(--cl-space-3)' }}>
        <span style={{ fontSize: 12, color: 'color-mix(in srgb, var(--cl-text) 55%, transparent)', fontFeatureSettings: "'tnum' 1" }}>
          {answeredCount}/{questions.length} câu · đúng {correctCount}
        </span>
        {answeredCount === questions.length && (
          <button type="button" onClick={retry} className="btn btn-secondary">
            Làm lại
          </button>
        )}
      </div>
    </div>
  );
}
