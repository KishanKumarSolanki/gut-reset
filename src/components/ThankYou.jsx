import Button from './Button'

const steps = [
  ['Check Your WhatsApp', 'Look out for your Masterclass joining details and updates.'],
  ['Check Your Email', 'Check your inbox and spam folder for registration-related communication.'],
  ['Save Your Joining Details', 'Keep your joining information handy so you can access the session easily.'],
  ['Get Ready to Learn', 'Join from a quiet place using your mobile phone, laptop or tablet.'],
]

const bonus = [
  'Gut Trigger Food Checklist',
  '7-Day Gut-Friendly Diet Guide',
  'Gut Health Daily Routine Planner',
  'Gut Symptom & Food Tracker',
  'Ayurvedic Gut Wellness Guide',
]

export default function ThankYou() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper px-5 py-16 sm:px-8 sm:py-24">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-crimson-dark/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#2a0b10] to-crimson-dark p-8 text-center text-white shadow-[0_30px_70px_-25px_rgba(139,0,20,0.5)] sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-crimson-light/25 blur-3xl" aria-hidden="true" />

          <div className="relative">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-crimson-light" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-crimson-light">
              Registration Confirmed
            </span>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Congratulations! Your Registration Is Successful.
            </h1>
            <p className="mt-3 text-xl font-semibold text-white">Welcome to the Gut Reset Masterclass!</p>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
              You have successfully registered for the 90-Minute LIVE Online Masterclass with Dr. Abhimanyu Bhargava. Get ready to learn more about gut health, food habits, lifestyle factors and practical approaches to digestive wellness.
            </p>
          </div>
        </div>

        {/* What happens next */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">What Happens Next?</h2>
          <ol className="mt-6 space-y-4">
            {steps.map(([t, d], i) => (
              <li
                key={t}
                className="group flex gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_8px_24px_-18px_rgba(139,0,20,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/25 hover:shadow-[0_16px_36px_-18px_rgba(139,0,20,0.35)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark font-display text-base font-extrabold text-white shadow-lg shadow-crimson/25">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-ink">Step {i + 1}: {t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Bonuses */}
        <section className="mt-14 rounded-[2rem] border border-crimson/10 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(139,0,20,0.3)] sm:p-9">
          <span className="inline-flex items-center rounded-full bg-crimson/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-crimson">
            Bonus Included
          </span>
          <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-ink sm:text-3xl">
            Your FREE Bonuses Are Part of the Registration Offer!
          </h2>
          <p className="mt-2 text-neutral-600">Your registration offer includes these five educational resources:</p>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {bonus.map((b, i) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-paper px-4 py-3.5 text-[15px] font-semibold text-ink"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-crimson/10 font-display text-xs font-extrabold text-crimson">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {b}
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-start gap-2.5 rounded-2xl bg-[#fdebed] px-4 py-3 text-sm font-semibold text-crimson-dark">
            <span aria-hidden="true">📩</span>
            Keep an eye on your WhatsApp and email for bonus delivery instructions.
          </p>
        </section>

        {/* Closing */}
        <section className="mt-14 text-center">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">We’re Glad You’re Here!</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-neutral-600">
            Take this opportunity to learn, ask better questions about your gut health and build a more informed approach to your everyday wellness habits.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href="#top"
              onClick={() => { window.location.hash = '' }}
              className="w-full sm:w-auto"
            >
              Return to Homepage
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Button>
          </div>
        </section>

        <p className="mt-12 border-t border-neutral-200 pt-6 text-center text-sm italic leading-relaxed text-neutral-500">
          Note: This Masterclass is for educational purposes only and does not replace professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </main>
  )
}