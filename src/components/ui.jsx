import useReveal from '../hooks/useReveal'
import { track } from '../utils/track'
export const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, shown] = useReveal()
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
    className={`transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>{children}</div>
}
export const Button = ({ children, href = '#register', variant = 'red', className = '', ...p }) => {
  const v = { red: 'bg-gradient-to-r from-crimson to-crimson-light text-white shadow-lg shadow-crimson/30 animate-ring',
    white: 'bg-white text-crimson hover:bg-neutral-100', dark: 'bg-ink text-white hover:bg-neutral-800' }[variant]
  const click = e => { track('cta_click', { label: typeof children === 'string' ? children : 'cta', target: href }); p.onClick?.(e) }
  return <a href={href} {...p} onClick={click} className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-center text-base font-semibold transition hover:-translate-y-0.5 hover:shadow-xl sm:text-lg ${v} ${className}`}>{children}</a>
}
export const Heading = ({ title, sub, light, center = true }) => (
  <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
    <h2 className={`font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
    {sub && <p className={`mt-4 text-lg ${light ? 'text-white/75' : 'text-neutral-600'}`}>{sub}</p>}
  </div>)
export const Section = ({ id, className = '', children }) => (
  <section id={id} className={`relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>)
