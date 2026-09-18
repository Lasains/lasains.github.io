import * as React from "react"
import { ArrowUpRightIcon, CheckIcon, CopyIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { profile } from "@/data/site"

export function ContactSection() {
  const [isCopied, setIsCopied] = React.useState(false)
  const resetRef = React.useRef<number | undefined>(undefined)

  React.useEffect(() => {
    return () => {
      if (resetRef.current) {
        window.clearTimeout(resetRef.current)
      }
    }
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setIsCopied(true)
      resetRef.current = window.setTimeout(() => setIsCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="kontak" title="Kontak">
      <div className="flex flex-col gap-5">
        <p className="max-w-[62ch] text-muted-foreground">
          Paling cepat lewat email. Kalau mau lihat kodenya dulu, semua proyek
          di atas terbuka di GitHub.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" asChild>
            <a href={`mailto:${profile.email}`}>
              <MailIcon data-icon="inline-start" />
              {profile.email}
            </a>
          </Button>

          <Button variant="ghost" onClick={copyEmail}>
            {isCopied ? (
              <CheckIcon data-icon="inline-start" />
            ) : (
              <CopyIcon data-icon="inline-start" />
            )}
            {isCopied ? "Email disalin" : "Salin email"}
          </Button>
        </div>

        <span aria-live="polite" className="sr-only">
          {isCopied ? "Email disalin ke papan klip." : ""}
        </span>

        <Button variant="outline" className="w-fit" asChild>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Kunjungi profil github.com/Lasains (buka di tab baru)"
          >
            github.com/Lasains
            <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Section>
  )
}
