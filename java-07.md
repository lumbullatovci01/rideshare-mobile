# RideShare · Java 7

Ruaje si **java-07.md**, pranë README në rrënjën e repository-t tënd. Plotëso me vëzhgimet e tua dhe plotëso çdo vend bosh përpara dorëzimit. Ruaj titujt dhe etiketat. Para/Pas janë dy URL të plota commit-esh nga i njëjti repository, me kodin e plotë prej 40 shenjash.

Pas Commit dhe Push, hap formularin e lëndës për **Java 7** dhe vendos linkun kryesor të repository-t. Rezultati vjen te komenti **Kontrolli automatik i dorëzimit**, nga github-actions[bot], në Issue-n tënd. Lexo 5/5 dhe çdo ✅/❌; nëse korrigjon, bëj Push dhe komento **rikontrollo** te i njëjti Issue. 5/5 është kontroll teknik, jo notë.

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
2. Paqartesi tjeter. Shenim: nga leximi i lejet.ts, funksioni ndryshoOren pranon vetem ID 1, 2, 3, ndaj nuk mbulon udhetimin tim p7-768. Shkruaje ketu vetem nese e ke provuar vete ne panel; perndryshe shkruaj "nuk e provova".

## Korrigjimi
Skedari: aplikacioni/src/app/udhetimi/[id]/page.tsx (dhe aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx)
Faqja e detajeve lexonte vetem udhetimin nga databaza (gjejUdhetimin), por jo rolin e personit. Shtova profiliIm() nga lejet.ts, qe e lexon rolin nga Neon. Tani, nese roli eshte shofer, ne vend te "Kerko vend" del butoni i çaktivizuar "Vetem lexim", dhe te /kerkesa del "Shoferi nuk mund te kerkoje vend." Strukturen e projektit nuk e ndryshova. [Rishkruaje me fjalet e tua]

## Versionet
Para:Qe nuk e kam pasur rrugetimin prej Prizreni ne AAB.
Pas: Qe e kam shti rrugetimin prej Prizreni ne AAB

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
Vëzhgimi: Shkruaj vetem ate qe pe vete.

## Ndryshimi i ri
Nuk e kam demonstruar ende ndryshimin e kolegut.

## Ndihma nga AI
Nuk perdora.