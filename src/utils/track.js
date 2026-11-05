import { GA4_ID, META_PIXEL_ID } from '../data/config'

export function initAnalytics() {
  if (GA4_ID) {
    const s = document.createElement('script'); s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`; document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date()); window.gtag('config', GA4_ID)
  }
  if (META_PIXEL_ID) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID); window.fbq('track', 'PageView')
  }
}

// Meta standard events where one fits, custom events otherwise
const META_STANDARD = { registration: 'Lead' }
export function track(event, data = {}) {
  try {
    if (window.gtag) window.gtag('event', event, data)
    if (window.fbq) META_STANDARD[event] ? window.fbq('track', META_STANDARD[event], data) : window.fbq('trackCustom', event, data)
  } catch (e) { /* tracking must never break the page */ }
}

// Fires scroll_depth once each at 25/50/75/100 %
export function trackScrollDepth() {
  const done = new Set()
  const f = () => {
    const h = document.documentElement
    const pct = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100
    ;[25, 50, 75, 100].forEach(m => { if (pct >= m - 1 && !done.has(m)) { done.add(m); track('scroll_depth', { percent: m }) } })
  }
  window.addEventListener('scroll', f, { passive: true })
  return () => window.removeEventListener('scroll', f)
}
