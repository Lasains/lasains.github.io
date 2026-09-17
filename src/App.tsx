import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Hero } from "@/components/hero"
import { ProjectLog } from "@/components/project-log"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StackList } from "@/components/stack-list"

export function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-hairline focus:bg-paper focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
      >
        Lewati ke konten
      </a>

      <SiteHeader />

      <main
        id="konten"
        className="mx-auto flex w-full max-w-[var(--content-width)] flex-1 flex-col gap-16 px-6 pb-24 sm:gap-20"
      >
        <Hero />
        <ProjectLog />
        <StackList />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
