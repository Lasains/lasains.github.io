import { profile } from "@/data/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex w-full max-w-[var(--content-width)] flex-col gap-2 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {profile.brand}
        </span>
        <span>React, Tailwind CSS, shadcn/ui</span>
        <a
          href={profile.repo}
          target="_blank"
          rel="noreferrer"
          aria-label="Lihat repositori kode situs ini di GitHub (buka di tab baru)"
          className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Kode situs ini
        </a>
      </div>
    </footer>
  )
}
