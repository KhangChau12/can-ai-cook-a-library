# Giáo trình chi tiết (tách từ CLAUDE.md mục 4, 2026-07-06)

> File này chứa danh sách chi tiết từng bài của cả 2 track — tách riêng
> khỏi `CLAUDE.md` vì đây là phần dài nhất và ít cần đọc lại toàn bộ mỗi
> task (thường chỉ cần tra 1-2 bài cụ thể). `CLAUDE.md` mục 4 giờ chỉ giữ
> bảng tóm tắt siêu ngắn (module + số bài) và trỏ sang file này khi cần
> chi tiết. Cập nhật file này mỗi khi cấu trúc giáo trình thay đổi — cùng
> nguyên tắc như mục 4 cũ: agent cập nhật ngay trong task vừa thay đổi
> cấu trúc, không để lại sau.
>
> Lưu ý: chi tiết nguồn/lý do của từng bài cũng đã có sẵn trong chính file
> `.mdx` đó (frontmatter `summary`, `last_touched_by_task`, và mục
> `## Nguồn tham khảo`) — file này là bản tóm tắt tiện tra cứu nhanh mà
> không cần mở từng file, không phải nguồn sự thật duy nhất. Nếu 2 nơi
> mâu thuẫn, file `.mdx` thật thắng.

---

**Lưu ý về `status` ghi trong mục này (từ 2026-07-06):** mọi ghi chú
`` `status: stable` `` bên dưới phản ánh trạng thái **tại thời điểm bài
được tạo/tái cấu trúc**, không phải trạng thái hiện tại — toàn bộ 43 bài
đã chuyển về `needs-review` theo quyết định đổi triết lý nội dung (mục
1 "Phiên gần nhất", mục 2.1 "Đổi triết lý nội dung" của `CLAUDE.md`). Khi
1 bài được viết lại đạt chuẩn mới, cập nhật đúng dòng tương ứng bên dưới
thành `` `status: stable` `` lại và xoá bài đó khỏi diện cần xử lý.

**Cập nhật quan trọng (2026-07-06, cuối phiên đổi triết lý):** sau nhiều
task rà soát (task 10, 13, 14, 15), agent xác nhận nhiều bài `needs-review`
thực chất **đã đạt chuẩn nội dung mới** dù không cần "viết lại" theo
nghĩa thêm dòng tiến hoá/lịch sử — đây là các khái niệm/thuật toán đơn lẻ
không thuộc dạng "dòng tiến hoá nhiều model" (đúng loại trừ mục 2.1), đã
có ví dụ số cụ thể và giải thích rõ ràng từ trước. Đã nâng `status` các
bài này thành `stable` thật sự trong file `.mdx` (không chỉ ghi chú ở
đây): **01... (chưa, còn needs-review)**, 03, 05, 07, 09, 16, 17, 21, 22,
24, 26, 31, 32. **Chỉ còn đúng 9 bài foundations-track thực sự
`needs-review`** tại thời điểm v1.23: 01, 02, 06, 08, 10, 25, 28, 29, 30
— xem STATUS mục 1 (`CLAUDE.md`) để biết lý do mỗi bài (một số đã thử tra
nguồn nhưng không xác nhận được, một số chưa rà tới). exam-track vẫn giữ
nguyên 9 bài `needs-review` (không có ưu tiên đặc biệt theo mục 2.1, cần
task riêng để rà).

## exam-track

**Lưu ý:** exam-track KHÔNG nằm trong phạm vi đổi triết lý nội dung
2026-07-06 (xem `CLAUDE.md` mục 2.1) — 9 bài dưới đây chuyển `needs-review`
thuần vì thao tác đổi hàng loạt, không phải vì nội dung có vấn đề. Không
có ưu tiên đặc biệt viết lại các bài này trước — xử lý ngang hàng theo
`order` nếu tới lượt theo mục 3.

**Tổ chức module (2026-07-05):** 2 nhóm hiện có chính thức hoá thành field
`module` trong frontmatter, hiển thị thành 2 mục riêng trong sidebar
viewer:
- `module: "Hướng dẫn dùng nền tảng"` — bài 1-3
- `module: "Kỹ thuật thi đấu nâng cao"` — bài 4-9

**Tái cấu trúc lớn (2026-07-05, theo chỉ đạo trực tiếp người vận hành qua
Human Pin):** 11 bài cũ (thiên về "hướng dẫn dùng web thi đấu" chia nhỏ
quy trình) gộp lại thành 3 bài nền tảng, sau đó mở rộng thêm 6 bài kỹ
thuật thi đấu thật hoàn toàn mới — đúng mục tiêu ban đầu của exam-track là
dạy trick/lưu ý thi đấu (checkpoint freeze, load model, ensemble, đổi
hyperparameter, thêm/bớt layer), không phải hướng dẫn dùng web.

**Nhóm nền tảng (gộp từ 11 bài cũ):**
1. `01-leaderboard-metric-va-loi-nop-bai.mdx` — Leaderboard, Scoring
   Metric & Lỗi nộp bài trên The Noders Platform (`status: stable`,
   gộp từ 3 bài cũ: doc-hieu-leaderboard, cach-tinh-scoring-metric,
   sai-lam-thuong-gap-khi-nop-bai)
2. `02-quy-trinh-thi-dau-tu-du-lieu-den-nop-bai.mdx` — Quy trình thi đấu:
   Từ Dữ liệu thô tới Submission hợp lệ (`status: stable`, gộp + rút gọn
   từ 4 bài cũ: kham-pha-du-lieu, xu-ly-du-lieu-va-feature-engineering,
   doc-hieu-ket-qua-xu-ly-submission, thi-dau-theo-doi)
3. `03-baseline-nang-cap-mo-hinh-va-chien-luoc-nop-bai.mdx` — Baseline,
   Nâng cấp Mô hình & Chiến lược Nộp bài (`status: stable`, gộp từ 3 bài
   cũ: chon-baseline-model-nhanh, nang-cap-tu-baseline-len-gradient-
   boosting, chien-luoc-dung-submission-thong-minh)

Bài cũ `11-practice-problems-luyen-tap-truoc-khi-thi-that.mdx` bị gộp một
phần nội dung cốt lõi (luồng `/practice`) vào cuối bài 02 — không giữ
thành bài riêng vì nội dung mỏng so với 1 bài độc lập sau khi rút gọn.

**Nhóm kỹ thuật nâng cao thi đấu thật (hoàn toàn mới):**
4. `04-transfer-learning-va-fine-tuning.mdx` — Transfer Learning &
   Fine-tuning — Tận dụng Model đã học sẵn (`status: stable`)
5. `05-load-va-dung-pretrained-checkpoint.mdx` — Checkpoint — Lưu, Load &
   Dùng lại Trạng thái Model (`status: stable`)
6. `06-thay-doi-kien-truc-them-bot-layer.mdx` — Tuỳ chỉnh Kiến trúc —
   Thêm/Bớt/Thay Layer trên Model Pretrained (`status: stable`)
7. `07-hyperparameter-tuning.mdx` — Hyperparameter Tuning — Tìm cấu hình
   tốt nhất một cách có hệ thống (`status: stable`)
8. `08-model-ensembling.mdx` — Model Ensembling — Kết hợp nhiều Model để
   tăng điểm số (`status: stable`)
9. `09-ky-thuat-rieng-cho-tabular.mdx` — Kỹ thuật riêng cho Dữ liệu
   Tabular — Target Encoding & Feature Interaction (`status: stable`)
10. `10-data-augmentation.mdx` — Data Augmentation — Nhân bản Dữ liệu
    Ảnh Có Chủ đích Để Giảm Overfitting (`status: stable` — mới,
    2026-07-06: bài đầu tiên mở rộng exam-track kể từ đợt tái cấu trúc
    2026-07-05 — lấp khoảng trống kỹ thuật ảnh phổ biến chưa nhắc tới,
    nối tiếp bài 4 Transfer Learning (dataset nhỏ → rủi ro overfit khi
    fine-tune), flip/crop/multi-scale/PCA color perturbation từ AlexNet
    (nối tiếp bài 35 foundations-track), nguyên tắc chỉ augment train
    không augment test, kèm test-time augmentation (liên hệ voting/
    averaging bài 8), nguồn machinelearningmastery.com. Đã thử
    pseudo-labeling trước đó nhưng không đủ nguồn whitelist chất lượng
    riêng cho bối cảnh thi đấu — không viết, xem CLAUDE.md mục 1.2)
