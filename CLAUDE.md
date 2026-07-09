# AI Learn Content — Registry & Design Rules

> Nguồn sự thật duy nhất cho: giáo trình hiện tại, quy chuẩn viết, trạng thái
> từng bài, và các quyết định thiết kế đã chốt. `AUTOPILOT.md` là vòng lặp vận
> hành — nó đọc file này mỗi task, không lặp lại nội dung ở đây.
>
> File này KHÔNG được git track (thư mục `autopilot-learn/` nằm trong
> `.gitignore` ở root). Đây là không gian làm việc nội bộ của agent, không
> phải nội dung sẽ publish thẳng lên web. Thành viên CLB đọc bài ở đây để lấy
> cảm hứng và tự viết lại bài chính thức cho `/learn` trên web — agent không
> cần tối ưu cho "publish-ready", chỉ cần tối ưu cho "dễ đọc, đúng, hữu ích".

---

## 1. STATUS (đọc đầu mỗi task, không ngoại lệ)

- **Version:** v7.2
- **Phiên gần nhất:** TÁI CẤU TRÚC HỆ THỐNG FILE (2026-07-08) — toàn bộ
  file `.mdx` được sắp xếp vào thư mục module/submodule thay vì flat.
  Mỗi bài đánh số local trong submodule/module. Cập nhật CLAUDE.md,
  SYLLABUS.md, _index.mdx, viewer/build-data.js. Tổng số bài không đổi.
  Audio thêm submodule Audio-Understanding (2 bài).
- **Tổng số bài hiện có:** 121 (11 exam-track + 110 foundations-track) —
  tổ chức thành **10 module** cho foundations-track:
  ML cổ điển (9 bài, phẳng), DL Nền tảng (3, phẳng),
  Computer Vision (17 bài, 3 sub-module: Cơ bản 8/Detection 4/Segmentation 5),
  Sequence Model (20 bài, 3 sub-module: RNN Family 5/Transformer Architecture 9/Tokenization 6),
  Reinforcement Learning (21 bài, 4 sub-module: Overview 7/Value-based 5/Policy-based 7/Model-based 2),
  Dimensionality Reduction (4), Generative Models (13 bài, 3 sub-module:
  Overview 4/GAN Family 5/Diffusion Models 4), LLM (8, 2 sub-module),
  Audio (10, 5 sub-module: Overview 1/Biểu diễn âm thanh 2/STT 2/TTS 3/Audio-Understanding 2), Recommendation
  Systems (5)
- **Số bài cần review/cải thiện lại (flagged):** 0 — toàn bộ 103 bài đạt
  `stable`

### 1.1 Việc phải làm ngay (nếu đúng, bỏ qua chọn task ở mục 3, làm luôn)

- _(không còn áp dụng — cả 2 track đã có `_index.mdx` và bài nội dung
  thật. Chuyển sang chọn task theo mục 3.)_

### 1.2 Việc tiếp theo (agent tự cập nhật cuối mỗi task theo mục 6)

> Chỉ liệt kê **việc cần làm**, không giải thích lịch sử/lý do — lý do
> chi tiết (task nào, vì sao, nguồn nào) thuộc về `SYLLABUS.md` hoặc
> `## Nguồn tham khảo` của từng bài `.mdx`. Khi 1 việc xong, xoá hẳn
> dòng đó (không giữ lại để "ghi công"). Khi thêm việc mới, viết tối đa
> 1-2 dòng.

1. Chế độ vận hành: KHÔNG hỏi lại người vận hành giữa chừng — tự quyết
   định trong phạm vi AUTOPILOT.md, chỉ dừng đúng 2 điều kiện ở mục "Khi
   nào dừng" của file đó.
2. Đào sâu 3 module RL/Generative Models/Audio — Phase 1 (coherence fixes)
   đã xong. Phase 2-4: viết bài mới bắt đầu từ order 97 (Imitation Learning),
   mỗi bài kèm quiz. Xem plan file `C:\Users\Admin\.claude\plans\iridescent-forging-wombat.md`.
3. Khi viết bài mới nhưng nguồn không đủ chất lượng: ưu tiên kiểm tra
   xem có bài cũ đang thiếu đúng nguồn academic gốc đó không, cải thiện
   bài đó thay vì ép viết bài mới yếu.
4. Quy tắc bắt buộc khi sửa mục 1 "Phiên gần nhất": `old_string` PHẢI
   khớp và thay thế TOÀN BỘ entry cũ, không chỉ prepend. Luôn xác nhận
   số liệu build bằng cách đọc trực tiếp `data.json` qua Node sau mọi
   thay đổi lớn (mục 7.1).

### 1.3 Human Pin (người ngoài có thể ghi task ưu tiên vào đây, agent luôn ưu tiên đọc dòng này trước khi tự chọn task)

