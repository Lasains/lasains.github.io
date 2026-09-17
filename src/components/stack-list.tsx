import { Section } from "@/components/section"
import { stackGroups } from "@/data/site"

export function StackList() {
  return (
    <Section id="stack" title="Stack" meta="dipakai di proyek di atas">
      <dl className="flex flex-col divide-y divide-hairline">
        {stackGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-1 py-3 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted-foreground sm:pt-1">
              {group.label}
            </dt>
            <dd className="text-[0.9375rem]">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
