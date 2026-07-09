# GiĂ¡o trĂ¬nh chi tiáº¿t (tĂ¡ch tá»« CLAUDE.md má»¥c 4, 2026-07-06)

> File nĂ y chá»©a danh sĂ¡ch chi tiáº¿t tá»«ng bĂ i cá»§a cáº£ 2 track â€” tĂ¡ch riĂªng
> khá»i `CLAUDE.md` vĂ¬ Ä‘Ă¢y lĂ  pháº§n dĂ i nháº¥t vĂ  Ă­t cáº§n Ä‘á»c láº¡i toĂ n bá»™ má»—i
> task (thÆ°á»ng chá»‰ cáº§n tra 1-2 bĂ i cá»¥ thá»ƒ). `CLAUDE.md` má»¥c 4 giá» chá»‰ giá»¯
> báº£ng tĂ³m táº¯t siĂªu ngáº¯n (module + sá»‘ bĂ i) vĂ  trá» sang file nĂ y khi cáº§n
> chi tiáº¿t. Cáº­p nháº­t file nĂ y má»—i khi cáº¥u trĂºc giĂ¡o trĂ¬nh thay Ä‘á»•i â€” cĂ¹ng
> nguyĂªn táº¯c nhÆ° má»¥c 4 cÅ©: agent cáº­p nháº­t ngay trong task vá»«a thay Ä‘á»•i
> cáº¥u trĂºc, khĂ´ng Ä‘á»ƒ láº¡i sau.
>
> LÆ°u Ă½: chi tiáº¿t nguá»“n/lĂ½ do cá»§a tá»«ng bĂ i cÅ©ng Ä‘Ă£ cĂ³ sáºµn trong chĂ­nh file
> `.mdx` Ä‘Ă³ (frontmatter `summary`, `last_touched_by_task`, vĂ  má»¥c
> `## Nguá»“n tham kháº£o`) â€” file nĂ y lĂ  báº£n tĂ³m táº¯t tiá»‡n tra cá»©u nhanh mĂ 
> khĂ´ng cáº§n má»Ÿ tá»«ng file, khĂ´ng pháº£i nguá»“n sá»± tháº­t duy nháº¥t. Náº¿u 2 nÆ¡i
> mĂ¢u thuáº«n, file `.mdx` tháº­t tháº¯ng.

---

**LÆ°u Ă½ vá» `status` ghi trong má»¥c nĂ y (tá»« 2026-07-06):** má»i ghi chĂº
`` `status: stable` `` bĂªn dÆ°á»›i pháº£n Ă¡nh tráº¡ng thĂ¡i **táº¡i thá»i Ä‘iá»ƒm bĂ i
Ä‘Æ°á»£c táº¡o/tĂ¡i cáº¥u trĂºc**, khĂ´ng pháº£i tráº¡ng thĂ¡i hiá»‡n táº¡i â€” toĂ n bá»™ 43 bĂ i
Ä‘Ă£ chuyá»ƒn vá» `needs-review` theo quyáº¿t Ä‘á»‹nh Ä‘á»•i triáº¿t lĂ½ ná»™i dung (má»¥c
1 "PhiĂªn gáº§n nháº¥t", má»¥c 2.1 "Äá»•i triáº¿t lĂ½ ná»™i dung" cá»§a `CLAUDE.md`). Khi
1 bĂ i Ä‘Æ°á»£c viáº¿t láº¡i Ä‘áº¡t chuáº©n má»›i, cáº­p nháº­t Ä‘Ăºng dĂ²ng tÆ°Æ¡ng á»©ng bĂªn dÆ°á»›i
thĂ nh `` `status: stable` `` láº¡i vĂ  xoĂ¡ bĂ i Ä‘Ă³ khá»i diá»‡n cáº§n xá»­ lĂ½.

**Cáº­p nháº­t quan trá»ng (2026-07-06, cuá»‘i phiĂªn Ä‘á»•i triáº¿t lĂ½):** sau nhiá»u
task rĂ  soĂ¡t (task 10, 13, 14, 15), agent xĂ¡c nháº­n nhiá»u bĂ i `needs-review`
thá»±c cháº¥t **Ä‘Ă£ Ä‘áº¡t chuáº©n ná»™i dung má»›i** dĂ¹ khĂ´ng cáº§n "viáº¿t láº¡i" theo
nghÄ©a thĂªm dĂ²ng tiáº¿n hoĂ¡/lá»‹ch sá»­ â€” Ä‘Ă¢y lĂ  cĂ¡c khĂ¡i niá»‡m/thuáº­t toĂ¡n Ä‘Æ¡n láº»
khĂ´ng thuá»™c dáº¡ng "dĂ²ng tiáº¿n hoĂ¡ nhiá»u model" (Ä‘Ăºng loáº¡i trá»« má»¥c 2.1), Ä‘Ă£
cĂ³ vĂ­ dá»¥ sá»‘ cá»¥ thá»ƒ vĂ  giáº£i thĂ­ch rĂµ rĂ ng tá»« trÆ°á»›c. ÄĂ£ nĂ¢ng `status` cĂ¡c
bĂ i nĂ y thĂ nh `stable` tháº­t sá»± trong file `.mdx` (khĂ´ng chá»‰ ghi chĂº á»Ÿ
Ä‘Ă¢y): **01... (chÆ°a, cĂ²n needs-review)**, 03, 05, 07, 09, 16, 17, 21, 22,
24, 26, 31, 32. **Chá»‰ cĂ²n Ä‘Ăºng 9 bĂ i foundations-track thá»±c sá»±
`needs-review`** táº¡i thá»i Ä‘iá»ƒm v1.23: 01, 02, 06, 08, 10, 25, 28, 29, 30
â€” xem STATUS má»¥c 1 (`CLAUDE.md`) Ä‘á»ƒ biáº¿t lĂ½ do má»—i bĂ i (má»™t sá»‘ Ä‘Ă£ thá»­ tra
nguá»“n nhÆ°ng khĂ´ng xĂ¡c nháº­n Ä‘Æ°á»£c, má»™t sá»‘ chÆ°a rĂ  tá»›i). exam-track váº«n giá»¯
nguyĂªn 9 bĂ i `needs-review` (khĂ´ng cĂ³ Æ°u tiĂªn Ä‘áº·c biá»‡t theo má»¥c 2.1, cáº§n
task riĂªng Ä‘á»ƒ rĂ ).

## exam-track

**LÆ°u Ă½:** exam-track KHĂ”NG náº±m trong pháº¡m vi Ä‘á»•i triáº¿t lĂ½ ná»™i dung
2026-07-06 (xem `CLAUDE.md` má»¥c 2.1) â€” 9 bĂ i dÆ°á»›i Ä‘Ă¢y chuyá»ƒn `needs-review`
thuáº§n vĂ¬ thao tĂ¡c Ä‘á»•i hĂ ng loáº¡t, khĂ´ng pháº£i vĂ¬ ná»™i dung cĂ³ váº¥n Ä‘á». KhĂ´ng
cĂ³ Æ°u tiĂªn Ä‘áº·c biá»‡t viáº¿t láº¡i cĂ¡c bĂ i nĂ y trÆ°á»›c â€” xá»­ lĂ½ ngang hĂ ng theo
`order` náº¿u tá»›i lÆ°á»£t theo má»¥c 3.

**Tá»• chá»©c module (2026-07-05):** 2 nhĂ³m hiá»‡n cĂ³ chĂ­nh thá»©c hoĂ¡ thĂ nh field
`module` trong frontmatter, hiá»ƒn thá»‹ thĂ nh 2 má»¥c riĂªng trong sidebar
viewer:
- `module: "HÆ°á»›ng dáº«n dĂ¹ng ná»n táº£ng"` â€” bĂ i 1-3
- `module: "Ká»¹ thuáº­t thi Ä‘áº¥u nĂ¢ng cao"` â€” bĂ i 4-9

**TĂ¡i cáº¥u trĂºc lá»›n (2026-07-05, theo chá»‰ Ä‘áº¡o trá»±c tiáº¿p ngÆ°á»i váº­n hĂ nh qua
Human Pin):** 11 bĂ i cÅ© (thiĂªn vá» "hÆ°á»›ng dáº«n dĂ¹ng web thi Ä‘áº¥u" chia nhá»
quy trĂ¬nh) gá»™p láº¡i thĂ nh 3 bĂ i ná»n táº£ng, sau Ä‘Ă³ má»Ÿ rá»™ng thĂªm 6 bĂ i ká»¹
thuáº­t thi Ä‘áº¥u tháº­t hoĂ n toĂ n má»›i â€” Ä‘Ăºng má»¥c tiĂªu ban Ä‘áº§u cá»§a exam-track lĂ 
dáº¡y trick/lÆ°u Ă½ thi Ä‘áº¥u (checkpoint freeze, load model, ensemble, Ä‘á»•i
hyperparameter, thĂªm/bá»›t layer), khĂ´ng pháº£i hÆ°á»›ng dáº«n dĂ¹ng web.

**NhĂ³m ná»n táº£ng (gá»™p tá»« 11 bĂ i cÅ©):**
1. `01-leaderboard-metric-va-loi-nop-bai.mdx` â€” Leaderboard, Scoring
   Metric & Lá»—i ná»™p bĂ i trĂªn The Noders Platform (`status: stable`,
   gá»™p tá»« 3 bĂ i cÅ©: doc-hieu-leaderboard, cach-tinh-scoring-metric,
   sai-lam-thuong-gap-khi-nop-bai)
2. `02-quy-trinh-thi-dau-tu-du-lieu-den-nop-bai.mdx` â€” Quy trĂ¬nh thi Ä‘áº¥u:
   Tá»« Dá»¯ liá»‡u thĂ´ tá»›i Submission há»£p lá»‡ (`status: stable`, gá»™p + rĂºt gá»n
   tá»« 4 bĂ i cÅ©: kham-pha-du-lieu, xu-ly-du-lieu-va-feature-engineering,
   doc-hieu-ket-qua-xu-ly-submission, thi-dau-theo-doi)
3. `03-baseline-nang-cap-mo-hinh-va-chien-luoc-nop-bai.mdx` â€” Baseline,
   NĂ¢ng cáº¥p MĂ´ hĂ¬nh & Chiáº¿n lÆ°á»£c Ná»™p bĂ i (`status: stable`, gá»™p tá»« 3 bĂ i
   cÅ©: chon-baseline-model-nhanh, nang-cap-tu-baseline-len-gradient-
   boosting, chien-luoc-dung-submission-thong-minh)

BĂ i cÅ© `11-practice-problems-luyen-tap-truoc-khi-thi-that.mdx` bá»‹ gá»™p má»™t
pháº§n ná»™i dung cá»‘t lĂµi (luá»“ng `/practice`) vĂ o cuá»‘i bĂ i 02 â€” khĂ´ng giá»¯
thĂ nh bĂ i riĂªng vĂ¬ ná»™i dung má»ng so vá»›i 1 bĂ i Ä‘á»™c láº­p sau khi rĂºt gá»n.

**NhĂ³m ká»¹ thuáº­t nĂ¢ng cao thi Ä‘áº¥u tháº­t (hoĂ n toĂ n má»›i):**
4. `01-transfer-learning-va-fine-tuning.mdx` â€” Transfer Learning &
   Fine-tuning â€” Táº­n dá»¥ng Model Ä‘Ă£ há»c sáºµn (`status: stable`)
5. `02-load-va-dung-pretrained-checkpoint.mdx` â€” Checkpoint â€” LÆ°u, Load &
   DĂ¹ng láº¡i Tráº¡ng thĂ¡i Model (`status: stable`)
6. `03-thay-doi-kien-truc-them-bot-layer.mdx` â€” Tuá»³ chá»‰nh Kiáº¿n trĂºc â€”
   ThĂªm/Bá»›t/Thay Layer trĂªn Model Pretrained (`status: stable`)
7. `04-hyperparameter-tuning.mdx` â€” Hyperparameter Tuning â€” TĂ¬m cáº¥u hĂ¬nh
   tá»‘t nháº¥t má»™t cĂ¡ch cĂ³ há»‡ thá»‘ng (`status: stable`)
8. `05-model-ensembling.mdx` â€” Model Ensembling â€” Káº¿t há»£p nhiá»u Model Ä‘á»ƒ
   tÄƒng Ä‘iá»ƒm sá»‘ (`status: stable`)
9. `06-ky-thuat-rieng-cho-tabular.mdx` â€” Ká»¹ thuáº­t riĂªng cho Dá»¯ liá»‡u
   Tabular â€” Target Encoding & Feature Interaction (`status: stable`)
10. `07-data-augmentation.mdx` â€” Data Augmentation â€” NhĂ¢n báº£n Dá»¯ liá»‡u
    áº¢nh CĂ³ Chá»§ Ä‘Ă­ch Äá»ƒ Giáº£m Overfitting (`status: stable` â€” má»›i,
    2026-07-06: bĂ i Ä‘áº§u tiĂªn má»Ÿ rá»™ng exam-track ká»ƒ tá»« Ä‘á»£t tĂ¡i cáº¥u trĂºc
    2026-07-05 â€” láº¥p khoáº£ng trá»‘ng ká»¹ thuáº­t áº£nh phá»• biáº¿n chÆ°a nháº¯c tá»›i,
    ná»‘i tiáº¿p bĂ i 4 Transfer Learning (dataset nhá» â†’ rá»§i ro overfit khi
    fine-tune), flip/crop/multi-scale/PCA color perturbation tá»« AlexNet
    (ná»‘i tiáº¿p bĂ i 35 foundations-track), nguyĂªn táº¯c chá»‰ augment train
    khĂ´ng augment test, kĂ¨m test-time augmentation (liĂªn há»‡ voting/
    averaging bĂ i 8), nguá»“n machinelearningmastery.com. ÄĂ£ thá»­
    pseudo-labeling trÆ°á»›c Ä‘Ă³ nhÆ°ng khĂ´ng Ä‘á»§ nguá»“n whitelist cháº¥t lÆ°á»£ng
    riĂªng cho bá»‘i cáº£nh thi Ä‘áº¥u â€” khĂ´ng viáº¿t, xem CLAUDE.md má»¥c 1.2)
11. `08-cross-validation-cho-du-lieu-thoi-gian.mdx` â€” Cross-Validation
    cho Dá»¯ liá»‡u CĂ³ TĂ­nh Thá»i gian â€” Walk-Forward Validation
    (`status: stable` â€” má»›i, 2026-07-06: láº¥p khoáº£ng trá»‘ng â€” bĂ i 1 dáº¡y
    data leakage (train-test contamination, target leakage) nhÆ°ng chÆ°a
    nháº¯c temporal leakage riĂªng cho time series; k-fold ngáº«u nhiĂªn gĂ¢y
    look-ahead bias, walk-forward validation tĂ´n trá»ng chiá»u nhĂ¢n quáº£,
    expanding window (giá»¯ toĂ n bá»™ quĂ¡ khá»©) vs sliding window (kĂ­ch thÆ°á»›c
    cá»‘ Ä‘á»‹nh), leakage qua feature engineering (rolling window vÆ°á»£t ranh
    giá»›i train-test); ná»‘i tiáº¿p bĂ i 3 (nguyĂªn táº¯c cross-validation) vĂ 
    bĂ i 1 (data leakage); nguá»“n machinelearningmastery.com/5-ways-to-
    use-cross-validation-to-improve-time-series-models + data-leakage-
    machine-learning (Ä‘Ă£ dĂ¹ng á»Ÿ bĂ i 1, Ä‘Ă o sĂ¢u khĂ­a cáº¡nh temporal))

ÄĂ£ sá»­a 2 link cross-track tá»« foundations-track (`03-regularization.mdx`,
`01-bieu-dien-am-thanh.mdx`) trá» tá»›i tĂªn file exam-track cÅ© Ä‘Ă£ xoĂ¡, cáº­p
nháº­t Ä‘Ăºng sang bĂ i 02/03 má»›i.

## foundations-track

**Tá»• chá»©c module (2026-07-05, tĂ¡i cáº¥u trĂºc lá»›n 2026-07-06 theo yĂªu cáº§u
ngÆ°á»i váº­n hĂ nh):** 45 bĂ i chia thĂ nh 10 module qua field `module` trong
frontmatter (khĂ´ng Ä‘á»•i `order`/`prerequisites`), hiá»ƒn thá»‹ thĂ nh 10 nhĂ³m
trong sidebar viewer:
1. `"Ná»n táº£ng ToĂ¡n & ML cá»• Ä‘iá»ƒn"` â€” bĂ i 1-7, 20, 53 (Ensemble Methods
   chuyá»ƒn vá» Ä‘Ă¢y 2026-07-06 â€” dĂ¹ng láº¡i Decision Tree, Ä‘Ăºng báº£n cháº¥t ML
   cá»• Ä‘iá»ƒn supervised; Naive Bayes 53 thĂªm 2026-07-06 â€” ná»‘i tiáº¿p bĂ i 01)