- _(trống — yêu cầu tái cấu trúc exam-track đã hoàn thành, xem "Phiên gần
  nhất" ở mục 1)_
- _(trống)_
- _(trống)_

---

## 2. Quy tắc thiết kế nội dung

### 2.1 Hai sườn giáo trình (không được trộn lẫn trong cùng 1 bài)

**Sườn A — `content/exam-track/`: bổ trợ thi đấu trên platform**
Mục tiêu: người đọc xong áp dụng được ngay vào một submission thật trên The
Noders platform. Giọng văn thực chiến, ít hàn lâm, nhiều ví dụ CSV/pipeline
cụ thể. Chủ đề bắt buộc bám theo những gì platform thực sự dùng:
- Các scoring metric đang có trong hệ thống: `f1_score`, `accuracy`,
  `precision`, `recall`, `mae`, `rmse` (xem `SCORING_METRIC_INFO` ở
  `src/lib/constants.ts` của repo chính — không tự bịa thêm metric ngoài
  danh sách này vì platform không chấm được).
- Quy trình thi đấu: train/validation split, tránh overfit lên public
  leaderboard, đọc hiểu leaderboard 2 giai đoạn (public/private) và tab
  Final (trung bình 2 giai đoạn), feature engineering cơ bản, xử lý dữ liệu
  thiếu/lệch, chọn baseline model nhanh.
- Sai lầm thường gặp khi nộp bài: format CSV sai cột `id`/`prediction`,
  leak dữ liệu, overfit vào public set rồi rớt hạng ở private.

**Sườn B — `content/foundations-track/`: lý thuyết nền tảng**
Mục tiêu: người mới hoàn toàn học từ số 0. Giọng văn giáo trình, có thể dài
hơi hơn, xây dựng trực giác trước khi đưa công thức. Phạm vi không giới
hạn ở "DL cơ bản" — bao trùm mọi model/kỹ thuật ML-DL nâng cao mà agent
thấy có giá trị và liên hệ tự nhiên được với nền đã xây. Agent toàn quyền
quyết định thứ tự, số lượng bài, độ sâu, và có thể mở module mới khi mở
ra một nhánh chủ đề thực sự khác — không cần hỏi trước. Mỗi khi thay đổi
cấu trúc giáo trình đáng kể, cập nhật mục 4 (Giáo trình hiện tại) trong
cùng task. exam-track: agent có thể rà soát/mở rộng nếu tìm được khoảng
trống thi đấu nâng cao rõ ràng, nhưng không phải ưu tiên (xem mục 1.2).

Cả 2 track dùng field frontmatter `module` (xem mục 2.3) để nhóm hiển
thị trong viewer — không ảnh hưởng `order`/`prerequisites`.

**Chuẩn nội dung — bài "dòng tiến hoá":** với các bài về **một họ model
tiến hoá theo thời gian** (CNN family, detection family, sequence model
family...), bài phải kể được dòng tiến hoá ý tưởng — không chỉ nêu kiến
trúc/công thức cuối cùng. Cụ thể:

- Với mỗi model/kỹ thuật quan trọng trong dòng tiến hoá: nêu rõ hạn chế
  của model ngay trước nó, ý tưởng đột phá giải quyết hạn chế đó, và
  đánh đổi (trade-off) ý tưởng mới mang lại (không có gì miễn phí — ví
  dụ ResNet giải quyết vanishing gradient bằng skip connection nhưng
  tăng chi phí bộ nhớ cho activation).
- Độ dài: mục 2.4 được nới cho dạng bài này — xem chi tiết ở đó.
- Trích dẫn: **tối thiểu 2 nguồn khác nhau** cho bài dạng "dòng tiến
  hoá" (một nguồn academic/paper gốc cho đúng ý tưởng tác giả công bố +
  một nguồn giải thích/khoá học cho trực giác dễ hiểu) — không còn coi
  1 nguồn là đủ như chuẩn cũ mục 2.5.
- Bài không thuộc dạng "dòng tiến hoá" (ví dụ khái niệm toán/thống kê
  đơn lẻ, một thuật toán không có tiền thân trực tiếp) vẫn có thể giữ
  1 nguồn nếu nội dung thực sự không cần đối chiếu nhiều nguồn — không
  ép buộc máy móc 2 nguồn cho mọi bài, chỉ bắt buộc khi bài kể lịch sử
  tiến hoá nhiều model.

**Sub-module hiện có** (field `submodule`, xem mục 2.3) — dùng khi 1
module có ≥2 nhánh/giai đoạn/trường phái đủ khác biệt về bản chất, không
có ngưỡng số bài tối thiểu cứng. Danh sách hiện tại (chi tiết bài nào ở
mục 4/`SYLLABUS.md`):
- **Computer Vision**: "Cơ bản" / "Detection" / "Segmentation"
- **Sequence Model**: "RNN Family" / "Transformer Architecture" /
  "Tokenization" (Tokenization có 2 nhánh con không chính thức:
  Segmentation, Embedding)
- **LLM**: "Huấn luyện & Alignment" (thay đổi tham số) / "Ứng dụng &
  Inference-time" (không đổi tham số)
- **Reinforcement Learning**: "Value-based" / "Policy-based" /
  "Model-based" (bài 16-17 là nền tảng chung, giữ phẳng không gán
  `submodule`)
