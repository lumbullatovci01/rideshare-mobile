# RideShare — Java 8

## Çfarë ndërtova
Ne faqen e detajeve te udhetimit (udhetimi/[id]/page.tsx) shtova nje komponent klienti, VendtakimiForm. Ai e lejon Arten ta zgjedhe vendtakimin ne dy menyra: shkruan vete tekstin dhe e konfirmon me butonin "Konfirmo ne telefon", ose shtyp "Perdor vendndodhjen time". Teksti pastrohet me trim() para konfirmimit dhe nese eshte bosh del mesazhi "Shkruaj vendtakimin.". Vendndodhja merret vetem pas klikimit, jo kur hapet faqja. Gjendjet jane pese: duke u ngarkuar, sukses, leja e refuzuar, koha mbaroi dhe i padisponueshem. Faqja page.tsx mbeti komponent serveri dhe pjeset qe punonin (roli, "Vetem lexim", "Kerko vend") nuk u ndryshuan. Per testim krijova faqen /java-08-test, qe perdor te njejtin komponent me te dhena lokale, pa login dhe pa Neon.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
Hapat: Hapa localhost:3000/java-08-test dhe e rifreskova faqen. Pastaj ne Chrome DevTools, te Sensors, zgjodhem nje pozicion fiktiv (Test Prishtina) dhe fillimisht kliktova "Perdor vendndodhjen time" dhe prova lejen.
Rezultati i pritur: Para klikimit nuk del pyetja per leje. Pas klikimit dhe lejes del "Pozicioni u mor" dhe saktesia ne metra.
Çfarë ndodhi: Faqja u hap pa pyetje per leje. Pas klikimit dhe lejes dolen "Pozicioni u mor" dhe "Saktesia rreth 77 m". Pastaj shkrova Biblioteka dhe e konfirmova. Vlera e saktesise ishte ndryshe nga ajo qe e caktova ne Sensors (150 m), por pritja mbaroi dhe butoni mbeti i perdorshem.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
Hapat: Ne cilesimet e faqes ne Chrome vendosa Location ne Block, rifreskova dhe kliktova "Perdor vendndodhjen time". Pastaj shkrova Parkingu dhe e konfirmova me dore. Per rastin e pritjes se perfunduar shtova perkohesisht nje buton prove qe e thirri funksionin kurDeshtonLeximi me code 3 (simulim, jo vonese reale), dhe pastaj e fshiva butonin.
Rezultati i pritur: Del "Leja u refuzua. Shkruaj vendtakimin vete." dhe fusha vazhdon te punoje. Pas simulimit del "Koha mbaroi..." dhe butoni i vendndodhjes behet sersi i klikueshem.
Çfarë ndodhi: Pas bllokimit del "Leja u refuzua. Shkruaj vendtakimin vete." edhe te faqja e detajeve, edhe te /java-08-test. Fusha e tekstit dhe butoni Konfirmo vazhduan te punonin dhe vendtakimi manual u konfirmua. Ne simulimin e timeout-it del mesazhi i kohes dhe pritja mbaron.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
Hapat: Para push-it hapa skedaret qe publikoj (VendtakimiForm.tsx, java-08-test/page.tsx, mobile-week08.json dhe java-08.md) dhe kontrollova per koordinata reale, adrese ose sekrete. Per provat perdora pozicion fiktiv nga Sensors, jo pozicionin tim real.
Rezultati i pritur: Asnje skedar nuk permban koordinata reale, adrese ose sekrete.
Çfarë ndodhi: Nuk gjeta koordinata reale, adrese apo sekrete ne skedaret e publikuar. Kodi nuk i ruan koordinatat, shfaq vetem saktesine ne metra.

## Ku gjendet puna
Skedari kryesor: aplikacioni/src/components/VendtakimiForm.tsx. Faqja e detajeve qe e perdor: aplikacioni/src/app/udhetimi/[id]/page.tsx. Faqja e provës: aplikacioni/src/app/java-08-test/page.tsx. Skedaret ne rrenje: mobile-week08.json dhe java-08.md. Demonstrimi nuk eshte publikuar ne Vercel; e provova lokalisht ne localhost:3000.

## Çfarë mbetet për përmirësim
Vendtakimi i konfirmuar ruhet vetem ne gjendjen e komponentit, ndaj humbet kur rifreskohet faqja dhe nuk i dergohet shoferit. Hapi i ardhshem eshte ta ruajme ne databaze dhe ta lidhim me kerkesen per vend. Nje kufizim tjeter: koha e pritjes se vendndodhjes eshte e caktuar ne 10 sekonda dhe nuk e kam provuar me vonese reale, vetem me simulim.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Perdora Claude per te organizuar komponentin (ndarja mes page.tsx si komponent serveri dhe formularit si komponent klienti), per etiketat data-testid dhe per hapat e provimit ne Chrome. Verifikova vete: e hapa projektin dhe e gjeta skedarin e detajeve, e provova pranimin, refuzimin dhe simulimin e timeout-it ne shfletues dhe i lexova rezultatet vete. E shpjegoj kodin ne klase.

## Prova me një hyrje të re
Tekst me vetem hapesira.
- Hyrja që provova: Shkrova disa hapesira ne fushen e vendtakimit dhe kliktova "Konfirmo ne telefon".
- Parashikimi im para klikimit: Funksioni konfirmo() e pastron tekstin me trim(), ndaj teksti behet bosh. Prandaj parashikova se del "Shkruaj vendtakimin." dhe vendtakimi i meparshem (Biblioteka) nuk ndryshon.
- Çfarë pashë realisht: Del "Shkruaj vendtakimin." dhe vendtakimi i konfirmuar mbetet i pandryshuar.
- Skedari dhe funksioni që e shpjegojnë: aplikacioni/src/components/VendtakimiForm.tsx, funksioni konfirmo()
- Çfarë kuptova ose korrigjova: Kuptova se trim() e heq hapesiren dhe kontrolli i tekstit bosh duhet bere pas pastrimit, jo para. Perndryshe nje tekst me vetem hapesira do te konfirmohej si vendtakim i vlefshem.

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.