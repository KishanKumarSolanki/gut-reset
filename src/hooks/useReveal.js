import { useEffect, useRef, useState } from 'react'

export default function useReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = true } = options
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    // Show immediately if the user prefers reduced motion or the API is missing
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          if (once) io.disconnect()
        } else if (!once) {
          setShown(false)
        }
      },
      { threshold, rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, shown]
}