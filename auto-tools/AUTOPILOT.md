# AUTOPILOT MODE — AI Learn Content Workshop

Chế độ tự động dài hạn, không có người giám sát trực tiếp. Không dừng lại để
hỏi — kể cả cho quyết định cấu trúc (order sai, cần đổi tên/số nhiều file,
refactor content, chọn giữa nhiều cách sửa hợp lý), không chỉ nội dung
từng bài. Gặp điều mơ hồ: tự đánh giá phương án khớp nhất với mục tiêu
"giáo trình đọc liền mạch, đúng thứ tự logic" (CLAUDE.md mục 2.1/2.3), thực
hiện, tiếp tục vòng lặp. Chỉ dừng đúng điều kiện ở mục "Khi nào dừng" bên
dưới — không ngoại lệ, kể cả khi thay đổi ảnh hưởng nhiều file.

**Ghi lý do quyết định — đúng chỗ, đúng độ dài:** lý do chi tiết (vì sao
chọn phương án này, task nào, nguồn nào) ghi vào `last_touched_by_task`
của bài `.mdx` liên quan — đây là nơi lịch sử được phép dài. **Không ghi
lý do lịch sử vào `CLAUDE.md`
(kể cả mục 1.2) — mục đó chỉ liệt kê việc-cần-làm ở thì hiện tại, tối đa
1-2 dòng mỗi việc, không giải thích "vì sao"/"task nào đã làm gì". Xem quy
tắc chống phình to ở `CLAUDE.md` mục 6.

**Maintain reading flow trong cùng submodule:** khi thêm/bổ sung bài vào 1
submodule (ví dụ Computer Vision "Classification", Sequence Model "RNN Family"),
đảm bảo thứ tự `order` tuân theo độ khó/từ nền tảng → nâng cao, không nhảy
số hoặc xếp bài lệch mức độ. Nếu cần thêm bài mới vào giữa các bài đã có,
phải tính toán lại số thứ tự cho toàn bộ submodule đó — không để bị lệch.

`../CLAUDE.md` (thư mục cha) chứa quy tắc thiết kế, quy chuẩn viết, giới
hạn nội dung, và bảng tóm tắt giáo trình — không lặp lại ở đây. File này
chỉ là vòng lặp vận hành cho việc **mở rộng giáo trình** (viết bài mới,
lấp khoảng trống, sửa bài `needs-review`). Chi tiết một bài cụ thể (nguồn,
lý do viết) đọc trực tiếp từ `summary`/`last_touched_by_task`/
`## Nguồn tham khảo` trong chính file `.mdx` đó — không có tầng tóm tắt
trung gian nào khác. CLAUDE.md và nội dung thực tế trong `content/` mâu
thuẫn nhau mà không rõ cái nào đúng → dừng (xem mục "Khi nào dừng").

**Không phải chế độ này nếu người vận hành yêu cầu "polish" / "trau
chuốt lại" một module cụ thể** — đó là `POLISHPASS.md` (cùng thư mục
`auto-tools/`), một vòng lặp khác tập trung vào văn phong/độ sâu của bài
đã có, không mở rộng giáo trình.

Đọc mục 1 (STATUS) của CLAUDE.md trước mỗi task, không ngoại lệ. Mục 2-7
đọc theo nhu cầu task đang làm.

Đây là workshop nội bộ, không phải trang publish thẳng: mục tiêu của mỗi bài
là "đúng, rõ, hữu ích để thành viên CLB đọc và viết lại bài chính thức của
họ" — không phải "publish-ready hoàn hảo". Đừng đánh bóng câu chữ quá mức khi
nội dung cốt lõi còn thiếu; ưu tiên phủ đúng kiến thức trước, văn phong sau.

## Vòng lặp — lặp lại từ Bước 0 sau mỗi task

### Bước 0 — CLAUDE.md mục 1.1

Grep điều kiện ở mục 1.1. Đúng → đây là task duy nhất, bỏ qua Bước 1-3, làm
ngay.

### Bước 1 — Chọn task (CLAUDE.md mục 3)

Theo đúng thứ tự ưu tiên ở mục 3: việc bắt buộc → Human Pin → bài
`needs-review` tồn đọng → khoảng trống trong giáo trình → tự đề xuất cải
thiện bài cũ → cải thiện viewer. Chọn đúng 1 task, nhỏ, cụ thể (1 bài, hoặc
1 lần sửa 1 bài, hoặc 1 cải tiến viewer — không gộp nhiều việc không liên
quan vào 1 task).

### Bước 2 — Trước khi viết

- Đọc `_index.mdx` của track liên quan để biết bối cảnh giáo trình hiện tại.
- Nếu viết bài mới trong 1 module/submodule đã có bài — đọc lướt các bài
  `order` trước đó trong cùng module/submodule để không lặp lại hoặc mâu
  thuẫn khái niệm đã giải thích.
- Nếu đang sửa bài cũ — đọc toàn bộ bài đó trước, không sửa mù dựa trên tên
  file.
- Nếu task liên quan đến scoring metric / quy trình platform (exam-track) —
  đối chiếu nhanh với mục 2.1 Sườn A trong CLAUDE.md để không bịa tính năng
  platform không có (ví dụ không có metric ngoài 6 metric đã liệt kê, không
  có tính năng real-time leaderboard vì platform không có).
- Nếu task là viết bài mới hoặc sửa nội dung cốt lõi bài cũ — tra cứu ít
  nhất 1 nguồn trong whitelist ở CLAUDE.md mục 2.5 bằng `WebSearch` (dùng
  `allowed_domains` giới hạn đúng whitelist) hoặc `WebFetch` trực tiếp vào
  URL đã biết thuộc whitelist. Không fetch domain ngoài danh sách.

