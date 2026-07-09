# Can AI Cook a Library? — AI/ML Learning Notes

**📖 Xem trực tiếp: https://khangchau12.github.io/can-ai-cook-a-library/**

Một thư viện bài học AI/ML (92 bài, 392 câu quiz, song ngữ Việt) được
**viết gần như hoàn toàn bởi Claude Code chạy tự động (autopilot) — không
có người ngồi review từng bài trước khi publish**. Đây là một thử nghiệm:
để một agent tự chọn chủ đề, tự tra cứu nguồn học thuật (arxiv, D2L.ai,
Stanford CS231n/CS229, Lil'Log...), tự viết bài, tự viết quiz, và tự quản
lý một "giáo trình" đang lớn dần qua hàng chục phiên làm việc liên tục,
xem kết quả tới đâu.

Nội dung chia 2 track: `exam-track` (mẹo thi đấu Kaggle-style thực chiến)
và `foundations-track` (lý thuyết nền tảng ML/DL, từ Linear Regression
tới Transformer/LLM/RL hiện đại). Vì được viết bởi AI không qua kiểm duyệt
người, **hãy đọc với tinh thần phản biện** — nội dung có thể có lỗi/thiếu
sót dù mọi bài đều được yêu cầu trích dẫn nguồn cụ thể đã tra cứu.

> Ban đầu đây là workspace nội bộ cho CLB The Noders PTNK (không track
> trong git của web app chính), sau đó được tách thành repo riêng để công
> khai kết quả thử nghiệm này.

---

## 1. Xem nội dung

Cách nhanh nhất: mở **https://khangchau12.github.io/can-ai-cook-a-library/**
— tự động deploy lại (GitHub Actions) mỗi khi có commit mới lên `main`.

Đây là một site Astro thật (SSG) — không còn là 1 file HTML tự chứa mở qua
`file://` như trước. Muốn xem/sửa local cần chạy dev server:

```bash
npm install       # 1 lần đầu (hoặc khi package.json đổi)
npm run dev       # http://localhost:4321
```

Muốn build production + xem đúng như bản deploy (kèm search index):

```bash
npm run build     # astro build -> dist/, rồi chạy pagefind index vào dist/pagefind
npm run preview   # serve dist/ tại http://localhost:4321/can-ai-cook-a-library/
```

Site hiển thị:
- Trang chủ → chọn 1 trong 2 track (`exam-track` — bổ trợ thi đấu,
  `foundations-track` — lý thuyết nền tảng).
- Trang track → lưới module (mỗi module 1 thẻ, có mô tả + số bài +
  chỉ báo tiến độ đọc).
- Trang module → danh sách bài, nhóm theo **sub-module** nếu module đó có
  tách nhánh.
- Trang đọc bài → sidebar cây bài trong module, mục lục bên phải, nút
  trước/sau. Nếu bài có quiz đi kèm: tab "Nội dung bài" / "Quiz (N câu)" —
  làm quiz chấm điểm ngay tại chỗ, có giải thích đáp án.
- Tìm kiếm toàn site (nút góc phải header hoặc phím `/`) — chạy bằng
  Pagefind, chỉ hoạt động trên bản đã `npm run build` (không có trong
  `npm run dev`).

Tiến độ đọc (đã xem / đã làm quiz) lưu trong `localStorage` trình duyệt,
không có backend/tài khoản.

### Xem nhanh số liệu qua Node (không cần mở trình duyệt)

```bash
node -e "
const fg = require('fast-glob');
console.log('exam-track:', fg.sync('exam-track/**/*.mdx', {cwd:'content', ignore:['**/*.quiz.mdx','**/_index.mdx']}).length, 'bài');
console.log('foundations-track:', fg.sync('foundations-track/**/*.mdx', {cwd:'content', ignore:['**/*.quiz.mdx','**/_index.mdx']}).length, 'bài');
"
```

---

## 2. Cấu trúc thư mục

```
autopilot-learn/
├── .github/workflows/pages.yml  # Build (Astro + Pagefind) và deploy lên GitHub Pages mỗi push
├── CLAUDE.md          # Nguồn sự thật: quy chuẩn viết, trạng thái, mọi
│                       # quyết định thiết kế đã chốt, bảng tóm tắt giáo trình
├── SYLLABUS.md         # Chi tiết đầy đủ từng bài (tên file, nguồn, lý do)
├── AUTOPILOT.md        # Vòng lặp vận hành cho agent (đọc CLAUDE.md mỗi task)
├── content/
│   ├── modules.json           # Mô tả ngắn module/sub-module (dùng bởi src/lib/content.ts)
│   ├── exam-track/            # Bài .mdx + quiz .mdx — bổ trợ thi đấu
│   └── foundations-track/     # Bài .mdx + quiz .mdx — lý thuyết nền tảng
├── astro.config.mjs    # site/base cho GitHub Pages, integrations (react, tailwind)
├── package.json         # npm scripts: dev / build / preview
├── src/
│   ├── content.config.ts  # Content collection: đọc content/*.mdx, parse frontmatter +
│   │                       # markdown + quiz, build route id ổn định cho từng bài
│   ├── lib/                # slugify, frontmatter parser, markdown renderer, quiz
│   │                        # parser, progress (localStorage), content query helpers
│   ├── layouts/             # BaseLayout, LessonLayout
│   ├── components/          # SiteHeader, TrackCard, ModuleCard, LessonRow,
│   │                         # SidebarNav, TableOfContents, QuizIsland (React), SearchOverlay
│   └── pages/
│       ├── index.astro                    # Trang chủ — 2 track card
│       ├── [track]/index.astro            # Lưới module của track
│       └── [track]/[module]/
│           ├── index.astro                # Danh sách bài trong module (nhóm theo sub-module)
│           └── [...slug].astro            # Trang đọc 1 bài
```

`content/` là nguồn sự thật duy nhất — mỗi bài học vẫn là 1 file `.mdx`
thuần (frontmatter YAML-ish + markdown), không có JSX/component nào bên
trong, để có thể tái sử dụng nguyên vẹn cho `/learn` thật trên web chính
sau này. Frontmatter: `title`, `track`, `module`, `submodule` (tuỳ chọn),
`order`, `status`, `prerequisites`, `summary`... Một số bài có file
`.quiz.mdx` đi kèm (cùng tên, hậu tố `.quiz`) chứa 3-5 câu trắc nghiệm.

Chi tiết đầy đủ về quy chuẩn viết, whitelist nguồn tham khảo, cách chia
module/sub-module... nằm hết trong `CLAUDE.md` — đọc file đó nếu muốn hiểu
sâu hơn về "luật chơi" của thư viện này. Danh sách chi tiết từng bài (tên
file, nguồn, lý do viết) nằm ở `SYLLABUS.md` — tách riêng để `CLAUDE.md`
gọn hơn (file này được nạp vào context mọi task nên càng gọn càng tốt).

---

## 3. Deploy lên GitHub Pages (setup 1 lần)

Repo đã có sẵn `.github/workflows/pages.yml` — chỉ cần bật Pages ở chế độ
đúng, không cần thêm config:

1. Push repo này lên GitHub.
2. Vào **Settings → Pages** → mục "Build and deployment" → **Source**
   chọn **GitHub Actions** (không chọn "Deploy from a branch").
3. Push lên nhánh `main` (hoặc chạy tay workflow qua tab **Actions**) —
   workflow chạy `npm ci && npm run build` (Astro build + Pagefind index),
   rồi deploy thư mục `dist/` — trang có địa chỉ dạng
   `<username>.github.io/<repo>/`.

Mỗi lần push thêm bài mới hoặc sửa code trong `src/`, trang sẽ tự deploy
lại — không cần thao tác gì thêm.

---

## 4. Setup Autopilot — cách tôi để nó tự mở rộng liên tục

Ý tưởng: **Claude Code chạy trong một vòng lặp không giám sát**, mỗi lần lặp
tự chọn 1 việc để làm (viết bài mới lấp khoảng trống giáo trình, viết lại
bài cũ chưa đạt chuẩn, hoặc cải thiện viewer), tự tra cứu nguồn qua
WebSearch/WebFetch (giới hạn trong whitelist domain uy tín: d2l.ai,
arxiv.org, distill.pub, cs231n, v.v.), tự cập nhật registry, rồi lặp lại —
không dừng để hỏi, trừ khi hết quota hoặc gặp việc cần đụng vào code ngoài
thư mục này.

**Cơ chế:**

1. **`CLAUDE.md`** là bộ nhớ dài hạn / nguồn sự thật duy nhất. Nó chứa:
   - Mục 1 (STATUS) — trạng thái ngay lúc này: phiên gần nhất làm gì, tổng
     số bài, việc cần làm tiếp theo. Agent đọc mục này đầu MỌI task.
   - Mục 2 — toàn bộ quy tắc thiết kế nội dung (2 track khác triết lý, cấu
     trúc frontmatter, whitelist nguồn, chuẩn quiz...).
   - Mục 3 — thứ tự ưu tiên chọn task tiếp theo.
   - Mục 4 — bảng tóm tắt giáo trình (module/sub-module, số bài mỗi
     module); chi tiết từng bài nằm ở `SYLLABUS.md` riêng.
   - Mục 6 — bắt buộc cập nhật lại mục 1 (và `SYLLABUS.md`) cuối mỗi task,
     để phiên sau (hoặc chính agent trong vòng lặp tiếp theo) luôn có bức
     tranh đúng.

2. **`AUTOPILOT.md`** là kịch bản vòng lặp: chọn task → đọc bối cảnh → viết/
   sửa → tự kiểm tra → cập nhật `CLAUDE.md`/`SYLLABUS.md` → quay lại từ đầu.
   Đây là file được nạp làm system prompt cho phiên autopilot, tách riêng
   khỏi `CLAUDE.md` để nội dung "luật chơi" và "vòng lặp vận hành" không lẫn
   vào nhau.

3. **Cách tôi khởi động một phiên autopilot:**
   - Mở Claude Code trong thư mục `autopilot-learn/` (hoặc trỏ nó đọc
     `AUTOPILOT.md` làm điểm bắt đầu).
   - Agent KHÔNG tự chạy watcher nền nữa (quyết định 2026-07-06) — tôi tự
     chạy `node viewer/build-data.js` thủ công khi muốn xem viewer cập
     nhật mới nhất.
   - Ra lệnh kiểu: *"Đọc AUTOPILOT.md và bắt đầu vòng lặp"* — agent sẽ tự
     chạy liên tục, mỗi task tự chọn việc theo mục 3 của `CLAUDE.md`, viết
     xong tự cập nhật registry, rồi lặp lại mà không cần tôi can thiệp.
   - Muốn ưu tiên 1 việc cụ thể ngoài thứ tự tự động → ghi thẳng vào mục 1.3
     ("Human Pin") của `CLAUDE.md`, agent sẽ đọc và ưu tiên tuyệt đối dòng
     đó ở task kế tiếp.

4. **Giới hạn cứng agent luôn tuân theo** (xem đầy đủ ở `AUTOPILOT.md`):
   không sửa code ngoài `autopilot-learn/`, không bịa số liệu thực nghiệm,
   không tự mở rộng whitelist nguồn, không tạo bài trùng chủ đề, không giữ
   nhiều version của cùng 1 bài (sửa là ghi đè trực tiếp).

   Ngược lại, agent **được toàn quyền tự tách submodule mới** trong bất kỳ
   module nào (kể cả module chưa có submodule) nếu các bài chia được thành
   ≥2 mảng/trường phái khác nhau về bản chất — không cần hỏi trước (xem
   CLAUDE.md mục 2.1). Độ khó không phải tiêu chí tách: 2 bài cùng mảng chỉ
   khác độ khó vẫn ở chung 1 submodule, bài khó hơn xếp `order` sau.

5. **Khi nào nó tự dừng:** hết quota/ngữ cảnh phiên, hoặc gặp việc cần sửa
   code thật của web app (ngoài phạm vi thư mục này) — lúc đó nó báo lý do
   rồi dừng, chờ người quyết định tiếp.

Nói ngắn gọn: **`CLAUDE.md` = trí nhớ + luật, `AUTOPILOT.md` = vòng lặp**.
Muốn biết agent đã/đang làm gì, đọc mục 1 của `CLAUDE.md`. Muốn đổi luật
chơi (thêm whitelist, đổi chuẩn viết), sửa `CLAUDE.md` mục 2 trước khi
chạy phiên tiếp theo.
