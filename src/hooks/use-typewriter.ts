import * as React from "react"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function subscribeToMotionPreference(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
  mediaQuery.addEventListener("change", onChange)

  return () => {
    mediaQuery.removeEventListener("change", onChange)
  }
}

function getMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function getServerMotionPreference() {
  return true
}

type TypewriterOptions = {
  /** Jeda antar karakter, dalam milidetik */
  speed?: number
  /** Jeda sebelum mulai mengetik */
  startDelay?: number
}

/**
 * Mengetik teks satu kali saat mount, lalu berhenti.
 * Kalau pengguna meminta reduced motion, teks langsung tampil penuh.
 */
export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { speed = 60, startDelay = 320 } = options
  const prefersReducedMotion = React.useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference
  )
  const [typedLength, setTypedLength] = React.useState(0)

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    let index = 0
    let intervalId: number | undefined

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setTypedLength(index)

        if (index >= text.length) {
          window.clearInterval(intervalId)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeoutId)

      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [text, speed, startDelay, prefersReducedMotion])

  if (prefersReducedMotion) {
    return { value: text, isDone: true }
  }

  return {
    value: text.slice(0, typedLength),
    isDone: typedLength >= text.length,
  }
}