### Bước 3 — Thực hiện

**Viết bài mới:** tạo file đúng quy ước tên + frontmatter ở CLAUDE.md mục
2.3, viết nội dung đạt mục 2.2 và 2.4. Cập nhật `_index.mdx` của track đó để
liệt kê bài mới đúng vị trí `order`.

**Cải thiện bài cũ:** sửa trực tiếp, không tạo bản sao/version mới (mục 5).
Nếu sửa làm thay đổi khái niệm cốt lõi của bài (không chỉ văn phong), cân
nhắc các bài `order` sau trong cùng module/submodule (những bài giả định
người đọc đã hiểu khái niệm này) có bị ảnh hưởng không — nếu có, đánh dấu
`status: needs-review` cho bài phụ thuộc đó luôn trong cùng task.

**Tái cấu trúc giáo trình** (đổi thứ tự, tách/gộp bài, đổi track): cập nhật
toàn bộ `order` bị ảnh hưởng + cả 2 `_index.mdx` liên quan trong cùng task,
không để lệch.

**Cải thiện viewer:** theo yêu cầu tối thiểu ở CLAUDE.md mục 7. Đây là task
hợp lệ ngang hàng với viết bài — không phải việc phụ.

### Bước 4 — Tự kiểm tra trước khi coi là xong

- Frontmatter đủ trường bắt buộc, `track` khớp đúng thư mục, `order` không
  trùng bài khác trong cùng track.
- Đọc lại toàn bộ bài vừa viết/sửa một lượt bằng góc nhìn người đọc (không
  chỉ nhìn diff) — đây là bước rẻ, luôn làm.
- Không vi phạm giới hạn ở CLAUDE.md mục 2.2.
- Nếu bài mới hoặc sửa nội dung cốt lõi — mục `## Nguồn tham khảo` cuối bài
  có ít nhất 1 link thuộc whitelist mục 2.5, mỗi link kèm 1 câu mô tả đã
  dùng gì từ nguồn đó (không phải link trơn).

### Bước 5 — Cập nhật CLAUDE.md (bắt buộc, mục 6)

Không coi task là xong nếu chưa cập nhật STATUS (mục 1 của CLAUDE.md).
Nếu task thay đổi cấu trúc giáo trình (thêm/xoá bài, tách sub-module,
đổi module), cập nhật thêm bảng tóm tắt ở mục 4 CLAUDE.md. CLAUDE.md lệch
với `content/` thật = task chưa xong.

### Bước 6 — Quay lại Bước 0

Không tự dừng, không tóm tắt giữa chừng, không hỏi có nên tiếp tục — tới khi
gặp điều kiện dừng thật sự.

---

## Giới hạn cứng

- Không tạo bài trùng chủ đề trong cùng track (CLAUDE.md mục 2.2).
- Không bịa số liệu thực nghiệm cụ thể không kiểm chứng được.
- Không `WebSearch`/`WebFetch` domain ngoài whitelist ở CLAUDE.md mục 2.5.
- Không trích dẫn nguồn vào mục "Nguồn tham khảo" nếu không thực sự đọc nó
  trong task đó.
- Không bịa tính năng/metric platform không có — đối chiếu
  `src/lib/constants.ts` và phần "Scoring Metrics" / "Competition Phase
  Logic" trong CLAUDE.md của repo chính (`../../CLAUDE.md`, tức
  `The Noders Competition Platform/CLAUDE.md` — khác với
  `../CLAUDE.md` là registry riêng của `autopilot-learn/`) khi viết nội
  dung exam-track liên quan trực tiếp đến cách platform vận hành.
- Không sửa bất kỳ file nào ngoài `autopilot-learn/` — vòng lặp này không
  được đụng vào code của web app thật (`src/`, `supabase/`, v.v.). Nếu một
  task có vẻ cần sửa code ngoài thư mục này để "hoàn thành đúng", đó là dấu
  hiệu task bị hiểu sai phạm vi — quay lại Bước 1 chọn task khác.
- Không giữ nhiều bản version của cùng 1 bài trong `content/` (mục 5).
- Không tự ý mở rộng phạm vi ra ngoài 2 track đã định nghĩa mà không ghi rõ
  lý do vào CLAUDE.md mục 1.2 trước.

## Khi nào dừng

Người vận hành đã chỉ đạo (2026-07-05): chạy liên tục, không dừng lại hỏi
ý kiến giữa chừng. Chỉ dừng đúng 2 điều kiện sau — không có điều kiện nào
khác, kể cả khi giáo trình đã lớn hoặc đã qua nhiều vòng cải thiện:

- Hết quota / hết ngữ cảnh phiên làm việc.
- Task gợi ý cần sửa code ngoài `autopilot-learn/` để hoàn thành đúng nghĩa
  (xem Giới hạn cứng) — báo cáo cụ thể cần gì, không tự vượt rào.

Khi bước "tự đề xuất cải thiện" (CLAUDE.md mục 3, bước 5) chỉ còn tạo ra
thay đổi vụn vặt không thêm giá trị: đây KHÔNG còn là điều kiện dừng —
thay vào đó, tự quyết định chuyển hướng sang mở rộng phạm vi (viết thêm
chủ đề mới trong track đã cho phép mở rộng, xem CLAUDE.md mục 2.1), ghi lý
do vào mục 1.2, và tiếp tục vòng lặp — không dừng lại báo cáo.

Dừng → đảm bảo CLAUDE.md mục 1 (STATUS) đã phản ánh đúng việc vừa làm, rồi
báo lại cho người vận hành lý do dừng.

## Bắt đầu

Đọc CLAUDE.md mục 1 (STATUS) để biết trạng thái hiện tại và phiên trước đã
làm gì. Bắt đầu từ Bước 0.
