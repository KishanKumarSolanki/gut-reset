import { track } from '../utils/track'

const iconPaths = {
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  video: <><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" /></>,
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>,
}

function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {iconPaths[name]}
    </svg>
  )
}

const details = [
  ['clock', 'Duration', '90 minutes'],
  ['video', 'Format', 'LIVE online masterclass'],
  ['chat', 'Joining details', 'Shared on WhatsApp / Email'],
  ['gift', 'Registration', 'Free (Value ₹999)'],
]

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-to-b from-[#fffaf8] via-[#fdebed] to-[#f8dfe2] text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#4c0710] via-[#9b111e] to-[#4c0710]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(155,17,30,.16) .7px, transparent .7px)',
          backgroundSize: '14px 14px',
          maskImage: 'linear-gradient(to bottom, transparent 4%, black 22%, transparent 88%)',
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#f7caca]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#e9a1aa]/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
        <header className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-crimson shadow-sm sm:text-sm">
            <Icon name="leaf" className="h-4 w-4" />
            Free Gut Reset Masterclass
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-[#20251f] sm:text-5xl sm:leading-[1.1] lg:text-[3.5rem]">
            Understand Your Gut.{' '}
            <span className="text-crimson">Discover Possible Triggers.</span>{' '}
            Take Practical Steps Towards Better Gut Health.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:mt-5 sm:text-lg">
            Join Dr. Abhimanyu Bhargava for a live session on the connection between digestion, food habits, lifestyle and gut wellness.
          </p>
        </header>

        <div className="mx-auto mt-8 grid max-w-5xl items-center gap-7 sm:mt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="relative mx-auto w-full max-w-2xl rounded-[1.75rem] border border-white bg-white/75 p-3 shadow-[0_24px_70px_-35px_rgba(74,38,26,.45)] sm:rounded-[2.25rem] sm:p-5">
            <div className="pointer-events-none absolute inset-3 rounded-[1.4rem] bg-gradient-to-br from-[#f7e7c2]/60 via-transparent to-[#d8ead4]/60 sm:inset-5 sm:rounded-[1.8rem]" />
            <img
              src="/images/mentor-group.png"
              alt="Dr. Abhimanyu Bhargava, Founder of Bhargav Ayurveda and Gut & Mind Coach"
              className="relative block h-auto w-full object-contain"
            />
            <div className="relative mx-auto -mt-1 flex w-fit flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-crimson/10 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="award" className="h-4 w-4 text-crimson" />
                25+ years of experience
              </span>
              <span className="hidden h-4 w-px bg-neutral-200 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <Icon name="users" className="h-4 w-4 text-crimson" />
                5 Lakh+ happy clients
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="mb-4 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">Your masterclass at a glance</p>
              <h2 className="mt-1 font-display text-2xl font-extrabold text-[#20251f] sm:text-3xl">Everything you need to join</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {details.map(([icon, label, value]) => (
                <div key={label} className="flex min-h-[116px] flex-col justify-center rounded-2xl border border-crimson/10 bg-white p-4 shadow-[0_8px_24px_-18px_rgba(155,17,30,.35)] sm:min-h-[132px] sm:rounded-3xl sm:p-5">
                  <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0f1] text-crimson sm:h-10 sm:w-10">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-neutral-500 sm:text-xs">{label}</span>
                  <span className="mt-1 text-sm font-bold leading-snug text-[#242820] sm:text-base">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-crimson/10 bg-[#f8dfe1] px-4 py-3 text-center text-xs font-semibold text-crimson-dark sm:text-sm">
              No guesswork · No prior knowledge needed · No medical reports needed
            </div>

            <div className="mt-5">
              <a
                href="#register"
                onClick={() => track('cta_click', { label: 'hero_register', target: '#register' })}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-crimson-light to-crimson-dark px-5 py-4 text-center text-base font-extrabold text-white shadow-[0_10px_24px_-8px_rgba(155,17,30,.55)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crimson sm:rounded-3xl sm:py-5 sm:text-xl"
              >
                <Icon name="gift" className="h-5 w-5 shrink-0" />
                <span>Book Your Free Seat <span className="font-semibold opacity-90">· Value ₹999</span></span>
                <span className="ml-1 text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
              <p className="mt-2 text-center text-xs font-medium text-neutral-600 sm:text-sm">LIVE online · 90 minutes · Registration is completely free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
