# RideShare · Java 7

## Rasti im

- GitHub: lumbullatovci01
- Kodi: P7-768
- Skenari i zgjedhur: Rasti 1 - Lista dhe detajet
- ID i udhëtimit në projektin tim: P7-768
- Të dhënat fiktive të rastit: Prizren → AAB, 10:00, 1 vende.
- Ora për provën e re: 10:05.

## Parashikimi

Unë parashikova që nuk do të bënim shumë ndryshime në projekt, por puna doli krejt ndryshe.

## Dy probleme

1. Shoferi e shihte butonin "Kërko vend" te detajet dhe mund ta hapte `/udhetimi/p7-768/kerkesa`, ku shihte "Simulim: Në pritje".

   **Hapat:** U kyça me GitHub, në Neon e ndryshova rolin në shofer (`UPDATE profilet SET roli = 'shofer'`), hapa `/udhetimi/p7-768` dhe pastaj `/kerkesa`.

   **Pritshmëria:** Shoferi të mos mund të kërkojë vend.

2. Nuk e provova problemin e dytë.

## Korrigjimi

**Skedari:** `aplikacioni/src/app/udhetimi/[id]/page.tsx`

Para korrigjimit, faqja e detajeve e lexonte vetëm udhëtimin nga databaza, por jo rolin e personit. Prandaj, edhe shoferi e shihte butonin "Kërko vend".

E kam shtuar funksionin `profiliIm()` nga `lejet.ts`, i cili e merr rolin nga Neon. Tani, nëse roli është shofer, në vend të butonit shfaqet një buton i çaktivizuar "Vetëm lexim".

E njëjta gjë është bërë edhe te `kerkesa/page.tsx`, ku shoferi shikon mesazhin "Shoferi nuk mund të kërkojë vend".

Strukturën e projektit nuk e kam ndryshuar.

## Versionet

- Para: https://github.com/lumbullatovci01/rideshare-mobile/commit/344cdf6a51800ef89257677b4cece1bfcf9c545e
- Pas: https://github.com/lumbullatovci01/rideshare-mobile/commit/8253cf7d584a11de31431bb1014a881e9fdcc589

## Provat që bëra

### Prova 1

**Hapat:** Hapa `localhost:3000/udhetimi/999` dhe `localhost:3000/udhetimi/999/kerkesa`.

**Pritshmëria:** Mesazh i qartë që udhëtimi nuk gjendet dhe lidhje për t'u kthyer te lista.

**Vëzhgimi:** Të dyja shfaqin "Udhëtimi nuk u gjet" me butonin "Kthehu te lista".

### Prova 2

**Hapat:** Hapa udhëtimin Lipjan - AAB (0 vende), te detajet dhe direkt te `/kerkesa`.

**Pritshmëria:** Asnjë premtim për vend të lirë.

**Vëzhgimi:** Në të dyja vendet shfaqet "Nuk ka vende të lira".

### Prova 3

**Hapat:** Si shofer (roli = shofer në Neon, i kyçur me GitHub), hapa `/udhetimi/p7-768` dhe `/udhetimi/p7-768/kerkesa`.

**Pritshmëria:** Detajet tregojnë "Vetëm lexim"; `/kerkesa` tregon "Shoferi nuk mund të kërkojë vend".

**Vëzhgimi:** Si shofer, te detajet pashë butonin "Vetëm lexim" dhe nuk munda të kërkoj vend. Te `/kerkesa` u shfaq mesazhi "Shoferi nuk mund të kërkojë vend".

## Ndryshimi i ri

Nuk e kam demonstruar ende ndryshimin e kolegut.

## Ndihma nga AI

Përdora Claude për formatimin e `java-07.md` dhe për formulimin e tekstit të seksionit Korrigjimi. Kodin dhe provat i bëra vetë.