# RideShare: Java 6 · PWA dhe puna offline

## Çfarë ndërtova
Ndërtova tri pjesë. Manifesti (`src/app/manifest.ts`) përshkruan emrin, ikonat, ngjyrat dhe mënyrën standalone, që aplikacioni të njihet si PWA e instalueshme. Service worker-i (`public/sw.js`) regjistrohet nga komponenti `Pwa.tsx` dhe ruan në cache vetëm listën publike të udhëtimeve nga `/api/udhetimet`, bashkë me faqen `offline.html`. Kopja në pajisje përmban vetëm fusha publike (nisja, destinacioni, ora, vendtakimi, vendet), pa profile, email ose sesione. Komponenti `Pwa` është shtuar te `layout.tsx` pa u prekur fontet dhe stilet ekzistuese.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
Hapa `http://localhost:3000/manifest.webmanifest`. Emri që pashë është "RideShare AAB", me ikona `icon-192.png` (192×192) dhe `icon-512.png` (512×512). Në Chrome u shfaq ikona e instalimit në shiritin e adresës. Pas vizitës online, service worker-i ishte aktiv dhe lista `/api/udhetimet` u ruajt në cache-n `rideshare-public-v1`. Faqja `/offline.html` tregoi listën dhe kohën e ruajtjes.

### Prova 2: Pa internet dhe pas rifreskimit
Ndërprerjen e simulova te DevTools > Network > Offline, vetëm në tab-in e RideShare. Pas rifreskimit u hapën tri kartat (Prishtinë 08:00, Fushë Kosovë 08:15, Lipjan 07:45). Pashë mesazhin "Lista e fundit e ruajtur. Mund të jetë e vjetruar. Serveri nuk u arrit." dhe kohën e ruajtjes 10/22/2026, 3:13:51 PM. Nuk ishte konfirmim rezervimi, sepse të dhënat vijnë nga një kopje e vjetër dhe serveri nuk u kontaktua. Butoni "Kërko vend" kërkon lidhje dhe server, dhe faqja thotë që ajo shërben vetëm për lexim.

### Prova 3: Lidhja rikthehet
Në Neon e ndryshova orën e ID 2 (Fushë Kosovë) nga 08:15 në 08:25 me UPDATE. Offline, kopja e ruajtur ende tregonte 08:15. Pasi e ktheva lidhjen në No throttling dhe e shtypa "Rifresko listën", u shfaq ora e re 08:25 nga serveri. Në fund e ktheva orën fillestare 08:15 në Neon.

## Ku gjendet puna
Repository: https://github.com/lumbullatovci01/rideshare-mobile
Skedarët e shtuar ose ndryshuar: `src/app/manifest.ts`, `src/app/api/udhetimet/route.ts`, `src/components/Pwa.tsx`, `src/app/layout.tsx`, `public/sw.js`, `public/offline.html`, `public/icons/icon-192.png`, `public/icons/icon-512.png`.
Demo në Vercel: nuk e kam publikuar (ose vendos linkun nëse e ke publikuar).

## Çfarë mbetet për përmirësim
Në vizitën e parë pa kopje nuk ka asgjë të ruajtur, kështu që pa internet nuk shfaqet lista. Kopja krijohet vetëm pasi faqja është hapur një herë online dhe worker-i ka marrë kontrollin. Kufizimi i leximit offline është se të dhënat mund të jenë të vjetra: orari, vendet e lira dhe ora mund të kenë ndryshuar. Prandaj offline mund të lexohet vetëm lista publike dhe nuk mund të bëhet rezervim.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Jo nuk përdora AI.