11. `11-cross-validation-cho-du-lieu-thoi-gian.mdx` — Cross-Validation
    cho Dữ liệu Có Tính Thời gian — Walk-Forward Validation
    (`status: stable` — mới, 2026-07-06: lấp khoảng trống — bài 1 dạy
    data leakage (train-test contamination, target leakage) nhưng chưa
    nhắc temporal leakage riêng cho time series; k-fold ngẫu nhiên gây
    look-ahead bias, walk-forward validation tôn trọng chiều nhân quả,
    expanding window (giữ toàn bộ quá khứ) vs sliding window (kích thước
    cố định), leakage qua feature engineering (rolling window vượt ranh
    giới train-test); nối tiếp bài 3 (nguyên tắc cross-validation) và
    bài 1 (data leakage); nguồn machinelearningmastery.com/5-ways-to-
    use-cross-validation-to-improve-time-series-models + data-leakage-
    machine-learning (đã dùng ở bài 1, đào sâu khía cạnh temporal))

Đã sửa 2 link cross-track từ foundations-track (`10-regularization.mdx`,
`30-bieu-dien-am-thanh.mdx`) trỏ tới tên file exam-track cũ đã xoá, cập
nhật đúng sang bài 02/03 mới.

## foundations-track

**Tổ chức module (2026-07-05, tái cấu trúc lớn 2026-07-06 theo yêu cầu
người vận hành):** 45 bài chia thành 10 module qua field `module` trong
frontmatter (không đổi `order`/`prerequisites`), hiển thị thành 10 nhóm
trong sidebar viewer:
1. `"Nền tảng Toán & ML cổ điển"` — bài 1-7, 20, 53 (Ensemble Methods
   chuyển về đây 2026-07-06 — dùng lại Decision Tree, đúng bản chất ML
   cổ điển supervised; Naive Bayes 53 thêm 2026-07-06 — nối tiếp bài 01)
2. `"Deep Learning Nền tảng"` — bài 8-10
3. `"Computer Vision"` — bài 11, 33-42, 55-60 (17 bài — xem "Tiến độ
   sub-module" bên dưới, đợt đào sâu 2026-07-06 hoàn thành: ViT/Swin
   (Cơ bản), SSD/Anchor-free (Detection), DeepLab/SegFormer (Segmentation))
4. `"Sequence Model"` — bài 12-15, 45, 54, 61-69, 72-73 (17 bài), tách 3
   sub-module (2026-07-06, theo yêu cầu người vận hành): "RNN Family"
   (12, 13, 63 Bidirectional, 68 Deep RNN, 73 Seq2seq), "Transformer Architecture"
   (14, 15, 45, 54, 61, 62, 69 ALBERT), và "Tokenization" (64 BPE + 67
   WordPiece + 72 SentencePiece/Segmentation + 65 word2vec + 66 GloVe/
   Embedding — sub-module này có 2 nhánh con theo làm rõ của người vận
   hành: Segmentation và Embedding, xem `CLAUDE.md` mục 1.2)
5. `"Reinforcement Learning"` — bài 16-19, 47, 71, tách 2 sub-module
   (2026-07-06): "Value-based" (18, 71 Double/Dueling DQN — 2 bài) và
   "Policy-based" (19, 47 PPO — 2 bài); bài 16-17 giữ phẳng (nền tảng
   chung)
6. `"Dimensionality Reduction"` — bài 21-22, 48, 50 (PCA, Autoencoder,
   t-SNE, UMAP — tách thành module riêng 2026-07-06, độc lập khỏi
   Ensemble và Generative, dòng tiến hoá t-SNE→UMAP hoàn thành)
7. `"Generative Models"` — bài 23, 46, 49, 70 (GAN → DCGAN [MLP→CNN],
   GAN → Diffusion Models [đối kháng→forward/reverse cố định], và
   Diffusion Models → DDIM [Markovian→non-Markovian, sinh nhanh hơn
   10-50 lần] — 3 dòng tiến hoá từ cùng gốc GAN, module tách riêng
   2026-07-06)
8. `"LLM"` — bài 24-29, tách 2 sub-module (2026-07-06): "Huấn luyện &
   Alignment" (24-27) và "Ứng dụng & Inference-time" (28-29)
9. `"Audio"` — bài 30-32
10. `"Recommendation Systems"` — bài 43-44, 51-52 (2026-07-06, dòng tiến
    hoá tuyến tính→phi tuyến: Matrix Factorization → NeuMF, + feature-rich:
    DeepFM, + tiêu chí ranking đúng: BPR — coi khá đầy đủ)

**Lý do tái cấu trúc (2026-07-06):** module cũ "Ensemble, Giảm chiều &
Generative" (bài 20-23) thực chất ghép 3 mảng không liên quan chặt về
bản chất (Ensemble = supervised, Dimensionality Reduction = unsupervised
biểu diễn chiều thấp liên tục, Generative = sinh dữ liệu mới) — người
vận hành yêu cầu trả từng bài về đúng module bản chất của nó: mảng đã có
module tương ứng (Ensemble → về Module 1 ML cổ điển) thì gộp vào đó,
mảng chưa có module nào thì tạo module độc lập mới (Dimensionality
Reduction, Generative Models). Đây là tiền lệ cho việc tiếp tục rà soát
các module khác — không phải mọi "nhóm bài liên quan lỏng lẻo" nên giữ
chung 1 tên module chỉ vì tiện.

**Tiến độ sub-module cho "Computer Vision" (2026-07-06, xem `CLAUDE.md`
mục 2.1 phần C cho lý do đầy đủ) — cập nhật dòng này khi thực sự viết
bài:**

**Mốc đạt được 2026-07-06 (cập nhật sau bài 60, Task 55): ĐỢT ĐÀO SÂU
CV HOÀN THÀNH TRỌN VẸN theo 2 chỉ đạo liên tiếp của người vận hành** —
cả 3 sub-module giờ có dòng tiến hoá gốc + ít nhất 1-2 nhánh Transformer/
anchor-free/hiện đại hơn.

- `submodule: "Cơ bản"` — 8 bài: dòng CNN gốc HOÀN THÀNH TRỌN VẸN (bài
  11 CNN → 35 AlexNet → 36 VGG → 37 ResNet → 38 MobileNet → 41
  EfficientNet). Mở rộng nhánh Transformer: bài 55 (**ViT**, thách thức
  giả định CNN bắt buộc) → bài 58 (**Swin Transformer**, giải quyết độ
  phức tạp bậc hai + thiếu đa tỷ lệ của ViT, backbone tổng quát cho cả
  detection/segmentation).
- `submodule: "Detection"` — 4 bài: bài 33 (Object Detection, R-CNN
  family) + bài 39 (YOLO, one-stage) + bài 56 (**SSD**, multi-scale) +
  bài 60 (**Anchor-free Detection** — FCOS + CenterNet, 2 nhóm tác giả
  độc lập, bỏ hẳn anchor box). FCOS ban đầu (Task 53) thiếu nguồn thứ 2
  — Task 55 giải quyết bằng cách tìm CenterNet (nhóm tác giả KHÁC, cùng
  chủ đề anchor-free) làm nguồn thứ 2 độc lập, viết chung 1 bài.
- `submodule: "Segmentation"` — 5 bài: bài 34 (FCN→U-Net tóm tắt) + bài
  40 (U-Net đào sâu) + bài 42 (Mask R-CNN) + bài 57 (**DeepLab** — atrous
  convolution + ASPP + decoder) + bài 59 (**SegFormer** — Transformer
  phân cấp + decoder MLP nhẹ, nối tiếp Swin Transformer bài 58).
