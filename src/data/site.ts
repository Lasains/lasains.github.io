export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  /** Tanggal asli, format YYYY.MM */
  date: string
  title: string
  /** Konteks jujur: proyek pribadi, tugas kuliah, kolaborasi */
  context: string
  /** Bagian yang benar-benar saya kerjakan */
  role: string
  summary: string
  /** Satu keputusan teknis yang layak diceritakan */
  decision: string
  /** Ditulis sebagai daftar biasa, bukan badge warna-warni */
  stack: string[]
  links: ProjectLink[]
  /** Tandai kalau versi live-nya bisa dibuka */
  live?: boolean
}

export type StackGroup = {
  label: string
  items: string[]
}

export const profile = {
  username: "lasains",
  brand: "AetherCodev",
  title: "Backend web developer",
  subtitle:
    "Mahasiswa Teknik Komputer (JTIK) Universitas Negeri Makassar (Semester 3) dengan latar belakang RPL sejak SMK. Berfokus pada backend engineering: merancang skema relasional terotomasi (SQLAlchemy/MySQL), arsitektur REST API, penanganan transaksi checkout QRIS, hingga manipulasi struktur data low-level di C++20.",
  status: "Terbuka untuk kerja sama",
  email: "ahmadanugrahsatya@gmail.com",
  github: "https://github.com/Lasains",
  repo: "https://github.com/Lasains/lasains.github.io",
  photo: "/images/lasains.jpg",
  photoRetina: "/images/lasains@2x.jpg",
  photoCaption: "JTIK Fest, Makassar",
  initials: "LS",
} as const

/** Baris yang diketik sekali saat halaman dimuat — satu-satunya animasi di situs ini */
export const whoami = {
  command: "whoami",
  output: [
    "lasains — backend web developer",
    "teknik komputer @ universitas negeri makassar (semester 3)",
    "fokus: data integrity, rest api, prompt engineering",
  ],
} as const

export const facts = [
  "Makassar",
  "Teknik Komputer UNM",
  "Semester 3",
  "Backend web",
  "Sejak kelas 2 SMK",
] as const

