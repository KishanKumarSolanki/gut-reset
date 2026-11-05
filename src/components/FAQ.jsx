import { useState } from 'react'
import { Section, Heading } from './ui'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="relative overflow-hidden bg-white">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-crimson-dark/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Heading title="Frequently Asked Questions" />

        <div className="mx-auto mt-8 max-w-3xl space-y-3 sm:mt-14 sm:space-y-4">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <div
                key={q}
                className={`group relative overflow-hidden rounded-3xl border bg-white transition-all duration-500 ${
                  isOpen
                    ? 'border-crimson/30 shadow-[0_20px_50px_-20px_rgba(139,0,20,0.35)] ring-1 ring-crimson/10'
                    : 'border-neutral-200/80 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.25)] hover:border-crimson/20 hover:shadow-[0_12px_30px_-18px_rgba(139,0,20,0.25)]'
                }`}
              >
                {/* Left accent bar */}
                <div
                  className={`pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-crimson via-crimson-light to-crimson-dark transition-opacity duration-500 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-3 p-4 pl-5 text-left sm:gap-4 sm:p-6 sm:pl-7"
                >
                  {/* Number badge */}
                  <span
                    className={`font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold tracking-wide transition-all duration-500 ${
                      isOpen
                        ? 'bg-gradient-to-br from-crimson to-crimson-dark text-white shadow-lg shadow-crimson/30'
                        : 'bg-crimson/10 text-crimson group-hover:bg-crimson/15'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    className={`flex-1 text-base font-bold leading-snug transition-colors duration-300 sm:text-lg ${
                      isOpen ? 'text-crimson' : 'text-ink'
                    }`}
                  >
                    {q}
                  </span>

                  {/* Toggle icon */}
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? 'rotate-45 border-crimson bg-crimson text-white shadow-md shadow-crimson/30'
                        : 'border-neutral-200 bg-white text-neutral-500 group-hover:border-crimson/30 group-hover:text-crimson'
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-4 w-4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Animated answer panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-[4rem] sm:px-6 sm:pb-7 sm:pl-[5.25rem]">
                      <div className="border-t border-crimson/10 pt-4">
                        <p className="text-[15px] leading-relaxed text-neutral-600 sm:text-base">{a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}