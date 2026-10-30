# RideShare · Java 7

## Rasti im
GitHub: lumbullatovci01
Kodi: P7-768
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): Rasti 1 - Lista dhe detajet
ID i udhëtimit në projektin tim: p7-768
Të dhënat fiktive të rastit: Prizren → AAB, 10:00, 1 vende. Ora për provën e re: 10:05.

## Parashikimi
Une parashikova qe skemi me bo shum ne projekt por dul krejt ndryshe.

## Dy probleme
1. Shoferi e shihte butonin "Kerko vend" te detajet dhe mund ta hapte /udhetimi/p7-768/kerkesa, ku shihte "Simulim: Ne pritje". Hapat: u hyra me GitHub, ne Neon e ndryshova rolin ne shofer (UPDATE profilet SET roli = 'shofer'), hapa /udhetimi/p7-768 dhe pastaj /kerkesa. Pritja ime ishte qe shoferi te mos mund te kerkoje vend.
2. nuk e provova

## Korrigjimi
Skedari: aplikacioni/src/app/udhetimi/[id]/page.tsx
Para korrigjimit, faqja e detajeve e lexonte vetem udhetimin nga databaza, por jo rolin e personit, prandaj edhe shoferi e shihte butonin "Kerko vend". E kam shtuar funksionin profiliIm() nga lejet.ts, qe e merr rolin nga Neon. Tani, nese roli eshte shofer, ne vend te butonit del nje buton i caktivizuar "Vetem lexim". E njejta gje eshte bere te kerkesa/page.tsx, ku shoferi shikon "Shoferi nuk mund te kerkoje vend." Strukturen e projektit nuk e kam ndryshuar.

## Versionet
Para: https://github.com/lumbullatovci01/rideshare-mobile /commit/<40 commits>
Pas: https://github.com/lumbullatovci01/rideshare-mobile /commit/<40 commits>

## Provat që bëra
### Prova 1
Hapat: Hapa localhost:3000/udhetimi/999 dhe localhost:3000/udhetimi/999/kerkesa.
Pritshmëria: Mesazh i qarte qe udhetimi nuk gjendet dhe lidhje per te kthyer te lista.
Vëzhgimi: Te dyja shfaqen "Udhetimi nuk u gjet" me butonin "Kthehu te lista".

### Prova 2
Hapat: Hapa udhetimin Lipjan - AAB (0 vende), te detajet dhe direkt te /kerkesa.
Pritshmëria: Asnje premtim per vend te lire.
Vëzhgimi: Te dyja vendet shfaqen "nuk ka vende te lira".

### Prova 3
Hapat: Si shofer (roli = shofer ne Neon, i hyre me GitHub): hapa /udhetimi/p7-768 dhe /udhetimi/p7-768/kerkesa.
Pritshmëria: Detajet tregojne "Vetem lexim"; /kerkesa tregon "Shoferi nuk mund te kerkoje vend."
Vëzhgimi: E pash qe si i kom ndryshu rolet psh te shoferi nuk ka mujt me rezervu vend. Kurse te udhetari ska mund te ndryshoj kohen e udhetimit.

## Ndryshimi i ri
Nuk kam ndryshuar kurgjo tjeter perveq ne java-07.md