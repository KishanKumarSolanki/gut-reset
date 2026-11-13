import { Section, Heading, Reveal } from './ui'
import Button from './Button'
import { details } from '../data/content'

export default function MasterclassDetails() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-neutral-100 to-paper">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-crimson-dark/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <Heading title="Masterclass Details" sub="Everything You Need to Know" />

        <Reveal className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_70px_-30px_rgba(139,0,20,0.35)] ring-1 ring-neutral-200/70 sm:mt-14">
          {/* Top brand bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-crimson-dark via-crimson to-crimson-light" aria-hidden="true" />

          <dl className="divide-y divide-neutral-100">
            {details.map(([k, v], i) => (
              <div
                key={k}
                className="group grid gap-2 px-5 py-4 transition-colors duration-300 hover:bg-crimson/[0.03] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-center sm:gap-8 sm:px-9 sm:py-5"
              >
                <dt className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-crimson">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-crimson/10 font-display text-xs font-extrabold text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {k}
                </dt>
                <dd className="text-base font-semibold leading-relaxed text-ink sm:text-right sm:text-lg">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTA panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-ink via-[#2a0b10] to-crimson-dark px-5 py-8 text-center text-white sm:px-10 sm:py-10">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-crimson-light/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-crimson-light">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-light" aria-hidden="true" />
                Join from anywhere
              </span>

              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                Attend from the comfort of your home using your mobile phone, laptop or tablet.
              </p>

              <div className="mt-7">
                <Button className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}