// Ported from viewer/build-data.js's parseQuiz(). Parses the project's
// hand-rolled quiz convention (## Qn heading, - [ ]/- [x] options, a
// blockquote explanation) — kept as plain markdown-adjacent text rather
// than real MDX components so .quiz.mdx files stay portable to any future
// renderer (see CLAUDE.md section 2.6).
export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
  explanation: string;
}

export function parseQuiz(body: string): QuizQuestion[] {
  const lines = body.split(/\r?\n/);
  const questions: QuizQuestion[] = [];
  let current: QuizQuestion | null = null;

  for (const line of lines) {
    if (/^##\s+Q\d+/i.test(line)) {
      if (current) questions.push(current);
      current = { prompt: '', options: [], explanation: '' };
      continue;
    }
    if (!current) continue;

    const optMatch = line.match(/^[-*]\s+\[( |x)\]\s+(.*)$/i);
    if (optMatch) {
      current.options.push({ text: optMatch[2].trim(), correct: optMatch[1].toLowerCase() === 'x' });
      continue;
    }

    const bq = line.match(/^>\s?(.*)$/);
    if (bq) {
      current.explanation = current.explanation ? `${current.explanation} ${bq[1]}` : bq[1];
      continue;
    }

    if (line.trim() === '') continue;
    current.prompt = current.prompt ? `${current.prompt} ${line.trim()}` : line.trim();
  }
  if (current) questions.push(current);
  return questions;
}
