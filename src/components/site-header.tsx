import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { navItems, profile } from "@/data/site"
import { useActiveSection } from "@/hooks/use-active-section"

const sectionIds = navItems.map((item) => item.href.replace("#", ""))

export function SiteHeader() {
  const activeId = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[var(--content-width)] items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="flex items-baseline gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          {profile.username}
          <span className="hidden items-center gap-1.5 text-xs font-normal text-muted-foreground sm:flex">
            <span aria-hidden="true" className="size-1.5 bg-signal" />
            {profile.status}
          </span>
        </a>

        <nav aria-label="Navigasi halaman" className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace("#", "")

              return (
                <Button key={item.href} variant="ghost" size="sm" asChild>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative",
                      isActive &&
                        "after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-px after:bg-signal"
                    )}
                  >
                    {item.label}
                  </a>
                </Button>
              )
            })}
          </div>

          <Button variant="ghost" size="sm" asChild>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
