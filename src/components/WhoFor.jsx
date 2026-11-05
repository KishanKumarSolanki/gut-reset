import { Section, Reveal, Button } from './ui'
import { forWhom } from '../data/content'

const img = '/images/mentor-beige.png'

export default function WhoFor() {
  return (
    <Section
      id="for-you"
      className="bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light text-white"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-ink/30 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />

      <div className="relative grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Left: heading + image */}
        <Reveal className="lg:col-span-2 lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            Who It’s For
          </span>

          <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            Who Is This Masterclass For?
          </h2>

          <p className="mt-4 text-xl font-semibold text-white/95">
            Kya Aapka Gut Bhi Aapse Kuch Keh Raha Hai?
          </p>

          <div className="relative mt-8 max-w-sm">
            {/* Offset frame */}
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-white/10" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white/20 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
              <img
                src={img}
                alt="Dr. Abhimanyu Bhargava"
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-crimson-dark/70 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </Reveal>

        {/* Right: checklist + CTA */}
        <div className="lg:col-span-3">
          <ul className="space-y-3">
            {forWhom.map((q, i) => (
              <Reveal key={q} delay={i * 50}>
                <li className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/15">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-crimson shadow-md transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-white/95 sm:text-[17px]">{q}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-[#2a0b10] p-6 shadow-2xl shadow-black/30 sm:p-7">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-crimson-light/20 blur-2xl" aria-hidden="true" />
            <p className="relative text-lg font-semibold leading-relaxed text-white">
              Agar inmein se 2–3 baatein bhi aapki daily life se judi hain, toh yeh Masterclass aapke liye useful ho sakti hai.
            </p>
          </div>

          <div className="mt-8">
            <Button variant="white" className="group w-full justify-center sm:w-auto">
              Join the Free Masterclass
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}