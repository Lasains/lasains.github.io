import * as React from "react"

/**
 * Menandai section mana yang sedang dibaca, untuk menyorot tautan navigasi.
 * Memakai IntersectionObserver, tanpa listener scroll manual.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}
