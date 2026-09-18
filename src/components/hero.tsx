import { Fragment } from "react"
import { MailIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { facts, profile, whoami } from "@/data/site"
import { useTypewriter } from "@/hooks/use-typewriter"

function Terminal() {
  const { value, isDone } = useTypewriter(whoami.command)

  return (
    <div className="border border-hairline bg-paper px-4 py-4 font-mono text-[0.8125rem] leading-relaxed">
      <p>
        <span className="text-teal">$</span> {value}
        {isDone ? null : (
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-ink"
          />
        )}
      </p>
      {isDone
        ? whoami.output.map((line) => (
            <p key={line} className="text-muted-foreground">
              {line}
            </p>
          ))
        : null}
    </div>
  )
}

function Portrait() {
  return (
    <figure className="flex w-40 shrink-0 flex-col gap-2 sm:w-48">
      <Avatar className="aspect-3/4 size-full rounded-none border border-hairline bg-paper after:rounded-none">
        <AvatarImage
          src={profile.photo}
          srcSet={`${profile.photo} 1x, ${profile.photoRetina} 2x`}
          alt={`Foto ${profile.username}`}
          loading="eager"
          className="rounded-none object-cover"
        />
        <AvatarFallback className="rounded-none font-mono text-base text-muted-foreground">
          {profile.initials}
        </AvatarFallback>
      </Avatar>
      <figcaption className="font-mono text-xs text-muted-foreground">
        {profile.photoCaption}
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="flex scroll-mt-24 flex-col gap-8 pt-12 sm:pt-16"
    >
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:justify-between sm:gap-12">
        <div className="flex max-w-[34rem] flex-col gap-5">
          <h1 className="text-[clamp(2.25rem,6.5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            {profile.title}.
          </h1>
          <p className="text-lg text-muted-foreground">{profile.subtitle}</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild>
              <a href="#log">Lihat log proyek</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>
                <MailIcon data-icon="inline-start" />
                {profile.email}
              </a>
            </Button>
          </div>
        </div>
        <Portrait />
      </div>

      <Terminal />

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
        {facts.map((fact, index) => (
          <Fragment key={fact}>
            {index > 0 ? (
              <Separator orientation="vertical" className="h-3" />
            ) : null}
            <span>{fact}</span>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
