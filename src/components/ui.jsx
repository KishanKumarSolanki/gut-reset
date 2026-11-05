import useReveal from '../hooks/useReveal'
import { track } from '../utils/track'

export const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, shown] = useReveal()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[800ms] ease-out will-change-[opacity,transform] ${
        shown ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[2px]'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const variants = {
  red: 'bg-gradient-to-r from-crimson to-crimson-light text-white shadow-[0_14px_30px_-10px_rgba(155,17,30,0.6)] ring-1 ring-white/10 hover:shadow-[0_20px_40px_-12px_rgba(155,17,30,0.7)] animate-ring',
  white: 'bg-white text-crimson shadow-[0_14px_30px_-12px_rgba(0,0,0,0.25)] ring-1 ring-crimson/10 hover:bg-neutral-50 hover:shadow-[0_20px_40px_-14px_rgba(0,0,0,0.3)]',
  dark: 'bg-gradient-to-b from-neutral-800 to-ink text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 hover:from-neutral-700 hover:shadow-[0_20px_40px_-14px_rgba(0,0,0,0.6)]',
}

export const Button = ({ children, href = '#register', variant = 'red', className = '', ...p }) => {
  const click = (e) => {
    track('cta_click', { label: typeof children === 'string' ? children : 'cta', target: href })
    p.onClick?.(e)
  }
  return (
    <a
      href={href}
      {...p}
      onClick={click}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-center text-base font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crimson sm:text-lg ${variants[variant]} ${className}`}
    >
      {/* Sheen sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  )
}

export const Heading = ({ title, sub, light, center = true, eyebrow }) => (
  <div className={`mb-10 max-w-3xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
    {eyebrow && (
      <span className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] sm:mb-5 ${
        light
          ? 'border-white/15 bg-white/5 text-crimson-light'
          : 'border-crimson/15 bg-white text-crimson shadow-sm'
      }`}>
        <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-crimson-light' : 'bg-crimson'}`} aria-hidden="true" />
        {eyebrow}
      </span>
    )}
    <h2
      className={`font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl ${
        light ? 'text-white' : 'text-ink'
      }`}
    >
      {title}
    </h2>
    {sub && (
      <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:mt-5 sm:text-lg ${light ? 'text-white/75' : 'text-neutral-600'}`}>
        {sub}
      </p>
    )}
    {/* Decorative underline */}
    <div
      className={`mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-crimson to-crimson-light sm:mt-7 ${center ? '' : 'ml-0'} ${
        light ? 'opacity-70' : ''
      }`}
      aria-hidden="true"
    />
  </div>
)

export const Section = ({ id, className = '', children }) => (
  <section
    id={id}
    className={`relative overflow-hidden px-4 py-12 sm:px-8 sm:py-28 ${className}`}
  >
    <div className="relative mx-auto max-w-6xl">{children}</div>
  </section>
)