2. `"Deep Learning Ná»n táº£ng"` â€” bĂ i 8-10
3. `"Computer Vision"` â€” bĂ i 11, 33-42, 55-60 (17 bĂ i â€” xem "Tiáº¿n Ä‘á»™
   sub-module" bĂªn dÆ°á»›i, Ä‘á»£t Ä‘Ă o sĂ¢u 2026-07-06 hoĂ n thĂ nh: ViT/Swin
   (CÆ¡ báº£n), SSD/Anchor-free (Detection), DeepLab/SegFormer (Segmentation))
4. `"Sequence Model"` â€” bĂ i 12-15, 45, 54, 61-69, 72-73 (17 bĂ i), tĂ¡ch 3
   sub-module (2026-07-06, theo yĂªu cáº§u ngÆ°á»i váº­n hĂ nh): "RNN Family"
   (12, 13, 63 Bidirectional, 68 Deep RNN, 73 Seq2seq), "Transformer Architecture"
   (14, 15, 45, 54, 61, 62, 69 ALBERT), vĂ  "Tokenization" (64 BPE + 67
   WordPiece + 72 SentencePiece/Segmentation + 65 word2vec + 66 GloVe/
   Embedding â€” sub-module nĂ y cĂ³ 2 nhĂ¡nh con theo lĂ m rĂµ cá»§a ngÆ°á»i váº­n
   hĂ nh: Segmentation vĂ  Embedding, xem `CLAUDE.md` má»¥c 1.2)
5. `"Reinforcement Learning"` â€” bĂ i 16-19, 47, 71, 77-78, 82-86, tĂ¡ch 3
   sub-module (2026-07-06 Value/Policy, 2026-07-07 thĂªm Model-based):
   "Value-based" (18 Q-learning, 71 Double/Dueling, 82 PER, 83 Rainbow â€”
   4 bĂ i), "Policy-based" (19 Policy Gradient, 47 PPO, 77 A3C, 78 SAC,
   84 DDPG/TD3, 85 TRPO/A2C â€” 6 bĂ i), "Model-based" (86 Dyna-Qâ†’AlphaZeroâ†’
   MuZero â€” 1 bĂ i); bĂ i 16-17 giá»¯ pháº³ng (ná»n táº£ng chung)
6. `"Dimensionality Reduction"` â€” bĂ i 21-22, 48, 50 (PCA, Autoencoder,
   t-SNE, UMAP â€” tĂ¡ch thĂ nh module riĂªng 2026-07-06, Ä‘á»™c láº­p khá»i
   Ensemble vĂ  Generative, dĂ²ng tiáº¿n hoĂ¡ t-SNEâ†’UMAP hoĂ n thĂ nh)
7. `"Generative Models"` â€” bĂ i 23, 46, 49, 70, 88, 89 (tĂ¡ch 2 sub-module
   2026-07-07: "GAN Family" [23 GAN, 46 DCGAN, 88 WGAN/StyleGAN] vĂ 
   "Diffusion Models" [49 DDPM, 70 DDIM, 89 Latent Diffusion/Stable
   Diffusion] â€” 2 nhĂ¡nh song song khĂ¡c báº£n cháº¥t: Ä‘á»‘i khĂ¡ng vs khuáº¿ch tĂ¡n;
   3 dĂ²ng tiáº¿n hoĂ¡ tá»« cĂ¹ng gá»‘c GAN: GANâ†’DCGANâ†’WGAN/StyleGAN,
   GANâ†’Diffusionâ†’DDIMâ†’Latent Diffusion (text-to-image thá»±c táº¿); module
   tĂ¡ch riĂªng 2026-07-06)
8. `"LLM"` â€” bĂ i 24-29, tĂ¡ch 2 sub-module (2026-07-06): "Huáº¥n luyá»‡n &
   Alignment" (24-27) vĂ  "á»¨ng dá»¥ng & Inference-time" (28-29)
9. `"Audio"` â€” bĂ i 30-32, 90-91, tĂ¡ch 3 sub-module (2026-07-07): "Biá»ƒu
   diá»…n Ă¢m thanh" (30), "Speech-to-Text" (31, 90 Whisper chi tiáº¿t),
   "Text-to-Speech" (32, 91 Tacotron 2/FastSpeech chi tiáº¿t)
10. `"Recommendation Systems"` â€” bĂ i 43-44, 51-52 (2026-07-06, dĂ²ng tiáº¿n
    hoĂ¡ tuyáº¿n tĂ­nhâ†’phi tuyáº¿n: Matrix Factorization â†’ NeuMF, + feature-rich:
    DeepFM, + tiĂªu chĂ­ ranking Ä‘Ăºng: BPR â€” coi khĂ¡ Ä‘áº§y Ä‘á»§)

**LĂ½ do tĂ¡i cáº¥u trĂºc (2026-07-06):** module cÅ© "Ensemble, Giáº£m chiá»u &
Generative" (bĂ i 20-23) thá»±c cháº¥t ghĂ©p 3 máº£ng khĂ´ng liĂªn quan cháº·t vá»
báº£n cháº¥t (Ensemble = supervised, Dimensionality Reduction = unsupervised
biá»ƒu diá»…n chiá»u tháº¥p liĂªn tá»¥c, Generative = sinh dá»¯ liá»‡u má»›i) â€” ngÆ°á»i
váº­n hĂ nh yĂªu cáº§u tráº£ tá»«ng bĂ i vá» Ä‘Ăºng module báº£n cháº¥t cá»§a nĂ³: máº£ng Ä‘Ă£ cĂ³
module tÆ°Æ¡ng á»©ng (Ensemble â†’ vá» Module 1 ML cá»• Ä‘iá»ƒn) thĂ¬ gá»™p vĂ o Ä‘Ă³,
máº£ng chÆ°a cĂ³ module nĂ o thĂ¬ táº¡o module Ä‘á»™c láº­p má»›i (Dimensionality
Reduction, Generative Models). ÄĂ¢y lĂ  tiá»n lá»‡ cho viá»‡c tiáº¿p tá»¥c rĂ  soĂ¡t
cĂ¡c module khĂ¡c â€” khĂ´ng pháº£i má»i "nhĂ³m bĂ i liĂªn quan lá»ng láº»o" nĂªn giá»¯
chung 1 tĂªn module chá»‰ vĂ¬ tiá»‡n.

**Tiáº¿n Ä‘á»™ sub-module cho "Computer Vision" (2026-07-06, xem `CLAUDE.md`
má»¥c 2.1 pháº§n C cho lĂ½ do Ä‘áº§y Ä‘á»§) â€” cáº­p nháº­t dĂ²ng nĂ y khi thá»±c sá»± viáº¿t
bĂ i:**

**Má»‘c Ä‘áº¡t Ä‘Æ°á»£c 2026-07-06 (cáº­p nháº­t sau bĂ i 60, Task 55): Äá»¢T ÄĂ€O SĂ‚U
CV HOĂ€N THĂ€NH TRá»ŒN Váº¸N theo 2 chá»‰ Ä‘áº¡o liĂªn tiáº¿p cá»§a ngÆ°á»i váº­n hĂ nh** â€”
cáº£ 3 sub-module giá» cĂ³ dĂ²ng tiáº¿n hoĂ¡ gá»‘c + Ă­t nháº¥t 1-2 nhĂ¡nh Transformer/
anchor-free/hiá»‡n Ä‘áº¡i hÆ¡n.

- `submodule: "CÆ¡ báº£n"` â€” 8 bĂ i: dĂ²ng CNN gá»‘c HOĂ€N THĂ€NH TRá»ŒN Váº¸N (bĂ i
  11 CNN â†’ 35 AlexNet â†’ 36 VGG â†’ 37 ResNet â†’ 38 MobileNet â†’ 41
  EfficientNet). Má»Ÿ rá»™ng nhĂ¡nh Transformer: bĂ i 55 (**ViT**, thĂ¡ch thá»©c
  giáº£ Ä‘á»‹nh CNN báº¯t buá»™c) â†’ bĂ i 58 (**Swin Transformer**, giáº£i quyáº¿t Ä‘á»™
  phá»©c táº¡p báº­c hai + thiáº¿u Ä‘a tá»· lá»‡ cá»§a ViT, backbone tá»•ng quĂ¡t cho cáº£
  detection/segmentation).
- `submodule: "Detection"` â€” 4 bĂ i: bĂ i 33 (Object Detection, R-CNN
  family) + bĂ i 39 (YOLO, one-stage) + bĂ i 56 (**SSD**, multi-scale) +
  bĂ i 60 (**Anchor-free Detection** â€” FCOS + CenterNet, 2 nhĂ³m tĂ¡c giáº£
  Ä‘á»™c láº­p, bá» háº³n anchor box). FCOS ban Ä‘áº§u (Task 53) thiáº¿u nguá»“n thá»© 2
  â€” Task 55 giáº£i quyáº¿t báº±ng cĂ¡ch tĂ¬m CenterNet (nhĂ³m tĂ¡c giáº£ KHĂC, cĂ¹ng
  chá»§ Ä‘á» anchor-free) lĂ m nguá»“n thá»© 2 Ä‘á»™c láº­p, viáº¿t chung 1 bĂ i.
- `submodule: "Segmentation"` â€” 5 bĂ i: bĂ i 34 (FCNâ†’U-Net tĂ³m táº¯t) + bĂ i
  40 (U-Net Ä‘Ă o sĂ¢u) + bĂ i 42 (Mask R-CNN) + bĂ i 57 (**DeepLab** â€” atrous
  convolution + ASPP + decoder) + bĂ i 59 (**SegFormer** â€” Transformer
  phĂ¢n cáº¥p + decoder MLP nháº¹, ná»‘i tiáº¿p Swin Transformer bĂ i 58).
- **Tá»•ng: 17 bĂ i (11, 33-42, 55-60).** Cáº£ 3 sub-module Ä‘á»u Ä‘Ă£ cĂ³ song
  song 2 triáº¿t lĂ½ kiáº¿n trĂºc (CNN-based vĂ  Transformer-based) cho cĂ¹ng
  bĂ i toĂ¡n â€” má»™t cáº¥u trĂºc "há»c kĂ©p" hiáº¿m cĂ³ trong giĂ¡o trĂ¬nh.
