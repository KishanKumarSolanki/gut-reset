import { Section, Heading, Reveal } from './ui'
import Button from './Button'
import { bonuses } from '../data/content'

export default function Bonuses() {
  return (
    <Section id="bonuses" className="relative overflow-hidden bg-white">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-crimson-dark/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Heading
          title="Register Now & Get These Exclusive Gut Health Bonuses Free!"
          sub="5 Exclusive Bonuses Worth ₹12,000: Absolutely FREE When You Register! Register for the Gut Reset Masterclass and receive five complementary educational resources to support your learning journey."
        />

        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {bonuses.map(([ic, t, d, g], i) => (
            <Reveal
              key={t}
              delay={i * 70}
              className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
            >
              <article className="group relative flex h-full overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_10px_40px_-18px_rgba(139,0,20,0.25)] ring-1 ring-neutral-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(139,0,20,0.35)] hover:ring-crimson/30">
                {/* Icon panel */}
                <div
                  className={`relative grid w-28 shrink-0 place-items-center overflow-hidden bg-gradient-to-b ${g} sm:w-32`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
                  <span className="relative text-4xl drop-shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:text-5xl">
                    {ic}
                  </span>
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-crimson/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-crimson">
                      Bonus #{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{d}</p>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-5">
                    <div className="h-px w-full origin-left scale-x-50 bg-gradient-to-r from-crimson via-crimson-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Summary panel */}
        <Reveal className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light p-6 text-center text-white shadow-2xl shadow-crimson/30 sm:mt-16 sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-crimson-light/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Total Bonus Value
            </span>

            <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <span className="text-white">
                ₹12,000/-
              </span>
            </p>

            <p className="mt-3 text-lg text-white/90">Get All 5 Bonuses FREE When You Register!</p>

            <div className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70">
              <span>Masterclass Value: <span className="line-through decoration-crimson-light/70">₹999</span></span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span>Your Registration Fee: <b className="font-extrabold text-white">FREE</b></span>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="black" className="w-full sm:w-auto" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}