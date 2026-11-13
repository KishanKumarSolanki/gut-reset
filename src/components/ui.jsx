import useReveal from '../hooks/useReveal'

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