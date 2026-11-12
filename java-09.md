# RideShare — Java 9

## Çfarë ndërtova
Shtova funksionin per ruajtjen e nje udhetimi te te preferuarat. Perdoruesi i kycur mund te klikoje “Ruaj udhetimin”, ndersa aplikacioni e shfaq menjehere gjendjen “Po ruhet...” dhe pastaj “I ruajtur” pasi serveri pergjigjet me sukses. Preferimi lidhet me perdoruesin e kycur dhe me udhetimin perkates ne databazen Neon.

Ne databaze krijova tabelen `preferimet` me celes primar te perbere nga `github_id` dhe `udhetim_id`. Kjo e pengon ruajtjen e te njejtit preferim me shume se nje here.

## Provat që bëra
### Prova 1: Ruajtja e suksesshme mbetet pas rifreskimit.
Hapa aplikacionin dhe u kyca me GitHub si udhetar. Hapa udhetimin Prishtine → AAB dhe klikova “Ruaj udhetimin”. Rezultati i pritur ishte qe butoni te kalonte ne “I ruajtur” dhe te shfaqej mesazhi se udhetimi u ruajt.

Kjo ndodhi me sukses. Pas rifreskimit te faqes preferimi mbeti “I ruajtur”. Kjo tregon se te dhenat u lexuan perseri nga serveri dhe nuk mbeten vetem ne gjendjen e komponentes.

### Prova 2: Gabimi i serverit nuk lë një sukses të rremë në ekran.
Kodi i API-se kontrollon pergjigjen e serverit. Nese pergjigjja nuk eshte e suksesshme, shfaqet mesazhi i gabimit dhe gjendja nuk ndryshon ne “I ruajtur”. Ne rast te mungeses se hyrjes, perdoruesi merr mesazhin se duhet te kyce me GitHub.

Kjo prove nuk u simulua me nderprerje reale te serverit gjate demonstrimit. Rruga e gabimit eshte kontrolluar ne kod me `response.ok`, `try/catch` dhe statuset HTTP te API-se.

### Prova 3: Klikimet e përsëritura nuk krijojnë kopje.
Klikova disa here mbi butonin e ruajtjes dhe pastaj kontrollova databazen me kete kerkese:

```sql
SELECT *
FROM preferimet
WHERE github_id = '331792915'
  AND udhetim_id = '1';
```

Rezultati ishte `1 row`. Kjo tregon se klikimet e perseritura nuk krijuan kopje. Komponenta e caktivizon butonin gjate ruajtjes, ndersa `PRIMARY KEY (github_id, udhetim_id)` dhe `ON CONFLICT DO NOTHING` e mbrojne databazen.

## Ku gjendet puna
Skedaret kryesore jane:

- `aplikacioni/schema-java09.sql`
- `aplikacioni/src/lib/preferimet.ts`
- `aplikacioni/src/app/api/preferimet/route.ts`
- `aplikacioni/src/components/PreferimButton.tsx`
- `aplikacioni/src/app/udhetimi/[id]/page.tsx`
- `java-09.md`

Demonstrimi u be lokalisht ne `http://localhost:3000`. Nuk eshte publikuar link i vecante demonstrimi.

## Çfarë mbetet për përmirësim
Aktualisht mund te ruhet preferimi, por nuk eshte implementuar heqja e tij nga te preferuarat. Hapi i ardhshem do te ishte shtimi i nje kerkese `DELETE` dhe i nje butoni “Hiq nga te preferuarat”. Gjithashtu, prova e gabimit mund te perseritet me nje deshtim te kontrolluar te serverit.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Mora ndihme nga AI per ndarjen e punes ne skedare, krijimin e tabeles se preferimeve, API-se dhe komponents se butonit. E verifikova vete duke e hapur aplikacionin, duke u kycur me GitHub, duke ruajtur nje udhetim, duke rifreskuar faqen dhe duke kontrolluar ne Neon se ekziston vetem nje rresht per ciftin perdorues–udhetim. Gjithashtu u ekzekutuan ESLint dhe TypeScript per skedaret e ndryshuar.
