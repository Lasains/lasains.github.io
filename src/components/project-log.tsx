import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import type { Project } from "@/data/site"
import { projects } from "@/data/site"

function LogEntry({ project }: { project: Project }) {
  return (
    <article className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
      <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
        <time className="font-mono text-xs text-muted-foreground">
          {project.date}
        </time>
        {project.live ? (
          <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 bg-signal" />
            live
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <Badge variant="outline" className="font-mono font-normal">
            {project.context}
          </Badge>
        </div>

        <p className="max-w-[62ch]">{project.summary}</p>

        <p className="max-w-[62ch] border-l-2 border-teal/40 bg-paper/50 py-1.5 pl-3.5 pr-2 text-[0.9375rem] text-muted-foreground">
          <span className="font-mono text-xs text-foreground">
            Keputusan teknis:{" "}
          </span>
          {project.decision}
        </p>

        <dl className="flex flex-col gap-1 font-mono text-xs text-muted-foreground">
          <div className="flex gap-3">
            <dt className="w-11 shrink-0 text-foreground">Peran</dt>
            <dd>{project.role}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-11 shrink-0 text-foreground">Stack</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.links.map((link) => (
            <Button key={link.href} variant="outline" size="sm" asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} untuk proyek ${project.title} (buka di tab baru)`}
              >
                {link.label}
                <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </article>
  )
}

export function ProjectLog() {
  return (
    <Section
      id="log"
      title="Log proyek"
      meta={`${projects.length} entri, terbaru di atas`}
    >
      <div className="flex flex-col divide-y divide-hairline">
        {projects.map((project) => (
          <LogEntry key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
