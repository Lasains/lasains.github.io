# lasains.github.io

Portofolio satu halaman untuk Lasains — backend web developer, mahasiswa Teknik
Informatika dan Komputer di Makassar.

Situs ini sengaja dibentuk seperti **log**, bukan galeri: proyek tampil sebagai
entri bertanggal dengan keputusan teknis yang diambil, bukan kartu mengkilap
berisi kata-kata jualan. Aturan desain lengkapnya ada di `design.md`.

## Tech stack

| Bagian     | Teknologi                          |
| ---------- | ---------------------------------- |
| Framework  | React 19 + TypeScript              |
| Build tool | Vite                               |
| Styling    | Tailwind CSS v4                    |
| Komponen   | shadcn/ui (base `radix`)           |
| Ikon       | lucide-react                       |
| Font       | Archivo + JetBrains Mono, self-host lewat `@fontsource` (tanpa CDN pihak ketiga) |

## Menjalankan secara lokal

Butuh Node.js 20.19+ (lihat `.nvmrc`, disarankan Node 24).

```bash
nvm use          # membaca .nvmrc
npm install
npm run dev      # http://localhost:5173
```

Perintah lain:

```bash
npm run build      # type-check lalu build produksi ke dist/
npm run preview    # menjalankan hasil build
npm run typecheck  # cek tipe tanpa build
npm run lint       # ESLint
npm run format     # Prettier
```

## Mengganti foto profil

Simpan foto sebagai:

```
public/images/lasains.jpg
```

Rasio yang paling pas 3:4 (potret). Selama file itu belum ada, situs menampilkan
inisial sebagai fallback, jadi tampilan tidak pernah rusak. Ganti path-nya di
`src/data/site.ts` (`profile.photo`) kalau mau pakai nama file lain.

## Mengubah isi

Hampir semua teks berada di satu tempat: `src/data/site.ts`.

| Isi                        | Variabel       |
| -------------------------- | -------------- |
| Nama, status, email, link  | `profile`      |
| Baris terminal di hero     | `whoami`       |
| Entri log proyek           | `projects`     |
| Daftar stack               | `stackGroups`  |
| Paragraf tentang           | `about`        |

Komponen tampilan ada di `src/components/`, token warna dan tipografi di
`src/index.css`.

## Deployment

Push ke branch `master` (atau `main`) akan menjalankan workflow
`.github/workflows/deploy.yml`: build Vite lalu publish `dist/` ke GitHub Pages.

Sekali saja di awal: buka **Settings → Pages** pada repo ini, lalu set
**Source** ke **GitHub Actions**.
