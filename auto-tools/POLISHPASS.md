# POLISH PASS — trau chuốt văn phong giáo trình theo mạch 1 module

Chế độ khác `AUTOPILOT.md`: không viết bài mới, không lấp khoảng trống
giáo trình, không tái cấu trúc module/submodule. Mục tiêu duy nhất: đọc
lại **toàn bộ bài trong 1 module** (do người vận hành chỉ định khi gọi
file này) theo đúng mạch học, và sửa để mỗi bài thực sự **dạy** — đúng
giọng giáo trình, đủ sâu, không còn vết tích "viết cho operator đọc".

Không dừng lại hỏi giữa chừng trong phạm vi module đã được giao — áp
dụng cùng tinh thần "không giám sát" như `AUTOPILOT.md`. Chỉ dừng khi đã
polish xong toàn bộ bài trong module, hoặc gặp mâu thuẫn nội dung thật sự
cần người quyết định (ví dụ bài đang polish phát hiện sai kiến thức so
với bài trước đó trong track).

## Cách gọi

Người vận hành nhắc tên module (và tuỳ chọn track nếu tên trùng) khi gọi
file này, ví dụ: *"Đọc POLISHPASS.md, polish module Computer Vision"*.
Nếu không rõ track, agent tự xác định qua `content/modules.json` hoặc
`content/<track>/_index.mdx`.

**Luôn chạy lại toàn bộ vòng lặp khi được gọi, bất kể `CLAUDE.md` mục 1
STATUS ghi gì.** Một lời gọi polish pass là yêu cầu thực thi lại đúng quy
trình (Bước 0-4, mỗi bài một subagent riêng, đọc bằng chứng trích dẫn cụ
thể) — không phải yêu cầu tra cứu xem lần trước đã báo "đạt chuẩn" hay
chưa. STATUS/diff có sẵn trong working tree (kể cả uncommitted) không phải
bằng chứng bài đã đạt chuẩn — chỉ bằng chứng subagent tự trích dẫn theo
đúng Bước 2 mới tính. Nếu nghi ngờ lần polish trước làm hời hợt (đây là lý
do gốc sinh ra yêu cầu 1-subagent-1-bài ở Bước 2), càng phải chạy lại đầy
đủ, không rút gọn.

## Bài "dạy tốt" là bài như thế nào (chuẩn để tự so sánh)

Đây là tiêu chí duy nhất khi đọc lại — không có danh sách lỗi máy móc
cần dò, tự đọc bằng con mắt người học lần đầu tiếp cận khái niệm và hỏi:
bài này có thực sự dạy được không, hay chỉ mô tả xung quanh kiến thức?

Một bài dạy tốt:

- **Mở bài bằng động lực, không bằng mô tả cấu trúc.** Câu đầu tiên nên
  trả lời "vì sao khái niệm này tồn tại / vấn đề gì nó giải quyết", không
  phải "bài này thuộc submodule nào, nằm ở vị trí nào trong module".
  Thông tin điều hướng (bài trước dạy gì, bài sau nối tiếp thế nào) là
  cần thiết và nên giữ — nhưng đặt như bối cảnh ngắn, không phải nội dung
  chính, và không dùng giọng nhật ký thao tác ("Ghi chú điều hướng:",
  "Bài tiếp theo:", "Sub-module này có...").
- **Xây trực giác trước khi đưa công thức/kiến trúc.** Người đọc chưa
  biết gì cần hình dung được vấn đề bằng ngôn ngữ thường trước, rồi mới
  gặp ký hiệu toán hoặc sơ đồ kiến trúc.
- **Có ví dụ cụ thể, cầm nắm được.** Số liệu, tình huống, hoặc so sánh cụ
  thể ("ảnh 224×224×3 là hơn 150,000 giá trị đầu vào") — không dừng ở mức
  liệt kê khái niệm trừu tượng.
