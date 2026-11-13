import { Section, Reveal } from './ui'
import Button from './Button'

const img = '/images/mentor-grey.png'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '5 Lakh+', label: 'Happy Clients' },
]

const credentials = ['BAMS', 'M.Sc.', 'M.Phil.']

export default function About() {
  return (
    <Section id="mentor" className="relative overflow-hidden bg-ink text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-crimson/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-crimson-dark/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-md">
          {/* Offset gradient frame */}
          <div className="absolute -inset-4 rotate-3 rounded-[2.25rem] bg-gradient-to-br from-crimson via-crimson-dark to-ink opacity-90" />
          <div className="absolute -inset-px rounded-[2rem] border border-white/10" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50">
            <img
              src={img}
              alt="Dr. Abhimanyu Bhargava"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Bottom fade for depth */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
          </div>

          {/* Floating credential badge */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-light">
              Ayurvedic Physician
            </p>
            <p className="mt-1 font-display text-lg font-bold">Bhargav Ayurveda</p>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson-light/30 bg-crimson/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-crimson-light">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-light" />
            Meet Your Mentor
          </span>

          <h2 className="mt-6 whitespace-nowrap text-center font-display text-[clamp(1.5rem,7vw,3rem)] font-extrabold leading-tight tracking-tight">
            Dr. Abhimanyu Bhargava
            {/* <span className="bg-gradient-to-r from-white via-white to-crimson-light bg-clip-text text-transparent">
              Bhargava
            </span> */}
          </h2>

          <p className="mt-4 text-lg text-crimson-light">
            Founder, Bhargav Ayurveda · Gut &amp; Mind Coach
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="rounded-md bg-white/10 px-3 py-1 text-sm font-semibold tracking-wide text-white/90"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-8 text-lg leading-relaxed text-white/75">
            Join Dr. Abhimanyu Bhargava in this LIVE educational Masterclass and gain a structured
            understanding of gut health, digestive concerns, food habits, lifestyle factors and
            Ayurvedic perspectives.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-ink/80 p-6 backdrop-blur-sm transition-colors hover:bg-white/5">
                <div className="font-display text-4xl font-extrabold text-white">{value}</div>
                <div className="mt-1 text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Button className="w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}