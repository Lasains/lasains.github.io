import { Section } from "@/components/section"
import { about } from "@/data/site"

export function AboutSection() {
  return (
    <Section id="tentang" title={about.heading}>
      <div className="flex max-w-[68ch] flex-col gap-4">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
