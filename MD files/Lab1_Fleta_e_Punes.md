# FLETA E PUNËS: USHTRIMET 1 — "FIRST WIN NË 45 MINUTA"
**Kursi:** Programimi për Pajisje Mobile (2026/2027) • **Kolegji AAB**  
**Objektivi Kryesor:** Nga zeroja te një Mobile PWA e publikuar LIVE në internet dhe e verifikuar në telefon brenda 45 minutave të para të orës së ushtrimeve.

---

## 1. Plani i Shpejtë 45-Minutësh (Step-by-Step)

| Minutat | Hapi Praktik | Veprimi i Studentit | Prova e Verifikimit |
| :--- | :--- | :--- | :--- |
| **00–05** | **1. Qëllimi** | Hapni shembullin e gatshëm në celular nga QR code në projektor | E shihni si duket një PWA e vërtetë |
| **05–12** | **2. Repository** | Klikoni `Use this template` në GitHub-in e kursit dhe krijoni repon tuaj: `aab-mobile-pwa-starter` | URL-ja e repos tuaj personale |
| **12–20** | **3. First Commit** | Në skedarin `app/page.tsx`, ndryshoni titullin dhe shkruani emrin tuaj dhe idenë e parë të problemit. Bëni `commit`. | Commit-i juaj i parë i regjistruar në GitHub |
| **20–30** | **4. Vercel Deploy** | Kyçuni në Vercel me llogarinë tuaj të GitHub, klikoni `Add New Project`, zgjidhni repon tuaj dhe shtypni `Deploy`. | Faqja ndërtohet dhe merr domain: `projekti.vercel.app` |
| **30–37** | **5. Mobile Test** | Hapni linkun `.vercel.app` në celularin tuaj. Klikoni `Add to Home Screen`. | Ikona e PWA shfaqet në ekranin e telefonit tuaj! |
| **37–42** | **6. Cikli i Plotë** | Bëni një ndryshim të dytë në GitHub. Vercel e publikon automatikisht brenda 15 sekondave pa prekur asnjë buton! | CI/CD automatik i provuar |
| **42–45** | **7. Evidenca** | Dorëzoni linkun tuaj publik në portalin e kursit (`arbenl.github.io`). | Statusi: GATI për Javën 2 |

---

## 2. PROTOKOLLI 10-MINUTËSH I ASISTENTIT (Triage & Fallbacks)

*Nëse një student has vonesa teknike, asistenti ndjek këtë protokoll të rreptë për ta rikthyer studentin në mësim brenda 10 minutave:*

| Pengesa e Mundshme | Veprimi i Shpejtë i Asistentit | Rruga Rezervë (Fallback) |
| :--- | :--- | :--- |
| **GitHub Student Pack në pritje** | Aplikimi për Copilot merr 24-48 orë | **Mos u bllokoni!** Studenti vazhdon ushtrimin pa Copilot. Copilot aktivizohet në javën 2. |
| **Dështim i SSH / Git çelësave** | Autentikimi i terminalit dështon | Përdoret HTTPS me Personal Access Token (PAT) ose GitHub Desktop me 1-klik. |
| **Mungesë e Node.js / PATH në Windows** | Terminali thotë `'node' is not recognized` | Studenti bën ndryshimin direkt në shfletues përmes GitHub Web Editor (shtyp butonin `.` në tastierë mbi repo) dhe bën build në Vercel! |
| **Rënie e përkohshme e Internetit** | Sallës i shkëputet lidhja | Asistenti demonstron starter-in lokal dhe regjistron pjesëmarrjen e studentit offline. |

---

## 3. MATRICA E GATISHMËRISË PËR JAVËN 2

Asistenti plotëson këtë matricë për çdo student në fund të orës:

- [ ] **Llogaria GitHub:** Aktive dhe e kyçur.
- [ ] **Repo Personale:** Krijuar nga template zyrtar.
- [ ] **Publikimi Live:** Faqe funksionale në `https://*.vercel.app`.
- [ ] **Verifikimi Mobil:** Testuar në shfletuesin e celularit.
- [ ] **Kuptimi i Ciklit:** Studenti shpjegon: `Ndryshim ➔ Commit ➔ Build automatik ➔ Celular`.
- [ ] **Statusi Përfundimtar:** 
  - `[ ] GATI` (Të gjitha hapat të plotësuara)
  - `[ ] NË RIKUPERIM` (Vetëm pengesë harduerike/llogarie, kodi u kuptua)
  - `[ ] KËRKON NDËRHYRJE` (Nuk u kuptua rrjedha, kërkon 10 min konsultim shtesë)
