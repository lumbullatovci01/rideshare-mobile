# RideShare · Java 7

Ruaje si **java-07.md**, pranë README në rrënjën e repository-t tënd. Plotëso me vëzhgimet e tua dhe plotëso çdo vend bosh përpara dorëzimit. Ruaj titujt dhe etiketat. Para/Pas janë dy URL të plota commit-esh nga i njëjti repository, me kodin e plotë prej 40 shenjash.

Pas Commit dhe Push, hap formularin e lëndës për **Java 7** dhe vendos linkun kryesor të repository-t. Rezultati vjen te komenti **Kontrolli automatik i dorëzimit**, nga github-actions[bot], në Issue-n tënd. Lexo 5/5 dhe çdo ✅/❌; nëse korrigjon, bëj Push dhe komento **rikontrollo** te i njëjti Issue. 5/5 është kontroll teknik, jo notë.

## Rasti im
GitHub: lumbullatovci01
Kodi: P7-768
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): Rasti 1 - Lista dhe detajet
ID i udhëtimit në projektin tim: P7-768
Të dhënat fiktive të rastit: Prizren → AAB, 10:00, 1 vende. Ora për provën e re: 10:05.

## Parashikimi
Une parashikova qe nuk do te kishim shume ndryshime ne projekt, por puna doli ndryshe nga ajo qe prisja. Gjate testimit identifikova probleme me kontrollin e roleve dhe qasjen e perdoruesve ne faqen e kerkeses per vend.

## Dy probleme
1. Shoferi e shihte butonin "Kerko vend" te detajet dhe mund ta hapte faqen /udhetimi/p7-768/kerkesa, ku shfaqej "Simulim: Ne pritje". Hapat: u kyca me GitHub, ne Neon e ndryshova rolin ne shofer (UPDATE profilet SET roli = 'shofer'), hapa /udhetimi/p7-768 dhe pastaj /udhetimi/p7-768/kerkesa. Shoferi nuk duhet te mund te kerkoje vend, sepse kjo eshte vetem per udhetaret.
2. Nuk e provova nje problem te dyte te vecante gjate ketij testimi.

## Korrigjimi
Skedari: aplikacioni/src/app/udhetimi/[id]/page.tsx
Faqja e detajeve lexonte vetem udhetimin, jo rolin. Shtova profiliIm() nga lejet.ts, qe e merr rolin nga Neon. Nese roli eshte shofer, butoni "Kerko vend" zevendesohet me butonin e caktivizuar "Vetem lexim". Njekohesisht e korrigjova edhe aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx, ku shoferi tani sheh "Shoferi nuk mund te kerkoje vend." Struktura e projektit nuk eshte ndryshuar.

## Versionet
Para: https://github.com/lumbullatovci01/rideshare-mobile/commit/344cdf6a51800ef89257677b4cece1bfcf9c545e
Pas: https://github.com/lumbullatovci01/rideshare-mobile/commit/8253cf7d584a11de31431bb1014a881e9fdcc589

## Provat që bëra
### Prova 1
Hapat: Hapa localhost:3000/udhetimi/999 dhe localhost:3000/udhetimi/999/kerkesa.
Pritshmëria: Te shfaqet mesazh i qarte qe udhetimi nuk gjendet dhe lidhje per t'u kthyer te lista.
Vëzhgimi: Ne te dyja faqet shfaqet "Udhetimi nuk u gjet" me butonin "Kthehu te lista".

### Prova 2
Hapat: Hapa udhetimin Lipjan - AAB (0 vende), te detajet dhe pastaj te /kerkesa.
Pritshmëria: Sistemi te mos premtoje vend te lire kur numri i vendeve eshte zero.
Vëzhgimi: Ne te dyja faqet shfaqet "Nuk ka vende te lira".

### Prova 3
Hapat: U kyca me GitHub, ne Neon e ndryshova rolin ne shofer, hapa /udhetimi/p7-768 dhe pastaj /udhetimi/p7-768/kerkesa.
Pritshmëria: Te detajet te dale "Vetem lexim", te /kerkesa te dale "Shoferi nuk mund te kerkoje vend."
Vëzhgimi: Te detajet u shfaq "Vetem lexim" dhe nuk munda te kerkoj vend. Te /kerkesa u shfaq "Shoferi nuk mund te kerkoje vend."

## Ndryshimi i ri
Nuk e kam demonstruar ende ndryshimin e kolegut.

## Ndihma nga AI
Perdora Claude per te gjetur skedaret, per te kuptuar rolet (auth.ts, lejet.ts) dhe per kodin e korrigjimit te shoferit. Verifikova vete ne browser dhe ne Neon çdo prove te shkruar ketu.