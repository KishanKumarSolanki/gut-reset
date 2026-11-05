import { Section, Heading, Reveal, Button } from './ui'
import { learn } from '../data/content'

export default function Learn() {
  return (
    <Section
      id="learn"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffaf8] via-[#fdebed] to-[#f8dfe2]"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-crimson/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-crimson-dark/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Heading
          title="What Will You Learn in This Masterclass?"
          sub="Build a Better Understanding of Your Gut Health"
        />

        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {learn.map(([ic, t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-5 shadow-[0_8px_30px_-12px_rgba(139,0,20,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-crimson/30 hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(139,0,20,0.25)] sm:p-7">
                {/* Corner glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-crimson/0 blur-2xl transition-all duration-500 group-hover:bg-crimson/15" />

                <div className="relative flex items-start gap-5">
                  {/* Icon chip */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark text-2xl text-white shadow-lg shadow-crimson/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {ic}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold leading-snug text-ink">
                        {t}
                      </h3>
                      <span className="font-display text-sm font-extrabold tracking-widest text-crimson/40 transition-colors duration-500 group-hover:text-crimson">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-2 leading-relaxed text-neutral-600">{d}</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-crimson via-crimson-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:mt-16">
          <Button className="w-full justify-center px-10 shadow-lg shadow-crimson/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-crimson/40 sm:w-auto">
            Reserve Your Free Seat
          </Button>
          <p className="text-sm text-neutral-500">Live session · Ask your questions directly</p>
        </div>
      </div>
    </Section>
  )
}