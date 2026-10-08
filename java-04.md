# RideShare — Java 4 · Neon dhe PostgreSQL

## Çfarë ndërtova
Aplikacioni tani i lexon udhëtimet nga databaza Neon (PostgreSQL) dhe jo më nga të dhëna fikse në kod. Funksioni lexoUdhetimet te skedari db.ts lidhet me Neon përmes DATABASE_URL dhe merr rreshtat nga tabela udhetimet. Lista e faqes kryesore shfaq kartat me këto të dhëna, ndërsa faqja e detajeve e merr udhëtimin sipas ID-së nga e njëjta databazë.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
Në Neon SQL Editor ndryshova orën e ID 2 nga 08:15 në 08:25. Pas rifreskimit të faqes, lista e tregoi Fushë Kosovën me orën 08:25 dhe faqja e detajeve e tregoi po të njëjtën orë. Pastaj ktheva orën në 08:15, rifreskova dhe u shfaq përsëri 08:15.

### Prova 2: Lista bosh dhe rikthimi
Te pyetja e lexoUdhetimet shtova përkohësisht WHERE false. Lista nuk shfaqi asnjë kartë dhe u shfaq mesazhi që del kur nuk ka udhëtime. Pastaj e hoqa WHERE false dhe tri kartat (Prishtinë, Fushë Kosovë, Lipjan) u kthyen normalisht.

### Prova 3: Lidhja mungon, rikthimi dhe siguria
Ndryshova përkohësisht emrin DATABASE_URL në .env.local, rinisa serverin dhe aplikacioni shfaqi mesazh gabimi në vend të listës. Pastaj e riktheva emrin e saktë, rinisa serverin dhe aplikacioni punoi sërish me tri udhëtimet. Skedari .env.local nuk shfaqet në listën e ndryshimeve në GitHub Desktop, sepse është i mbrojtur nga .gitignore.

## Ku gjendet puna
Skedari schema.sql është te aplikacioni/schema.sql. Skedarët që ndryshova ose shtova janë aplikacioni/src/lib/db.ts dhe skedarët e listës e të detajeve të udhëtimeve, plus package.json (paketat @neondatabase/serverless dhe server-only).
Repository: https://github.com/lumbullatovci01/rideshare-mobile
Aplikacioni në Vercel: https://aplikacioni-five.vercel.app

## Çfarë mbetet për përmirësim
Një kufizim është se kërkesa "Në pritje" është ende simulim dhe nuk ka rezervim real në databazë. Hapi im i ardhshëm është të shtoj një tabelë për rezervimet, që vendet e lira të ulen vërtet kur dikush rezervon.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të kuptuar hapat e lidhjes së Neon me Vercel dhe ku gjenden menytë. Provat dhe ndryshimet në databazë i bëra vetë dhe rezultatet i verifikova duke i parë në aplikacion.