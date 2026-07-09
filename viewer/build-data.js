// Sinh viewer/data.json từ frontmatter + nội dung các file .mdx trong content/.
// Chạy: node autopilot-learn/viewer/build-data.js
// Không phụ thuộc package ngoài (không chạm node_modules của web app).
const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const TRACKS = ['exam-track', 'foundations-track'];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const [, fmBlock, body] = match;
  const meta = {};
  for (const line of fmBlock.split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) continue;
    let [, key, value] = m;
    value = value.trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      meta[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return { meta, body: body.trim() };
}

// Parse 1 file quiz .quiz.mdx thành mảng câu hỏi có cấu trúc.
// Định dạng quy ước: mỗi câu là 1 block "## Qn", các lựa chọn là list
// "- [ ] ..." / "- [x] ...", giải thích là 1 blockquote "> ..." ngay sau.
function parseQuiz(body) {
  const lines = body.split(/\r?\n/);
  const questions = [];
  let current = null;
  for (const line of lines) {
    const qHeading = line.match(/^##\s+Q\d+/i);
    if (qHeading) {
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
      current.explanation = (current.explanation ? current.explanation + ' ' : '') + bq[1];
      continue;
    }
    if (line.trim() === '') continue;
    current.prompt = (current.prompt ? current.prompt + ' ' : '') + line.trim();
  }
  if (current) questions.push(current);
  return questions;
}

// Đọc đệ quy tất cả .mdx files trong thư mục (hỗ trợ cấu trúc module/submodule mới)
function getAllMdxFilesRecursive(dir) {
  const result = [];
  if (!fs.existsSync(dir)) return result;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue; // skip hidden
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...getAllMdxFilesRecursive(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      result.push(fullPath);
    }
  }
  return result;
}

function loadTrack(track) {
  const dir = path.join(CONTENT_DIR, track);
  if (!fs.existsSync(dir)) return { index: null, pages: [] };
  const allFiles = getAllMdxFilesRecursive(dir);
  const quizFiles = allFiles.filter((f) => f.endsWith('.quiz.mdx'));
  const contentFiles = allFiles.filter((f) => !f.endsWith('.quiz.mdx'));

  // Map slug bài -> danh sách câu hỏi, đọc từ frontmatter `quiz_for: <slug>`
  const quizzesBySlug = {};
  for (const fullPath of quizFiles) {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    if (!meta.quiz_for) continue;
    quizzesBySlug[meta.quiz_for] = parseQuiz(body);
  }

  let index = null;
  const pages = [];
  for (const fullPath of contentFiles) {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    const fileName = path.basename(fullPath);
    const slug = fileName.replace(/\.mdx$/, '');
    const entry = { file: fileName, track, ...meta, body };
    if (quizzesBySlug[slug]) entry.quiz = quizzesBySlug[slug];
    if (fileName === '_index.mdx') {
      index = entry;
    } else {
      pages.push(entry);
    }
  }
  pages.sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
  return { index, pages };
}

function loadModuleMeta() {
  const p = path.join(__dirname, 'modules.json');
  if (!fs.existsSync(p)) return {};
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.warn('[build-data] modules.json lỗi parse, bỏ qua:', e.message);
    return {};
  }
}

function build() {
  const data = {
    generatedAt: new Date().toISOString(),
    tracks: Object.fromEntries(TRACKS.map((t) => [t, loadTrack(t)])),
    moduleMeta: loadModuleMeta(),
  };

  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));

  // index.html được sinh từ template.html với data.json nhúng thẳng vào <script>,
  // vì fetch('data.json') bị trình duyệt chặn (CORS) khi mở file qua file://
  // thay vì qua server — nhúng trực tiếp giữ được yêu cầu "mở thẳng bằng file://".
  const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  const html = template.replace(
    '/*__DATA_JSON__*/null/*__END_DATA_JSON__*/',
    JSON.stringify(data)
  );
  fs.writeFileSync(path.join(__dirname, 'index.html'), html);

  const quizCounts = TRACKS.map((t) => data.tracks[t].pages.filter((p) => p.quiz).length);
  console.log(
    `[${new Date().toLocaleTimeString('vi-VN')}] viewer/data.json + viewer/index.html updated — ${TRACKS.map((t, idx) => `${t}: ${data.tracks[t].pages.length} bài (${quizCounts[idx]} có quiz)`).join(', ')}`
  );
  return data;
}

module.exports = { build, CONTENT_DIR, TRACKS };

if (require.main === module) {
  build();
}
