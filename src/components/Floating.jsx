import { track } from '../utils/track'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/config'

export default function Floating() {
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('whatsapp_click')}
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-24 right-4 z-40 md:bottom-6 md:right-6"
      >
        {/* Pulse ring */}
        <span
          className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/40"
          aria-hidden="true"
        />

        {/* Tooltip (desktop only) */}
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat with us on WhatsApp
        </span>

        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#34e072] to-[#128C7E] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] ring-4 ring-white/80 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:shadow-[0_18px_40px_-8px_rgba(37,211,102,0.75)] group-active:scale-95">
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3Zm0 23.7a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.8 1.2 1.2-3.7-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 4.9c2 .8 2.8.9 3.8.7a3.2 3.2 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.4Z" />
          </svg>
        </span>
      </a>

      {/* Mobile sticky register bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 px-3 pb-3 pt-6 md:hidden">
        {/* Fade behind bar so content doesn't clash */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 to-transparent" aria-hidden="true" />

        <a
          href="#register"
          onClick={() => track('cta_click', { label: 'mobile_sticky_register', target: '#register' })}
          className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-crimson to-crimson-light py-3.5 text-center text-base font-extrabold text-white shadow-[0_12px_30px_-8px_rgba(155,17,30,0.7)] ring-1 ring-white/20 transition-transform duration-300 active:scale-[0.98]"
        >
          Register Now: Join for Free
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  )
}