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
    <div className="mt-2">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-inset">
          <div
            className="h-full rounded-full bg-primary-blue transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 font-mono text-[12px] font-semibold text-text-tertiary">
          {answeredCount}/{questions.length} · đúng {correctCount}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {questions.map((q, qIdx) => {
          const selected = answers[qIdx];
          const answered = selected !== undefined;
          return (
            <div key={qIdx} className="rounded-xl border border-border-default bg-bg-surface p-5">
              <p className="mb-3.5 text-[14.5px] font-bold leading-relaxed text-text-primary">
                Câu {qIdx + 1}. {q.prompt}
              </p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selected === optIdx;
                  let stateClasses = 'border-border-default hover:border-border-subtle hover:bg-bg-elevated';
                  if (answered && opt.correct) {
                    stateClasses = 'border-success bg-success/10';
                  } else if (answered && isSelected && !opt.correct) {
                    stateClasses = 'border-error bg-error/10';
                  }
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={answered}
                      onClick={() => select(qIdx, optIdx)}
                      className={`flex items-start gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-[13.5px] transition ${stateClasses} ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border ${
                          answered && opt.correct
                            ? 'border-success bg-success'
                            : answered && isSelected
                              ? 'border-error bg-error'
                              : 'border-border-subtle'
                        }`}
                      />
                      <span className="text-text-secondary">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
              {answered && (
                <p className="mt-3.5 rounded-lg border-l-2 border-accent-cyan bg-accent-cyan/10 px-3.5 py-2.5 text-[13px] leading-relaxed text-text-secondary">
                  {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {answeredCount === questions.length && (
        <div className="mt-5 flex items-center justify-between rounded-xl border border-border-subtle bg-bg-elevated px-5 py-4">
          <span className="text-[14px] font-bold text-text-primary">
            Hoàn thành! Đúng {correctCount}/{questions.length}
          </span>
          <button
            type="button"
            onClick={retry}
            className="rounded-md border border-border-subtle bg-bg-inset px-3.5 py-1.5 text-[12.5px] font-bold text-text-secondary transition hover:bg-border-subtle hover:text-text-primary"
          >
            Làm lại
          </button>
        </div>
      )}
    </div>
  );
}
