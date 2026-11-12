## Ndezja e aplikacionit

Ky është aplikacion Next.js. Komandat ekzekutohen nga dosja `aplikacioni`.

### 1. Hape projektin

Nga root-i i repository-t:

```powershell
cd aplikacioni
```

### 2. Instalo varësitë

Këtë komandë zakonisht e ekzekuton vetëm herën e parë:

```powershell
npm install
```

### 3. Krijo `.env.local`

Krijo skedarin `aplikacioni/.env.local` dhe vendos vlerat e tua lokale:

```env
DATABASE_URL=...
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=...
GITHUB_ID=...
GITHUB_SECRET=...
```

Mos e bëj push `.env.local`, sepse përmban sekrete.

### 4. Ndeze serverin lokal

```powershell
npm run dev
```

Hape [http://localhost:3000](http://localhost:3000). Për ta ndalur serverin shtyp `Ctrl+C`.

### 5. Kontrollo build-in para push-it

```powershell
npm run build
```

### 6. Bëj commit dhe push

Këto komanda ekzekutohen nga root-i i repository-t:

```powershell
cd ..
git status
git add .
git commit -m "Përditëso aplikacionin"
git push origin main
```

Pas push-it, Vercel duhet të krijojë deployment automatik. Në Vercel, **Root Directory** duhet të jetë `aplikacioni`.