- **Generative Models**: "GAN Family" / "Diffusion Models" (2 nhánh song
  song, khác bản chất: đối kháng vs khuếch tán)
- **Audio**: "Biểu diễn âm thanh" / "Speech-to-Text" / "Text-to-Speech"
- Các module còn lại (ML cổ điển, Recommendation Systems) chưa tách —
  xem mục 1.2 để tiếp tục đánh giá.

Khi cân nhắc tách sub-module hoặc tạo module mới: nếu 1 mảng con đã có
module tương ứng ở nơi khác trong track, trả về module đó thay vì tạo
sub-module/module mới trùng lặp.

**Tách submodule mới từ 1 module đã tồn tại (kể cả module chưa có
submodule nào, hoặc module đã có submodule nhưng phát sinh thêm nhánh):**
agent toàn quyền tự tách, không cần hỏi, khi các bài trong module đó chia
được thành ≥2 cụm mà mỗi cụm là **một mảng/trường phái/kỹ thuật khác
nhau về bản chất** (không phải chỉ khác độ khó — 2 bài cùng 1 mảng nhưng
một bài nền tảng một bài nâng cao thì vẫn ở chung 1 submodule, bài khó
hơn xếp `order` sau trong submodule đó, không tách riêng). Khi tách:
cập nhật `submodule` frontmatter của các bài liên quan, mục 4 CLAUDE.md,
`SYLLABUS.md`, và `viewer/modules.json` (field `submodules` — bắt buộc,
xem mục 7.1) trong cùng task. Không tách chỉ vì 1 module "có nhiều bài"
— số lượng bài không phải tiêu chí, chỉ tách khi có ranh giới bản chất rõ.

### 2.2 Một bài không được làm gì

- Không bịa số liệu/kết quả thực nghiệm cụ thể ("mô hình X đạt 99.2% trên
  dataset Y") trừ khi đó là con số kinh điển được biết rộng rãi (ví dụ
  MNIST ~99% với CNN cơ bản) — sai lệch ở đây gây hiểu lầm nghiêm trọng hơn
  là hữu ích.
- Không việt hoá thuật ngữ kỹ thuật một cách gượng ép nếu bản tiếng Anh phổ
  biến hơn (ví dụ giữ "overfitting", "epoch", "learning rate" — không dịch
  thành từ Hán Việt lạ).
- Không copy nguyên văn định nghĩa Wikipedia — viết lại bằng giọng riêng,
  có ví dụ.
- Không tạo bài trùng chủ đề với bài đã có trong cùng track — cải thiện bài
  cũ thay vì tạo bài mới đè lên.

### 2.3 Cấu trúc file & frontmatter (MDX)

Mỗi bài là 1 file `.mdx` nằm trong cấu trúc thư mục theo module/submodule
(tái cấu trúc 2026-07-08):

```
content/
  exam-track/
    _index.mdx
    "Tên module 1"/
      01-bai1.mdx
      01-bai1.quiz.mdx
      02-bai2.mdx
      ...
    "Tên module 2"/
      ...
  foundations-track/
    _index.mdx
    "Tên module"/
      01-bai-trong-module.mdx
      01-bai-trong-module.quiz.mdx
      ...
      "01-Tên submodule"/
        01-bai-trong-submodule.mdx
        01-bai-trong-submodule.quiz.mdx
        02-bai2-trong-submodule.mdx
        ...
      "02-Tên submodule 2"/
        ...
```

Tên file: `NN-slug-kebab-case.mdx` — `NN` là số thứ tự **trong module
hoặc submodule** (bắt đầu từ 01), không phải số toàn track. Thư mục
submodule: `NN-Tên-Submodule` với `NN` là số thứ tự học (dễ→khó).
Module không có submodule thì file đặt trực tiếp trong thư mục module.
Module có submodule thì mọi bài đều nằm trong submodule (kể cả bài nền
tảng chung — đặt trong `01-Overview/`).

Frontmatter bắt buộc ở đầu mỗi file:

```yaml
---
title: "Tên bài, tiếng Việt, ngắn gọn"
track: exam-track | foundations-track
module: "Tên module, dùng để nhóm hiển thị trong viewer"
submodule: "Tên sub-module"  # tuỳ chọn — chỉ dùng khi module có tách nhánh con
order: 1
status: draft | needs-review | stable
prerequisites: ["slug-bai-truoc-1", "slug-bai-truoc-2"]  # rỗng nếu không cần
summary: "1-2 câu tóm tắt bài này dạy gì, hiện trên viewer"
last_touched_by_task: "mô tả ngắn task đã tạo/sửa bài này gần nhất"
---
```

`module` là field bắt buộc cho mọi bài nội dung (không bắt buộc ở
`_index.mdx`) từ 2026-07-05 — chỉ dùng để nhóm hiển thị trong sidebar
viewer (xem mục 4 cho danh sách module hiện có của mỗi track), **không**
ảnh hưởng tới `order` hay cách `prerequisites` được resolve. Khi thêm bài
mới, gán vào module có sẵn nếu hợp chủ đề; chỉ tạo module mới nếu bài đó
mở ra một nhánh chủ đề thực sự khác (xem mục 2.1).

