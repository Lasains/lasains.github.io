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
    "Mahasiswa Teknik Informatika dan Komputer semester 3 di Makassar. Saya bangun sistem yang mencatat stok, transaksi, dan progres kerja — lalu menjaga datanya tetap konsisten saat dipakai orang lain.",
  status: "Terbuka untuk kerja sama",
  email: "aethercodev@gmail.com",
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
    "lasains, backend web developer",
    "mahasiswa teknik informatika dan komputer, semester 3",
    "mulai ngoding sejak kelas 2 SMK, fokus backend",
  ],
} as const

export const facts = [
  "Makassar",
  "Semester 3",
  "Backend web",
  "Sejak kelas 2 SMK",
] as const

export const projects: Project[] = [
  {
    date: "2025.12",
    title: "Nexventory",
    context: "proyek UAS",
    role: "Ketua kelompok: pembagian tugas, skema database, autentikasi, alur checkout, deployment",
    summary:
      "Aplikasi manajemen inventori dan transaksi jual-beli dengan dua peran pengguna, admin dan penjual. Produk, stok, dan riwayat transaksi tercatat dalam satu alur, termasuk checkout QRIS yang status pembayarannya dicek berkala sampai lunas atau kedaluwarsa.",
    decision:
      "Skema database dimigrasikan otomatis saat aplikasi start, dan URI database dideteksi sendiri, MySQL lokal atau cloud, dengan fallback SQLite. Tujuannya supaya deploy ulang tidak pernah gagal karena skema tertinggal.",
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
    role: "Backend, integrasi database, dan deployment",
    summary:
      "Sistem pencatatan pekerjaan dan pekerja untuk tim lapangan. REST API Express yang terdokumentasi Swagger jadi sumber datanya, bot WhatsApp dipakai sebagai kanal input cepat, dan dashboard React menampilkan progres serta performa pekerja.",
    decision:
      "Saya menulis skrip sinkronisasi yang memindahkan data lokal ke MySQL cloud, termasuk menangani syarat primary key yang bikin proses sync gagal diam-diam. Setelah itu tim bisa demo tanpa bergantung ke database di laptop.",
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
]

export const stackGroups: StackGroup[] = [
  { label: "Bahasa", items: ["JavaScript", "SQL", "PHP"] },
  { label: "Framework", items: ["Express"] },
  {
    label: "Data",
    items: ["MySQL", "SQLite"],
  },
  {
    label: "Deployment",
    items: ["Vercel", "Railway"],
  }
]

export const about = {
  heading: "Tentang",
  paragraphs: [
    "Saya mulai mendalami programming sejak kelas 2 SMK, dan sejak itu arah saya konsisten ke backend web. Sekarang saya mahasiswa Teknik Informatika dan Komputer semester 3, dan sebagian besar yang saya bangun berangkat dari masalah nyata: stok yang susah dilacak, transaksi yang perlu bukti, progres kerja yang tercecer di chat.",
    "Cara kerja saya sehari-hari melibatkan AI, dan saya menyebutnya vibe coding. AI saya pakai untuk mempercepat eksplorasi pola dan membaca error lebih cepat, bukan untuk menggantikan pemahaman. Keputusan skema, alur autentikasi, dan bentuk API tetap saya yang tentukan, karena bagian itu yang harus saya pertanggungjawabkan saat sistemnya dipakai.",
  ],
} as const

export const navItems = [
  { label: "Log", href: "#log" },
  { label: "Stack", href: "#stack" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
] as const
