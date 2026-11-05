import { Section, Heading, Reveal } from './ui'
import { why } from '../data/content'

export default function WhyJoin() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-crimson-dark/10 blur-3xl" aria-hidden="true" />

      <div className="relative">
        <Heading
          title="Why Should You Join?"
          sub="Sirf Symptoms Nahi — Apne Gut Ko Samajhna Seekhiye."
        />

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-paper p-5 shadow-[0_10px_30px_-20px_rgba(139,0,20,0.3)] transition-all duration-500 hover:-translate-y-2 hover:border-crimson/25 hover:shadow-[0_24px_50px_-20px_rgba(139,0,20,0.4)] sm:p-7">
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 bg-gradient-to-r from-crimson via-crimson-light to-crimson-dark transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                {/* Corner glow on hover */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-crimson/0 blur-2xl transition-colors duration-500 group-hover:bg-crimson/10"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark text-2xl shadow-lg shadow-crimson/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {ic}
                  </div>
                  <span className="font-display text-xs font-extrabold tracking-widest text-crimson/40 transition-colors duration-500 group-hover:text-crimson">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold leading-snug text-ink">
                  {t}
                </h3>
                <p className="relative mt-3 leading-relaxed text-neutral-600">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}