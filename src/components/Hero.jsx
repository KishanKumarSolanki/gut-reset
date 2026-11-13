import Button from './Button'

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

const ticker = [
  ['users', '5 Lakh+ Happy Clients'],
  ['award', '25+ Years of Experience'],
  ['video', '90-Minute LIVE Online Masterclass'],
  ['gift', 'Register FREE: Value ₹999'],
]

const highlights = ['No prior knowledge needed', 'No medical reports needed']

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fffaf8] via-[#fdebed] to-[#f8dfe2] text-ink"
    >
      <div className="relative z-10 overflow-hidden bg-gradient-to-r from-[#4c0710] via-crimson to-[#4c0710] py-2.5 text-white shadow-md">
        <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
          {[0, 1].map(group => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {ticker.map(([icon, text]) => (
                <span key={text} className="mx-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide sm:mx-8 sm:text-sm">
                  <Icon name={icon} className="h-4 w-4 text-[#f5c26b]" />
                  {text}
                  <span className="ml-5 h-1 w-1 rounded-full bg-white/60 sm:ml-8" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(155,17,30,.16) .7px, transparent .7px)',
          backgroundSize: '14px 14px',
          maskImage: 'linear-gradient(to bottom, transparent 4%, black 22%, transparent 88%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 4%, black 22%, transparent 88%)',
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#f7caca]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#e9a1aa]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-8 sm:pb-24 sm:pt-20">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-crimson/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-crimson shadow-[0_6px_20px_-10px_rgba(155,17,30,.35)] backdrop-blur-sm sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
            </span>
            <Icon name="leaf" className="h-4 w-4" />
            Free Gut Reset Masterclass
          </span> */}

          <h1 className="mx-auto mt-5 max-w-4xl font-display text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#20251f] sm:mt-6 sm:text-5xl sm:leading-[1.08] lg:text-[3.75rem]">
            Understand Your Gut.{' '}
            <span className="text-crimson">Discover Possible Triggers.</span>{' '}
            Take Practical Steps Towards Better Gut Health.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
            Discover The Secret Way To Get Rid Of All Gut Health Issues Permanently.
          </p>
        </header>

        {/* Highlights */}
        <ul className="mt-5 flex flex-nowrap items-center justify-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {highlights.map((h) => (
            <li
              key={h}
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-crimson/10 bg-[#f8dfe1] px-3 py-1.5 text-[11px] font-semibold text-crimson-dark sm:px-3.5 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
              {h}
            </li>
          ))}
        </ul>

        {/* Content grid */}
        <div className="mx-auto mt-8 grid max-w-5xl items-center gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          {/* Mentor photo card */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* Offset accent frame */}
            <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-gradient-to-br from-[#f7e7c2]/70 via-[#f8dfe1] to-[#d8ead4]/70 sm:-inset-4" />

            <div className="relative rounded-[1.75rem] border border-white bg-white/80 p-3 shadow-[0_30px_80px_-30px_rgba(74,38,26,.5)] backdrop-blur-sm sm:rounded-[2.25rem] sm:p-5">
              <div className="relative overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem]">
                <img
                  src="/images/mentor-group.png"
                  alt="Dr. Abhimanyu Bhargava, Founder of Bhargav Ayurveda and Gut & Mind Coach"
                  className="block h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/50 to-transparent" />
              </div>
            </div>

            {/* Credentials strip */}
            <div className="relative mx-auto -mt-5 flex w-fit flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-crimson/10 bg-white px-5 py-2.5 text-xs font-semibold text-neutral-700 shadow-[0_12px_30px_-12px_rgba(155,17,30,.35)] sm:text-sm">
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

          {/* Details panel */}
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-5 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">
                Your masterclass at a glance
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-[#20251f] sm:text-3xl">
                Everything you need to join
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {details.map(([icon, label, value]) => (
                <div
                  key={label}
                  className="group relative flex min-h-[116px] flex-col justify-center overflow-hidden rounded-2xl border border-crimson/10 bg-white/90 p-4 shadow-[0_10px_30px_-18px_rgba(155,17,30,.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/25 hover:shadow-[0_16px_36px_-16px_rgba(155,17,30,.45)] sm:min-h-[132px] sm:rounded-3xl sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-crimson/0 blur-xl transition-colors duration-300 group-hover:bg-crimson/10" />
                  <span className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff0f1] to-[#f8dfe1] text-crimson shadow-inner sm:h-11 sm:w-11">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <span className="relative text-[11px] font-bold uppercase tracking-wide text-neutral-500 sm:text-xs">
                    {label}
                  </span>
                  <span className="relative mt-1 text-sm font-bold leading-snug text-[#242820] sm:text-base">
                    {value}
                  </span>
                </div>
              ))}
            </div>




            {/* CTA */}
            <div className="mt-7">
              <Button
                trackingLabel="hero_register"
                className="w-full sm:py-5 sm:text-xl"
              />
              <p className="mt-3 text-center text-xs font-medium text-neutral-600 sm:text-sm">
                LIVE online · 90 minutes · Registration is completely free
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}