`submodule` là field **tuỳ chọn** (từ 2026-07-06) — chỉ áp dụng cho các
module đã tách nhánh con theo mục 2.1 (hiện tại: `"Computer Vision"` với
3 sub-module `"Cơ bản"` / `"Detection"` / `"Segmentation"`). Khi bài có
`submodule`, viewer group theo `module` → `submodule` → bài (3 cấp thay
vì 2). Không thêm `submodule` cho module chưa được quyết định tách nhánh
ở mục 2.1 — tự ý thêm sẽ tạo nhóm mồ côi không nhất quán trong viewer.

`prerequisites` mặc định là slug bài **cùng track**. Nếu prerequisite nằm
ở track khác, bắt buộc thêm prefix track: `"foundations-track/03-logistic-regression"`
(không phải chỉ `"03-logistic-regression"` — slug đó không tồn tại trong
track hiện tại, gây nhầm lẫn/lookup sai nếu tra cứu chỉ trong track này).

- `status: draft` — mới tạo, chưa tự-review lại lần nào.
- `status: needs-review` — agent tự thấy còn thiếu sót nhưng không tự sửa
  được ngay (ví dụ cần thêm ví dụ minh hoạ mà agent chưa nghĩ ra cái hay),
  hoặc bài cũ bị đánh dấu lại vì phát hiện vấn đề khi viết bài liên quan.
- `status: stable` — agent đã tự đọc lại, thấy đạt chuẩn mục 2.2, khớp
  đúng track, không mâu thuẫn với bài khác.

File `_index.mdx` ở đầu mỗi track (không có `order`, không tính là bài nội
dung) liệt kê mục lục dự kiến của track đó — agent cập nhật file này mỗi
khi thêm/xoá/sắp xếp lại bài.

### 2.4 Độ dài & định dạng

- Không có giới hạn cứng, nhưng một bài nên dạy **đúng một khái niệm chính**
  — nếu thấy đang viết bài quá dài và lan man 2-3 khái niệm không liên quan
  trực tiếp, tách thành nhiều bài + nối bằng `prerequisites`.
- **Ngoại lệ cho bài "dòng tiến hoá" (2026-07-06):** một bài kể dòng tiến
  hoá của 1-2 model liên hệ tiến hoá trực tiếp (model sau ra đời để giải
  quyết đúng hạn chế của model trước — ví dụ AlexNet→VGG, hoặc VGG→ResNet)
  được phép dài hơn mức "1 khái niệm chính" thông thường, vì đây vẫn là
  **1 mạch tư duy liền** (không phải 2-3 khái niệm rời rạc bị nhồi chung).
  Nếu 2 model không có quan hệ tiến hoá trực tiếp (chỉ cùng họ tổng quát),
  vẫn tách bài riêng như quy tắc cũ.
- Dùng heading (`##`, `###`), code block cho công thức/pseudo-code, danh
  sách gạch đầu dòng cho bước quy trình. Không cần ảnh/diagram (agent không
  vẽ được) — mô tả bằng chữ hoặc ASCII đơn giản nếu thực sự cần.

### 2.5 Nguồn tham khảo & whitelist (bắt buộc dùng `WebSearch`/`WebFetch`)

Mỗi bài nội dung (không tính `_index.mdx`) khi viết mới hoặc sửa nội dung
cốt lõi (không phải sửa lỗi chính tả) bắt buộc phải tra cứu ít nhất 1 nguồn
trong whitelist dưới đây trước khi viết, và liệt kê nguồn đã dùng thật sự ở
mục `## Nguồn tham khảo` cuối file — không trích dẫn nguồn mà agent không
thực sự đọc trong task đó.

**Whitelist (chỉ dùng các domain này với `WebSearch allowed_domains` /
`WebFetch`, không tự ý fetch domain ngoài danh sách):**

- `d2l.ai` — Dive into Deep Learning (giáo trình mở, nền tảng + DL)
- `cs231n.github.io` — Stanford CS231n course notes (CV, mạng nơ-ron)
- `cs229.stanford.edu` — Stanford CS229 course notes (ML cổ điển, toán nền)
- `www.deeplearningbook.org` — Goodfellow, Bengio, Courville (sách kinh điển)
- `scikit-learn.org` — docs chính thức: định nghĩa thuật toán, công thức
  metric (`f1_score`, `precision`, `recall`, `mae`, `rmse` — ưu tiên nguồn
  này khi viết bài về metric vì khớp trực tiếp với cách platform tính điểm)
- `distill.pub` — bài giải thích trực quan, chất lượng cao (kho bài có hạn,
  không phải lúc nào cũng có bài khớp chủ đề — bỏ qua nếu không có)
- `machinelearningmastery.com` — thực dụng, nhiều bài cụ thể về validation
  strategy, tránh overfitting — dùng làm nguồn bổ sung, không phải nguồn
  chính khi có lựa chọn academic ở trên
- `www.kaggle.com` (`/learn`, `/competitions`, forum) — chuẩn thực chiến
  cộng đồng competition ML, ưu tiên cho exam-track