- **Giải thích được "vì sao", không chỉ "là gì".** Đặc biệt với bài dòng
  tiến hoá (CLAUDE.md mục 2.1): hạn chế của ý tưởng trước, ý tưởng mới
  giải quyết ra sao, đánh đổi nó mang lại.
- **Giọng nói với người học, không nói về chính bài viết hay về agent.**
  Không có câu miêu tả quyết định biên tập ("bài này không dạy X mà chỉ
  vẽ bản đồ Y", "phần này được thêm vào vì lý do Z"). Nếu một câu chỉ có
  nghĩa với người đang quản lý nội dung (task nào, vì sao tách bài, quyết
  định ngày nào) — nó thuộc `last_touched_by_task`/`## Nguồn tham khảo`,
  không thuộc phần thân bài.
- **Đủ sâu cho một bài độc lập.** Đọc xong, một người chưa biết gì về
  đúng khái niệm đó phải nắm được nó dùng để làm gì, hoạt động thế nào ở
  mức trực giác + công thức chính, và nó khác/nối tiếp gì so với bài
  trước. Bài quá ngắn chỉ liệt kê ý mà không giải thích ý đó là chưa đạt.

Áp dụng chuẩn này **cân xứng với vai trò bài trong module** — bài Overview
cần đủ dài để thực sự xây bối cảnh (không chỉ là trang mục lục có văn
xuôi bọc quanh); bài kỹ thuật giữa mạch có thể ngắn hơn nếu khái niệm
vốn gọn, miễn đã dạy đủ sâu đúng phạm vi của nó.

## Vòng lặp

### Bước 0 — Xác định phạm vi

Đọc `content/modules.json` + `content/<track>/_index.mdx` để lấy đúng
danh sách bài + submodule của module được giao, theo đúng thứ tự học
(không phải thứ tự alphabet thư mục).

### Bước 1 — Đọc trước toàn mạch, không sửa vội

Tự đọc (không giao subagent) lướt hết các bài trong module theo thứ tự,
kể cả file `.mdx` không sửa lần này, để nắm được bài trước đã dạy gì
(tránh sửa 1 bài mà phá vỡ giả định của bài sau, hoặc lặp lại giải thích
bài trước đã có). Bước này cần cái nhìn toàn mạch nên không tách nhỏ.

### Bước 2 — Polish từng bài, theo đúng thứ tự học, mỗi bài một subagent riêng

**Bắt buộc giao mỗi bài cho một subagent riêng** (không tự đọc-và-quyết
hết cả module trong 1 lượt, kể cả của chính agent điều phối) — quét dồn
nhiều bài trong 1 lượt dễ sinh hiệu ứng lướt nhanh, tự chấm "đạt chuẩn"
hời hợt mà không có bằng chứng cụ thể (đã xảy ra thật: một lượt polish
từng chấm "đạt" cho bài Overview Computer Vision dù bài đó có heading
"Ghi chú điều hướng" — đúng thứ ngôn ngữ bị cấm rõ trong chính file này
— và phần thân chỉ là mục lục link không giải thích). Với mỗi bài:

- Prompt cho subagent phải kèm: đường dẫn file, toàn bộ nội dung chuẩn
  "bài dạy tốt" ở mục trên, và yêu cầu **nếu kết luận bài đã đạt chuẩn,
  phải trích cụ thể câu/đoạn làm bằng chứng cho từng tiêu chí** (mở bài
  bằng động lực, có ví dụ cụ thể, giải thích vì sao, không có giọng biên
  tập/điều hướng) — không được chỉ trả lời "đã ổn, bỏ qua" mà không trích
  dẫn. Nếu không trích được bằng chứng cho một tiêu chí nào đó, coi như
  bài chưa đạt tiêu chí đó và phải sửa.
- Cũng đưa cho subagent 1-2 bài liền kề (trước/sau) đã đọc ở Bước 1 làm
  ngữ cảnh, để nó không phá vỡ mạch hoặc lặp giải thích.
- Đọc lại kết quả subagent trả về trước khi coi bài đó xong — nếu bằng
  chứng trích dẫn yếu hoặc chỉ diễn giải chung chung, tự polish lại bài
  đó thay vì tin theo báo cáo.

Tiêu chí sửa khi bài chưa đạt (sửa trực tiếp, ghi đè theo CLAUDE.md mục
5, không tạo bản mới):
- Viết lại phần mở bài nếu đang mở bằng mô tả cấu trúc thay vì động lực.
- Bổ sung ví dụ cụ thể/trực giác nếu bài đang liệt kê khái niệm suông.
- Cắt câu/đoạn thuộc về "nói với operator" (mô tả quyết định biên tập,
  nhắc task, nhắc lý do tách bài) ra khỏi thân bài — chuyển ý cần giữ (nếu
  có giá trị lịch sử) vào `last_touched_by_task`.
- Không đổi `title`/`module`/`submodule`/`order`/track trong polish pass
  trừ khi phát hiện lỗi thật (sai vị trí, trùng order) — polish pass là
  về văn phong và độ sâu nội dung, không phải tái cấu trúc. Nếu phát hiện
  cần tái cấu trúc thật sự, dừng sửa nội dung, ghi rõ vấn đề vào mục 1.2
  CLAUDE.md, rồi tiếp tục polish các bài còn lại (không tự tái cấu trúc
  giữa chừng polish pass).
- Nguồn tham khảo: chỉ cần tra whitelist mới (CLAUDE.md mục 2.5) nếu
  polish thêm nội dung/khái niệm mới thật sự chưa có nguồn trước đó. Sửa
  văn phong thuần tuý (không thêm kiến thức mới) không bắt buộc tra cứu
  lại.
- Không đổi `status` chỉ vì đã polish — `status` phản ánh độ hoàn thiện
  nội dung (draft/needs-review/stable) theo CLAUDE.md mục 2.3, độc lập
  với việc đã polish văn phong hay chưa. Nếu polish phát hiện bài thiếu
  sót nội dung thật sự (không chỉ văn phong) mà không tự bổ sung được
  ngay, đặt `status: needs-review` như bình thường.

### Bước 3 — Tự kiểm tra cả module sau khi polish xong hết các bài

Đọc lại một lượt toàn mạch module (không chỉ từng bài riêng lẻ) — kiểm
tra không có 2 bài liền kề lặp lại y hệt một đoạn giải thích, mạch động
lực từ bài này sang bài kia liền mạch, không bài nào giả định kiến thức
chưa được dạy ở bài trước.

### Bước 4 — Cập nhật CLAUDE.md

Chỉ cần cập nhật mục 1 STATUS (Phiên gần nhất, ngày) — polish pass không
đổi tổng số bài hay cấu trúc module/submodule trong đa số trường hợp, nên
không cần đụng mục 4 trừ khi Bước 2 phát hiện vấn đề tái cấu trúc thật
(khi đó chỉ ghi vào mục 1.2, không tự tái cấu trúc — xem Bước 2).

## Không làm trong polish pass

- Không viết bài mới, không lấp khoảng trống giáo trình (đó là việc của
  `AUTOPILOT.md`).
- Không tách/gộp submodule, không đổi track.
- Không sửa module khác ngoài module được giao, kể cả khi đọc thấy vấn đề
  — ghi lại vào mục 1.2 CLAUDE.md để làm ở lượt polish/autopilot khác.
- Không sửa code ngoài `autopilot-learn/` (giữ nguyên giới hạn cứng của
  `AUTOPILOT.md`).

## Khi nào dừng

Polish xong toàn bộ bài trong module được giao → báo lại cho người vận
hành: đã sửa bài nào, giữ nguyên bài nào (vì đã đạt chuẩn), và có phát
hiện vấn đề cấu trúc nào cần quyết định thêm không (đã ghi vào mục 1.2
CLAUDE.md nếu có).

Gặp mâu thuẫn nội dung thật sự giữa 2 bài mà không tự quyết được cái nào
đúng → dừng, báo cụ thể, không tự chọn một phương án rồi im lặng đi tiếp.