export const projects: Project[] = [
  {
    date: "2026.05",
    title: "perpus_cpp",
    context: "proyek tugas struktur data",
    role: "Arsitektur sistem dan implementasi penuh: struktur data custom (FIFO Queue, LIFO Stack), memory management modern, custom REPL tokenizer, dan build config CMake",
    summary:
      "Sistem manajemen sirkulasi buku interaktif (REPL) berbasis C++20 murni. Mengimplementasikan antrean permintaan peminjaman berbasis FIFO dan riwayat aktivitas transaksi berbasis LIFO (undo stack) dengan waktu eksekusi instan tanpa dependensi eksternal.",
    decision:
      "Membangun tokenizer input manual berbasis state machine dengan dukungan quoted arguments (misal: add \"Bumi Manusia\" \"Pramoedya\"). Solusi ini membedakan spasi pemisah perintah dan spasi di dalam judul secara deterministik tanpa perlu library parsing tambahan.",
    stack: ["C++20", "CMake", "g++"],
    links: [
      { label: "Buka repo", href: "https://github.com/Lasains/Struktur_data_projek" },
    ],
  },
  {
    date: "2025.12",
    title: "Nexventory",
    context: "proyek UAS",
    role: "Technical Lead & Backend: perancangan skema relasional, autentikasi RBAC (Admin & Penjual), integrasi checkout payment gateway QRIS, pipeline migrasi Alembic, dan deployment",
    summary:
      "Sistem POS dan manajemen inventori bisnis dengan pencegahan inkonsistensi stok. Mengintegrasikan pencatatan mutasi barang, validasi transaksi kasir, serta pembuatan invoice QRIS dinamis dengan polling otomatis hingga pembayaran diverifikasi atau kedaluwarsa.",
    decision:
      "Menerapkan dynamic database resolver dan auto-migration runner saat startup aplikasi: sistem secara otomatis mendeteksi konfigurasi MySQL cloud/lokal dengan graceful fallback ke SQLite, mengeliminasi kegagalan cold start saat deployment ulang di cloud hosting.",
    stack: ["Python", "Flask", "SQLAlchemy", "Alembic", "MySQL", "Gunicorn"],
    links: [
      { label: "Buka repo", href: "https://github.com/Lasains/Nexventory" },
      { label: "Buka demo", href: "https://nexventory-ten.vercel.app" },
    ],
    live: true,
  },
  {
    date: "2025.12",
    title: "Situtur AI",
    context: "kolaborasi hackathon",
    role: "Backend & Data Integration: perancangan RESTful API Express, dokumentasi OpenAPI/Swagger, integrasi WhatsApp automated messaging, dan automasi pipeline sinkronisasi database",
    summary:
      "Platform pelaporan operasional pekerja lapangan melalui antarmuka chat WhatsApp. Pesan laporan informal diproses dengan Gemini AI menjadi data terstruktur, divalidasi via REST API Express, dan disinkronkan ke database relasional MySQL untuk dipantau tim supervisor secara real-time.",
    decision:
      "Merancang pipeline sanitasi dan sinkronisasi data dari lokal ke cloud MySQL: menangani penyesuaian foreign key dan constraint duplikasi yang sempat menyebabkan data sync gagal senyap (silent failure), sehingga seluruh alur demo hackathon berjalan stabil di cloud tanpa ketergantungan server lokal.",
    stack: [
      "Node.js",
      "Express",
      "MySQL",
      "whatsapp-web.js",
      "Gemini API",
      "React",
    ],
    links: [
      {
        label: "Buka repo",
        href: "https://github.com/MuhRaihan001/situtur-ai",
      },
    ],
  },
  {
    date: "2024.06",
    title: "Rpl_Info",
    context: "proyek akhir SMK",
    role: "Full-stack Backend: perancangan skema relasional, session-based auth, validasi sanitasi form terhadap XSS/SQLi, dan algoritma paginasi data",
    summary:
      "Portal komunikasi terintegrasi dan forum diskusi angkatan RPL. Menyediakan alur publikasi informasi kelas yang termoderasi, interaksi komentar bersarang, kontrol hak akses berbasis peran (Admin & Siswa), serta navigasi arsip berita dengan paginasi efisien.",
    decision:
      "Menerapkan arsitektur zero-dependency untuk notifikasi update: alur deteksi komentar baru dijalankan melalui query relasional teroptimasi saat request dimuat, menjaga sistem tetap ringan dan dapat berjalan lancar di lingkungan shared hosting bersumber daya terbatas.",
    stack: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    links: [
      { label: "Buka repo", href: "https://github.com/Lasains/Rpl_Info" },
    ],
  },
]

export const stackGroups: StackGroup[] = [
  { label: "Bahasa", items: ["JavaScript", "SQL", "PHP", "C++"] },
  { label: "Framework", items: ["Express"] },
  {
    label: "Data",
    items: ["MySQL", "SQLite"],
  },
  {
    label: "AI & Workflow",
    items: ["Prompt Engineering", "AI-Assisted Dev"],
  },
  {
    label: "Build",
    items: ["CMake", "g++"],
  },
  {
    label: "Deployment",
    items: ["Vercel", "Railway"],
  }
]

export const about = {
  heading: "Tentang",
  paragraphs: [
    "Arah belajar saya terkunci di backend sejak kelas 2 SMK jurusan Rekayasa Perangkat Lunak hingga kini menempuh studi di Teknik Komputer, Jurusan Teknik Informatika dan Komputer (JTIK), Universitas Negeri Makassar. Sebagian besar sistem yang saya rancang berangkat dari kebutuhan nyata: mulai dari aplikasi inventori dengan mutasi stok atomik dan alur checkout QRIS, sistem pelaporan pekerja lapangan via bot WhatsApp terintegrasi Gemini AI, hingga implementasi struktur data antrean dan undo stack berbasis CLI di C++20.",
    "Dalam pengembangan harian, saya menerapkan keahlian prompt engineering dan workflow pengembangan berbantuan AI untuk mengakselerasi riset arsitektur dan debugging. Namun, kontrol rekayasa tetap mutlak: normalisasi skema relasional, pipeline migrasi database, kontrol hak akses (RBAC), serta sanitasi input terhadap celah keamanan selalu saya putuskan dan uji sendiri agar sistem siap dipakai di lingkungan produksi nyata.",
  ],
} as const

export const navItems = [
  { label: "Log", href: "#log" },
  { label: "Stack", href: "#stack" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
] as const
