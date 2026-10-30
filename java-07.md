# RideShare · Java 7

## Rasti im

- GitHub: lumbullatovci01
- Kodi: P7-768
- Skenari i zgjedhur: Rasti 1 - Lista dhe detajet
- ID i udhetimit ne projektin tim: P7-768
- Te dhenat fiktive te rastit: Prizren → AAB, 10:00, 1 vende.
- Ora per proven e re: 10:05.

## Parashikimi

Une parashikova qe nuk do te kishim shume ndryshime ne projekt, por puna doli ndryshe nga ajo qe prisja. Gjate testimit identifikova probleme me kontrollin e roleve dhe qasjen e perdoruesve ne faqen e kerkeses per vend.

## Dy probleme

### Problemi 1

Shoferi e shihte butonin "Kerko vend" te detajet dhe mund ta hapte faqen `/udhetimi/p7-768/kerkesa`, ku shfaqej mesazhi "Simulim: Ne pritje".

**Hapat:**
1. U kyca me GitHub.
2. Ne Neon e ndryshova rolin ne shofer me komanden `UPDATE profilet SET roli = 'shofer'`.
3. Hapa faqen `/udhetimi/p7-768`.
4. Pastaj hapa faqen `/udhetimi/p7-768/kerkesa`.

**Pritshmeria:** Shoferi te mos mund te kerkoje vend, sepse kjo mundesi duhet te jete vetem per udhetaret.

### Problemi 2

Nuk e provova nje problem te dyte te vecante gjate ketij testimi.

## Korrigjimi

**Skedari:** `aplikacioni/src/app/udhetimi/[id]/page.tsx`

Ne faqen e detajeve kam shtuar funksionin `profiliIm()` nga `lejet.ts`, i cili e merr rolin e perdoruesit nga databaza Neon.

Nese perdoruesi eshte shofer, butoni "Kerko vend" zevendesohet me butonin e caktivizuar "Vetem lexim". Ne kete menyre shoferi nuk mund te vazhdoje me kerkesen per vend.

**Skedari:** `aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx`

Ne faqen e kerkeses kam shtuar kontrollin e rolit te perdoruesit. Nese roli eshte shofer, shfaqet mesazhi "Shoferi nuk mund te kerkoje vend". Per udhetaret, faqja vazhdon te funksionoje sipas numrit te vendeve te lira.

**Rezultati:** Te dyja faqet kontrollojne rolin e perdoruesit dhe kufizojne mundesine e shoferit per te kerkuar vend. Struktura e projektit nuk eshte ndryshuar.

## Versionet

**Para korrigjimit:**

https://github.com/lumbullatovci01/rideshare-mobile/commit/344cdf6a51800ef89257677b4cece1bfcf9c545e

**Pas korrigjimit:**

https://github.com/lumbullatovci01/rideshare-mobile/commit/8253cf7d584a11de31431bb1014a881e9fdcc589

## Provat qe bera

### Prova 1

**Hapat:**

Hapa adresat `localhost:3000/udhetimi/999` dhe `localhost:3000/udhetimi/999/kerkesa`.

**Pritshmeria:**

Te shfaqet nje mesazh i qarte qe udhetimi nuk gjendet dhe nje lidhje per t'u kthyer te lista e udhetimeve.

**Vezhgimi:**

Ne te dyja faqet shfaqet mesazhi "Udhetimi nuk u gjet" me butonin "Kthehu te lista".

### Prova 2

**Hapat:**

Hapa udhetimin Lipjan - AAB, i cili kishte 0 vende te lira. Kontrollova faqen e detajeve dhe pastaj faqen `/kerkesa`.

**Pritshmeria:**

Sistemi te mos premtoje se ka vende te lira kur numri i vendeve eshte zero.

**Vezhgimi:**

Ne te dyja faqet shfaqet mesazhi "Nuk ka vende te lira".

### Prova 3

**Hapat:**

1. U kyca me GitHub.
2. Ne databazen Neon e ndryshova rolin e perdoruesit ne `shofer`.
3. Hapa faqen `/udhetimi/p7-768`.
4. Pastaj hapa faqen `/udhetimi/p7-768/kerkesa`.

**Pritshmeria:**

Ne faqen e detajeve te shfaqet butoni "Vetem lexim", ndersa ne faqen e kerkeses te shfaqet mesazhi "Shoferi nuk mund te kerkoje vend".

**Vezhgimi:**

Te detajet u shfaq butoni "Vetem lexim" dhe nuk munda te kerkoj vend. Te faqja e kerkeses u shfaq mesazhi "Shoferi nuk mund te kerkoje vend".

## Ndryshimi i ri

Nuk e kam demonstruar ende ndryshimin e kolegut.

## Ndihma nga AI

Perdora Claude per formatimin e dokumentit `java-07.md` dhe per formulimin e tekstit ne seksionin Korrigjimi. Kodin e aplikacionit dhe provat i bera vete.