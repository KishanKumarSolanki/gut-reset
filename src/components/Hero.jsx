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
  ['gift', 'Bonuses', 'Worth ₹19,000/- For Free'],
]

const ticker = [
  ['users', '5 Lakh+ Happy Clients'],
  ['award', '25+ Years of Experience'],
  ['video', '90-Minute LIVE Online Masterclass'],
  ['gift', 'Register FREE: Value ₹999'],
]

const highlights = ['No prior knowledge needed', 'No medical reports needed']

// Fixed positions spread the twinkling star field across the full hero.
const stars = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  size: index % 7 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  delay: `${(index % 9) * -0.55}s`,
}))

function Sparkle({ left, top, size, delay }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`pointer-events-none absolute ${size} animate-sparkle text-[#e0a526] drop-shadow-[0_0_4px_rgba(245,194,107,0.9)]`}
      style={{ left, top, animationDelay: delay }}
    >
      <path fill="currentColor" d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fffaf8] via-[#fdebed] to-[#f8dfe2] text-ink"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
        event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
      }}
      onPointerDown={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
        event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
      }}
    >
      {/* Ticker */}
      <div className="relative z-10 overflow-hidden bg-gradient-to-r from-[#4c0710] via-crimson to-[#4c0710] py-2.5 text-white shadow-md">
        <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
          {[0, 1].map((group) => (
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

      {/* Cursor glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300"
        style={{ background: 'radial-gradient(260px circle at var(--pointer-x, 50%) var(--pointer-y, 35%), rgba(255,255,255,.72), transparent 72%)' }}
      />

      {/* Twinkling star field */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-80 sm:opacity-60">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-[#7a0d17]/70 animate-twinkle"
            style={{ left: star.left, top: star.top, width: star.size, height: star.size, animationDelay: star.delay }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-70 sm:opacity-55"
        style={{
          backgroundImage: 'linear-gradient(rgba(110,11,21,.17) 1px, transparent 1px), linear-gradient(90deg, rgba(110,11,21,.17) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 animate-blob rounded-full bg-[#f7caca]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 animate-blob rounded-full bg-[#e9a1aa]/25 blur-3xl [animation-delay:-4s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-3 pb-10 pt-4 sm:px-8 sm:pb-24 sm:pt-20">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fadeUp mx-auto mt-2 max-w-4xl font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-[#20251f] sm:mt-6 sm:text-5xl sm:leading-[1.08] lg:text-[3.75rem]">
            Understand Your Gut.{' '}
            <span className="text-crimson">Discover Possible Triggers.</span>{' '}
            Take Practical Steps Towards Better Gut Health.
          </h1>

          <p
            className="animate-fadeUp mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg"
            style={{ animationDelay: '0.15s' }}
          >
            Discover The Secret Way To Get Rid Of All Gut Health Issues Permanently.
          </p>
        </header>

        {/* Highlights */}
        <ul
          className="animate-fadeUp mt-5 flex flex-nowrap items-center justify-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ animationDelay: '0.25s' }}
        >
          {highlights.map((h) => (
            <li
              key={h}
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-crimson/15 bg-white px-3 py-1.5 text-[11px] font-semibold text-crimson-dark shadow-[0_6px_16px_-10px_rgba(155,17,30,.45)] sm:px-3.5 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
              {h}
            </li>
          ))}
        </ul>

        {/* Content grid */}
        <div className="mx-auto mt-8 grid max-w-5xl items-center gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          {/* Mentor photo */}
          <div className="animate-fadeUp relative mx-auto w-full max-w-2xl" style={{ animationDelay: '0.3s' }}>
            {/* Offset accent frame */}
            <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-gradient-to-br from-[#f7e7c2]/70 via-[#f8dfe1] to-[#d8ead4]/70 sm:-inset-4" />

            <div className="relative rounded-[1.75rem] border border-white bg-white/80 p-3 shadow-[0_30px_80px_-30px_rgba(74,38,26,.5)] backdrop-blur-sm sm:rounded-[2.25rem] sm:p-5">
              <div className="relative overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem]">
                <img
                  src="/images/mentor-group.png"
                  alt="Dr. Abhimanyu Bhargava, Founder of Bhargav Ayurveda and Gut & Mind Coach"
                  className="block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02] active:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Details panel */}
          <div className="animate-fadeUp mx-auto w-full max-w-xl" style={{ animationDelay: '0.4s' }}>
            <div className="mb-5 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">
                Your masterclass at a glance
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-[#20251f] sm:text-3xl">
                Everything you need to join
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {details.map(([icon, label, value], i) => (
                <div
                  key={label}
                  className="group relative flex min-h-[116px] flex-row items-center gap-3 overflow-hidden rounded-2xl border border-crimson/10 bg-white/90 p-4 shadow-[0_10px_30px_-18px_rgba(155,17,30,.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/25 hover:shadow-[0_16px_36px_-16px_rgba(155,17,30,.45)] active:-translate-y-0.5 active:border-crimson/30 sm:min-h-[132px] sm:rounded-3xl sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-crimson/0 blur-xl transition-colors duration-300 group-hover:bg-crimson/10" />
                  <Sparkle left="88%" top="12%" size="h-2.5 w-2.5" delay={`${i * 0.5}s`} />
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff0f1] to-[#f8dfe1] text-crimson shadow-inner sm:h-11 sm:w-11">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <div className="relative min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-neutral-500 sm:text-xs">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-bold leading-snug text-[#242820] sm:text-base">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7">
              <Button
                trackingLabel="hero_register"
                wrapperClassName="w-full"
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