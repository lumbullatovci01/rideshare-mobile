# SHABLLON PRD (Product Requirements Document) — 1 Faqe

**Shkurtesat:** PWA (Progressive Web App – aplikacion web progresiv); PRD (Product Requirements Document – dokumenti i kërkesave të produktit); MVP (Minimum Viable Product – produkti minimal i përdorshëm).
**Kursi:** Programimi për Pajisje Mobile (2026/2027) • **Kolegji AAB**  
**Emri i Projektit:** AAB RideShare (Shembull Ilustrues)  
**Themeluesi / Ekipi:** [Emri Mbiemri, ID e Studentit]  
**Data & Versioni:** Java 02 • Versioni 1.0 (Draft për MVP)

---

## 1. Përdoruesi dhe Problemi Real
- **Kush e përjeton dhimbjen?** Studentët e Kolegjit AAB që udhëtojnë çdo ditë nga qytetet e tjera (Ferizaj, Gjilan, Podujevë, etj.) drejt kampusit në Prishtinë.
- **Kur ndodh?** Në mëngjes (07:30–08:30) para fillimit të ligjëratave dhe pasdite (16:00–17:30).
- **Si e zgjidhin sot?** Autobusë me vonesa 40-minutëshe ose taksi të shtrenjta (15–20€). Në anën tjetër, kolegët me vetura udhëtojnë me 3 ulëse bosh dhe paguajnë vetë 10€ naftë në ditë.

## 2. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)
- **Biseda 1 (Shofer - Student viti 3):** *"Shpenzoj mbi 180€ naftë në muaj nga Ferizaji. Do të merrja me dëshirë kolegë në veturë nëse do të dija kush po vjen në të njëjtën orë."*
- **Biseda 2 (Udhëtar - Studente viti 2):** *"Humba testin e parë sepse autobusi u vonua 45 minuta në shi. Preferoj t'i jap 1.5€ një kolegu sesa të pres në rrugë."*
- **Biseda 3 (Shofer - Student viti 3):** *"Grupet në WhatsApp janë kaotike. Mesazhet humbasin dhe nuk e di as kush është i regjistruar në kolegj."*

## 3. Hipoteza e Vlerës
> **Nëse** u ofrojmë studentëve një PWA mobile me verifikim zyrtar `@universitetiaab.com` ku shoferët postojnë orën/vendet me 1-klik dhe udhëtarët rezervojnë vendin,  
> **atëherë** studentët do të kursejnë 40 minuta në ditë, shoferët do të mbulojnë 60% të kostos së naftës, dhe vonesat në ligjërata do të ulen ndjeshëm.

## 4. Rrjedha Kryesore e Përdoruesit (Core Flow — Max 5 Hapa)
1. **Kyçja:** Studenti kyçet me email zyrtar AAB.
2. **Kërkimi / Postimi:** Shoferi shënon nisjen/orën/vendet; udhëtari shikon listën e veturave të lira.
3. **Kërkesa:** Udhëtari zgjedh veturën dhe shtyp butonin `[Kërko Vend]`.
4. **Konfirmimi:** Shoferi merr njoftim dhe e konfirmon udhëtarin në çast.
5. **Përfundimi:** Udhëtimi kryhet dhe të dy palët lënë vlerësim me 1-prekje.

## 5. Kufijtë e MVP-së (Scope Contract)
- **BRENDA MVP-së (Maksimumi 3 funksione):**
  1. Autentikimi i sigurt me domain-in zyrtar AAB.
  2. Postimi i thjeshtë i udhëtimit me numër vendesh dhe çmim fiks simbolik.
  3. Kërkesa dhe konfirmimi i vendit në kohë reale (Supabase Realtime).
- **JASHTË MVP-së (Të përjashtuara qëllimisht për këtë semestër):**
  - Zero pagesa me kartela bankare (ndarja e parave bëhet me para në dorë).
  - Zero navigim GPS apo harta në kohë reale (konsumon baterinë dhe rrit kompleksitetin).
  - Zero sistem chat-i të brendshëm (përdoret telefonata/SMS direkt).

## 6. Kriteret e Pranimit (Acceptance Criteria - Çfarë testohet)
- [ ] **AC-1:** Kur një shofer poston 3 vende, ato shfaqen menjëherë te të gjithë pa rifreskuar faqen.
- [ ] **AC-2:** Kur një udhëtar konfirmohet, numri i vendeve të lira zbret nga 3 në 2.
- [ ] **AC-3:** Përdoruesit pa email `@universitetiaab.com` bllokohen nga sistemi.
- [ ] **AC-4:** Aplikacioni hapet dhe shfaq gjendjen offline kur fiket interneti.

## 7. Modeli Minimal i të Dhënave (Supabase PostgreSQL)
```sql
profiles (id, full_name, email, phone, role)
rides (id, driver_id, origin, departure_time, available_seats, price_eur, status)
bookings (id, ride_id, passenger_id, status, created_at)
```

## 8. Rreziku Kryesor që Duhet Testuar
- **Rreziku:** A do të kenë shoferët besim të marrin studentë që nuk i njohin personalisht?
- **Testi në Javën 2:** Verifikimi përmes emailit institucional AAB mjafton për të krijuar besimin e parë.