- **Tổng: 17 bài (11, 33-42, 55-60).** Cả 3 sub-module đều đã có song
  song 2 triết lý kiến trúc (CNN-based và Transformer-based) cho cùng
  bài toán — một cấu trúc "học kép" hiếm có trong giáo trình.
- **BÀI HỌC QUAN TRỌNG rút ra qua đợt đào sâu này (Task 54-55):** đừng
  kết luận "hết nguồn"/"bão hoà" chỉ sau 1 lần thử thất bại. Hai chiến
  lược đã chứng minh hiệu quả khi nguồn giải thích trực giác (D2L.ai/
  Lil'Log/cs231n) không có nội dung phù hợp: (1) WebSearch giới hạn
  đúng các domain whitelist để tìm thêm ngữ cảnh/URL chính xác; (2) tìm
  1 paper KHÁC (cùng nhóm tác giả hoặc nhóm tác giả khác) cùng chủ đề —
  2 paper học thuật độc lập vẫn có thể dùng làm 2 nguồn hợp lệ cho bài
  "dòng tiến hoá" khi không có lựa chọn nào khác.
- **Theo chỉ đạo trực tiếp của người vận hành: sau khi hoàn thành CV,
  chuyển hướng đào sâu module "Sequence Model" tiếp theo** (xem
  `CLAUDE.md` mục 1.2).

1. `01-xac-suat-thong-ke-co-ban.mdx` — Xác suất & thống kê cơ bản cho ML
   (`status: stable`; cập nhật Task 90, 2026-07-07: phần kỳ vọng/phương
   sai thêm con số cụ thể — Var xúc xắc ≈2.917, độ lệch chuẩn ≈1.71 — và
   trực giác covariance matrix 3 dấu dương/âm/≈0 kèm ví dụ chiều cao–cân
   nặng, thời gian chạy–tốc độ, liên hệ PCA bài 21; không đổi khái niệm
   cốt lõi)
2. `02-linear-regression.mdx` — Linear Regression — Hồi quy tuyến tính
   (`status: stable`; cập nhật Task 91, 2026-07-07: phần normal equation
   thêm cảnh báo multicollinearity — feature tương quan tuyến tính mạnh
   làm X^T X gần suy biến, w* không ổn định; liên hệ covariance matrix
   bài 01 và regularization bài 10)
3. `03-logistic-regression.mdx` — Logistic Regression — Phân loại nhị phân
   (`status: stable`; cập nhật Task 92, 2026-07-07: phần decision
   threshold thêm trực giác tradeoff precision↑/recall↓ khi nâng ngưỡng,
   kèm ví dụ chi phí false positive vs false negative)
4. `04-decision-tree.mdx` — Decision Tree — Cây quyết định
   (`status: stable`, viết lại 2026-07-06: dòng tiến hoá ID3 (Quinlan,
   1986) → C4.5 → CART)
5. `05-k-nearest-neighbors.mdx` — k-Nearest Neighbors (k-NN)
   (`status: stable`; cập nhật Task 93, 2026-07-07: thêm mục "Lựa chọn hàm
   khoảng cách" — Euclid/Manhattan/cosine similarity, liên hệ word2vec bài
   65 + RAG bài 29)
6. `06-svm.mdx` — Support Vector Machine (SVM) — Phân loại bằng Margin
   lớn nhất (`status: stable`; cập nhật Task 94, 2026-07-07: phần kernel
   trick thêm ví dụ trực giác kinh điển — 2 lớp đồng tâm tròn 2D nâng lên
   3D bằng x₁²+x₂² để mặt phẳng ngang tách được)
7. `07-k-means-clustering.mdx` — K-means Clustering — Phân cụm không giám
   sát (`status: stable`; cập nhật Task 95, 2026-07-07: phần giới hạn
   thêm ví dụ kinh điển thất bại — 2 vòng tròn đồng tâm, k-means chia bằng
   đường thẳng thay vì tách vòng trong/vòng ngoài, liên hệ SVM kernel bài
   06)
8. `08-perceptron-va-mang-no-ron.mdx` — Perceptron & Mạng nơ-ron nhiều lớp
   (`status: stable`, viết lại 2026-07-06: lịch sử McCulloch & Pitts 1943)
9. `09-backpropagation.mdx` — Backpropagation — Cách huấn luyện mạng
   nơ-ron nhiều lớp (`status: stable`)
10. `10-regularization.mdx` — Regularization — Kiểm soát Overfitting khi
    Mạng nơ-ron ngày càng sâu (`status: stable`, viết lại 2026-07-06:
    dòng tiến hoá Bishop 1995 → Srivastava et al. 2014 cho dropout)
11. `11-convolutional-neural-network.mdx` — CNN — Vì sao cần mạng nơ-ron
    tích chập cho ảnh (`status: stable`, `submodule: "Cơ bản"`, viết lại
    2026-07-06 với lịch sử LeNet/AlexNet)
12. `12-recurrent-neural-network.mdx` — RNN — Mạng nơ-ron hồi quy cho dữ
    liệu chuỗi (`status: stable`, viết lại 2026-07-06: đào sâu vấn đề
    input/output độ dài biến đổi + cơ chế vanishing gradient qua tanh,
    nguồn cs231n)
13. `13-lstm-gru.mdx` — LSTM & GRU — Giải quyết vấn đề nhớ phụ thuộc xa
    của RNN (`status: stable`, viết lại 2026-07-06: lịch sử Hochreiter
    1991/1997, Cho et al. 2014, sắc thái "không đảm bảo tuyệt đối")
14. `14-attention.mdx` — Attention — Cơ chế học cách 'chú ý' có chọn lọc
    (`status: stable`, viết lại 2026-07-06: lịch sử Bahdanau/Cho/Bengio
    2015, nguồn Lil'Log; `prerequisites` đổi sang 73-seq2seq-encoder-decoder
    cùng task viết bài 73, vì seq2seq giờ được dạy riêng thay vì chỉ nhắc
    trong bối cảnh bài này)
15. `15-transformer.mdx` — Transformer — Kiến trúc dựa hoàn toàn trên
    Attention (`status: stable`, viết lại 2026-07-06: lịch sử Vaswani
    et al. 2017, số liệu BLEU/GPU cụ thể)

**Module Sequence Model (12-15) hoàn tất viết lại theo triết lý mới
2026-07-06.**
16. `16-reinforcement-learning-framework.mdx` — Reinforcement Learning —
    Framework Agent/Environment/Reward (`status: stable`)
17. `17-markov-decision-process.mdx` — Markov Decision Process (MDP) —
    Hình thức hoá bài toán RL (`status: stable`)
18. `18-q-learning.mdx` — Q-learning — Học Q-function tối ưu qua thử-sai
    (`status: stable`, viết lại 2026-07-06: giới hạn Q-table + DQN Mnih
    et al. 2013)
19. `19-policy-gradient.mdx` — Policy Gradient — Học trực tiếp Policy thay
    vì Q-function (`status: stable`, viết lại 2026-07-06: thêm baseline
    + Actor-Critic)
71. `71-double-dueling-dqn.mdx` — Double DQN & Dueling DQN — Hai Cách Sửa
    Lỗi Của DQN Gốc (`status: stable` — 2026-07-06, `module:
    "Reinforcement Learning"`, `submodule: "Value-based"`, nối tiếp
    Q-learning/DQN 18: Van Hasselt/Guez/Silver 2015 sửa overestimation
    bias (decouple action selection/evaluation qua 2 mạng) + Wang et al.
    2015 DeepMind sửa generalize kém qua action (tách Value/Advantage
    function) — 2 vấn đề độc lập, 2 paper khác nhau kết hợp 1 bài, nguồn
    arxiv 1509.06461 + 1511.06581)
20. `20-ensemble-methods.mdx` — Ensemble Methods — Kết hợp nhiều mô hình
    yếu thành một mô hình mạnh (`status: stable`, viết lại 2026-07-06:
    lịch sử Breiman 2001/Freund & Schapire 1997, nguồn cs229;
    `module: "Nền tảng Toán & ML cổ điển"` — chuyển từ module gộp cũ
    2026-07-06, xem `CLAUDE.md` mục 2.1)
21. `21-pca.mdx` — PCA (Principal Component Analysis) — Giảm chiều dữ
    liệu bằng Đại số tuyến tính (`status: stable`, `module:
    "Dimensionality Reduction"` — module mới tách 2026-07-06)
22. `22-autoencoder.mdx` — Autoencoder — Mạng nơ-ron tự học nén dữ liệu
    không cần nhãn (`status: stable`, `module: "Dimensionality
    Reduction"` — module mới tách 2026-07-06)
23. `23-gan.mdx` — GAN — Hai mạng nơ-ron thi đấu để tạo dữ liệu giả chân
    thực (`status: stable`, viết lại 2026-07-06: lịch sử Goodfellow et
    al. 2014, động cơ lý thuyết cụ thể; `module: "Generative Models"` —
    module mới tách 2026-07-06)
24. `24-pretraining-llm.mdx` — Pretraining — Vì sao LLM học được từ hàng
    tỷ trang văn bản không nhãn (`status: stable`)
25. `25-scaling-laws.mdx` — Scaling Laws — Vì sao LLM cứ to hơn lại
    thường tốt hơn (`status: stable`, viết lại 2026-07-06: paper gốc
    Kaplan et al. 2020, power-law, sample efficiency)
26. `26-fine-tuning-instruction-tuning.mdx` — Fine-tuning & Instruction
    Tuning — Từ 'hoàn thành văn bản' sang 'làm theo hướng dẫn'
    (`status: stable`; cập nhật Task 85: thêm liên kết sang bài 80 LoRA)

80. `80-lora.mdx` — LoRA — Fine-tune Hàng Tỷ Tham số Bằng Cách Chỉ Học
    Một Ma trận Hạng Thấp (`status: stable` — 2026-07-06, `module:
    "LLM"`, `submodule: "Huấn luyện & Alignment"`, đóng khoảng trống
    fine-tuning hiệu quả tham số chưa từng nhắc — Hu, Shen, Wallis,
    Allen-Zhu, Li, Wang, Wang, Chen 2021 (Microsoft): giả thuyết hạng
    nội tại thấp của ΔW, công thức W'=W+BA (rank r << d,k), khởi tạo
    A ngẫu nhiên/B=0 để ΔW=0 lúc bắt đầu, merge weights nên không thêm
    inference latency, giảm 10.000 lần tham số/3 lần GPU memory GPT-3
    175B, chất lượng tương đương/tốt hơn full fine-tuning trên
    RoBERTa/DeBERTa/GPT-2/GPT-3; liên hệ full freezing exam-track 04 và
    factorized embedding ALBERT 69; chỉ 1 nguồn vì không tìm được nguồn
    giải thích trực giác thứ 2 (sebastianraschka.com/lilianweng.github.io
    không có bài riêng) — LoRA là 1 kỹ thuật cụ thể không phải dòng tiến
    hoá nhiều model, áp dụng ngoại lệ mục 2.1 như tiền lệ RoBERTa/DPO/
    WordPiece; nguồn arxiv 2106.09685

27. `27-rlhf-alignment.mdx` — RLHF & Alignment — Dùng Reinforcement
    Learning để LLM 'hợp ý' con người hơn (`status: stable`, viết lại
    2026-07-06: số liệu InstructGPT 1.3B vượt GPT-3 175B; cập nhật Task
    83: thêm liên kết sang bài 79 DPO)

79. `79-dpo.mdx` — DPO — Ngôn ngữ Mô hình 'Bí mật' Chính là Reward Model
    (`status: stable` — 2026-07-06, `module: "LLM"`, `submodule: "Huấn
    luyện & Alignment"`, đóng khoảng trống DPO đã nhắc ở bài 27/47 nhưng
    chưa có công thức cụ thể — Rafailov, Sharma, Mitchell, Ermon,
    Manning, Finn 2023 (NeurIPS): reward reparameterization
    r(x,y)=β·log(π_θ/π_ref)+β·log Z(x), kết hợp Bradley-Terry triệt tiêu
    Z(x), rút về binary cross-entropy loss (giống Logistic Regression),
    vượt PPO ở sentiment control/tương đương-tốt hơn ở summarization và
    dialogue; chỉ 1 nguồn vì không tìm được nguồn giải thích trực giác
    thứ 2 (lilianweng.github.io không có bài riêng) — DPO là cải tiến
    trực tiếp 1 kỹ thuật, không phải dòng tiến hoá nhiều model, áp dụng
    ngoại lệ mục 2.1 như tiền lệ RoBERTa/WordPiece; nguồn arxiv
    2305.18290)

28. `28-prompting-in-context-learning.mdx` — Prompting & In-context
    Learning — 'Dạy' một tác vụ mới mà không cần huấn luyện lại
    (`status: stable`, viết lại 2026-07-06: bằng chứng GPT-3/Brown et
    al. 2020)
29. `29-rag-embedding-agent.mdx` — RAG, Embedding & Agent — Đưa LLM vào
    Sản phẩm thật (`status: stable`, viết lại 2026-07-06: paper gốc
    Lewis et al. 2020 NeurIPS)
30. `30-bieu-dien-am-thanh.mdx` — Biểu diễn Âm thanh cho ML — Từ Waveform
    tới Spectrogram (`status: stable`)
31. `31-speech-to-text.mdx` — Speech-to-Text — Từ Spectrogram sang Chuỗi
    Văn bản (`status: stable`)
32. `32-text-to-speech.mdx` — Text-to-Speech — Sinh Giọng nói từ Văn bản
    (`status: stable`)
33. `33-object-detection.mdx` — Object Detection — Không chỉ Phân loại,
    mà còn Định vị Vật thể (`status: stable`, viết lại 2026-07-06: dòng
    tiến hoá R-CNN → Fast R-CNN → Faster R-CNN, `submodule: "Detection"`)
34. `34-image-segmentation.mdx` — Image Segmentation — Gán nhãn tới từng
    Pixel (`status: stable`, viết lại 2026-07-06: dòng tiến hoá FCN →
    U-Net, `submodule: "Segmentation"`)
35. `35-alexnet.mdx` — AlexNet — Bước ngoặt khiến Deep Learning thống trị
    Computer Vision (`status: stable` — viết thẳng theo chuẩn mới
    2026-07-06, nối tiếp trực tiếp bài 11, `submodule: "Cơ bản"`)
36. `36-vgg.mdx` — VGG — Từ Thiết kế Thủ công tới Khối Kiến trúc Có hệ
    thống (`status: stable` — viết thẳng theo chuẩn mới 2026-07-06, nối
    tiếp AlexNet 35, `submodule: "Cơ bản"`)
37. `37-resnet.mdx` — ResNet — Skip Connection Giải quyết Vấn đề
    Degradation khi Mạng Quá Sâu (`status: stable` — viết thẳng theo
    chuẩn mới 2026-07-06, nối tiếp VGG 36, `submodule: "Cơ bản"`)
38. `38-mobilenet.mdx` — MobileNet — Depthwise Separable Convolution cho
    Thiết bị Hạn chế Tài nguyên (`status: stable` — viết thẳng theo
    chuẩn mới 2026-07-06, nối tiếp ResNet 37, `submodule: "Cơ bản"`)
39. `39-yolo.mdx` — YOLO — Biến Object Detection thành Bài toán Hồi quy
    Một Bước (`status: stable` — viết thẳng theo chuẩn mới 2026-07-06,
    nhánh one-stage song song với R-CNN family, `submodule: "Detection"`)
40. `40-unet.mdx` — U-Net — Encoder-Decoder Đối xứng Giải quyết Bài toán
    Dữ liệu Y tế Khan hiếm (`status: stable` — viết thẳng theo chuẩn mới
    2026-07-06, đào sâu từ tóm tắt ở bài 34, `submodule: "Segmentation"`)
41. `41-efficientnet.mdx` — EfficientNet — Compound Scaling Cân bằng Có
    hệ thống Độ sâu/Rộng/Phân giải (`status: stable` — viết thẳng theo
    chuẩn mới 2026-07-06, nối tiếp MobileNet 38, hoàn thiện dòng "Cơ
    bản", `submodule: "Cơ bản"`)
42. `42-mask-rcnn.mdx` — Mask R-CNN — Kết hợp Detection và Segmentation
    trong Một Kiến trúc (`status: stable` — viết thẳng theo chuẩn mới
    2026-07-06, mở rộng Faster R-CNN (kể ở bài 33) bằng nhánh mask song
    song, kết nối trực tiếp 2 sub-module Detection/Segmentation, đặt tại
    `submodule: "Segmentation"` vì bản chất bài toán là segmentation)
43. `43-collaborative-filtering-matrix-factorization.mdx` — Collaborative
    Filtering & Matrix Factorization — Gợi ý Từ Hành vi Đám đông
    (`status: stable` — bài mở đầu module 9 "Recommendation Systems"
    mới, 2026-07-06: vấn đề information overload + ma trận rating thưa,
    giải pháp Matrix Factorization, lịch sử Netflix Prize 2006/Simon
    Funk, nguồn D2L.ai chương Recommender Systems)
44. `44-neural-collaborative-filtering.mdx` — Neural Collaborative
    Filtering (NeuMF) — Thay Tích Vô Hướng Bằng Mạng Nơ-ron
    (`status: stable` — 2026-07-06, nối tiếp bài 43: He et al. 2017 thay
    tích vô hướng tuyến tính bằng MLP học tương tác phi tuyến, kiến trúc
    GMF+MLP hợp nhất qua concatenate, nguồn arxiv 1708.05031 + D2L.ai)
45. `45-bert.mdx` — BERT — Kết hợp Ngữ cảnh Hai chiều với Kiến trúc
    Task-agnostic (`status: stable` — 2026-07-06, `module: "Sequence
    Model"`, nối tiếp bài 15 Transformer, đối lập GPT decoder-only đã
    học ở bài 24: Devlin et al. 2018, Transformer encoder + Masked
    Language Modeling + Next Sentence Prediction, GLUE 80.5%/SQuAD F1
    93.2, nguồn arxiv 1810.04805 + D2L.ai)
46. `46-dcgan.mdx` — DCGAN — Kiến trúc Convolutional Ổn định hoá Huấn
    luyện GAN (`status: stable` — 2026-07-06, `module: "Generative
    Models"`, nối tiếp bài 23 GAN: Radford/Metz/Chintala 2015 thay MLP
    bằng convolutional architecture (transposed conv cho generator,
    LeakyReLU cho discriminator), nguồn arxiv 1511.06434 + D2L.ai)
47. `47-ppo.mdx` — PPO — Cập nhật Policy An toàn Bằng Clipped Surrogate
    Objective (`status: stable` — 2026-07-06, `module: "Reinforcement
    Learning"`, `submodule: "Policy-based"`, nối tiếp bài 19 Policy
    Gradient: Schulman et al. 2017, clipped surrogate objective đơn giản
    hoá TRPO, liên kết trực tiếp bài 27 RLHF, nguồn arxiv 1707.06347 +
    Lil'Log; cập nhật cùng task viết bài 77: advantage Â giờ trỏ sang
    định nghĩa tường minh A=G-V(s) ở bài 77 A3C thay vì chỉ nói mập mờ
    "liên quan chặt tới baseline")

77. `77-a3c.mdx` — A3C — Song song hoá Actor-Critic Bằng Nhiều Luồng Độc
    lập (`status: stable` — 2026-07-06, `module: "Reinforcement
    Learning"`, `submodule: "Policy-based"`, lấp khoảng trống advantage
    function chưa định nghĩa tường minh (bài 47 PPO dùng ký hiệu Â nhưng
    chỉ nói mập mờ) — Mnih et al. 2016, vấn đề tương quan mẫu khi chạy 1
    môi trường, giải pháp nhiều actor-learner song song trên nhiều bản
    sao môi trường + cập nhật bất đồng bộ vào tham số chung (khác cơ chế
    replay buffer của DQN bài 18), định nghĩa advantage A(s,a)=G-V(s),
    SOTA Atari trên CPU đa nhân nhanh gấp đôi GPU, nhắc thêm biến thể
    đồng bộ A2C; đặt giữa bài 19 và 47 theo mốc thời gian 2016→2017;
    nguồn arxiv 1602.01783 + lilianweng.github.io/posts/2018-04-08-
    policy-gradient (đã dùng cho bài 19/47, xác nhận có phần A3C/A2C
    riêng)

78. `78-sac.mdx` — SAC — Tối đa hoá Cả Reward Lẫn Entropy Để Explore Tốt
    Hơn, Off-policy Hiệu quả Hơn (`status: stable` — 2026-07-06, `module:
    "Reinforcement Learning"`, `submodule: "Policy-based"`, mở nhánh
    off-policy đầu tiên của sub-module — toàn bộ dòng 19→77→47 đều
    on-policy — Haarnoja et al. 2018, vấn đề on-policy kém hiệu quả dữ
    liệu + off-policy trước đó (DDPG) hội tụ giòn/nhạy hyperparameter,
    giải pháp mục tiêu maximum entropy (tối đa hoá reward+entropy đồng
    thời), kiến trúc 3 mạng (policy/soft Q-value/soft state-value),
    temperature α, SOTA continuous control ổn định hơn DDPG/PPO qua
    nhiều random seed; liên hệ ngược lại off-policy Q-learning/DQN (18,
    Value-based) qua cùng cơ chế replay buffer; nguồn arxiv 1801.01290 +
    lilianweng.github.io/posts/2018-04-08-policy-gradient (đã dùng cho
    19/47/77, xác nhận có phần SAC riêng)

48. `48-tsne.mdx` — t-SNE — Giảm chiều Phi tuyến để Trực quan hoá Cấu
    trúc Cục bộ (`status: stable` — 2026-07-06, `module: "Dimensionality
    Reduction"`, nối tiếp bài 21 PCA: giữ cấu trúc lân cận cục bộ bằng
    Gaussian/Student-t + KL divergence, đối lập PCA tuyến tính, 1 nguồn
    scikit-learn — không bắt buộc 2 nguồn vì không thuộc dạng "dòng tiến
    hoá nhiều model")
49. `49-diffusion-models.mdx` — Diffusion Models — Sinh Dữ liệu Bằng
    Cách Học Khử nhiễu Dần (`status: stable` — 2026-07-06, `module:
    "Generative Models"`, nối tiếp bài 23 GAN/46 DCGAN: Ho/Jain/Abbeel
    2020 bỏ cơ chế đối kháng, forward/reverse process, FID 3.17 SOTA
    CIFAR-10, nguồn arxiv 2006.11239 + Lil'Log)
70. `70-ddim.mdx` — DDIM — Sinh Nhanh Hơn 10-50 Lần Bằng Quá trình
    Non-Markovian Tất định (`status: stable` — 2026-07-06, `module:
    "Generative Models"`, nối tiếp bài 49 Diffusion Models: Song, Meng,
    Ermon 2020, quá trình reverse non-Markovian chia sẻ training
    objective với DDPM (dùng trực tiếp mô hình đã train), tham số η
    điều khiển tất định (η=0)/ngẫu nhiên (η=1), nhanh hơn 10-50 lần +
    khả năng nội suy ngữ nghĩa mới, nguồn arxiv 2010.02502 + Lil'Log)
50. `50-umap.mdx` — UMAP — Giữ Cấu trúc Toàn cục Tốt hơn t-SNE Với Tốc
    độ Nhanh hơn (`status: stable` — 2026-07-06, `module:
    "Dimensionality Reduction"`, nối tiếp bài 48 t-SNE: McInnes/Healy/
    Melville 2018, giải quyết 3 hạn chế t-SNE (compute/cấu trúc toàn
    cục/giới hạn chiều), nguồn arxiv 1802.03426, 1 nguồn theo tiền lệ
    t-SNE)
51. `51-deepfm.mdx` — DeepFM — Kết hợp Factorization Machines với Deep
    Learning để Tự động Học Tương tác Feature (`status: stable` —
    2026-07-06, `module: "Recommendation Systems"`, nối tiếp bài 44
    NeuMF: Guo et al. 2017, chuyển hướng CF thuần (chỉ ID) sang
    feature-rich, kiến trúc FM+Deep song song giống NeuMF (GMF+MLP),
    nguồn arxiv 1703.04247 + D2L.ai)
52. `52-bayesian-personalized-ranking.mdx` — Bayesian Personalized
    Ranking (BPR) — Tối ưu Trực tiếp Cho Xếp hạng Thay vì Dự đoán Điểm
    (`status: stable` — 2026-07-06, `module: "Recommendation Systems"`,
    nối tiếp bài 43 Matrix Factorization: Rendle et al. 2009, pairwise
    ranking BPR-Opt thay vì dự đoán điểm, nguồn arxiv 1205.2618 + D2L.ai)

81. `81-autorec.mdx` — AutoRec — Coi Dự đoán Rating Là Bài toán Tái tạo
    Của Autoencoder (`status: stable` — 2026-07-06, `module:
    "Recommendation Systems"`, đóng khoảng trống đã ghi ở bài 43/44
    ("có thể là bài tiếp theo của module") — nhánh song song với NeuMF
    (bài 44), cả 2 mở rộng phi tuyến từ Matrix Factorization nhưng khác
    kiến trúc nền tảng — Sedhain, Menon, Sanner, Xie 2015 (WWW): I/U-
    AutoRec, công thức encoder-decoder h(R*i)=f(W·g(V·R*i+μ)+b), gradient
    masking chỉ tính loss trên rating quan sát được (nhân dự đoán với
    sign(input)), RMSE 0.900 MovieLens 100K vượt Biased Matrix
    Factorization; paper gốc không có bản arxiv (chỉ WWW conference,
    ngoài whitelist) — dùng 1 nguồn D2L.ai autorec.html đủ chi tiết công
    thức/kết quả, theo tiền lệ SVM/t-SNE

53. `53-naive-bayes.mdx` — Naive Bayes — Phân loại Nhanh Bằng Giả định
    Độc lập Có điều kiện (`status: stable` — 2026-07-06, `module: "Nền
    tảng Toán & ML cổ điển"`, nối tiếp bài 01: giả định conditional
    independence giải quyết curse of dimensionality, biến thể Gaussian/
    Multinomial/Bernoulli, 1 nguồn scikit-learn)
54. `54-t5.mdx` — T5 — Thống nhất Mọi Tác vụ NLP Thành Một Định dạng
    Text-to-Text (`status: stable` — 2026-07-06, `module: "Sequence
    Model"`, nối tiếp BERT 45 và GPT/Pretraining 24: Raffel et al. 2020,
    encoder-decoder + text-to-text framework, hoàn thiện 3 nhánh kiến
    trúc Transformer, nguồn arxiv 1910.10683 + Lil'Log)
55. `55-vision-transformer.mdx` — Vision Transformer (ViT) — Thách thức
    Giả định 'CNN là Bắt buộc cho Ảnh' (`status: stable` — 2026-07-06,
    `module: "Computer Vision"`, `submodule: "Cơ bản"`, nối tiếp
    EfficientNet 41 + Transformer 15: Dosovitskiy et al. 2020, patch
    embedding, thắng CNN khi pretrain đủ lớn, nguồn arxiv 2010.11929 +
    D2L.ai)
56. `56-ssd.mdx` — SSD — Multi-scale Feature Maps Giải quyết Vấn đề Phát
    hiện Vật thể Nhiều Kích thước (`status: stable` — 2026-07-06,
    `module: "Computer Vision"`, `submodule: "Detection"`, nối tiếp YOLO
    39: Liu et al. 2016, multi-scale feature maps, 72.1% mAP @58FPS,
    nguồn arxiv 1512.02325 + D2L.ai)
57. `57-deeplab.mdx` — DeepLab — Atrous Convolution Giải quyết Đánh đổi
    Giữa Ngữ cảnh Đa tỷ lệ và Độ phân giải (`status: stable` —
    2026-07-06, `module: "Computer Vision"`, `submodule: "Segmentation"`,
    nối tiếp U-Net 40: Chen et al. 2017/2018 (DeepLabv3/v3+), atrous
    convolution + ASPP + decoder, 89.0% PASCAL VOC/82.1% Cityscapes,
    nguồn 2 paper arxiv 1706.05587 + 1802.02611)
58. `58-swin-transformer.mdx` — Swin Transformer — Shifted Window
    Attention Giải quyết Độ phức tạp Bậc hai của ViT (`status: stable` —
    2026-07-06, `module: "Computer Vision"`, `submodule: "Cơ bản"`, nối
    tiếp ViT 55: Liu et al. 2021, shifted window + cấu trúc phân cấp,
    backbone tổng quát classification/detection/segmentation, nguồn
    arxiv 2103.14030 + D2L.ai)
59. `59-segformer.mdx` — SegFormer — Kết hợp Transformer Phân cấp với
    Decoder MLP Nhẹ cho Segmentation (`status: stable` — 2026-07-06,
    `module: "Computer Vision"`, `submodule: "Segmentation"`, nối tiếp
    Swin 58 + DeepLab 57: Xie et al. 2021 NeurIPS, bỏ positional
    encoding + decoder MLP siêu nhẹ, 50.3% mIoU ADE20K, nguồn arxiv
    2105.15203 + D2L.ai)
60. `60-anchor-free-detection.mdx` — Anchor-free Detection — Bỏ hẳn
    Anchor Box, Dự đoán Trực tiếp Theo Điểm/Pixel (`status: stable` —
    2026-07-06, `module: "Computer Vision"`, `submodule: "Detection"`,
    nối tiếp Object Detection 33: FCOS (Tian et al. 2019) + CenterNet
    (Zhou et al. 2019), 2 nhóm tác giả độc lập cùng chủ đề, nguồn arxiv
    1904.01355 + 1904.07850)
61. `61-transformer-xl.mdx` — Transformer-XL — Segment-level Recurrence
    Giải quyết Vấn đề Context Fragmentation (`status: stable` —
    2026-07-06, `module: "Sequence Model"`, nối tiếp Transformer 15:
    Dai et al. 2019, tái sử dụng hidden state qua segment + relative
    positional encoding, dài hơn 450%/nhanh hơn 1800 lần, nguồn arxiv
    1901.02860 + Lil'Log)
62. `62-longformer-efficient-attention.mdx` — Longformer & Efficient
    Attention — Giải quyết Trực tiếp Độ phức tạp Bậc hai của
    Self-Attention (`status: stable` — 2026-07-06, `module: "Sequence
    Model"`, nối tiếp Transformer-XL 61 + Swin Transformer 58: Beltagy
    et al. 2020, local windowed + global attention, kết nối liên module
    với CV, nguồn arxiv 2004.05150 + Lil'Log)
63. `63-bidirectional-rnn.mdx` — Bidirectional RNN/LSTM/GRU — Dùng Cả
    Ngữ cảnh Tương lai, Không Chỉ Quá khứ (`status: stable` — 2026-07-06,
    `module: "Sequence Model"`, `submodule: "RNN Family"`, nối tiếp
    LSTM/GRU 13: kỹ thuật wrapper tổng quát cho mọi cell hồi quy (xác
    nhận rõ với người vận hành, không riêng RNN), chạy 2 mạng ngược
    chiều + ghép hidden state, nguồn D2L.ai)
64. `64-tokenization-word-to-subword.mdx` — Tokenization — Từ Cấp độ Từ
    tới Subword, Vì sao Byte Pair Encoding Hiệu quả (`status: stable` —
    2026-07-06, `module: "Sequence Model"`, `submodule: "Tokenization"`
    — bài mở đầu sub-module mới, mở rộng scope ngay sau khi viết theo
    làm rõ của người vận hành (xem `CLAUDE.md` mục 1.2) để bao gồm cả
    word embedding, không chỉ segmentation: Sennrich, Haddow, Birch 2015,
    BPE giải quyết vocab size khổng lồ (~3×10⁸ 6-gram) + out-of-vocabulary
    bằng subword segmentation, +1.1/+1.3 BLEU WMT15, nguồn arxiv
    1508.07909 + D2L.ai)
65. `65-word2vec.mdx` — Word2vec — Biến Token Rời rạc Thành Vector Số
    Mang Nghĩa (`status: stable` — 2026-07-06, `module: "Sequence
    Model"`, `submodule: "Tokenization"` — bài đầu nhánh con Embedding,
    nối tiếp bài 64: Mikolov, Chen, Corrado, Dean 2013, one-hot có
    cosine similarity mọi cặp từ luôn = 0 → Skip-gram (đoán ngữ cảnh từ
    center word) + CBOW (đoán center word từ ngữ cảnh) học dense vector
    self-supervised, huấn luyện dưới 1 ngày/1.6 tỷ từ, SOTA đo tương tự
    từ, nguồn arxiv 1301.3781 + D2L.ai)
66. `66-glove.mdx` — GloVe — Tận dụng Thống kê Đồng xuất hiện Toàn cục
    Thay vì Chỉ Ngữ cảnh Cục bộ (`status: stable` — 2026-07-06, `module:
    "Sequence Model"`, `submodule: "Tokenization"`, nối tiếp bài 65:
    Pennington, Socher, Manning 2014, ma trận đếm đồng xuất hiện toàn
    cục + weighted-squared-loss khớp log(số đếm), triết lý count-based
    đối lập predictive của word2vec, chất lượng tương đương — paper gốc
    không có trên arxiv (chỉ nlp.stanford.edu, ngoài whitelist), dùng
    nguồn D2L.ai + machinelearningmastery.com thay thế)
67. `67-wordpiece.mdx` — WordPiece — Tiêu chí Ghép Dựa trên Khả năng,
    Không Chỉ Tần suất (`status: stable` — 2026-07-06, `module:
    "Sequence Model"`, `submodule: "Tokenization"`, nối tiếp bài 64 BPE:
    kỹ thuật tokenize dùng trong BERT, đổi tiêu chí ghép từ tần suất thô
    (BPE) sang tăng likelihood dữ liệu huấn luyện, nguồn gốc phân đoạn
    tiếng Nhật/Hàn — bài ngắn hơn thường lệ do hạn chế nguồn WebFetch
    với PDF arxiv (chỉ đọc được abstract), đã xin ý kiến người vận hành
    trước khi viết với 1 nguồn chính lilianweng.github.io)
72. `72-sentencepiece.mdx` — SentencePiece — Tokenize Trực tiếp Từ Văn
    bản Thô, Không Cần Tách Từ Trước (`status: stable` — 2026-07-06,
    `module: "Sequence Model"`, `submodule: "Tokenization"`, nối tiếp bài
    67 WordPiece: Kudo, Richardson 2018, bỏ giả định "đã tách từ sẵn" của
    BPE/WordPiece, xử lý khoảng trắng như ký hiệu bình thường + Unicode
    thô, độc lập ngôn ngữ; kèm Unigram Language Model top-down (ngược
    bottom-up của BPE/WordPiece); T5 (54) dùng SentencePiece — kết nối
    trực tiếp Tokenization/Transformer Architecture, nguồn arxiv
    1808.06226 + machinelearningmastery.com)
68. `68-deep-rnn.mdx` — Deep RNN — Xếp chồng Nhiều Lớp Hồi quy Để Học
    Quan hệ Phức tạp Hơn (`status: stable` — 2026-07-06, `module:
    "Sequence Model"`, `submodule: "RNN Family"`, nối tiếp LSTM/GRU 13:
    RNN 1 lớp giới hạn khả năng biểu diễn quan hệ input-output cùng bước
    thời gian → xếp chồng nhiều lớp theo chiều input-to-output, công
    thức H_t^(l) kết hợp trục thời gian + độ sâu, đánh đổi gradient lan
    truyền 2 chiều khó hội tụ hơn, nguồn D2L.ai + arxiv 1312.6026
    Pascanu et al. 2013)
73. `73-seq2seq-encoder-decoder.mdx` — Seq2seq (Encoder-Decoder) — Ánh
    xạ Chuỗi sang Chuỗi Độ dài Khác nhau (`status: stable` — 2026-07-06,
    `module: "Sequence Model"`, `submodule: "RNN Family"`, lấp khoảng
    trống cấu trúc: bài 14 (Attention) nhắc "seq2seq cổ điển" như bối
    cảnh nhưng khái niệm này chưa từng được dạy riêng — Sutskever/Vinyals/
    Le 2014, LSTM encoder nén câu nguồn thành context vector cố định +
    LSTM decoder sinh câu đích từng token (giải quyết input/output độ dài
    khác nhau), teacher forcing, kỹ thuật đảo ngược câu nguồn, BLEU 34.8
    WMT'14 Anh→Pháp; nối tiếp LSTM/GRU 13, tiền đề trực tiếp cho Attention
    14 (đã đổi `prerequisites` trỏ sang bài này); nguồn arxiv 1409.3215 +
    D2L.ai)

**Task 69 (2026-07-06):** đánh giá "Deep Bidirectional LSTM" (Deep RNN +
Bidirectional kết hợp) — WebSearch/WebFetch trực tiếp d2l.ai
(`chapter_recurrent-modern/bi-rnn.html`) xác nhận trang này chỉ dành đúng
1 câu cho ý tưởng xếp chồng lớp bidirectional, không có công thức/mục
riêng — kết luận đây là ghép cơ học 2 kỹ thuật đã dạy (68 Deep RNN + 63
Bidirectional), không đủ chất liệu cho 1 bài riêng. Câu nhắc sẵn có ở
cuối bài 68 là đủ. Không sửa file `.mdx` nào, chỉ cập nhật `_index.mdx`
đóng khoảng trống.

**Task 70 (2026-07-06):** tương tự, đánh giá "peephole connections"
(biến thể LSTM, Gers & Schmidhuber 2000) — tìm được nguồn arxiv 1503.04069
"LSTM: A Search Space Odyssey" (Greff, Srivastava, Koutník, Steunebrink,
Schmidhuber 2015): nghiên cứu thực nghiệm 8 biến thể LSTM trên 3 bài toán
(speech recognition, handwriting recognition, polyphonic music modeling),
5400 lượt chạy — kết luận không biến thể nào (kể cả peephole) cải thiện
đáng kể so với LSTM chuẩn, chỉ forget gate + output activation quan
trọng. Không đủ chất liệu cho bài riêng nhưng là bài học thực nghiệm giá
trị — thêm 1 đoạn vào bài 13 (LSTM & GRU) thay vì tách bài, đóng khoảng
trống cuối cùng của sub-module RNN Family (giờ coi là đã khai thác hết
hướng đào sâu có nguồn whitelist phù hợp, 5 bài: 12, 13, 63, 68, 73).

74. `74-reformer.mdx` — Reformer — LSH Attention và Reversible Layers
    Giải quyết Cả Compute lẫn Bộ nhớ (`status: stable` — 2026-07-06,
    `module: "Sequence Model"`, `submodule: "Transformer Architecture"`,
    đào sâu nhánh đã nhắc sơ qua ở bài 62 Longformer — Kitaev, Kaiser,
    Levskaya 2020, hai kỹ thuật độc lập: LSH attention (hash h(x) =
    argmax([xR;-xR]), nhóm query/key tương tự vào bucket, O(L log L)
    thay vì O(L²), shared-QK attention) + reversible residual layers
    (y1=x1+Attention(x2), y2=x2+FeedForward(y1), tính lại activation
    thay vì lưu trữ, giải quyết bộ nhớ tỷ lệ N lớp); khác Longformer ở
    chỗ nhóm ĐỘNG qua hashing thay vì mẫu hình cố định trước; nguồn
    arxiv 2001.04451 + lilianweng.github.io/posts/2020-04-07-the-
    transformer-family)

75. `75-roberta.mdx` — RoBERTa — BERT Bị Huấn luyện Chưa Tới, Không Phải
    Kiến trúc Sai (`status: stable` — 2026-07-06, `module: "Sequence
    Model"`, `submodule: "Transformer Architecture"`, đóng khoảng trống
    "RoBERTa" ghi ở _index.mdx từ lâu (từng đánh giá nguồn mờ nhạt) —
    Liu et al. 2019, kết luận BERT gốc undertrained: bỏ Next Sentence
    Prediction (không giảm hiệu năng), dynamic masking thay static,
    batch size lớn hơn, 160GB dữ liệu (10 lần BERT gốc), vượt các model
    công bố sau BERT dù KHÔNG đổi kiến trúc — đối lập triết lý với
    ALBERT (69, đổi kiến trúc giảm tham số); nguồn arxiv 1907.11692,
    bài ngắn hơn thường lệ vì WebFetch chỉ trả về abstract (không có số
    liệu chi tiết trong nội dung đầy đủ) và không tìm được nguồn giải
    thích trực giác thứ 2 trong whitelist qua WebSearch — theo đúng
    tiền lệ bài 67 WordPiece. Sub-module Transformer Architecture (9
    bài: 14, 15, 45, 54, 61, 62, 69, 74, 75) coi là đã khai thác hết
    hướng đào sâu có nguồn whitelist phù hợp.

76. `76-elmo.mdx` — ELMo — Embedding Phụ thuộc Ngữ cảnh, Cầu nối Giữa
    Word2vec và BERT (`status: stable` — 2026-07-06, `module: "Sequence
    Model"`, `submodule: "Tokenization"`, nhánh Embedding — đóng khoảng
    trống "liên hệ contextual embedding" đã ghi ở _index.mdx từ khi viết
    bài 65 (word2vec), ELMo đã được nhắc như đối chiếu ở bài 45 (BERT)
    nhưng chưa từng dạy riêng — Peters et al. 2018, vấn đề polysemy
    ("crane" con sếu vs cần cẩu), kiến trúc character-CNN + biLSTM nhiều
    lớp pretrain, tổ hợp trọng số các lớp (khác word2vec/GloVe chỉ 1 lớp
    biểu diễn), cải thiện SOTA 6 benchmark (giảm lỗi tương đối 6-20%),
    hạn chế vẫn cần kiến trúc riêng theo tác vụ (khoảng trống BERT lấp
    sau đó); nguồn arxiv 1802.05365 + D2L.ai bert.html (cùng nguồn đã
    dùng cho bài 45, xác nhận có sẵn phần mô tả ELMo cụ thể). Sub-module
    Tokenization giờ 6 bài (64, 65, 66, 67, 72, 76) — coi là đã khai thác
    hết khoảng trống đã ghi nhận.

69. `69-albert.mdx` — ALBERT — Giảm 18 Lần Tham số BERT Bằng Chia sẻ
    Trọng số và Factorized Embedding (`status: stable` — 2026-07-06,
    `module: "Sequence Model"`, `submodule: "Transformer Architecture"`,
    nối tiếp BERT 45: Lan et al. 2019, factorized embedding
    parameterization (tách V×H thành V×E+E×H) + cross-layer parameter
    sharing + Sentence-Order Prediction thay NSP, giảm 18 lần tham
    số/nhanh hơn 1.7 lần vẫn SOTA GLUE/RACE/SQuAD, nguồn arxiv 1909.11942
    + Lil'Log)

Với bài 23, đợt mở rộng thứ 2 (Ensemble Methods → PCA → Autoencoder → GAN)
hoàn thành.

Với bài 19, nhánh Reinforcement Learning hoàn thành lộ trình cơ bản. Từ
bài 20, tiếp tục mở rộng sang các chủ đề DL/ML nâng cao khác. Bài 6 (SVM),
bài 10 (Regularization), và bài 21 (PCA) được chèn sau khi phần lớn track
đã ổn định — SVM lấp khoảng trống góc nhìn margin maximization trong nhóm
classification cổ điển; Regularization lấp khoảng trống overfitting cho
mạng nơ-ron; PCA lấp khoảng trống góc nhìn đại số tuyến tính cho giảm
chiều, đối chiếu trực tiếp với Autoencoder ngay sau. Mọi bài liên quan đã
dịch order tương ứng.

**Đợt mở rộng thứ 3 (bài 24-32, 2026-07-05) HOÀN THÀNH TRỌN VẸN cả 2
series:**
- **Series LLM (24-29):** Pretraining → Scaling Laws → Fine-tuning/
  Instruction Tuning → RLHF/Alignment → Prompting/In-context Learning →
  RAG/Embedding/Agent — đúng phạm vi "đầy đủ + ứng dụng thực chiến".
- **Series Audio (30-32):** Biểu diễn Âm thanh (waveform/spectrogram/
  mel-spectrogram) → Speech-to-Text (CTC/encoder-decoder) → Text-to-Speech
  (2 giai đoạn, vocoder) — đúng phạm vi "Speech recognition + TTS cơ bản".

**Đợt mở rộng thứ 4 (bài 33-34, 2026-07-05) HOÀN THÀNH: Computer Vision
nâng cao** — Object Detection (bounding box, IoU, anchor box, NMS,
two-stage vs one-stage) → Image Segmentation (semantic vs instance,
bảng so sánh 4 tác vụ CV). Nối tiếp trực tiếp CNN (11) — được chọn qua
đánh giá 5 hướng mở rộng (Multi-modal, Recommendation systems, Time
series cổ điển được xếp ưu tiên thấp hơn, có thể triển khai sau).

Xem `CLAUDE.md` mục 2.1 "Quyết định mở rộng phạm vi lần 3" cho chi tiết.
Cả 2 series thêm vào cuối track, không chèn giữa — 32 bài foundations-
track sau đợt mở rộng này (từ 23 bài trước đó).

**Đánh giá tách sub-module cho 3 module còn lại (Task 68, 2026-07-06) —
KẾT LUẬN: không tách module nào.** Rà lại theo đúng rule mục 2.1 (chỉ
tách khi có ≥2 nhánh khác nhau về bản chất, không phải chỉ khác độ khó):
- **"Nền tảng Toán & ML cổ điển"** (9 bài): dùng 1 subagent đọc kỹ cả 9
  bài — kết luận đây là một mạch tuần tự liên kết chặt (mỗi bài explicit
  nối tiếp bài ngay trước: 01→02→03→04→05→06→07, cộng 20/53 quay lại nối
  04/01), không phải các nhánh song song độc lập. Ranh giới ứng viên
  "supervised/unsupervised" lệch quá (K-means là bài unsupervised duy
  nhất — 1 bài không đủ khối lượng để tách). Ranh giới "regression vs
  classification" cũng không sạch vì Decision Tree/Ensemble dùng được cho
  cả 2 loại bài toán. Giữ phẳng.
- **"Audio"** (3 bài: 30 Biểu diễn âm thanh → 31 Speech-to-Text → 32
  Text-to-Speech): chuỗi tuần tự biểu diễn→input task→output task, không
  phải nhánh song song. 3 bài quá mỏng để tách dù có ranh giới.
- **"Recommendation Systems"** (4 bài: 43 MF → 44 NeuMF → 51 DeepFM → 52
  BPR): dòng tiến hoá tuyến tính từ 1 gốc (Matrix Factorization), không
  có nhánh song song khác biệt bản chất như CV (CNN-based vs
  Transformer-based) hay Sequence Model (RNN Family vs Transformer
  Architecture).

Không còn module nào trong foundations-track cần đánh giá tách submodule
— việc này coi là hoàn tất, xem CLAUDE.md mục 1.2 (đã xoá khỏi danh sách
việc cần làm).
