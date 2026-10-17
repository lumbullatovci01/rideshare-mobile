# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë ndërtova
Identiteti, roli dhe pronësia janë tri gjëra të ndryshme. Identiteti është kush je: hyj me GitHub (NextAuth) dhe GitHub e verifikon llogarinë, kurse ID-ja e sesionit vjen nga biblioteka, jo nga formulari. Roli është çfarë të lejohet të bësh: ruhet në tabelën profilet te Neon (udhetar ose shofer), jo në sesion. Pronësia është kujt i takon një udhëtim: kolona shofer_id te udhetimet lidhet me profilet(github_id). Pra, edhe nëse je shofer, mund ta ndryshosh vetëm udhëtimin që është i yti. Kontrolli bëhet në server (lejet.ts), jo vetëm duke fshehur formularin.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
<<Plotëso pasi ta bësh: Hapa /panel pa hyrë dhe pashë ... Hyra me GitHub dhe u shfaq emri dhe roli ... Pas rifreskimit (F5) ... Pas daljes (Dil) ...>>

### Prova 2: Shoferi ndryshon udhëtimin e vet
Si shofer i ID 2 e ndryshova orën në 08:25. Paneli tregoi "Ora u ruajt me sukses". Ora u ndryshua edhe në listë, në detajet e udhëtimit dhe në Neon SQL Editor. Pastaj e ktheva në 08:15.

### Prova 3: Veprimi pa leje refuzohet
Nga formulari i hapur e ndryshova ID-në e fshehur nga 2 në 1 (me Console në DevTools) dhe shtypa Ruaj orën. Paneli tregoi "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi." Në Neon e verifikova me SELECT id, ora, shofer_id FROM udhetimet ORDER BY id; dhe ID 1 mbeti 08:00 (pronar DEMO-SHOFER-2).

## Ku gjendet puna
Repository: <<https://github.com/lumbullatovci01/rideshare-mobile>>
Skedarët e rinj: schema-java05.sql, src/lib/auth.ts, src/app/api/auth/[...nextauth]/route.ts, src/components/Hyrja.tsx, src/lib/lejet.ts, src/app/panel/actions.ts, src/app/panel/page.tsx; src/app/page.tsx u përditësua.
Demo në Vercel: <<Nuk publikova>>

## Çfarë mbetet për përmirësim
Kërkesa për vend është ende simulim: nuk ruhet në databazë dhe nuk ul numrin e vendeve. Më pas do të shtoja një tabelë kërkesash dhe do të ulja vendet kur shoferi e pranon kërkesën.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Jo nuk perdora Ai.