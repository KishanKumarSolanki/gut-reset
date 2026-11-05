import { Section, Reveal, Button } from './ui'

export default function FinalCTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-[#4c0710] text-center text-white">
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-crimson-light/20 blur-3xl" aria-hidden="true" />

      {/* Top and bottom hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-light" />
            Limited Free Seats
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:mt-6 sm:text-5xl sm:leading-[1.1]">
            Your Gut-Health Journey Begins with{' '}
            <span className="bg-gradient-to-r from-white via-white to-crimson-light bg-clip-text text-transparent">
              Understanding.
            </span>
          </h2>

          <p className="mt-4 text-lg font-semibold text-white sm:mt-5 sm:text-2xl">
            You don’t have to start by guessing. Start by learning.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
            Join Dr. Abhimanyu Bhargava’s 90-Minute LIVE Gut Reset Masterclass to understand common digestive concerns, explore food and lifestyle factors, and discover practical approaches to gut wellness.
          </p>

          {/* Value strip */}
          <div className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white/90 backdrop-blur-md sm:mt-8 sm:px-6 sm:py-4 sm:text-base">
            <span>90-Minute LIVE Online Masterclass</span>
            <span className="hidden h-4 w-px bg-white/25 sm:block" />
            <span>Actual Value: <span className="line-through decoration-white/60">₹999</span></span>
            <span className="hidden h-4 w-px bg-white/25 sm:block" />
            <span>Register Today: <b className="font-extrabold text-white">FREE</b></span>
          </div>

          {/* Bonus highlight */}
          <div className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-3 rounded-2xl bg-white px-4 py-3 text-crimson-dark shadow-2xl shadow-black/20 sm:mt-6 sm:px-6 sm:py-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-crimson/10 text-lg" aria-hidden="true">🎁</span>
            <p className="text-left text-base font-extrabold sm:text-xl">
              Get Your 5 Exclusive Bonuses Worth ₹12,000 FREE!
            </p>
          </div>

          <div className="mt-7 flex flex-col items-center gap-4 sm:mt-10">
            <Button variant="dark" className="group w-full justify-center px-10 shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto">
              Register Now: Join for Free
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Button>
            <p className="text-sm text-white/60">Live session · Seats are limited</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}