- `arxiv.org` (thêm 2026-07-06) — paper gốc (ResNet, YOLO, U-Net,
  "Attention Is All You Need", v.v.) — dùng khi cần trích đúng ý tưởng/
  kết quả tác giả công bố cho bài "dòng tiến hoá" (mục 2.1). Ưu tiên đọc
  abstract + phần liên quan trực tiếp tới ý tưởng đang viết, không cần
  đọc toàn bộ paper.
- `paperswithcode.com` (thêm 2026-07-06) — đối chiếu nhanh dòng version/
  biến thể của 1 họ model, xem model nào được cộng đồng công nhận là bước
  ngoặt thật sự (tránh liệt kê sai thứ tự tiến hoá).
- `lilianweng.github.io` (Lil'Log, thêm 2026-07-06) — blog kỹ thuật giải
  thích sâu, uy tín cao trong cộng đồng ML/DL, nhiều bài tổng hợp dòng
  tiến hoá ý tưởng theo thời gian.
- `sebastianraschka.com` (thêm 2026-07-06) — blog kỹ thuật, giải thích rõ
  ràng nhiều kiến trúc DL kèm góc nhìn lịch sử/so sánh giữa các phiên bản.

**Bài "dòng tiến hoá" (mục 2.1) bắt buộc tối thiểu 2 nguồn khác nhau** —
1 nguồn academic (ưu tiên `arxiv.org` khi có paper gốc rõ ràng, hoặc
`cs231n`/`d2l.ai` nếu không cần trích tận paper) cho đúng ý tưởng gốc, +
1 nguồn giải thích/trực giác (`distill.pub`, `lilianweng.github.io`,
`sebastianraschka.com`, `machinelearningmastery.com`) cho phần dễ hiểu
với người mới. Bài không thuộc dạng "dòng tiến hoá" (khái niệm đơn lẻ,
không có tiền thân trực tiếp) vẫn có thể dùng 1 nguồn như chuẩn cũ.

Không thêm domain khác vào whitelist khi đang viết bài — nếu tìm kiếm cần
một nguồn ngoài danh sách để trả lời đúng, dùng nguồn có sẵn gần nhất thay
thế hoặc bỏ qua chi tiết đó, không tự ý mở rộng whitelist giữa chừng. Muốn
đề xuất thêm domain, ghi vào mục 1.2 (Việc tiếp theo) làm task riêng để
người vận hành duyệt trước khi dùng.

**Format mục trích dẫn cuối bài:**

```markdown
## Nguồn tham khảo

- [Tên trang/bài viết](https://url-day-du) — 1 câu ngắn nội dung đã tham
  khảo từ nguồn này (không chỉ dán link trơn)
```

Không bắt buộc trích dẫn cho: sửa lỗi chính tả/ngữ pháp, đổi `order`/cấu
trúc file, cập nhật `_index.mdx`, cải thiện viewer.

### 2.6 Quiz tự kiểm tra (mỗi bài nội dung nên có 1 file quiz riêng)

**Quyết định (2026-07-05, theo yêu cầu người vận hành):** mỗi bài nội
dung (không tính `_index.mdx`) nên có 1 file quiz đi kèm để người đọc tự
kiểm tra hiểu bài — 3-5 câu trắc nghiệm, hiển thị interactive trên viewer
(chọn đáp án → chấm ngay + hiện giải thích).

**Tên file & vị trí:** `<slug-bai-goc>.quiz.mdx`, cùng thư mục track với
bài gốc (ví dụ quiz cho `06-svm.mdx` là `06-svm.quiz.mdx`).

**Frontmatter bắt buộc:**

```yaml
---
quiz_for: 06-svm
---
```

`quiz_for` là slug bài gốc **không có phần mở rộng** `.mdx`, **không có
prefix track** (khác quy ước `prerequisites` cross-track ở mục 2.3) —
quiz luôn nằm cùng thư mục với bài mà nó kiểm tra nên không cần prefix.

**Định dạng nội dung (quy ước bắt buộc, `build-data.js` parse theo đúng
cấu trúc này — sai định dạng sẽ khiến quiz không hiển thị hoặc hiển thị
sai)::**

```markdown
## Q1
Nội dung câu hỏi ở đây?

- [ ] Đáp án sai A
- [x] Đáp án đúng (chỉ đánh dấu [x] cho ĐÚNG MỘT lựa chọn mỗi câu)
- [ ] Đáp án sai B
- [ ] Đáp án sai C

> Giải thích ngắn gọn vì sao đáp án đó đúng (và có thể vì sao các đáp án
> khác sai) — luôn viết giải thích, không để trống.

## Q2
...
```

- Mỗi câu bắt đầu bằng heading `## Qn` (n là số thứ tự, không dùng cho mục
  đích khác trong file quiz).
- Đúng 4 lựa chọn mỗi câu (dùng nhất quán, không bắt buộc số khác nhưng
  nên giữ 4 cho đồng nhất giữa các bài).
- Đúng 1 lựa chọn đánh dấu `[x]`, còn lại `[ ]` — nếu đánh dấu 0 hoặc
  nhiều hơn 1 lựa chọn đúng, `build-data.js` vẫn parse được nhưng UI sẽ
  hiển thị sai (chấm điểm dựa trên field `correct: true/false` của từng
  lựa chọn).
- Giải thích (`> ...`) đặt ngay sau khối lựa chọn, trước heading câu tiếp
  theo — có thể nhiều dòng `>` liên tiếp (sẽ được nối lại thành 1 đoạn).

**Nội dung câu hỏi:** ưu tiên kiểm tra **hiểu khái niệm cốt lõi** của bài
(vì sao, không chỉ thuộc lòng định nghĩa), có thể dùng tình huống cụ thể
(số liệu, ví dụ) để kiểm tra khả năng áp dụng — không chỉ hỏi lại nguyên
văn một câu trong bài. Không cần trích dẫn nguồn riêng cho quiz (câu hỏi
dựa trên nội dung bài gốc đã có nguồn).

**Không bắt buộc mọi bài phải có quiz ngay lập tức** — đây là một nhánh
công việc riêng, có thể triển khai dần theo batch (xem mục 1.2), không
chặn các công việc khác của autopilot.

---

## 3. Chọn task (agent tự quyết định, theo thứ tự ưu tiên)

1. Mục 1.1 (việc bắt buộc) đúng điều kiện → làm ngay, bỏ qua các bước dưới.
2. Mục 1.3 (Human Pin) còn dòng khác trống → ưu tiên tuyệt đối, ghi đè
   mọi thứ tự bên dưới kể cả quy tắc luân phiên ở bước 3.
3. **Luân phiên giữa viết lại bài `needs-review` và lấp khoảng trống
   sub-module mới (2026-07-06):** nếu task gần nhất (xem mục 1.2) là viết
   lại 1 bài `needs-review`, task này ưu tiên lấp khoảng trống ở mục 4
   (đặc biệt các sub-module CV mới: Cơ bản/Detection/Segmentation) — và
   ngược lại. Mục đích: thấy tiến độ cả 2 hướng song song, không dồn
   nhiều phiên liên tiếp chỉ để viết lại bài cũ trước khi chạm nội dung
   nâng cao mới. Nếu không rõ task gần nhất là gì (đầu phiên mới), mặc
   định bắt đầu bằng viết lại bài cũ để có nền `needs-review` giảm dần
   ngay từ đầu.
4. Trong mỗi nhánh của bước 3:
   - **Viết lại bài cũ:** chọn bài `needs-review` theo thứ tự `order`
     trong track, ưu tiên bài đang là nền cho sub-module mới (ví dụ bài
     11 CNN, 33 Detection, 34 Segmentation ưu tiên trước các bài
     `needs-review` khác) vì viết lại chúng trước sẽ mở khoá ngữ cảnh rõ
     ràng hơn cho bài mới nối tiếp.
   - **Lấp khoảng trống sub-module:** rà mục 4 (và `SYLLABUS.md` nếu cần
     chi tiết), viết bài tiếp theo còn thiếu trong dòng tiến hoá đã định
     (mục 2.1 phần C) — ví dụ nếu CV
     "Cơ bản" đã có CNN+LeNet+AlexNet, bài tiếp theo là VGG.
5. Không còn bài `needs-review` nào VÀ không còn khoảng trống sub-module
   rõ ràng → agent tự đề xuất cải thiện: đọc lại 1 bài `stable` cũ dưới
   góc nhìn người mới, tìm chỗ có thể rõ hơn/ví dụ tốt hơn, sửa trực tiếp
   (không tạo bản mới — mục 5 nói không giữ version).
6. Không còn gì để cải thiện nội dung ở cả 2 track (hiếm khi xảy ra) → chuyển
   sang task cải thiện viewer (mục 7).

Task tự đề xuất (bước 5, không phải lấp khoảng trống rõ ràng) → viết 1 dòng
lý do ngắn vào `last_touched_by_task` của bài đó, để phiên sau hiểu vì sao
bài này bị sửa mà không phải vì nó sai.

---

## 4. Giáo trình hiện tại (tóm tắt — chi tiết đầy đủ ở `SYLLABUS.md`)

> **Chi tiết từng bài (nguồn, lý do viết, dòng tiến hoá) đã chuyển sang
> `SYLLABUS.md`** (2026-07-06, để giảm kích thước CLAUDE.md — file này
> được nạp vào context mọi task nên càng gọn càng tốt). Khi cần tra cứu
> 1 bài cụ thể, đọc `SYLLABUS.md` hoặc trực tiếp file `.mdx` của bài đó
> (đã có `summary`/`last_touched_by_task`/`## Nguồn tham khảo`). Mục này
> chỉ giữ bảng tóm tắt module — **cập nhật cả 2 file** khi cấu trúc giáo
> trình thay đổi (thêm/xoá bài, tách sub-module, đổi module).

### exam-track — 11 bài, 2 module

- `"Hướng dẫn dùng nền tảng"` — bài 1-3
- `"Kỹ thuật thi đấu nâng cao"` — bài 4-11

### foundations-track — 110 bài, 10 module

1. `"Nền tảng Toán & ML cổ điển"` — 9 bài, phẳng
2. `"Deep Learning Nền tảng"` — 3 bài, phẳng
3. `"Computer Vision"` — 17 bài, 3 sub-module: Cơ bản 8/Detection 4/Segmentation 5
4. `"Sequence Model"` — 20 bài, 3 sub-module: RNN Family 5/Transformer Architecture 9/Tokenization 6
5. `"Reinforcement Learning"` — 21 bài, 4 sub-module: Overview 7/Value-based 5/Policy-based 7/Model-based 2
6. `"Dimensionality Reduction"` — 4 bài, phẳng
7. `"Generative Models"` — 13 bài, 3 sub-module: Overview 4/GAN Family 5/Diffusion Models 4
   phẳng)
