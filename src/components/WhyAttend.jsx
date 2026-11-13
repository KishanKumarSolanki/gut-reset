import { Section, Heading, Reveal } from './ui'
import { worth } from '../data/content'

const img = '/images/mentor-maroon.png'

export default function WhyAttend() {
  return (
    <Section className="relative overflow-hidden bg-paper">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-crimson-dark/10 blur-3xl" aria-hidden="true" />

      <div className="relative">
        <Heading
          title="What Makes This Masterclass Worth Attending?"
          sub="Practical Learning for Your Gut-Health Journey"
        />

        <div className="grid items-center gap-8 sm:gap-14">
          {/* Timeline */}
          <div className="relative mx-auto w-full max-w-4xl pl-10">
            {/* Vertical gradient line */}
            <div
              className="pointer-events-none absolute bottom-2 left-[0.6rem] top-2 w-px bg-gradient-to-b from-crimson via-crimson/40 to-transparent"
              aria-hidden="true"
            />

            <ol className="space-y-7">
              {worth.map(([t, d], i) => (
                <Reveal key={t} delay={i * 60}>
                  <li className="group relative">
                    {/* Node */}
                    <span
                      className="absolute -left-10 top-1 grid h-5 w-5 place-items-center rounded-full border-4 border-paper bg-crimson shadow-[0_0_0_4px_rgba(155,17,30,0.12)] transition-transform duration-300 group-hover:scale-125"
                      aria-hidden="true"
                    />

                    <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_8px_24px_-18px_rgba(139,0,20,0.3)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-crimson/25 group-hover:shadow-[0_16px_36px_-18px_rgba(139,0,20,0.35)]">
                      <span className="mb-2 inline-block font-display text-xs font-extrabold tracking-widest text-crimson/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-lg font-bold leading-snug text-ink sm:text-xl">{t}</h3>
                      <p className="mt-1.5 leading-relaxed text-neutral-600">{d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Mentor image */}
          {/* <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-gradient-to-br from-crimson/20 via-crimson-light/10 to-transparent" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-[0_30px_70px_-30px_rgba(139,0,20,0.45)]">
              <img
                src={img}
                alt="Dr. Abhimanyu Bhargava"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/40 to-transparent" aria-hidden="true" />
            </div>
          </Reveal> */}
        </div>

      </div>
    </Section>
  )
}