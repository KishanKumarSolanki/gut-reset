import { GA4_ID, META_PIXEL_ID } from '../data/config'

let initialized = false

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  // Google Analytics 4
  if (GA4_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA4_ID)

    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
    document.head.appendChild(s)
  }

  // Meta (Facebook) Pixel
  if (META_PIXEL_ID) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = true
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */

    window.fbq('init', META_PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

// Meta standard events where one fits; everything else is a custom event
const META_STANDARD = { registration: 'Lead' }

export function track(event, data = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, data)
    }
    if (typeof window.fbq === 'function') {
      if (META_STANDARD[event]) {
        window.fbq('track', META_STANDARD[event], data)
      } else {
        window.fbq('trackCustom', event, data)
      }
    }
  } catch (e) {
    // Tracking must never break the page
  }
}

// Fires scroll_depth once each at 25 / 50 / 75 / 100 %
export function trackScrollDepth() {
  if (typeof window === 'undefined') return () => {}

  const milestones = [25, 50, 75, 100]
  const done = new Set()
  let frame = null

  const check = () => {
    frame = null
    const doc = document.documentElement
    const scrollable = doc.scrollHeight - doc.clientHeight
    // Short pages with nothing to scroll count as fully seen
    const pct = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100 + (window.innerHeight / doc.scrollHeight) * 0

    milestones.forEach((m) => {
      if (pct >= m - 1 && !done.has(m)) {
        done.add(m)
        track('scroll_depth', { percent: m })
      }
    })

    if (done.size === milestones.length) {
      window.removeEventListener('scroll', onScroll)
    }
  }

  const onScroll = () => {
    if (frame === null) frame = requestAnimationFrame(check)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  check()

  return () => {
    if (frame !== null) cancelAnimationFrame(frame)
    window.removeEventListener('scroll', onScroll)
  }
}