6. `"Dimensionality Reduction"` — bài 21-22, 48, 50 (4 bài: PCA→
   Autoencoder→t-SNE→UMAP)
7. `"Generative Models"` — bài 23, 46, 49, 70, 88, 89, 93, 94 (8 bài, 2
   sub-module: GAN Family 3/Diffusion Models 3; bài 93-94 phẳng: overview
   + VAE)
8. `"LLM"` — bài 24-29, 79-80 (8 bài, 2 sub-module: Huấn luyện &
   Alignment 24-27+79-80/Ứng dụng & Inference-time 28-29)
8. `"LLM"` — 8 bài, 2 sub-module: Huấn luyện & Alignment 6/Ứng dụng & Inference-time 2
9. `"Audio"` — 10 bài, 5 sub-module: Overview 1/Biểu diễn âm thanh 2/STT 2/TTS 3/Audio-Understanding 2
10. `"Recommendation Systems"` — 5 bài, phẳng

**Trạng thái review:** 0 bài `needs-review` trên cả 2 track — toàn bộ đã
đạt `stable`. Xem `SYLLABUS.md` nếu cần chi tiết lịch sử "vì sao mỗi bài
đạt stable" hoặc danh sách đầy đủ từng bài kèm nguồn.

---

## 5. Versioning