- **BĂ€I Há»ŒC QUAN TRá»ŒNG rĂºt ra qua Ä‘á»£t Ä‘Ă o sĂ¢u nĂ y (Task 54-55):** Ä‘á»«ng
  káº¿t luáº­n "háº¿t nguá»“n"/"bĂ£o hoĂ " chá»‰ sau 1 láº§n thá»­ tháº¥t báº¡i. Hai chiáº¿n
  lÆ°á»£c Ä‘Ă£ chá»©ng minh hiá»‡u quáº£ khi nguá»“n giáº£i thĂ­ch trá»±c giĂ¡c (D2L.ai/
  Lil'Log/cs231n) khĂ´ng cĂ³ ná»™i dung phĂ¹ há»£p: (1) WebSearch giá»›i háº¡n
  Ä‘Ăºng cĂ¡c domain whitelist Ä‘á»ƒ tĂ¬m thĂªm ngá»¯ cáº£nh/URL chĂ­nh xĂ¡c; (2) tĂ¬m
  1 paper KHĂC (cĂ¹ng nhĂ³m tĂ¡c giáº£ hoáº·c nhĂ³m tĂ¡c giáº£ khĂ¡c) cĂ¹ng chá»§ Ä‘á» â€”
  2 paper há»c thuáº­t Ä‘á»™c láº­p váº«n cĂ³ thá»ƒ dĂ¹ng lĂ m 2 nguá»“n há»£p lá»‡ cho bĂ i
  "dĂ²ng tiáº¿n hoĂ¡" khi khĂ´ng cĂ³ lá»±a chá»n nĂ o khĂ¡c.
- **Theo chá»‰ Ä‘áº¡o trá»±c tiáº¿p cá»§a ngÆ°á»i váº­n hĂ nh: sau khi hoĂ n thĂ nh CV,
  chuyá»ƒn hÆ°á»›ng Ä‘Ă o sĂ¢u module "Sequence Model" tiáº¿p theo** (xem
  `CLAUDE.md` má»¥c 1.2).

1. `01-xac-suat-thong-ke-co-ban.mdx` â€” XĂ¡c suáº¥t & thá»‘ng kĂª cÆ¡ báº£n cho ML
   (`status: stable`; cáº­p nháº­t Task 90, 2026-07-07: pháº§n ká»³ vá»ng/phÆ°Æ¡ng
   sai thĂªm con sá»‘ cá»¥ thá»ƒ â€” Var xĂºc xáº¯c â‰ˆ2.917, Ä‘á»™ lá»‡ch chuáº©n â‰ˆ1.71 â€” vĂ 
   trá»±c giĂ¡c covariance matrix 3 dáº¥u dÆ°Æ¡ng/Ă¢m/â‰ˆ0 kĂ¨m vĂ­ dá»¥ chiá»u caoâ€“cĂ¢n
   náº·ng, thá»i gian cháº¡yâ€“tá»‘c Ä‘á»™, liĂªn há»‡ PCA bĂ i 21; khĂ´ng Ä‘á»•i khĂ¡i niá»‡m
   cá»‘t lĂµi)
2. `02-linear-regression.mdx` â€” Linear Regression â€” Há»“i quy tuyáº¿n tĂ­nh
   (`status: stable`; cáº­p nháº­t Task 91, 2026-07-07: pháº§n normal equation
   thĂªm cáº£nh bĂ¡o multicollinearity â€” feature tÆ°Æ¡ng quan tuyáº¿n tĂ­nh máº¡nh
   lĂ m X^T X gáº§n suy biáº¿n, w* khĂ´ng á»•n Ä‘á»‹nh; liĂªn há»‡ covariance matrix
   bĂ i 01 vĂ  regularization bĂ i 10)
3. `03-logistic-regression.mdx` â€” Logistic Regression â€” PhĂ¢n loáº¡i nhá»‹ phĂ¢n
   (`status: stable`; cáº­p nháº­t Task 92, 2026-07-07: pháº§n decision
   threshold thĂªm trá»±c giĂ¡c tradeoff precisionâ†‘/recallâ†“ khi nĂ¢ng ngÆ°á»¡ng,
   kĂ¨m vĂ­ dá»¥ chi phĂ­ false positive vs false negative)
4. `04-decision-tree.mdx` â€” Decision Tree â€” CĂ¢y quyáº¿t Ä‘á»‹nh
   (`status: stable`, viáº¿t láº¡i 2026-07-06: dĂ²ng tiáº¿n hoĂ¡ ID3 (Quinlan,
   1986) â†’ C4.5 â†’ CART)
5. `05-k-nearest-neighbors.mdx` â€” k-Nearest Neighbors (k-NN)
   (`status: stable`; cáº­p nháº­t Task 93, 2026-07-07: thĂªm má»¥c "Lá»±a chá»n hĂ m
   khoáº£ng cĂ¡ch" â€” Euclid/Manhattan/cosine similarity, liĂªn há»‡ word2vec bĂ i
   65 + RAG bĂ i 29)
6. `06-svm.mdx` â€” Support Vector Machine (SVM) â€” PhĂ¢n loáº¡i báº±ng Margin
   lá»›n nháº¥t (`status: stable`; cáº­p nháº­t Task 94, 2026-07-07: pháº§n kernel
   trick thĂªm vĂ­ dá»¥ trá»±c giĂ¡c kinh Ä‘iá»ƒn â€” 2 lá»›p Ä‘á»“ng tĂ¢m trĂ²n 2D nĂ¢ng lĂªn
   3D báº±ng xâ‚Â²+xâ‚‚Â² Ä‘á»ƒ máº·t pháº³ng ngang tĂ¡ch Ä‘Æ°á»£c)
7. `07-k-means-clustering.mdx` â€” K-means Clustering â€” PhĂ¢n cá»¥m khĂ´ng giĂ¡m
   sĂ¡t (`status: stable`; cáº­p nháº­t Task 95, 2026-07-07: pháº§n giá»›i háº¡n
   thĂªm vĂ­ dá»¥ kinh Ä‘iá»ƒn tháº¥t báº¡i â€” 2 vĂ²ng trĂ²n Ä‘á»“ng tĂ¢m, k-means chia báº±ng
   Ä‘Æ°á»ng tháº³ng thay vĂ¬ tĂ¡ch vĂ²ng trong/vĂ²ng ngoĂ i, liĂªn há»‡ SVM kernel bĂ i
   06)
8. `01-perceptron-va-mang-no-ron.mdx` â€” Perceptron & Máº¡ng nÆ¡-ron nhiá»u lá»›p
   (`status: stable`, viáº¿t láº¡i 2026-07-06: lá»‹ch sá»­ McCulloch & Pitts 1943)
9. `02-backpropagation.mdx` â€” Backpropagation â€” CĂ¡ch huáº¥n luyá»‡n máº¡ng
   nÆ¡-ron nhiá»u lá»›p (`status: stable`)
10. `03-regularization.mdx` â€” Regularization â€” Kiá»ƒm soĂ¡t Overfitting khi
    Máº¡ng nÆ¡-ron ngĂ y cĂ ng sĂ¢u (`status: stable`, viáº¿t láº¡i 2026-07-06:
    dĂ²ng tiáº¿n hoĂ¡ Bishop 1995 â†’ Srivastava et al. 2014 cho dropout)
11. `01-cnn.mdx` â€” CNN â€” VĂ¬ sao cáº§n máº¡ng nÆ¡-ron
    tĂ­ch cháº­p cho áº£nh (`status: stable`, `submodule: "CÆ¡ báº£n"`, viáº¿t láº¡i
    2026-07-06 vá»›i lá»‹ch sá»­ LeNet/AlexNet)
12. `01-rnn.mdx` â€” RNN â€” Máº¡ng nÆ¡-ron há»“i quy cho dá»¯
    liá»‡u chuá»—i (`status: stable`, viáº¿t láº¡i 2026-07-06: Ä‘Ă o sĂ¢u váº¥n Ä‘á»
    input/output Ä‘á»™ dĂ i biáº¿n Ä‘á»•i + cÆ¡ cháº¿ vanishing gradient qua tanh,
    nguá»“n cs231n)
13. `02-lstm-gru.mdx` â€” LSTM & GRU â€” Giáº£i quyáº¿t váº¥n Ä‘á» nhá»› phá»¥ thuá»™c xa
    cá»§a RNN (`status: stable`, viáº¿t láº¡i 2026-07-06: lá»‹ch sá»­ Hochreiter
    1991/1997, Cho et al. 2014, sáº¯c thĂ¡i "khĂ´ng Ä‘áº£m báº£o tuyá»‡t Ä‘á»‘i")
14. `01-attention.mdx` â€” Attention â€” CÆ¡ cháº¿ há»c cĂ¡ch 'chĂº Ă½' cĂ³ chá»n lá»c
    (`status: stable`, viáº¿t láº¡i 2026-07-06: lá»‹ch sá»­ Bahdanau/Cho/Bengio
    2015, nguá»“n Lil'Log; `prerequisites` Ä‘á»•i sang 73-seq2seq-encoder-decoder
    cĂ¹ng task viáº¿t bĂ i 73, vĂ¬ seq2seq giá» Ä‘Æ°á»£c dáº¡y riĂªng thay vĂ¬ chá»‰ nháº¯c
    trong bá»‘i cáº£nh bĂ i nĂ y)
15. `02-transformer.mdx` â€” Transformer â€” Kiáº¿n trĂºc dá»±a hoĂ n toĂ n trĂªn
    Attention (`status: stable`, viáº¿t láº¡i 2026-07-06: lá»‹ch sá»­ Vaswani
    et al. 2017, sá»‘ liá»‡u BLEU/GPU cá»¥ thá»ƒ)

**Module Sequence Model (12-15) hoĂ n táº¥t viáº¿t láº¡i theo triáº¿t lĂ½ má»›i
2026-07-06.**
16. `01-reinforcement-learning-framework.mdx` â€” Reinforcement Learning â€”
    Framework Agent/Environment/Reward (`status: stable`)
17. `02-markov-decision-process.mdx` â€” Markov Decision Process (MDP) â€”
    HĂ¬nh thá»©c hoĂ¡ bĂ i toĂ¡n RL (`status: stable`)
18. `01-q-learning.mdx` â€” Q-learning â€” Há»c Q-function tá»‘i Æ°u qua thá»­-sai
    (`status: stable`, viáº¿t láº¡i 2026-07-06: giá»›i háº¡n Q-table + DQN Mnih
    et al. 2013; cáº­p nháº­t Task 96, 2026-07-07: bá»• sung pháº§n "Hai ká»¹ thuáº­t
    á»•n Ä‘á»‹nh DQN" â€” experience replay phĂ¡ tÆ°Æ¡ng quan thá»i gian + target
    network giáº£i moving target, báº£n DQN 2015 Nature, hĂ m loss MSE dáº¡ng
    gáº§n supervised, 29/49 game Atari ngang con ngÆ°á»i, nguá»“n arxiv
    1312.5602 Nature)
19. `01-policy-gradient.mdx` â€” Policy Gradient â€” Há»c trá»±c tiáº¿p Policy thay
    vĂ¬ Q-function (`status: stable`, viáº¿t láº¡i 2026-07-06: thĂªm baseline
    + Actor-Critic)
96. `03-actor-critic.mdx` â€” Actor-Critic â€” Thá»‘ng nháº¥t Value-based vĂ 
    Policy-based trong RL (`status: stable` â€” 2026-07-08, `module:
    "Reinforcement Learning"`, pháº³ng khĂ´ng submodule, bĂ i synthesis Ä‘áº§u
    tiĂªn cá»§a module RL â€” cáº§u ná»‘i giá»¯a Value-based (bĂ i 18) vĂ  Policy-based
    (bĂ i 19), ná»n táº£ng cho A3C/PPO/SAC (bĂ i 77/47/78). Giáº£i thĂ­ch váº¥n Ä‘á»
    phÆ°Æ¡ng sai cao cá»§a REINFORCE, kiáº¿n trĂºc Actor (policy) + Critic (value
    function), Advantage function A(s,a)=Q(s,a)-V(s) vĂ  TD error Î´ lĂ m
    Æ°á»›c lÆ°á»£ng advantage, báº£ng so sĂ¡nh 3 trÆ°á»ng phĂ¡i (value-based/policy-
    based/actor-critic) vá» variance/bias/hĂ nh Ä‘á»™ng liĂªn tá»¥c/online learning,
    liĂªn há»‡ A3C/A2C/PPO/SAC/DDPG/TD3. Nguá»“n: Lilian Weng Policy Gradient
    Algorithms + machinelearningmastery.com actor-critic.

97. `04-imitation-learning.mdx` â€” Imitation Learning â€” Há»c Tá»« Minh Chá»©ng
    Thay VĂ¬ Thá»­-sai (`status: stable` â€” 2026-07-08, `module: "Reinforcement
    Learning"`, pháº³ng khĂ´ng submodule, láº¥p khoáº£ng trá»‘ng foundational:
    RL thá»­-sai quĂ¡ tá»‘n kĂ©m/nguy hiá»ƒm cho nhiá»u bĂ i toĂ¡n thá»±c táº¿ (robot, xe
    tá»± lĂ¡i) â†’ há»c tá»« expert demonstrations. Behavioral Cloning (Pomerleau
    1989, ALVINN, coi IL nhÆ° supervised learning) â†’ váº¥n Ä‘á» distribution
    shift / compounding error O(TÂ²) â†’ DAgger (Ross 2011, iterative query
    expert, regret O(T)) â†’ GAIL (Ho & Ermon 2016, adversarial imitation
    learning, GAN-style discriminator phĂ¢n biá»‡t expert vs agent, khĂ´ng cáº§n
    chuyĂªn gia online). Báº£ng so sĂ¡nh 3 phÆ°Æ¡ng phĂ¡p. Nguá»“n: arxiv DAgger
    1011.0686 + arxiv GAIL 1606.03476 + machinelearningmastery.com.

98. `05-exploration-deep-dive.mdx` â€” Exploration Trong RL â€” Tá»« epsilon-greedy
    Tá»›i TĂ² MĂ² Ná»™i Táº¡i (`status: stable` â€” 2026-07-08, `module: "Reinforcement
    Learning"`, pháº³ng khĂ´ng submodule, láº¥p khoáº£ng trá»‘ng giá»¯a bĂ i 18 (Îµ-greedy)
    vĂ  cĂ¡c thuáº­t toĂ¡n RL nĂ¢ng cao: váº¥n Ä‘á» Îµ-greedy trong sparse reward â†’
    UCB (Lai & Robbins 1985, bonus âˆ(ln t/N)) â†’ Thompson sampling (Bayesian,
    sample tá»« posterior) â†’ ICM (Pathak 2017, inverse+forward dynamics,
    intrinsic reward tá»« prediction error, noisy TV problem) â†’ RND (Burda
    2018, target+predictor network, giáº£i noisy TV, SOTA Montezuma's Revenge).
    Nguá»“n: Lilian Weng 'Exploration Strategies in DRL' + arxiv ICM 1705.05363
    + arxiv RND 1810.12894.

99. `06-offline-rl.mdx` â€” Offline RL â€” Há»c ChĂ­nh SĂ¡ch Tá»« Dá»¯ Liá»‡u TÄ©nh MĂ 
    KhĂ´ng Cáº§n MĂ´i TrÆ°á»ng (`status: stable` â€” 2026-07-08, `module:
    "Reinforcement Learning"`, pháº³ng khĂ´ng submodule, láº¥p khoáº£ng trá»‘ng
    á»©ng dá»¥ng RL thá»±c táº¿: váº¥n Ä‘á» distributional shift khi khĂ´ng cĂ³ tÆ°Æ¡ng
    tĂ¡c mĂ´i trÆ°á»ng â†’ BCQ (Fujimoto 2019, VAE + policy constraint, an toĂ n
    nhÆ°ng yáº¿u stitching) â†’ CQL (Kumar 2020, conservative regularizer,
    lower-bound Q, stitching máº¡nh) â†’ IQL (Kostrikov 2021, expectile
    regression, khĂ´ng há»i OOD action, á»•n Ä‘á»‹nh nháº¥t). Nguá»“n: arxiv CQL
    2006.04779 + arxiv IQL 2110.06169 + machinelearningmastery.com.

100. `05-distributional-rl.mdx` â€” Distributional RL â€” Há»c PhĂ¢n Phá»‘i Cá»§a
    Return Thay VĂ¬ Chá»‰ Ká»³ Vá»ng (`status: stable` â€” 2026-07-08, `module:
    "Reinforcement Learning"`, `submodule: "Value-based"`, hoĂ n thiá»‡n dĂ²ng
    Value-based sau Rainbow: váº¥n Ä‘á» Q-learning chá»‰ há»c ká»³ vá»ng E[Q] â†’ C51
    (Bellemare 2017, categorical dist 51 atoms, projection step, KL
    divergence) â†’ QR-DQN (Dabney 2018, quantile regression, Wasserstein
    dist, khĂ´ng cáº§n [Vmin,Vmax]) â†’ IQN (Dabney 2018, continuous quantile
    function, Ï„ embedding, risk-sensitive policy). Nguá»“n: arxiv C51
    1710.10044 + arxiv IQN 1806.06923 + lilianweng.github.io.

101. `07-hierarchical-rl.mdx` â€” Hierarchical RL â€” Há»c ChĂ­nh SĂ¡ch Theo
    Nhiá»u Cáº¥p Báº­c Thá»i Gian (`status: stable` â€” 2026-07-08, `module:
    "Reinforcement Learning"`, pháº³ng khĂ´ng submodule, láº¥p khoáº£ng trá»‘ng
    temporal abstraction: váº¥n Ä‘á» action-level RL tháº¥t báº¡i trong mĂ´i trÆ°á»ng
    dĂ i háº¡n â†’ Options Framework (Sutton 1999, temporally extended actions,
    Ï€_o/Î²_o/I_o, SMDP) â†’ FeUdal Networks (Vezhnevets 2017, Manager/Worker,
    goal embedding, intrinsic reward) â†’ HIRO (Nachum 2018, off-policy
    correction, goal relabeling, non-stationarity). Nguá»“n: arxiv FeUdal
    1703.01161 + arxiv HIRO 1805.08296 + lilianweng.github.io.

102. `07-policy-based-synthesis.mdx` â€” Policy-based RL â€” Tá»•ng Káº¿t DĂ²ng
    Tiáº¿n HĂ³a VĂ  So SĂ¡nh CĂ¡c Thuáº­t ToĂ¡n (`status: stable` â€” 2026-07-08,
    `module: "Reinforcement Learning"`, `submodule: "Policy-based"`,
    synthesis cá»§a toĂ n bá»™ dĂ²ng Policy-based: dĂ²ng tiáº¿n hoĂ¡ 3 nhĂ¡nh
    (TRPOâ†’PPO, A3Câ†’A2Câ†’PPO, DDPGâ†’TD3â†’SAC), báº£ng so sĂ¡nh 6 thuáº­t toĂ¡n,
    decision tree chá»n thuáº­t toĂ¡n, káº¿t ná»‘i vá»›i má»i bĂ i trong module RL.
    KhĂ´ng cĂ³ quiz. Nguá»“n: Lilian Weng Policy Gradient + 6 bĂ i trong track.)

87. `02-alphago-alphazero.mdx` â€” AlphaGo/AlphaZero â€” MCTS + Self-play,
   Äá»‰nh cao á»¨ng dá»¥ng RL (`status: stable` â€” 2026-07-07, `module:
   "Reinforcement Learning"`, `submodule: "Model-based"`, Ä‘Ă o sĂ¢u case
   study kinh Ä‘iá»ƒn â€” AlphaGo Silver 2016 [4 thĂ nh pháº§n: SL policy 30M
   tháº¿ cá» KGS + RL policy self-play + value network + MCTS Ä‘á»‹nh hÆ°á»›ng,
   tháº¯ng Lee Sedol 4-1] â†’ AlphaGo Zero 2017 [bá» dá»¯ liá»‡u ngÆ°á»i + gá»™p 1
   máº¡ng policy+value, self-play thuáº§n, vÆ°á»£t AlphaGo 3 ngĂ y] â†’ AlphaZero
   2018 [tá»•ng quĂ¡t cá» vua/cá» tÆ°á»›ng, cĂ¹ng 1 thuáº­t toĂ¡n]; 2 nguá»“n arxiv
   1602.01772 + Lil'Log RL overview)

93. `01-generative-models-overview.mdx` â€” Generative Models â€” Tá»•ng quan
    vĂ  PhĂ¢n loáº¡i (`status: stable` â€” 2026-07-08, `module: "Generative
    Models"`, pháº³ng khĂ´ng submodule, bĂ i má»Ÿ Ä‘áº§u module: phĂ¢n biá»‡t
    generative vs discriminative `p(x)` vs `p(y|x)`, 3 trÆ°á»ng phĂ¡i
    likelihood-based (VAE/Flow/Diffusion) vs implicit (GAN) vs energy-based
    (EBM), trade-off cháº¥t lÆ°á»£ng/tá»‘c Ä‘á»™/bao phá»§; 3 nguá»“n d2l.ai intro +
    Lilian Weng taxonomy + CS231n)

94. `02-vae-variational-autoencoder.mdx` â€” VAE (Variational Autoencoder) â€”
    Tá»« NĂ©n Dá»¯ Liá»‡u tá»›i Sinh Dá»¯ Liá»‡u Má»›i (`status: stable` â€” 2026-07-08,
    `module: "Generative Models"`, pháº³ng khĂ´ng submodule, bĂ i thá»© 2 cá»§a
    module: váº¥n Ä‘á» latent space rá»i ráº¡c cá»§a autoencoder â†’ há»c phĂ¢n phá»‘i
    thay vĂ¬ Ä‘iá»ƒm, kiáº¿n trĂºc encoder ra Î¼/log ÏƒÂ², reparameterization trick
    `z=Î¼+Ïƒâ™Îµ`, ELBO (reconstruction + KL divergence), nghiá»‡m Ä‘Ă³ng KL cho
    Gaussian, Beta-VAE disentanglement, so sĂ¡nh VAE vs GAN vs Diffusion;
    nguá»“n Lilian Weng 'From Autoencoder to Beta-VAE' + Kingma & Welling
    2014 arxiv 1312.6114 + machinelearningmastery.com)

95. `01-audio-ml-overview.mdx` â€” Machine Learning cho Ă‚m thanh â€” Giá»›i
    thiá»‡u vĂ  PhĂ¢n loáº¡i bĂ i toĂ¡n (`status: stable` â€” 2026-07-08, `module:
    "Audio"`, `order: 29` (Ä‘á»•i tá»« 95 Ä‘á»ƒ Ä‘áº·t trÆ°á»›c bĂ i 30), pháº³ng khĂ´ng
    submodule, bĂ i má»Ÿ Ä‘áº§u module: so sĂ¡nh audio vs áº£nh (1D vs 2D, liĂªn tá»¥c
    vs rá»i ráº¡c) vs vÄƒn báº£n (táº§n suáº¥t cao hÆ¡n 1000 láº§n, khĂ´ng token sáºµn),
    6 loáº¡i bĂ i toĂ¡n (phĂ¢n loáº¡i Ă¢m thanh, ASR, TTS, speaker recognition,
    segmentation, generation), pipeline 4 bÆ°á»›c (tiá»n xá»­ lĂ½ â†’ feature
    extraction â†’ mĂ´ hĂ¬nh â†’ háº­u xá»­ lĂ½), map 3 sub-module cá»§a Audio; nguá»“n
    d2l.ai intro + machinelearningmastery.com audio overview)

92. `03-hifigan-neural-vocoder.mdx` â€” HiFi-GAN â€” ÄĂ o sĂ¢u Neural Vocoder:
    Kiáº¿n trĂºc GAN Song song Thay tháº¿ WaveNet (`status: stable` â€”
    2026-07-07, `module: "Audio"`, `submodule: "Text-to-Speech"`, Ä‘Ă o
    sĂ¢u HiFi-GAN Ä‘Ă£ giá»›i thiá»‡u sÆ¡ á»Ÿ bĂ i 32: generator transposed conv +
    Multi-Receptive Field Fusion (nhiá»u residual block kernel/dilation
    song song), 2 discriminator (multi-period báº¯t tĂ­nh tuáº§n hoĂ n giá»ng
    nĂ³i, multi-scale báº¯t Ä‘a Ä‘á»™ phĂ¢n giáº£i), 3 loss káº¿t há»£p (adversarial
    least-squares + mel-spectrogram L1 + feature matching); káº¿t ná»‘i GAN
    Family bĂ i 23/46/88; nguá»“n arxiv 2210.15533. **Káº¿t thĂºc káº¿ hoáº¡ch Ä‘Ă o
    sĂ¢u 3 module RLâ†’Generativeâ†’Audio (30 task, xem CLAUDE.md má»¥c 1).**)

91. `02-tacotron-fastspeech.mdx` â€” Tacotron 2 & FastSpeech â€” ÄĂ o sĂ¢u
    Text-to-Spectrogram: Autoregressive vs Song song (`status: stable` â€”
    2026-07-07, `module: "Audio"`, `submodule: "Text-to-Speech"`, Ä‘Ă o
    sĂ¢u kiáº¿n trĂºc Ä‘Ă£ giá»›i thiá»‡u sÆ¡ á»Ÿ bĂ i 32: Tacotron 2 (pre-net/
    post-net/stop token/location-sensitive attention/teacher forcing,
    váº¥n Ä‘á» attention misalignment) â†’ FastSpeech (Feed-Forward Transformer
    self-attention+1D CNN, length regulator tá»« duration predictor, giáº£i
    cáº£ tá»‘c Ä‘á»™ láº«n lá»—i cÄƒn chá»‰nh, nhanh hÆ¡n 10 láº§n); nguá»“n arxiv 1809.08895
    + 2106.15561)

90. `02-whisper.mdx` â€” Whisper â€” ÄĂ o sĂ¢u Kiáº¿n trĂºc Multitask Decoding
    Qua Token Äáº·c biá»‡t (`status: stable` â€” 2026-07-07, `module: "Audio"`,
    `submodule: "Speech-to-Text"`, Ä‘Ă o sĂ¢u Whisper Ä‘Ă£ giá»›i thiá»‡u sÆ¡ á»Ÿ bĂ i
    31: input 80-channel log-mel qua conv, chuá»—i token Ä‘áº·c biá»‡t
    `<SOT>`/ngĂ´n ngá»¯/tĂ¡c vá»¥ transcribe-translate/timestamp Ä‘iá»u khiá»ƒn 1
    decoder Ä‘a tĂ¡c vá»¥ (prompt engineering cho audio), cross-attention lĂ m
    cÆ¡ sá»Ÿ timestamp prediction, so sĂ¡nh CTC vs encoder-decoder; nguá»“n
    arxiv 2212.04356)

89. `03-latent-diffusion.mdx` â€” Latent Diffusion (Stable Diffusion) â€”
    Khá»­ nhiá»…u Trong KhĂ´ng gian Latent Ä‘á»ƒ Text-to-image Thá»±c táº¿ (`status:
    stable` â€” 2026-07-07, `module: "Generative Models"`, `submodule:
    "Diffusion Models"`, cháº¡m tá»›i text-to-image thá»±c táº¿ â€” Rombach et al.
    2022, 2 giai Ä‘oáº¡n: perceptual compression autoencoder nĂ©n f=8 ~64Ă—
    rá»“i diffusion trong latent space nhá», CLIP text conditioning +
    cross-attention inject vĂ o U-Net + classifier-free guidance amplifiy
    prompt; Stable Diffusion báº£n phĂ¡t hĂ nh cĂ´ng khai LAION-5B cháº¡y trĂªn
    GPU ngÆ°á»i dĂ¹ng 8GB, dĂ¢n chá»§ hoĂ¡ sinh áº£nh AI; 2 nguá»“n arxiv 2112.10752
    + Lil'Log diffusion)

103. `03-flow-based-models.mdx` â€” Flow-based Models â€” Biáº¿n Äá»•i PhĂ¢n Phá»‘i
    Báº±ng DĂ²ng Cháº£y Kháº£ Nghá»‹ch (`status: stable` â€” 2026-07-08, `module:
    "Generative Models"`, pháº³ng khĂ´ng submodule, hoĂ n thiá»‡n 3 trÆ°á»ng phĂ¡i
    likelihood-based: change of variable formula cho exact likelihood â†’
    NICE (Dinh 2014, additive coupling, unit Jacobian) â†’ RealNVP (Dinh
    2016, affine coupling, non-volume preserving) â†’ Glow (Kingma 2018,
    invertible 1Ă—1 conv, actnorm). Nguá»“n: arxiv NICE 1410.8516 + arxiv
    RealNVP 1605.08803 + arxiv Glow 1807.03039 + lilianweng.github.io.

104. `04-score-based-models.mdx` â€” Score-based Models â€” Sinh Dá»¯ Liá»‡u Báº±ng
    Gradient Cá»§a Log-Probability (`status: stable` â€” 2026-07-08, `module:
    "Generative Models"`, `submodule: "Diffusion Models"`, cáº§u ná»‘i toĂ¡n
    há»c giá»¯a DDPM vĂ  score matching: score function âˆ‡_x log p(x) vĂ 
    Langevin dynamics â†’ NCSN (Song & Ermon 2019, noise-conditional score
    network, annealed Langevin dynamics, manifold hypothesis) â†’ Score SDE
    (Song et al. 2020, unified SDE framework, VP-SDE/VE-SDE, reverse SDE,
    probability flow ODE, exact likelihood). Nguá»“n: arxiv NCSN 1907.05600
    + arxiv Score SDE 2011.13456 + lilianweng.github.io.

105. `04-conditional-gan.mdx` â€” Conditional GAN â€” Sinh áº¢nh CĂ³ Äiá»u Kiá»‡n
    Tá»« NhĂ£n, áº¢nh KhĂ¡c, VĂ  Miá»n (`status: stable` â€” 2026-07-08, `module:
    "Generative Models"`, `submodule: "GAN Family"`, láº¥p khoáº£ng trá»‘ng
    á»©ng dá»¥ng GAN: váº¥n Ä‘á» GAN gá»‘c sinh áº£nh tá»« noise khĂ´ng kiá»ƒm soĂ¡t â†’
    cGAN (Mirza 2014, condition y lĂ  label/text/image, minimax cĂ³ Ä‘iá»u
    kiá»‡n) â†’ pix2pix (Isola 2017, paired image translation, U-Net
    generator + PatchGAN discriminator + L1+GAN loss) â†’ CycleGAN (Zhu
    2017, unpaired translation, cycle-consistency loss, 2 generators + 2
    discriminators). Nguá»“n: arxiv cGAN 1411.1784 + arxiv pix2pix
    1611.07004 + arxiv CycleGAN 1703.10593 + machinelearningmastery.com.

106. `04-vq-vae-vq-gan.mdx` â€” VQ-VAE & VQ-GAN â€” LÆ°á»£ng Tá»­ HĂ³a KhĂ´ng Gian
    Latent Cho Sinh áº¢nh Cháº¥t LÆ°á»£ng Cao (`status: stable` â€” 2026-07-08,
    `module: "Generative Models"`, pháº³ng khĂ´ng submodule, ná»n táº£ng cho
    DALL-E vĂ  Stable Diffusion: váº¥n Ä‘á» VAE sinh áº£nh má» (continuous latent
    + MSE) â†’ VQ-VAE (van den Oord 2017, discrete codebook, straight-through
    estimator, codebook+commitment loss, PixelCNN prior) â†’ VQ-GAN (Esser
    2021, discriminator + perceptual loss, Transformer prior, ná»n táº£ng
    DALL-E vĂ  SD encoder-decoder). Nguá»“n: arxiv VQ-VAE 1711.00937 + arxiv
    VQ-GAN 2012.09841 + lilianweng.github.io.

107. `05-gan-family-synthesis.mdx` â€” GAN Family â€” Tá»•ng Káº¿t DĂ²ng Tiáº¿n HĂ³a
    Tá»« GAN Gá»‘c Äáº¿n StyleGAN (`status: stable` â€” 2026-07-08, `module:
    "Generative Models"`, `submodule: "GAN Family"`, synthesis: timeline
    GAN 2014-2021, báº£ng so sĂ¡nh 8 variants, decision tree chá»n GAN, váº¥n
    Ä‘á» má»Ÿ (FID, mode collapse, evaluation). KhĂ´ng cĂ³ quiz. Nguá»“n: Lilian
    Weng 'From GAN to WGAN' + 5 bĂ i trong track.

88. `03-wgan-stylegan.mdx` â€” WGAN & StyleGAN â€” Hai HÆ°á»›ng NĂ¢ng cáº¥p GAN:
    á»”n Ä‘á»‹nh hoĂ¡ vĂ  Kiá»ƒm soĂ¡t (`status: stable` â€” 2026-07-07, `module:
    "Generative Models"`, `submodule: "GAN Family"`, 2 hÆ°á»›ng nĂ¢ng cáº¥p
    Ä‘á»™c láº­p: WGAN Arjovsky/Chintala/Bottou 2017 thay JS divergence báº±ng
    Wasserstein distance [giáº£i gradient biáº¿n máº¥t khi 2 phĂ¢n phá»‘i cĂ¡ch
    xa], critic thay discriminator, 1-Lipschitz qua weight clipping/
    gradient penalty + StyleGAN Karras/Laine/Aila 2019 kiáº¿n trĂºc
    style-based [mapping zâ†’w + AdaIN inject má»—i lá»›p], kiá»ƒm soĂ¡t thang Ä‘á»™
    coarse/medium/fine; 2 nguá»“n arxiv 1701.07875 + 1812.04948 theo tiá»n
    lá»‡ bĂ i 71 gá»™p 2 cáº£i tiáº¿n Ä‘á»™c láº­p)

86. `01-model-based-rl.mdx` â€” Model-based RL â€” Há»c MĂ´ hĂ¬nh MĂ´i trÆ°á»ng Ä‘á»ƒ
    Láº­p káº¿ hoáº¡ch, KhĂ´ng chá»‰ Thá»­-sai (`status: stable` â€” 2026-07-07,
    `module: "Reinforcement Learning"`, `submodule: "Model-based"` (má»›i
    tĂ¡ch, trÆ°á»ng phĂ¡i RL thá»© 3 cĂ²n thiáº¿u), dĂ²ng tiáº¿n hoĂ¡ Dyna-Q (Sutton
    1990, 3 vĂ²ng láº·p direct RL + model learning + planning) â†’ AlphaZero
    (2017, model = luáº­t game Ä‘Ă£ biáº¿t + MCTS + policy/value network
    self-play) â†’ MuZero (Schrittwieser 2019, há»c dynamics trong latent
    space â€” representation/dynamics/prediction 3 máº¡ng, MCTS khĂ´ng gian
    áº©n, SOTA cáº£ Atari láº«n board game); 2 nguá»“n arxiv 1911.08265 + Lil'Log
    RL overview)

85. `06-trpo-a2c.mdx` â€” TRPO & A2C â€” Hai Tiá»n Ä‘á» Trá»±c tiáº¿p cá»§a PPO vĂ  A3C
    (`status: stable` â€” 2026-07-07, `module: "Reinforcement Learning"`,
    `submodule: "Policy-based"`, láº¥p 2 tiá»n Ä‘á» bá»‹ nháº¯c tĂªn mĂ  chÆ°a cĂ³
    bĂ i: TRPO Schulman 2015 rĂ ng buá»™c KL `D_KL(Ï€_oldâ€–Ï€)â‰¤Î´` trust region
    (Ä‘áº£m báº£o monotonic improvement nhÆ°ng phá»©c táº¡p Fisher+conjugate
    gradient+line search â†’ PPO clip Ä‘Æ¡n giáº£n hoĂ¡) + A2C biáº¿n thá»ƒ Ä‘á»“ng bá»™
    A3C (trĂ¡nh race condition, GPU-friendly); 2 nguá»“n arxiv 1502.05477 +
    1602.01783 theo tiá»n lá»‡ 2 paper Ä‘á»™c láº­p)

84. `05-ddpg-td3.mdx` â€” DDPG & TD3 â€” Off-policy Policy-based cho KhĂ´ng
    gian HĂ nh Ä‘á»™ng LiĂªn tá»¥c (`status: stable` â€” 2026-07-07, `module:
    "Reinforcement Learning"`, `submodule: "Policy-based"`, láº¥p tiá»n Ä‘á»
    Ä‘á»©t cá»§a SAC 78 (nháº¯c 'DDPG giĂ²n' mĂ  DDPG chÆ°a cĂ³ bĂ i): Lillicrap 2016
    DDPG deterministic policy + actor-critic off-policy cho continuous
    action, há»™i tá»¥ giĂ²n â†’ Fujimoto 2018 TD3 3 ká»¹ thuáº­t (twin critics min
    bĂ¹ overestimation vĂ²ng actor-critic, target policy smoothing triá»‡t
    Ä‘á»‰nh giáº£, delayed updates giáº£m dao Ä‘á»™ng), tiá»n Ä‘á» trá»±c tiáº¿p SAC;
    2 nguá»“n arxiv 1509.02971 + 1802.09477 theo tiá»n lá»‡ bĂ i 71)

83. `04-rainbow-dqn.mdx` â€” Rainbow DQN â€” Tá»•ng há»£p 6 Cáº£i tiáº¿n Äá»™c láº­p
    cá»§a DQN thĂ nh Má»™t Agent (`status: stable` â€” 2026-07-07, `module:
    "Reinforcement Learning"`, `submodule: "Value-based"`, hoĂ n thiá»‡n
    dĂ²ng Value-based: Hessel et al. 2017 DeepMind, 6 thĂ nh pháº§n (Double/
    Dueling/PER Ä‘Ă£ há»c + 3 má»›i: multi-step n-step return tradeoff
    bias-variance, C51 distributional 51 atom, Noisy Nets nhiá»…u tham sá»‘
    thay Îµ-greedy), káº¿t quáº£ vÆ°á»£t DQN 57 game Atari, ablation: bá» PER giáº£m
    nhiá»u nháº¥t; 1 nguá»“n arxiv 1710.02298 theo tiá»n lá»‡ PER)

82. `03-prioritized-experience-replay.mdx` â€” Prioritized Experience
    Replay â€” Æ¯u tiĂªn PhĂ¡t láº¡i Tráº£i nghiá»‡m CĂ³ nhiá»u tĂ­n hiá»‡u Há»c hÆ¡n
    (`status: stable` â€” 2026-07-07, `module: "Reinforcement Learning"`,
    `submodule: "Value-based"`, láº¥p dĂ²ng tiáº¿n hoĂ¡ Value-based: DQNâ†’
    Double/Duelingâ†’PERâ†’Rainbow â€” Schaul/Quan/Antonoglou/Silver 2015
    DeepMind, TD error lĂ m priority, stochastic sampling `P(i)âˆ|Î´|^Î±`,
    importance-sampling weights bĂ¹ bias, sum-tree O(log N), 41/49 game
    Atari cáº£i thiá»‡n Ä‘áº·c biá»‡t khi reward thÆ°a; bĂ i cáº£i tiáº¿n trá»±c tiáº¿p 1
    ká»¹ thuáº­t nĂªn 1 nguá»“n arxiv 1511.05952 theo tiá»n lá»‡ LoRA/DPO/WordPiece)

71. `02-double-dueling-dqn.mdx` â€” Double DQN & Dueling DQN â€” Hai CĂ¡ch Sá»­a
    Lá»—i Cá»§a DQN Gá»‘c (`status: stable` â€” 2026-07-06, `module:
    "Reinforcement Learning"`, `submodule: "Value-based"`, ná»‘i tiáº¿p
    Q-learning/DQN 18: Van Hasselt/Guez/Silver 2015 sá»­a overestimation
    bias (decouple action selection/evaluation qua 2 máº¡ng) + Wang et al.
    2015 DeepMind sá»­a generalize kĂ©m qua action (tĂ¡ch Value/Advantage
    function) â€” 2 váº¥n Ä‘á» Ä‘á»™c láº­p, 2 paper khĂ¡c nhau káº¿t há»£p 1 bĂ i, nguá»“n
    arxiv 1509.06461 + 1511.06581; cáº­p nháº­t Task 97, 2026-07-07: bá»• sung
    cĂ´ng thá»©c toĂ¡n cá»¥ thá»ƒ â€” Double DQN target `Y=r+Î³Â·Q_{Î¸â»}(s',argmax
    Q_Î¸(s',a'))` so vá»›i DQN gá»‘c, Dueling `Q(s,a)=V(s)+(A(s,a)âˆ’mean A)`
    kĂ¨m giáº£i thĂ­ch identifiability, bá» Ä‘oáº¡n Rainbow 'chÆ°a Ä‘á»§ chuáº©n' vĂ¬
    giá» cĂ³ bĂ i PER/Rainbow riĂªng)
20. `08-ensemble-methods.mdx` â€” Ensemble Methods â€” Káº¿t há»£p nhiá»u mĂ´ hĂ¬nh
    yáº¿u thĂ nh má»™t mĂ´ hĂ¬nh máº¡nh (`status: stable`, viáº¿t láº¡i 2026-07-06:
    lá»‹ch sá»­ Breiman 2001/Freund & Schapire 1997, nguá»“n cs229;
    `module: "Ná»n táº£ng ToĂ¡n & ML cá»• Ä‘iá»ƒn"` â€” chuyá»ƒn tá»« module gá»™p cÅ©
    2026-07-06, xem `CLAUDE.md` má»¥c 2.1)
21. `01-pca.mdx` â€” PCA (Principal Component Analysis) â€” Giáº£m chiá»u dá»¯
    liá»‡u báº±ng Äáº¡i sá»‘ tuyáº¿n tĂ­nh (`status: stable`, `module:
    "Dimensionality Reduction"` â€” module má»›i tĂ¡ch 2026-07-06)
22. `02-autoencoder.mdx` â€” Autoencoder â€” Máº¡ng nÆ¡-ron tá»± há»c nĂ©n dá»¯ liá»‡u
    khĂ´ng cáº§n nhĂ£n (`status: stable`, `module: "Dimensionality
    Reduction"` â€” module má»›i tĂ¡ch 2026-07-06)
23. `01-gan.mdx` â€” GAN â€” Hai máº¡ng nÆ¡-ron thi Ä‘áº¥u Ä‘á»ƒ táº¡o dá»¯ liá»‡u giáº£ chĂ¢n
    thá»±c (`status: stable`, viáº¿t láº¡i 2026-07-06: lá»‹ch sá»­ Goodfellow et
    al. 2014, Ä‘á»™ng cÆ¡ lĂ½ thuyáº¿t cá»¥ thá»ƒ; `module: "Generative Models"` â€”
    module má»›i tĂ¡ch 2026-07-06; cáº­p nháº­t Task 104, 2026-07-07: bá»• sung
    cĂ´ng thá»©c minimax Ä‘áº§y Ä‘á»§ + non-saturating loss + JS divergence [D*
    tá»‘i Æ°u, C(G)=-log4+2Â·JSD, Ä‘iá»ƒm cĂ¢n báº±ng p_g=p_data], nguá»“n Lil'Log
    'From GAN to WGAN' cho pháº§n lĂ½ thuyáº¿t há»™i tá»¥)
24. `01-pretraining-llm.mdx` â€” Pretraining â€” VĂ¬ sao LLM há»c Ä‘Æ°á»£c tá»« hĂ ng
    tá»· trang vÄƒn báº£n khĂ´ng nhĂ£n (`status: stable`)
25. `02-scaling-laws.mdx` â€” Scaling Laws â€” VĂ¬ sao LLM cá»© to hÆ¡n láº¡i
    thÆ°á»ng tá»‘t hÆ¡n (`status: stable`, viáº¿t láº¡i 2026-07-06: paper gá»‘c
    Kaplan et al. 2020, power-law, sample efficiency)
26. `03-fine-tuning-instruction-tuning.mdx` â€” Fine-tuning & Instruction
    Tuning â€” Tá»« 'hoĂ n thĂ nh vÄƒn báº£n' sang 'lĂ m theo hÆ°á»›ng dáº«n'
    (`status: stable`; cáº­p nháº­t Task 85: thĂªm liĂªn káº¿t sang bĂ i 80 LoRA)

80. `05-lora.mdx` â€” LoRA â€” Fine-tune HĂ ng Tá»· Tham sá»‘ Báº±ng CĂ¡ch Chá»‰ Há»c
    Má»™t Ma tráº­n Háº¡ng Tháº¥p (`status: stable` â€” 2026-07-06, `module:
    "LLM"`, `submodule: "Huáº¥n luyá»‡n & Alignment"`, Ä‘Ă³ng khoáº£ng trá»‘ng
    fine-tuning hiá»‡u quáº£ tham sá»‘ chÆ°a tá»«ng nháº¯c â€” Hu, Shen, Wallis,
    Allen-Zhu, Li, Wang, Wang, Chen 2021 (Microsoft): giáº£ thuyáº¿t háº¡ng
    ná»™i táº¡i tháº¥p cá»§a Î”W, cĂ´ng thá»©c W'=W+BA (rank r << d,k), khá»Ÿi táº¡o
    A ngáº«u nhiĂªn/B=0 Ä‘á»ƒ Î”W=0 lĂºc báº¯t Ä‘áº§u, merge weights nĂªn khĂ´ng thĂªm
    inference latency, giáº£m 10.000 láº§n tham sá»‘/3 láº§n GPU memory GPT-3
    175B, cháº¥t lÆ°á»£ng tÆ°Æ¡ng Ä‘Æ°Æ¡ng/tá»‘t hÆ¡n full fine-tuning trĂªn
    RoBERTa/DeBERTa/GPT-2/GPT-3; liĂªn há»‡ full freezing exam-track 04 vĂ 
    factorized embedding ALBERT 69; chá»‰ 1 nguá»“n vĂ¬ khĂ´ng tĂ¬m Ä‘Æ°á»£c nguá»“n
    giáº£i thĂ­ch trá»±c giĂ¡c thá»© 2 (sebastianraschka.com/lilianweng.github.io
    khĂ´ng cĂ³ bĂ i riĂªng) â€” LoRA lĂ  1 ká»¹ thuáº­t cá»¥ thá»ƒ khĂ´ng pháº£i dĂ²ng tiáº¿n
    hoĂ¡ nhiá»u model, Ă¡p dá»¥ng ngoáº¡i lá»‡ má»¥c 2.1 nhÆ° tiá»n lá»‡ RoBERTa/DPO/
    WordPiece; nguá»“n arxiv 2106.09685

27. `04-rlhf-alignment.mdx` â€” RLHF & Alignment â€” DĂ¹ng Reinforcement
    Learning Ä‘á»ƒ LLM 'há»£p Ă½' con ngÆ°á»i hÆ¡n (`status: stable`, viáº¿t láº¡i
    2026-07-06: sá»‘ liá»‡u InstructGPT 1.3B vÆ°á»£t GPT-3 175B; cáº­p nháº­t Task
    83: thĂªm liĂªn káº¿t sang bĂ i 79 DPO)

79. `06-dpo.mdx` â€” DPO â€” NgĂ´n ngá»¯ MĂ´ hĂ¬nh 'BĂ­ máº­t' ChĂ­nh lĂ  Reward Model
    (`status: stable` â€” 2026-07-06, `module: "LLM"`, `submodule: "Huáº¥n
    luyá»‡n & Alignment"`, Ä‘Ă³ng khoáº£ng trá»‘ng DPO Ä‘Ă£ nháº¯c á»Ÿ bĂ i 27/47 nhÆ°ng
    chÆ°a cĂ³ cĂ´ng thá»©c cá»¥ thá»ƒ â€” Rafailov, Sharma, Mitchell, Ermon,
    Manning, Finn 2023 (NeurIPS): reward reparameterization
    r(x,y)=Î²Â·log(Ï€_Î¸/Ï€_ref)+Î²Â·log Z(x), káº¿t há»£p Bradley-Terry triá»‡t tiĂªu
    Z(x), rĂºt vá» binary cross-entropy loss (giá»‘ng Logistic Regression),
    vÆ°á»£t PPO á»Ÿ sentiment control/tÆ°Æ¡ng Ä‘Æ°Æ¡ng-tá»‘t hÆ¡n á»Ÿ summarization vĂ 
    dialogue; chá»‰ 1 nguá»“n vĂ¬ khĂ´ng tĂ¬m Ä‘Æ°á»£c nguá»“n giáº£i thĂ­ch trá»±c giĂ¡c
    thá»© 2 (lilianweng.github.io khĂ´ng cĂ³ bĂ i riĂªng) â€” DPO lĂ  cáº£i tiáº¿n
    trá»±c tiáº¿p 1 ká»¹ thuáº­t, khĂ´ng pháº£i dĂ²ng tiáº¿n hoĂ¡ nhiá»u model, Ă¡p dá»¥ng
    ngoáº¡i lá»‡ má»¥c 2.1 nhÆ° tiá»n lá»‡ RoBERTa/WordPiece; nguá»“n arxiv
    2305.18290)

28. `01-prompting-in-context-learning.mdx` â€” Prompting & In-context
    Learning â€” 'Dáº¡y' má»™t tĂ¡c vá»¥ má»›i mĂ  khĂ´ng cáº§n huáº¥n luyá»‡n láº¡i
    (`status: stable`, viáº¿t láº¡i 2026-07-06: báº±ng chá»©ng GPT-3/Brown et
    al. 2020)
29. `02-rag-embedding-agent.mdx` â€” RAG, Embedding & Agent â€” ÄÆ°a LLM vĂ o
    Sáº£n pháº©m tháº­t (`status: stable`, viáº¿t láº¡i 2026-07-06: paper gá»‘c
    Lewis et al. 2020 NeurIPS)
30. `01-bieu-dien-am-thanh.mdx` â€” Biá»ƒu diá»…n Ă‚m thanh cho ML â€” Tá»« Waveform
    tá»›i Spectrogram (`status: stable`; cáº­p nháº­t Task 110, 2026-07-07:
    bá»• sung section STFT chi tiáº¿t [cá»­a sá»• trÆ°á»£t win/hop, FFT n_fft, nguyĂªn
    lĂ½ báº¥t Ä‘á»‹nh Gabor tradeoff time-frequency, tham sá»‘ chuáº©n 2048/512] +
    section MFCC [DCT nĂ©n cho ASR truyá»n thá»‘ng] + vĂ­ dá»¥ sá»‘ cá»¥ thá»ƒ
    [16kHz 1s â†’ 16.000 máº«u â†’ 80Ă—32 mel-spectrogram]; nguá»“n D2L.ai)
31. `01-speech-to-text.mdx` â€” Speech-to-Text â€” Tá»« Spectrogram sang Chuá»—i
    VÄƒn báº£n (`status: stable`; cáº­p nháº­t Task 111, 2026-07-07: bá»• sung
    cĂ´ng thá»©c CTC loss `L=-log Î£_Ï€ P(Ï€|x)` + forward-backward algorithm
    + beam search decoding [score káº¿t há»£p CTC+LM] + WER `(S+D+I)/N` +
    Whisper chi tiáº¿t [680K giá», multitask training, zero-shot transfer];
    nguá»“n arxiv 2212.04356 + arxiv 1708.04469)
32. `01-text-to-speech.mdx` â€” Text-to-Speech â€” Sinh Giá»ng nĂ³i tá»« VÄƒn báº£n
    (`status: stable`; cáº£i thiá»‡n Task 82: thĂªm WaveNet â€” van den Oord
    2016, dilated causal convolution, nguá»“n arxiv 1609.03499; cáº­p nháº­t
    Task 112, 2026-07-07: bá»• sung Tacotron 2 [Shen 2018, location-
    sensitive attention] + FastSpeech [non-autoregressive, duration
    predictor] cho giai Ä‘oáº¡n 1 + HiFi-GAN [GAN vocoder, nhanh hÆ¡n
    WaveNet hĂ ng nghĂ¬n láº§n] cho giai Ä‘oáº¡n 2 + má»¥c Ä‘Ă¡nh giĂ¡ MOS; nguá»“n
    arxiv 1712.05884 + 2006.04558 + 2010.05646)
33. `01-object-detection.mdx` â€” Object Detection â€” KhĂ´ng chá»‰ PhĂ¢n loáº¡i,
    mĂ  cĂ²n Äá»‹nh vá»‹ Váº­t thá»ƒ (`status: stable`, viáº¿t láº¡i 2026-07-06: dĂ²ng
    tiáº¿n hoĂ¡ R-CNN â†’ Fast R-CNN â†’ Faster R-CNN, `submodule: "Detection"`)
34. `01-image-segmentation.mdx` â€” Image Segmentation â€” GĂ¡n nhĂ£n tá»›i tá»«ng
    Pixel (`status: stable`, viáº¿t láº¡i 2026-07-06: dĂ²ng tiáº¿n hoĂ¡ FCN â†’
    U-Net, `submodule: "Segmentation"`)
35. `02-alexnet.mdx` â€” AlexNet â€” BÆ°á»›c ngoáº·t khiáº¿n Deep Learning thá»‘ng trá»‹
    Computer Vision (`status: stable` â€” viáº¿t tháº³ng theo chuáº©n má»›i
    2026-07-06, ná»‘i tiáº¿p trá»±c tiáº¿p bĂ i 11, `submodule: "CÆ¡ báº£n"`)
36. `03-vgg.mdx` â€” VGG â€” Tá»« Thiáº¿t káº¿ Thá»§ cĂ´ng tá»›i Khá»‘i Kiáº¿n trĂºc CĂ³ há»‡
    thá»‘ng (`status: stable` â€” viáº¿t tháº³ng theo chuáº©n má»›i 2026-07-06, ná»‘i
    tiáº¿p AlexNet 35, `submodule: "CÆ¡ báº£n"`)
37. `04-resnet.mdx` â€” ResNet â€” Skip Connection Giáº£i quyáº¿t Váº¥n Ä‘á»
    Degradation khi Máº¡ng QuĂ¡ SĂ¢u (`status: stable` â€” viáº¿t tháº³ng theo
    chuáº©n má»›i 2026-07-06, ná»‘i tiáº¿p VGG 36, `submodule: "CÆ¡ báº£n"`)
38. `05-mobilenet.mdx` â€” MobileNet â€” Depthwise Separable Convolution cho
    Thiáº¿t bá»‹ Háº¡n cháº¿ TĂ i nguyĂªn (`status: stable` â€” viáº¿t tháº³ng theo
    chuáº©n má»›i 2026-07-06, ná»‘i tiáº¿p ResNet 37, `submodule: "CÆ¡ báº£n"`)
39. `02-yolo.mdx` â€” YOLO â€” Biáº¿n Object Detection thĂ nh BĂ i toĂ¡n Há»“i quy
    Má»™t BÆ°á»›c (`status: stable` â€” viáº¿t tháº³ng theo chuáº©n má»›i 2026-07-06,
    nhĂ¡nh one-stage song song vá»›i R-CNN family, `submodule: "Detection"`)
40. `02-unet.mdx` â€” U-Net â€” Encoder-Decoder Äá»‘i xá»©ng Giáº£i quyáº¿t BĂ i toĂ¡n
    Dá»¯ liá»‡u Y táº¿ Khan hiáº¿m (`status: stable` â€” viáº¿t tháº³ng theo chuáº©n má»›i
    2026-07-06, Ä‘Ă o sĂ¢u tá»« tĂ³m táº¯t á»Ÿ bĂ i 34, `submodule: "Segmentation"`)
41. `06-efficientnet.mdx` â€” EfficientNet â€” Compound Scaling CĂ¢n báº±ng CĂ³
    há»‡ thá»‘ng Äá»™ sĂ¢u/Rá»™ng/PhĂ¢n giáº£i (`status: stable` â€” viáº¿t tháº³ng theo
    chuáº©n má»›i 2026-07-06, ná»‘i tiáº¿p MobileNet 38, hoĂ n thiá»‡n dĂ²ng "CÆ¡
    báº£n", `submodule: "CÆ¡ báº£n"`)
42. `03-mask-rcnn.mdx` â€” Mask R-CNN â€” Káº¿t há»£p Detection vĂ  Segmentation
    trong Má»™t Kiáº¿n trĂºc (`status: stable` â€” viáº¿t tháº³ng theo chuáº©n má»›i
    2026-07-06, má»Ÿ rá»™ng Faster R-CNN (ká»ƒ á»Ÿ bĂ i 33) báº±ng nhĂ¡nh mask song
    song, káº¿t ná»‘i trá»±c tiáº¿p 2 sub-module Detection/Segmentation, Ä‘áº·t táº¡i
    `submodule: "Segmentation"` vĂ¬ báº£n cháº¥t bĂ i toĂ¡n lĂ  segmentation)
43. `01-collaborative-filtering-matrix-factorization.mdx` â€” Collaborative
    Filtering & Matrix Factorization â€” Gá»£i Ă½ Tá»« HĂ nh vi ÄĂ¡m Ä‘Ă´ng
    (`status: stable` â€” bĂ i má»Ÿ Ä‘áº§u module 9 "Recommendation Systems"
    má»›i, 2026-07-06: váº¥n Ä‘á» information overload + ma tráº­n rating thÆ°a,
    giáº£i phĂ¡p Matrix Factorization, lá»‹ch sá»­ Netflix Prize 2006/Simon
    Funk, nguá»“n D2L.ai chÆ°Æ¡ng Recommender Systems)
44. `02-neural-collaborative-filtering.mdx` â€” Neural Collaborative
    Filtering (NeuMF) â€” Thay TĂ­ch VĂ´ HÆ°á»›ng Báº±ng Máº¡ng NÆ¡-ron
    (`status: stable` â€” 2026-07-06, ná»‘i tiáº¿p bĂ i 43: He et al. 2017 thay
    tĂ­ch vĂ´ hÆ°á»›ng tuyáº¿n tĂ­nh báº±ng MLP há»c tÆ°Æ¡ng tĂ¡c phi tuyáº¿n, kiáº¿n trĂºc
    GMF+MLP há»£p nháº¥t qua concatenate, nguá»“n arxiv 1708.05031 + D2L.ai)
45. `03-bert.mdx` â€” BERT â€” Káº¿t há»£p Ngá»¯ cáº£nh Hai chiá»u vá»›i Kiáº¿n trĂºc
    Task-agnostic (`status: stable` â€” 2026-07-06, `module: "Sequence
    Model"`, ná»‘i tiáº¿p bĂ i 15 Transformer, Ä‘á»‘i láº­p GPT decoder-only Ä‘Ă£
    há»c á»Ÿ bĂ i 24: Devlin et al. 2018, Transformer encoder + Masked
    Language Modeling + Next Sentence Prediction, GLUE 80.5%/SQuAD F1
    93.2, nguá»“n arxiv 1810.04805 + D2L.ai)
46. `02-dcgan.mdx` â€” DCGAN â€” Kiáº¿n trĂºc Convolutional á»”n Ä‘á»‹nh hoĂ¡ Huáº¥n
    luyá»‡n GAN (`status: stable` â€” 2026-07-06, `module: "Generative
    Models"`, ná»‘i tiáº¿p bĂ i 23 GAN: Radford/Metz/Chintala 2015 thay MLP
    báº±ng convolutional architecture (transposed conv cho generator,
    LeakyReLU cho discriminator), nguá»“n arxiv 1511.06434 + D2L.ai)
47. `02-ppo.mdx` â€” PPO â€” Cáº­p nháº­t Policy An toĂ n Báº±ng Clipped Surrogate
    Objective (`status: stable` â€” 2026-07-06, `module: "Reinforcement
    Learning"`, `submodule: "Policy-based"`, ná»‘i tiáº¿p bĂ i 19 Policy
    Gradient: Schulman et al. 2017, clipped surrogate objective Ä‘Æ¡n giáº£n
    hoĂ¡ TRPO, liĂªn káº¿t trá»±c tiáº¿p bĂ i 27 RLHF, nguá»“n arxiv 1707.06347 +
    Lil'Log; cáº­p nháº­t cĂ¹ng task viáº¿t bĂ i 77: advantage Ă‚ giá» trá» sang
    Ä‘á»‹nh nghÄ©a tÆ°á»ng minh A=G-V(s) á»Ÿ bĂ i 77 A3C thay vĂ¬ chá»‰ nĂ³i máº­p má»
    "liĂªn quan cháº·t tá»›i baseline")

77. `03-a3c.mdx` â€” A3C â€” Song song hoĂ¡ Actor-Critic Báº±ng Nhiá»u Luá»“ng Äá»™c
    láº­p (`status: stable` â€” 2026-07-06, `module: "Reinforcement
    Learning"`, `submodule: "Policy-based"`, láº¥p khoáº£ng trá»‘ng advantage
    function chÆ°a Ä‘á»‹nh nghÄ©a tÆ°á»ng minh (bĂ i 47 PPO dĂ¹ng kĂ½ hiá»‡u Ă‚ nhÆ°ng
    chá»‰ nĂ³i máº­p má») â€” Mnih et al. 2016, váº¥n Ä‘á» tÆ°Æ¡ng quan máº«u khi cháº¡y 1
    mĂ´i trÆ°á»ng, giáº£i phĂ¡p nhiá»u actor-learner song song trĂªn nhiá»u báº£n
    sao mĂ´i trÆ°á»ng + cáº­p nháº­t báº¥t Ä‘á»“ng bá»™ vĂ o tham sá»‘ chung (khĂ¡c cÆ¡ cháº¿
    replay buffer cá»§a DQN bĂ i 18), Ä‘á»‹nh nghÄ©a advantage A(s,a)=G-V(s),
    SOTA Atari trĂªn CPU Ä‘a nhĂ¢n nhanh gáº¥p Ä‘Ă´i GPU, nháº¯c thĂªm biáº¿n thá»ƒ
    Ä‘á»“ng bá»™ A2C; Ä‘áº·t giá»¯a bĂ i 19 vĂ  47 theo má»‘c thá»i gian 2016â†’2017;
    nguá»“n arxiv 1602.01783 + lilianweng.github.io/posts/2018-04-08-
    policy-gradient (Ä‘Ă£ dĂ¹ng cho bĂ i 19/47, xĂ¡c nháº­n cĂ³ pháº§n A3C/A2C
    riĂªng)

78. `04-sac.mdx` â€” SAC â€” Tá»‘i Ä‘a hoĂ¡ Cáº£ Reward Láº«n Entropy Äá»ƒ Explore Tá»‘t
    HÆ¡n, Off-policy Hiá»‡u quáº£ HÆ¡n (`status: stable` â€” 2026-07-06, `module:
    "Reinforcement Learning"`, `submodule: "Policy-based"`, má»Ÿ nhĂ¡nh
    off-policy Ä‘áº§u tiĂªn cá»§a sub-module â€” toĂ n bá»™ dĂ²ng 19â†’77â†’47 Ä‘á»u
    on-policy â€” Haarnoja et al. 2018, váº¥n Ä‘á» on-policy kĂ©m hiá»‡u quáº£ dá»¯
    liá»‡u + off-policy trÆ°á»›c Ä‘Ă³ (DDPG) há»™i tá»¥ giĂ²n/nháº¡y hyperparameter,
    giáº£i phĂ¡p má»¥c tiĂªu maximum entropy (tá»‘i Ä‘a hoĂ¡ reward+entropy Ä‘á»“ng
    thá»i), kiáº¿n trĂºc 3 máº¡ng (policy/soft Q-value/soft state-value),
    temperature Î±, SOTA continuous control á»•n Ä‘á»‹nh hÆ¡n DDPG/PPO qua
    nhiá»u random seed; liĂªn há»‡ ngÆ°á»£c láº¡i off-policy Q-learning/DQN (18,
    Value-based) qua cĂ¹ng cÆ¡ cháº¿ replay buffer; nguá»“n arxiv 1801.01290 +
    lilianweng.github.io/posts/2018-04-08-policy-gradient (Ä‘Ă£ dĂ¹ng cho
    19/47/77, xĂ¡c nháº­n cĂ³ pháº§n SAC riĂªng)

48. `03-tsne.mdx` â€” t-SNE â€” Giáº£m chiá»u Phi tuyáº¿n Ä‘á»ƒ Trá»±c quan hoĂ¡ Cáº¥u
    trĂºc Cá»¥c bá»™ (`status: stable` â€” 2026-07-06, `module: "Dimensionality
    Reduction"`, ná»‘i tiáº¿p bĂ i 21 PCA: giá»¯ cáº¥u trĂºc lĂ¢n cáº­n cá»¥c bá»™ báº±ng
    Gaussian/Student-t + KL divergence, Ä‘á»‘i láº­p PCA tuyáº¿n tĂ­nh, 1 nguá»“n
    scikit-learn â€” khĂ´ng báº¯t buá»™c 2 nguá»“n vĂ¬ khĂ´ng thuá»™c dáº¡ng "dĂ²ng tiáº¿n
    hoĂ¡ nhiá»u model")
49. `01-diffusion-models.mdx` â€” Diffusion Models â€” Sinh Dá»¯ liá»‡u Báº±ng
    CĂ¡ch Há»c Khá»­ nhiá»…u Dáº§n (`status: stable` â€” 2026-07-06, `module:
    "Generative Models"`, ná»‘i tiáº¿p bĂ i 23 GAN/46 DCGAN: Ho/Jain/Abbeel
    2020 bá» cÆ¡ cháº¿ Ä‘á»‘i khĂ¡ng, forward/reverse process, FID 3.17 SOTA
    CIFAR-10, nguá»“n arxiv 2006.11239 + Lil'Log; cáº­p nháº­t Task 105,
    2026-07-07: bá»• sung variance schedule + closed-form `x_t=âˆá¾±_tÂ·x_0+
    âˆ(1-á¾±_t)Â·Îµ` + loss `L_simple=E[â€–Îµ-Îµ_Î¸â€–Â²]` + kiáº¿n trĂºc U-Net/time
    embedding/self-attention)
70. `02-ddim.mdx` â€” DDIM â€” Sinh Nhanh HÆ¡n 10-50 Láº§n Báº±ng QuĂ¡ trĂ¬nh
    Non-Markovian Táº¥t Ä‘á»‹nh (`status: stable` â€” 2026-07-06, `module:
    "Generative Models"`, ná»‘i tiáº¿p bĂ i 49 Diffusion Models: Song, Meng,
    Ermon 2020, quĂ¡ trĂ¬nh reverse non-Markovian chia sáº» training
    objective vá»›i DDPM (dĂ¹ng trá»±c tiáº¿p mĂ´ hĂ¬nh Ä‘Ă£ train), tham sá»‘ Î·
    Ä‘iá»u khiá»ƒn táº¥t Ä‘á»‹nh (Î·=0)/ngáº«u nhiĂªn (Î·=1), nhanh hÆ¡n 10-50 láº§n +
    kháº£ nÄƒng ná»™i suy ngá»¯ nghÄ©a má»›i, nguá»“n arxiv 2010.02502 + Lil'Log;
    cáº­p nháº­t Task 106, 2026-07-07: bá»• sung update rule (dá»± Ä‘oĂ¡n x_0 rá»“i
    tĂ­nh x_{t-1}) + section classifier-free guidance [Ho & Salimans 2022,
    `Îµ̀‚=(1+w)Â·Îµ(x_t,c)âˆ’wÂ·Îµ(x_t,âˆ…)`, guidance scale 7.5, biáº¿n diffusion
    thĂ nh text-to-image thá»±c táº¿], nguá»“n arxiv 2207.12598)
50. `04-umap.mdx` â€” UMAP â€” Giá»¯ Cáº¥u trĂºc ToĂ n cá»¥c Tá»‘t hÆ¡n t-SNE Vá»›i Tá»‘c
    Ä‘á»™ Nhanh hÆ¡n (`status: stable` â€” 2026-07-06, `module:
    "Dimensionality Reduction"`, ná»‘i tiáº¿p bĂ i 48 t-SNE: McInnes/Healy/
    Melville 2018, giáº£i quyáº¿t 3 háº¡n cháº¿ t-SNE (compute/cáº¥u trĂºc toĂ n
    cá»¥c/giá»›i háº¡n chiá»u), nguá»“n arxiv 1802.03426, 1 nguá»“n theo tiá»n lá»‡
    t-SNE)
51. `03-deepfm.mdx` â€” DeepFM â€” Káº¿t há»£p Factorization Machines vá»›i Deep
    Learning Ä‘á»ƒ Tá»± Ä‘á»™ng Há»c TÆ°Æ¡ng tĂ¡c Feature (`status: stable` â€”
    2026-07-06, `module: "Recommendation Systems"`, ná»‘i tiáº¿p bĂ i 44
    NeuMF: Guo et al. 2017, chuyá»ƒn hÆ°á»›ng CF thuáº§n (chá»‰ ID) sang
    feature-rich, kiáº¿n trĂºc FM+Deep song song giá»‘ng NeuMF (GMF+MLP),
    nguá»“n arxiv 1703.04247 + D2L.ai)
52. `04-bayesian-personalized-ranking.mdx` â€” Bayesian Personalized
    Ranking (BPR) â€” Tá»‘i Æ°u Trá»±c tiáº¿p Cho Xáº¿p háº¡ng Thay vĂ¬ Dá»± Ä‘oĂ¡n Äiá»ƒm
    (`status: stable` â€” 2026-07-06, `module: "Recommendation Systems"`,
    ná»‘i tiáº¿p bĂ i 43 Matrix Factorization: Rendle et al. 2009, pairwise
    ranking BPR-Opt thay vĂ¬ dá»± Ä‘oĂ¡n Ä‘iá»ƒm, nguá»“n arxiv 1205.2618 + D2L.ai)

81. `05-autorec.mdx` â€” AutoRec â€” Coi Dá»± Ä‘oĂ¡n Rating LĂ  BĂ i toĂ¡n TĂ¡i táº¡o
    Cá»§a Autoencoder (`status: stable` â€” 2026-07-06, `module:
    "Recommendation Systems"`, Ä‘Ă³ng khoáº£ng trá»‘ng Ä‘Ă£ ghi á»Ÿ bĂ i 43/44
    ("cĂ³ thá»ƒ lĂ  bĂ i tiáº¿p theo cá»§a module") â€” nhĂ¡nh song song vá»›i NeuMF
    (bĂ i 44), cáº£ 2 má»Ÿ rá»™ng phi tuyáº¿n tá»« Matrix Factorization nhÆ°ng khĂ¡c
    kiáº¿n trĂºc ná»n táº£ng â€” Sedhain, Menon, Sanner, Xie 2015 (WWW): I/U-
    AutoRec, cĂ´ng thá»©c encoder-decoder h(R*i)=f(WÂ·g(VÂ·R*i+Î¼)+b), gradient
    masking chá»‰ tĂ­nh loss trĂªn rating quan sĂ¡t Ä‘Æ°á»£c (nhĂ¢n dá»± Ä‘oĂ¡n vá»›i
    sign(input)), RMSE 0.900 MovieLens 100K vÆ°á»£t Biased Matrix
    Factorization; paper gá»‘c khĂ´ng cĂ³ báº£n arxiv (chá»‰ WWW conference,
    ngoĂ i whitelist) â€” dĂ¹ng 1 nguá»“n D2L.ai autorec.html Ä‘á»§ chi tiáº¿t cĂ´ng
    thá»©c/káº¿t quáº£, theo tiá»n lá»‡ SVM/t-SNE

53. `09-naive-bayes.mdx` â€” Naive Bayes â€” PhĂ¢n loáº¡i Nhanh Báº±ng Giáº£ Ä‘á»‹nh
    Äá»™c láº­p CĂ³ Ä‘iá»u kiá»‡n (`status: stable` â€” 2026-07-06, `module: "Ná»n
    táº£ng ToĂ¡n & ML cá»• Ä‘iá»ƒn"`, ná»‘i tiáº¿p bĂ i 01: giáº£ Ä‘á»‹nh conditional
    independence giáº£i quyáº¿t curse of dimensionality, biáº¿n thá»ƒ Gaussian/
    Multinomial/Bernoulli, 1 nguá»“n scikit-learn)
54. `06-t5.mdx` â€” T5 â€” Thá»‘ng nháº¥t Má»i TĂ¡c vá»¥ NLP ThĂ nh Má»™t Äá»‹nh dáº¡ng
    Text-to-Text (`status: stable` â€” 2026-07-06, `module: "Sequence
    Model"`, ná»‘i tiáº¿p BERT 45 vĂ  GPT/Pretraining 24: Raffel et al. 2020,
    encoder-decoder + text-to-text framework, hoĂ n thiá»‡n 3 nhĂ¡nh kiáº¿n
    trĂºc Transformer, nguá»“n arxiv 1910.10683 + Lil'Log)
55. `07-vision-transformer.mdx` â€” Vision Transformer (ViT) â€” ThĂ¡ch thá»©c
    Giáº£ Ä‘á»‹nh 'CNN lĂ  Báº¯t buá»™c cho áº¢nh' (`status: stable` â€” 2026-07-06,
    `module: "Computer Vision"`, `submodule: "CÆ¡ báº£n"`, ná»‘i tiáº¿p
    EfficientNet 41 + Transformer 15: Dosovitskiy et al. 2020, patch
    embedding, tháº¯ng CNN khi pretrain Ä‘á»§ lá»›n, nguá»“n arxiv 2010.11929 +
    D2L.ai)
56. `03-ssd.mdx` â€” SSD â€” Multi-scale Feature Maps Giáº£i quyáº¿t Váº¥n Ä‘á» PhĂ¡t
    hiá»‡n Váº­t thá»ƒ Nhiá»u KĂ­ch thÆ°á»›c (`status: stable` â€” 2026-07-06,
    `module: "Computer Vision"`, `submodule: "Detection"`, ná»‘i tiáº¿p YOLO
    39: Liu et al. 2016, multi-scale feature maps, 72.1% mAP @58FPS,
    nguá»“n arxiv 1512.02325 + D2L.ai)
57. `04-deeplab.mdx` â€” DeepLab â€” Atrous Convolution Giáº£i quyáº¿t ÄĂ¡nh Ä‘á»•i
    Giá»¯a Ngá»¯ cáº£nh Äa tá»· lá»‡ vĂ  Äá»™ phĂ¢n giáº£i (`status: stable` â€”
    2026-07-06, `module: "Computer Vision"`, `submodule: "Segmentation"`,
    ná»‘i tiáº¿p U-Net 40: Chen et al. 2017/2018 (DeepLabv3/v3+), atrous
    convolution + ASPP + decoder, 89.0% PASCAL VOC/82.1% Cityscapes,
    nguá»“n 2 paper arxiv 1706.05587 + 1802.02611)
58. `08-swin-transformer.mdx` â€” Swin Transformer â€” Shifted Window
    Attention Giáº£i quyáº¿t Äá»™ phá»©c táº¡p Báº­c hai cá»§a ViT (`status: stable` â€”
    2026-07-06, `module: "Computer Vision"`, `submodule: "CÆ¡ báº£n"`, ná»‘i
    tiáº¿p ViT 55: Liu et al. 2021, shifted window + cáº¥u trĂºc phĂ¢n cáº¥p,
    backbone tá»•ng quĂ¡t classification/detection/segmentation, nguá»“n
    arxiv 2103.14030 + D2L.ai)
59. `05-segformer.mdx` â€” SegFormer â€” Káº¿t há»£p Transformer PhĂ¢n cáº¥p vá»›i
    Decoder MLP Nháº¹ cho Segmentation (`status: stable` â€” 2026-07-06,
    `module: "Computer Vision"`, `submodule: "Segmentation"`, ná»‘i tiáº¿p
    Swin 58 + DeepLab 57: Xie et al. 2021 NeurIPS, bá» positional
    encoding + decoder MLP siĂªu nháº¹, 50.3% mIoU ADE20K, nguá»“n arxiv
    2105.15203 + D2L.ai)
60. `04-anchor-free-detection.mdx` â€” Anchor-free Detection â€” Bá» háº³n
    Anchor Box, Dá»± Ä‘oĂ¡n Trá»±c tiáº¿p Theo Äiá»ƒm/Pixel (`status: stable` â€”
    2026-07-06, `module: "Computer Vision"`, `submodule: "Detection"`,
    ná»‘i tiáº¿p Object Detection 33: FCOS (Tian et al. 2019) + CenterNet
    (Zhou et al. 2019), 2 nhĂ³m tĂ¡c giáº£ Ä‘á»™c láº­p cĂ¹ng chá»§ Ä‘á», nguá»“n arxiv
    1904.01355 + 1904.07850)
61. `07-transformer-xl.mdx` â€” Transformer-XL â€” Segment-level Recurrence
    Giáº£i quyáº¿t Váº¥n Ä‘á» Context Fragmentation (`status: stable` â€”
    2026-07-06, `module: "Sequence Model"`, ná»‘i tiáº¿p Transformer 15:
    Dai et al. 2019, tĂ¡i sá»­ dá»¥ng hidden state qua segment + relative
    positional encoding, dĂ i hÆ¡n 450%/nhanh hÆ¡n 1800 láº§n, nguá»“n arxiv
    1901.02860 + Lil'Log)
62. `08-longformer.mdx` â€” Longformer & Efficient
    Attention â€” Giáº£i quyáº¿t Trá»±c tiáº¿p Äá»™ phá»©c táº¡p Báº­c hai cá»§a
    Self-Attention (`status: stable` â€” 2026-07-06, `module: "Sequence
    Model"`, ná»‘i tiáº¿p Transformer-XL 61 + Swin Transformer 58: Beltagy
    et al. 2020, local windowed + global attention, káº¿t ná»‘i liĂªn module
    vá»›i CV, nguá»“n arxiv 2004.05150 + Lil'Log)
63. `03-bidirectional-rnn.mdx` â€” Bidirectional RNN/LSTM/GRU â€” DĂ¹ng Cáº£
    Ngá»¯ cáº£nh TÆ°Æ¡ng lai, KhĂ´ng Chá»‰ QuĂ¡ khá»© (`status: stable` â€” 2026-07-06,
    `module: "Sequence Model"`, `submodule: "RNN Family"`, ná»‘i tiáº¿p
    LSTM/GRU 13: ká»¹ thuáº­t wrapper tá»•ng quĂ¡t cho má»i cell há»“i quy (xĂ¡c
    nháº­n rĂµ vá»›i ngÆ°á»i váº­n hĂ nh, khĂ´ng riĂªng RNN), cháº¡y 2 máº¡ng ngÆ°á»£c
    chiá»u + ghĂ©p hidden state, nguá»“n D2L.ai)
64. `01-tokenization-word-to-subword.mdx` â€” Tokenization â€” Tá»« Cáº¥p Ä‘á»™ Tá»«
    tá»›i Subword, VĂ¬ sao Byte Pair Encoding Hiá»‡u quáº£ (`status: stable` â€”
    2026-07-06, `module: "Sequence Model"`, `submodule: "Tokenization"`
    â€” bĂ i má»Ÿ Ä‘áº§u sub-module má»›i, má»Ÿ rá»™ng scope ngay sau khi viáº¿t theo
    lĂ m rĂµ cá»§a ngÆ°á»i váº­n hĂ nh (xem `CLAUDE.md` má»¥c 1.2) Ä‘á»ƒ bao gá»“m cáº£
    word embedding, khĂ´ng chá»‰ segmentation: Sennrich, Haddow, Birch 2015,
    BPE giáº£i quyáº¿t vocab size khá»•ng lá»“ (~3Ă—10â¸ 6-gram) + out-of-vocabulary
    báº±ng subword segmentation, +1.1/+1.3 BLEU WMT15, nguá»“n arxiv
    1508.07909 + D2L.ai)
65. `02-word2vec.mdx` â€” Word2vec â€” Biáº¿n Token Rá»i ráº¡c ThĂ nh Vector Sá»‘
    Mang NghÄ©a (`status: stable` â€” 2026-07-06, `module: "Sequence
    Model"`, `submodule: "Tokenization"` â€” bĂ i Ä‘áº§u nhĂ¡nh con Embedding,
    ná»‘i tiáº¿p bĂ i 64: Mikolov, Chen, Corrado, Dean 2013, one-hot cĂ³
    cosine similarity má»i cáº·p tá»« luĂ´n = 0 â†’ Skip-gram (Ä‘oĂ¡n ngá»¯ cáº£nh tá»«
    center word) + CBOW (Ä‘oĂ¡n center word tá»« ngá»¯ cáº£nh) há»c dense vector
    self-supervised, huáº¥n luyá»‡n dÆ°á»›i 1 ngĂ y/1.6 tá»· tá»«, SOTA Ä‘o tÆ°Æ¡ng tá»±
    tá»«, nguá»“n arxiv 1301.3781 + D2L.ai)
66. `03-glove.mdx` â€” GloVe â€” Táº­n dá»¥ng Thá»‘ng kĂª Äá»“ng xuáº¥t hiá»‡n ToĂ n cá»¥c
    Thay vĂ¬ Chá»‰ Ngá»¯ cáº£nh Cá»¥c bá»™ (`status: stable` â€” 2026-07-06, `module:
    "Sequence Model"`, `submodule: "Tokenization"`, ná»‘i tiáº¿p bĂ i 65:
    Pennington, Socher, Manning 2014, ma tráº­n Ä‘áº¿m Ä‘á»“ng xuáº¥t hiá»‡n toĂ n
    cá»¥c + weighted-squared-loss khá»›p log(sá»‘ Ä‘áº¿m), triáº¿t lĂ½ count-based
    Ä‘á»‘i láº­p predictive cá»§a word2vec, cháº¥t lÆ°á»£ng tÆ°Æ¡ng Ä‘Æ°Æ¡ng â€” paper gá»‘c
    khĂ´ng cĂ³ trĂªn arxiv (chá»‰ nlp.stanford.edu, ngoĂ i whitelist), dĂ¹ng
    nguá»“n D2L.ai + machinelearningmastery.com thay tháº¿)
67. `04-wordpiece.mdx` â€” WordPiece â€” TiĂªu chĂ­ GhĂ©p Dá»±a trĂªn Kháº£ nÄƒng,
    KhĂ´ng Chá»‰ Táº§n suáº¥t (`status: stable` â€” 2026-07-06, `module:
    "Sequence Model"`, `submodule: "Tokenization"`, ná»‘i tiáº¿p bĂ i 64 BPE:
    ká»¹ thuáº­t tokenize dĂ¹ng trong BERT, Ä‘á»•i tiĂªu chĂ­ ghĂ©p tá»« táº§n suáº¥t thĂ´
    (BPE) sang tÄƒng likelihood dá»¯ liá»‡u huáº¥n luyá»‡n, nguá»“n gá»‘c phĂ¢n Ä‘oáº¡n
    tiáº¿ng Nháº­t/HĂ n â€” bĂ i ngáº¯n hÆ¡n thÆ°á»ng lá»‡ do háº¡n cháº¿ nguá»“n WebFetch
    vá»›i PDF arxiv (chá»‰ Ä‘á»c Ä‘Æ°á»£c abstract), Ä‘Ă£ xin Ă½ kiáº¿n ngÆ°á»i váº­n hĂ nh
    trÆ°á»›c khi viáº¿t vá»›i 1 nguá»“n chĂ­nh lilianweng.github.io)
72. `05-sentencepiece.mdx` â€” SentencePiece â€” Tokenize Trá»±c tiáº¿p Tá»« VÄƒn
    báº£n ThĂ´, KhĂ´ng Cáº§n TĂ¡ch Tá»« TrÆ°á»›c (`status: stable` â€” 2026-07-06,
    `module: "Sequence Model"`, `submodule: "Tokenization"`, ná»‘i tiáº¿p bĂ i
    67 WordPiece: Kudo, Richardson 2018, bá» giáº£ Ä‘á»‹nh "Ä‘Ă£ tĂ¡ch tá»« sáºµn" cá»§a
    BPE/WordPiece, xá»­ lĂ½ khoáº£ng tráº¯ng nhÆ° kĂ½ hiá»‡u bĂ¬nh thÆ°á»ng + Unicode
    thĂ´, Ä‘á»™c láº­p ngĂ´n ngá»¯; kĂ¨m Unigram Language Model top-down (ngÆ°á»£c
    bottom-up cá»§a BPE/WordPiece); T5 (54) dĂ¹ng SentencePiece â€” káº¿t ná»‘i
    trá»±c tiáº¿p Tokenization/Transformer Architecture, nguá»“n arxiv
    1808.06226 + machinelearningmastery.com)
68. `04-deep-rnn.mdx` â€” Deep RNN â€” Xáº¿p chá»“ng Nhiá»u Lá»›p Há»“i quy Äá»ƒ Há»c
    Quan há»‡ Phá»©c táº¡p HÆ¡n (`status: stable` â€” 2026-07-06, `module:
    "Sequence Model"`, `submodule: "RNN Family"`, ná»‘i tiáº¿p LSTM/GRU 13:
    RNN 1 lá»›p giá»›i háº¡n kháº£ nÄƒng biá»ƒu diá»…n quan há»‡ input-output cĂ¹ng bÆ°á»›c
    thá»i gian â†’ xáº¿p chá»“ng nhiá»u lá»›p theo chiá»u input-to-output, cĂ´ng
    thá»©c H_t^(l) káº¿t há»£p trá»¥c thá»i gian + Ä‘á»™ sĂ¢u, Ä‘Ă¡nh Ä‘á»•i gradient lan
    truyá»n 2 chiá»u khĂ³ há»™i tá»¥ hÆ¡n, nguá»“n D2L.ai + arxiv 1312.6026
    Pascanu et al. 2013)
73. `05-seq2seq.mdx` â€” Seq2seq (Encoder-Decoder) â€” Ănh
    xáº¡ Chuá»—i sang Chuá»—i Äá»™ dĂ i KhĂ¡c nhau (`status: stable` â€” 2026-07-06,
    `module: "Sequence Model"`, `submodule: "RNN Family"`, láº¥p khoáº£ng
    trá»‘ng cáº¥u trĂºc: bĂ i 14 (Attention) nháº¯c "seq2seq cá»• Ä‘iá»ƒn" nhÆ° bá»‘i
    cáº£nh nhÆ°ng khĂ¡i niá»‡m nĂ y chÆ°a tá»«ng Ä‘Æ°á»£c dáº¡y riĂªng â€” Sutskever/Vinyals/
    Le 2014, LSTM encoder nĂ©n cĂ¢u nguá»“n thĂ nh context vector cá»‘ Ä‘á»‹nh +
    LSTM decoder sinh cĂ¢u Ä‘Ă­ch tá»«ng token (giáº£i quyáº¿t input/output Ä‘á»™ dĂ i
    khĂ¡c nhau), teacher forcing, ká»¹ thuáº­t Ä‘áº£o ngÆ°á»£c cĂ¢u nguá»“n, BLEU 34.8
    WMT'14 Anhâ†’PhĂ¡p; ná»‘i tiáº¿p LSTM/GRU 13, tiá»n Ä‘á» trá»±c tiáº¿p cho Attention
    14 (Ä‘Ă£ Ä‘á»•i `prerequisites` trá» sang bĂ i nĂ y); nguá»“n arxiv 1409.3215 +
    D2L.ai)

**Task 69 (2026-07-06):** Ä‘Ă¡nh giĂ¡ "Deep Bidirectional LSTM" (Deep RNN +
Bidirectional káº¿t há»£p) â€” WebSearch/WebFetch trá»±c tiáº¿p d2l.ai
(`chapter_recurrent-modern/bi-rnn.html`) xĂ¡c nháº­n trang nĂ y chá»‰ dĂ nh Ä‘Ăºng
1 cĂ¢u cho Ă½ tÆ°á»Ÿng xáº¿p chá»“ng lá»›p bidirectional, khĂ´ng cĂ³ cĂ´ng thá»©c/má»¥c
riĂªng â€” káº¿t luáº­n Ä‘Ă¢y lĂ  ghĂ©p cÆ¡ há»c 2 ká»¹ thuáº­t Ä‘Ă£ dáº¡y (68 Deep RNN + 63
Bidirectional), khĂ´ng Ä‘á»§ cháº¥t liá»‡u cho 1 bĂ i riĂªng. CĂ¢u nháº¯c sáºµn cĂ³ á»Ÿ
cuá»‘i bĂ i 68 lĂ  Ä‘á»§. KhĂ´ng sá»­a file `.mdx` nĂ o, chá»‰ cáº­p nháº­t `_index.mdx`
Ä‘Ă³ng khoáº£ng trá»‘ng.

**Task 70 (2026-07-06):** tÆ°Æ¡ng tá»±, Ä‘Ă¡nh giĂ¡ "peephole connections"
(biáº¿n thá»ƒ LSTM, Gers & Schmidhuber 2000) â€” tĂ¬m Ä‘Æ°á»£c nguá»“n arxiv 1503.04069
"LSTM: A Search Space Odyssey" (Greff, Srivastava, KoutnĂ­k, Steunebrink,
Schmidhuber 2015): nghiĂªn cá»©u thá»±c nghiá»‡m 8 biáº¿n thá»ƒ LSTM trĂªn 3 bĂ i toĂ¡n
(speech recognition, handwriting recognition, polyphonic music modeling),
5400 lÆ°á»£t cháº¡y â€” káº¿t luáº­n khĂ´ng biáº¿n thá»ƒ nĂ o (ká»ƒ cáº£ peephole) cáº£i thiá»‡n
Ä‘Ă¡ng ká»ƒ so vá»›i LSTM chuáº©n, chá»‰ forget gate + output activation quan
trá»ng. KhĂ´ng Ä‘á»§ cháº¥t liá»‡u cho bĂ i riĂªng nhÆ°ng lĂ  bĂ i há»c thá»±c nghiá»‡m giĂ¡
trá»‹ â€” thĂªm 1 Ä‘oáº¡n vĂ o bĂ i 13 (LSTM & GRU) thay vĂ¬ tĂ¡ch bĂ i, Ä‘Ă³ng khoáº£ng
trá»‘ng cuá»‘i cĂ¹ng cá»§a sub-module RNN Family (giá» coi lĂ  Ä‘Ă£ khai thĂ¡c háº¿t
hÆ°á»›ng Ä‘Ă o sĂ¢u cĂ³ nguá»“n whitelist phĂ¹ há»£p, 5 bĂ i: 12, 13, 63, 68, 73).

74. `09-reformer.mdx` â€” Reformer â€” LSH Attention vĂ  Reversible Layers
    Giáº£i quyáº¿t Cáº£ Compute láº«n Bá»™ nhá»› (`status: stable` â€” 2026-07-06,
    `module: "Sequence Model"`, `submodule: "Transformer Architecture"`,
    Ä‘Ă o sĂ¢u nhĂ¡nh Ä‘Ă£ nháº¯c sÆ¡ qua á»Ÿ bĂ i 62 Longformer â€” Kitaev, Kaiser,
    Levskaya 2020, hai ká»¹ thuáº­t Ä‘á»™c láº­p: LSH attention (hash h(x) =
    argmax([xR;-xR]), nhĂ³m query/key tÆ°Æ¡ng tá»± vĂ o bucket, O(L log L)
    thay vĂ¬ O(LÂ²), shared-QK attention) + reversible residual layers
    (y1=x1+Attention(x2), y2=x2+FeedForward(y1), tĂ­nh láº¡i activation
    thay vĂ¬ lÆ°u trá»¯, giáº£i quyáº¿t bá»™ nhá»› tá»· lá»‡ N lá»›p); khĂ¡c Longformer á»Ÿ
    chá»— nhĂ³m Äá»˜NG qua hashing thay vĂ¬ máº«u hĂ¬nh cá»‘ Ä‘á»‹nh trÆ°á»›c; nguá»“n
    arxiv 2001.04451 + lilianweng.github.io/posts/2020-04-07-the-
    transformer-family)

75. `04-roberta.mdx` â€” RoBERTa â€” BERT Bá»‹ Huáº¥n luyá»‡n ChÆ°a Tá»›i, KhĂ´ng Pháº£i
    Kiáº¿n trĂºc Sai (`status: stable` â€” 2026-07-06, `module: "Sequence
    Model"`, `submodule: "Transformer Architecture"`, Ä‘Ă³ng khoáº£ng trá»‘ng
    "RoBERTa" ghi á»Ÿ _index.mdx tá»« lĂ¢u (tá»«ng Ä‘Ă¡nh giĂ¡ nguá»“n má» nháº¡t) â€”
    Liu et al. 2019, káº¿t luáº­n BERT gá»‘c undertrained: bá» Next Sentence
    Prediction (khĂ´ng giáº£m hiá»‡u nÄƒng), dynamic masking thay static,
    batch size lá»›n hÆ¡n, 160GB dá»¯ liá»‡u (10 láº§n BERT gá»‘c), vÆ°á»£t cĂ¡c model
    cĂ´ng bá»‘ sau BERT dĂ¹ KHĂ”NG Ä‘á»•i kiáº¿n trĂºc â€” Ä‘á»‘i láº­p triáº¿t lĂ½ vá»›i
    ALBERT (69, Ä‘á»•i kiáº¿n trĂºc giáº£m tham sá»‘); nguá»“n arxiv 1907.11692,
    bĂ i ngáº¯n hÆ¡n thÆ°á»ng lá»‡ vĂ¬ WebFetch chá»‰ tráº£ vá» abstract (khĂ´ng cĂ³ sá»‘
    liá»‡u chi tiáº¿t trong ná»™i dung Ä‘áº§y Ä‘á»§) vĂ  khĂ´ng tĂ¬m Ä‘Æ°á»£c nguá»“n giáº£i
    thĂ­ch trá»±c giĂ¡c thá»© 2 trong whitelist qua WebSearch â€” theo Ä‘Ăºng
    tiá»n lá»‡ bĂ i 67 WordPiece. Sub-module Transformer Architecture (9
    bĂ i: 14, 15, 45, 54, 61, 62, 69, 74, 75) coi lĂ  Ä‘Ă£ khai thĂ¡c háº¿t
    hÆ°á»›ng Ä‘Ă o sĂ¢u cĂ³ nguá»“n whitelist phĂ¹ há»£p.

76. `06-elmo.mdx` â€” ELMo â€” Embedding Phá»¥ thuá»™c Ngá»¯ cáº£nh, Cáº§u ná»‘i Giá»¯a
    Word2vec vĂ  BERT (`status: stable` â€” 2026-07-06, `module: "Sequence
    Model"`, `submodule: "Tokenization"`, nhĂ¡nh Embedding â€” Ä‘Ă³ng khoáº£ng
    trá»‘ng "liĂªn há»‡ contextual embedding" Ä‘Ă£ ghi á»Ÿ _index.mdx tá»« khi viáº¿t
    bĂ i 65 (word2vec), ELMo Ä‘Ă£ Ä‘Æ°á»£c nháº¯c nhÆ° Ä‘á»‘i chiáº¿u á»Ÿ bĂ i 45 (BERT)
    nhÆ°ng chÆ°a tá»«ng dáº¡y riĂªng â€” Peters et al. 2018, váº¥n Ä‘á» polysemy
    ("crane" con sáº¿u vs cáº§n cáº©u), kiáº¿n trĂºc character-CNN + biLSTM nhiá»u
    lá»›p pretrain, tá»• há»£p trá»ng sá»‘ cĂ¡c lá»›p (khĂ¡c word2vec/GloVe chá»‰ 1 lá»›p
    biá»ƒu diá»…n), cáº£i thiá»‡n SOTA 6 benchmark (giáº£m lá»—i tÆ°Æ¡ng Ä‘á»‘i 6-20%),
    háº¡n cháº¿ váº«n cáº§n kiáº¿n trĂºc riĂªng theo tĂ¡c vá»¥ (khoáº£ng trá»‘ng BERT láº¥p
    sau Ä‘Ă³); nguá»“n arxiv 1802.05365 + D2L.ai bert.html (cĂ¹ng nguá»“n Ä‘Ă£
    dĂ¹ng cho bĂ i 45, xĂ¡c nháº­n cĂ³ sáºµn pháº§n mĂ´ táº£ ELMo cá»¥ thá»ƒ). Sub-module
    Tokenization giá» 6 bĂ i (64, 65, 66, 67, 72, 76) â€” coi lĂ  Ä‘Ă£ khai thĂ¡c
    háº¿t khoáº£ng trá»‘ng Ä‘Ă£ ghi nháº­n.

69. `05-albert.mdx` â€” ALBERT â€” Giáº£m 18 Láº§n Tham sá»‘ BERT Báº±ng Chia sáº»
    Trá»ng sá»‘ vĂ  Factorized Embedding (`status: stable` â€” 2026-07-06,
    `module: "Sequence Model"`, `submodule: "Transformer Architecture"`,
    ná»‘i tiáº¿p BERT 45: Lan et al. 2019, factorized embedding
    parameterization (tĂ¡ch VĂ—H thĂ nh VĂ—E+EĂ—H) + cross-layer parameter
    sharing + Sentence-Order Prediction thay NSP, giáº£m 18 láº§n tham
    sá»‘/nhanh hÆ¡n 1.7 láº§n váº«n SOTA GLUE/RACE/SQuAD, nguá»“n arxiv 1909.11942
    + Lil'Log)

Vá»›i bĂ i 23, Ä‘á»£t má»Ÿ rá»™ng thá»© 2 (Ensemble Methods â†’ PCA â†’ Autoencoder â†’ GAN)
hoĂ n thĂ nh.

Vá»›i bĂ i 19, nhĂ¡nh Reinforcement Learning hoĂ n thĂ nh lá»™ trĂ¬nh cÆ¡ báº£n. Tá»«
bĂ i 20, tiáº¿p tá»¥c má»Ÿ rá»™ng sang cĂ¡c chá»§ Ä‘á» DL/ML nĂ¢ng cao khĂ¡c. BĂ i 6 (SVM),
bĂ i 10 (Regularization), vĂ  bĂ i 21 (PCA) Ä‘Æ°á»£c chĂ¨n sau khi pháº§n lá»›n track
Ä‘Ă£ á»•n Ä‘á»‹nh â€” SVM láº¥p khoáº£ng trá»‘ng gĂ³c nhĂ¬n margin maximization trong nhĂ³m
classification cá»• Ä‘iá»ƒn; Regularization láº¥p khoáº£ng trá»‘ng overfitting cho
máº¡ng nÆ¡-ron; PCA láº¥p khoáº£ng trá»‘ng gĂ³c nhĂ¬n Ä‘áº¡i sá»‘ tuyáº¿n tĂ­nh cho giáº£m
chiá»u, Ä‘á»‘i chiáº¿u trá»±c tiáº¿p vá»›i Autoencoder ngay sau. Má»i bĂ i liĂªn quan Ä‘Ă£
dá»‹ch order tÆ°Æ¡ng á»©ng.

**Äá»£t má»Ÿ rá»™ng thá»© 3 (bĂ i 24-32, 2026-07-05) HOĂ€N THĂ€NH TRá»ŒN Váº¸N cáº£ 2
series:**
- **Series LLM (24-29):** Pretraining â†’ Scaling Laws â†’ Fine-tuning/
  Instruction Tuning â†’ RLHF/Alignment â†’ Prompting/In-context Learning â†’
  RAG/Embedding/Agent â€” Ä‘Ăºng pháº¡m vi "Ä‘áº§y Ä‘á»§ + á»©ng dá»¥ng thá»±c chiáº¿n".
- **Series Audio (30-32):** Biá»ƒu diá»…n Ă‚m thanh (waveform/spectrogram/
  mel-spectrogram) â†’ Speech-to-Text (CTC/encoder-decoder) â†’ Text-to-Speech
  (2 giai Ä‘oáº¡n, vocoder) â€” Ä‘Ăºng pháº¡m vi "Speech recognition + TTS cÆ¡ báº£n".

**Äá»£t má»Ÿ rá»™ng thá»© 4 (bĂ i 33-34, 2026-07-05) HOĂ€N THĂ€NH: Computer Vision
nĂ¢ng cao** â€” Object Detection (bounding box, IoU, anchor box, NMS,
two-stage vs one-stage) â†’ Image Segmentation (semantic vs instance,
báº£ng so sĂ¡nh 4 tĂ¡c vá»¥ CV). Ná»‘i tiáº¿p trá»±c tiáº¿p CNN (11) â€” Ä‘Æ°á»£c chá»n qua
Ä‘Ă¡nh giĂ¡ 5 hÆ°á»›ng má»Ÿ rá»™ng (Multi-modal, Recommendation systems, Time
series cá»• Ä‘iá»ƒn Ä‘Æ°á»£c xáº¿p Æ°u tiĂªn tháº¥p hÆ¡n, cĂ³ thá»ƒ triá»ƒn khai sau).

Xem `CLAUDE.md` má»¥c 2.1 "Quyáº¿t Ä‘á»‹nh má»Ÿ rá»™ng pháº¡m vi láº§n 3" cho chi tiáº¿t.
Cáº£ 2 series thĂªm vĂ o cuá»‘i track, khĂ´ng chĂ¨n giá»¯a â€” 32 bĂ i foundations-
track sau Ä‘á»£t má»Ÿ rá»™ng nĂ y (tá»« 23 bĂ i trÆ°á»›c Ä‘Ă³).

**ÄĂ¡nh giĂ¡ tĂ¡ch sub-module cho 3 module cĂ²n láº¡i (Task 68, 2026-07-06) â€”
Káº¾T LUáº¬N: khĂ´ng tĂ¡ch module nĂ o.** RĂ  láº¡i theo Ä‘Ăºng rule má»¥c 2.1 (chá»‰
tĂ¡ch khi cĂ³ â‰¥2 nhĂ¡nh khĂ¡c nhau vá» báº£n cháº¥t, khĂ´ng pháº£i chá»‰ khĂ¡c Ä‘á»™ khĂ³):
- **"Ná»n táº£ng ToĂ¡n & ML cá»• Ä‘iá»ƒn"** (9 bĂ i): dĂ¹ng 1 subagent Ä‘á»c ká»¹ cáº£ 9
  bĂ i â€” káº¿t luáº­n Ä‘Ă¢y lĂ  má»™t máº¡ch tuáº§n tá»± liĂªn káº¿t cháº·t (má»—i bĂ i explicit
  ná»‘i tiáº¿p bĂ i ngay trÆ°á»›c: 01â†’02â†’03â†’04â†’05â†’06â†’07, cá»™ng 20/53 quay láº¡i ná»‘i
  04/01), khĂ´ng pháº£i cĂ¡c nhĂ¡nh song song Ä‘á»™c láº­p. Ranh giá»›i á»©ng viĂªn
  "supervised/unsupervised" lá»‡ch quĂ¡ (K-means lĂ  bĂ i unsupervised duy
  nháº¥t â€” 1 bĂ i khĂ´ng Ä‘á»§ khá»‘i lÆ°á»£ng Ä‘á»ƒ tĂ¡ch). Ranh giá»›i "regression vs
  classification" cÅ©ng khĂ´ng sáº¡ch vĂ¬ Decision Tree/Ensemble dĂ¹ng Ä‘Æ°á»£c cho
  cáº£ 2 loáº¡i bĂ i toĂ¡n. Giá»¯ pháº³ng.
- **"Audio"**: Ä‘Ă£ tĂ¡ch 3 sub-module 2026-07-07 (xem ghi chĂº dÆ°á»›i) â€” khĂ´ng
  cĂ²n giá»¯ pháº³ng nhÆ° Ä‘Ă¡nh giĂ¡ Task 68 ban Ä‘áº§u.
- **"Recommendation Systems"** (4 bĂ i: 43 MF â†’ 44 NeuMF â†’ 51 DeepFM â†’ 52
  BPR): dĂ²ng tiáº¿n hoĂ¡ tuyáº¿n tĂ­nh tá»« 1 gá»‘c (Matrix Factorization), khĂ´ng
  cĂ³ nhĂ¡nh song song khĂ¡c biá»‡t báº£n cháº¥t nhÆ° CV (CNN-based vs
  Transformer-based) hay Sequence Model (RNN Family vs Transformer
  Architecture).

KhĂ´ng cĂ²n module nĂ o trong foundations-track cáº§n Ä‘Ă¡nh giĂ¡ tĂ¡ch submodule
â€” viá»‡c nĂ y coi lĂ  hoĂ n táº¥t, xem CLAUDE.md má»¥c 1.2 (Ä‘Ă£ xoĂ¡ khá»i danh sĂ¡ch
viá»‡c cáº§n lĂ m).

