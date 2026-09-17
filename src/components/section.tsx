import * as React from "react"

type SectionProps = {
  id: string
  title: string
  /** Metadata kecil di kanan judul, misalnya jumlah entri */
  meta?: string
  children: React.ReactNode
}

export function Section({ id, title, meta, children }: SectionProps) {
  return (
    <section id={id} className="flex scroll-mt-24 flex-col gap-6">
      <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-2">
        <h2 className="text-2xl leading-tight font-semibold tracking-tight sm:text-[2rem]">
          {title}
        </h2>
        {meta ? (
          <span className="font-mono text-xs text-muted-foreground">
            {meta}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  )
}