Không giữ lịch sử version trong nội dung — sửa bài là ghi đè trực tiếp lên
file `.mdx` đó. Đây là quyết định đã chốt (không phải nội dung production,
không cần rollback UI). Nếu cần xem lại bản cũ, dùng `git log` — dù thư mục
này không được commit vào repo chính, agent có thể tự `git init` cục bộ bên
trong `autopilot-learn/` nếu thấy hữu ích để tự theo dõi lịch sử sửa của
chính nó (tuỳ chọn, không bắt buộc).

---

## 6. Cập nhật registry cuối mỗi task

Bắt buộc cập nhật trong `CLAUDE.md` này trước khi coi task là xong:
- Mục 1: Version tăng (patch = sửa 1 bài, minor = thêm bài mới hoặc đổi cấu
  trúc track), "Phiên gần nhất" = mô tả ngắn + ngày, tổng số bài, số bài
  flagged.
- Mục 1.2: xoá việc vừa xong, thêm việc mới agent tự nghĩ ra dựa trên
  khoảng trống còn lại (tối đa 1-2 dòng/việc — xem quy tắc chống phình
  to bên dưới).
- Mục 4: bảng tóm tắt module + số bài, nếu task vừa làm thay đổi cấu trúc
  giáo trình (thêm/xoá bài, tách sub-module, đổi module).
- **`SYLLABUS.md`**: thêm/sửa dòng chi tiết tương ứng cho bài vừa viết
  (tên file, tiêu đề, `status`, nối tiếp bài nào, nguồn) — đây là nơi lưu
  chi tiết đầy đủ, mục 4 của CLAUDE.md chỉ là bản tóm tắt siêu ngắn trỏ
  sang file này.

**Quy tắc chống phình to (bắt buộc, áp dụng cho MỌI mục trong file này,
không chỉ mục 1 "Phiên gần nhất"):** `CLAUDE.md` được nạp vào context ở
mọi task, nên đây không phải nơi ghi lịch sử/nhật ký. Khi cập nhật bất kỳ
mục nào (đặc biệt 1, 1.2, 2.1, 4, 7.1):
- Viết **rule/trạng thái hiện hành**, không viết lý do lịch sử ("vì task
  X đã làm Y", "người vận hành yêu cầu ngày Z", "trước đây từng lỗi vì
  W"). Lý do/lịch sử thuộc về `SYLLABUS.md`, `last_touched_by_task` của
  từng bài, hoặc `## Nguồn tham khảo` — không phải CLAUDE.md.
- Khi thêm 1 dòng mới vào danh sách (mục 1.2, whitelist, v.v.), luôn tự
  hỏi: có dòng cũ nào đã xong/hết giá trị hành động để xoá hẳn không?
  Thêm mà không xoá là nguyên nhân chính gây phình to.
- `old_string` khi sửa phải khớp và thay thế TOÀN BỘ đoạn cũ liên quan,
  không chỉ prepend/append thêm câu mới vào cuối.
- Nếu 1 mục vượt quá ~15-20 dòng, đó là dấu hiệu đang lẫn lý do lịch sử
  vào rule — dừng lại và cắt bớt trước khi coi task xong.

---

## 7. Viewer nội bộ (`viewer/index.html`)

Trang tĩnh, tự chứa (không cần server/build step — mở thẳng bằng file://
hoặc double-click), mục đích để người vận hành (không phải agent) lướt cây
bài viết nhanh mà không cần mở từng file `.mdx`.

Yêu cầu tối thiểu:
- Đọc danh sách bài từ chính các file `.mdx` trong `content/` (agent tự
  quyết định cách nạp dữ liệu — ví dụ một bước build nhỏ sinh ra
  `viewer/data.json` từ frontmatter + nội dung mỗi khi có bài mới, rồi
  `index.html` fetch file JSON đó).
- Hiển thị 2 cột/2 tab theo track, đúng thứ tự `order`.
- Click vào 1 bài → hiện nội dung (render Markdown cơ bản là đủ, không cần
  render đúng JSX của MDX).
- Badge trạng thái (`draft` / `needs-review` / `stable`) hiện rõ trên mỗi
  mục trong danh sách.
- Đây là một phần hợp lệ của roadmap tối ưu — khi mục 4 (giáo trình) đổi
  cấu trúc lớn, cải thiện viewer để phản ánh đúng cấu trúc mới cũng là một
  task hợp lệ (xem mục 3, bước 6).

Giữ viewer đơn giản — đây là công cụ nội bộ cho 1 người dùng (bạn), không
cần polish UI, không cần responsive, không cần dark mode riêng (dù có thể
tái dùng bảng màu dark của web chính nếu thuận tiện).

### 7.1 Cơ chế build (đọc trước khi động vào viewer)

`viewer/build-data.js` đọc toàn bộ `.mdx` trong `content/`, sinh
`viewer/data.json`, rồi nhúng thẳng data đó vào `<script>` của
`viewer/index.html` (build từ `viewer/template.html`) — không dùng
`fetch()` vì bị trình duyệt chặn (CORS) khi mở `index.html` qua `file://`
trực tiếp.

**KHÔNG tự chạy `viewer/watch.js`** — không tự khởi động watcher nền
dưới bất kỳ hình thức nào. Người vận hành tự build viewer thủ công khi
cần. Quy trình: sau khi sửa/tạo bài `.mdx`, agent gọi `node
viewer/build-data.js` **một lần thủ công** để cập nhật `data.json` +
`index.html`. Nếu phát hiện một process `node.exe` chạy nền không rõ
nguồn gốc, báo người vận hành và xin phép trước khi kill — không tự ý
cho rằng đó là watcher cũ của agent.

Khi thêm/tách một sub-module mới, **phải cập nhật `viewer/modules.json`**
(field `submodules` của module tương ứng) trong cùng task — không chỉ
gán `submodule` trong frontmatter. Bỏ qua bước này khiến sub-module vẫn
hiển thị đúng nhóm bài nhưng thiếu mô tả ngắn ở đầu mỗi nhóm.

Luôn xác nhận số liệu build bằng cách đọc trực tiếp `data.json` qua Node
sau mỗi thay đổi lớn tới cấu trúc build — không chỉ tin dòng log in ra.

### 7.2 Quiz interactive (đã triển khai 2026-07-05)

`build-data.js` tự động tìm mọi file `*.quiz.mdx` cùng thư mục track,
parse thành mảng câu hỏi có cấu trúc (`prompt`, `options[].text`,
`options[].correct`, `explanation`) dựa theo `quiz_for` trong frontmatter,
rồi gắn field `quiz` vào đúng object bài gốc trong `data.json`. Bài không
có file quiz tương ứng thì không có field `quiz` (không hiển thị gì thêm
trên viewer).

`template.html`: nếu `page.quiz` tồn tại, hiện 2 nút chuyển tab ("Nội
dung bài" / "Quiz (N câu)") ngay dưới header — click "Quiz" hiện danh
sách câu hỏi dạng chọn 1 đáp án, chấm ngay khi chọn (tô xanh đáp án đúng,
đỏ nếu chọn sai + tô xanh đáp án đúng để đối chiếu), hiện giải thích ngay
dưới, có bộ đếm "đã làm X/N — đúng Y/X" và nút "Làm lại từ đầu".

File `*.quiz.mdx` cũng cần `node viewer/build-data.js` chạy thủ công như
mọi file `.mdx` khác (xem mục 7.1) — không có watcher tự động.

---

## 8. Không bao giờ dừng

Vòng lặp trong `AUTOPILOT.md` không tự kết thúc sau N bài — luôn có bài mới
để viết hoặc bài cũ để cải thiện. Chỉ dừng theo đúng điều kiện ở mục "Khi
nào dừng" của `AUTOPILOT.md` (hết quota, lỗi lặp lại, hoặc mâu thuẫn thật
sự cần người quyết định).
