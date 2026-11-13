import { track } from '../utils/track'

const GLOW_COLOR = 'rgba(155, 17, 30, 0.85)'

const styles = `
.cta-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  margin-inline: auto;
  max-width: 100%;
  border-radius: 9999px;
  isolation: isolate;
  animation: ctaPulse 2.2s ease-in-out infinite;
}
.cta-wrap.cta-wrap-full {
  width: 100%;
}
@media (min-width: 640px) {
  .cta-wrap.cta-wrap-sm-auto {
    width: fit-content;
  }
}
.cta-wrap::after {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  background: var(--cta-glow);
  filter: blur(12px);
  animation: ctaGlow 2s ease-in-out infinite;
  z-index: -2;
}
.cta-shine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 45%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: translateX(-120%) skewX(-20deg);
  animation: ctaShine 2.8s ease-in-out infinite;
  pointer-events: none;
}
@keyframes ctaGlow {
  0%, 100% { opacity: 0.35; transform: scale(0.97); }
  50% { opacity: 0.85; transform: scale(1.03); }
}
@keyframes ctaPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
@keyframes ctaShine {
  0% { transform: translateX(-120%) skewX(-20deg); }
  60%, 100% { transform: translateX(260%) skewX(-20deg); }
}
@media (prefers-reduced-motion: reduce) {
  .cta-wrap, .cta-wrap::after, .cta-shine { animation: none; }
}
`

const defaultLabel = (
  <>
    <span>Book Your Seat Now</span>
    <span aria-hidden="true">·</span>
    <s className="font-semibold text-white/80">₹1,099/-</s>
    <strong className="font-extrabold">FREE</strong>
  </>
)

export default function Button({
  as = 'a',
  href = '#register',
  type = 'button',
  variant = 'red',
  children,
  className = '',
  wrapperClassName = '',
  showScarcity = true,
  onClick,
  trackingLabel,
  ...props
}) {
  const Element = as === 'button' ? 'button' : 'a'
  const label = trackingLabel || (children == null ? 'Book Your Seat Now' : typeof children === 'string' ? children : 'cta')
  const buttonWidthClasses = className.split(/\s+/)
  const wrapperClasses = [
    'cta-wrap',
    buttonWidthClasses.includes('w-full') ? 'cta-wrap-full' : '',
    buttonWidthClasses.includes('sm:w-auto') ? 'cta-wrap-sm-auto' : '',
    wrapperClassName,
  ].filter(Boolean).join(' ')

  const isBlack = variant === 'black'
  const variantClasses = isBlack
    ? 'bg-gradient-to-r from-[#080808] to-[#242424] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)]'
    : 'bg-gradient-to-r from-crimson to-crimson-light shadow-[0_14px_30px_-10px_rgba(155,17,30,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(155,17,30,0.7)]'

  const glowColor = isBlack ? 'rgba(255, 255, 255, 0.45)' : GLOW_COLOR

  const handleClick = (event) => {
    track('cta_click', { label, target: href })
    onClick?.(event)
  }

  return (
    <>
      <style>{styles}</style>
      <span
        className={wrapperClasses}
        style={{ '--cta-glow': glowColor }}
      >
        {showScarcity && (
          <span className="absolute right-2 top-0 z-10 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#111827] px-3 py-1.5 text-[10px] font-bold leading-none text-white shadow-md sm:text-xs">
            Almost Full <span aria-hidden="true">·</span> Only 4 Seats Left
          </span>
        )}
        <Element
          {...props}
          href={as === 'button' ? undefined : href}
          type={as === 'button' ? type : undefined}
          onClick={handleClick}
          className={`group relative inline-flex ${variantClasses} items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-center text-base font-extrabold tracking-wide text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crimson sm:text-lg ${className}`}
        >
          <span className="cta-shine" aria-hidden="true" />
          <span className="relative inline-flex items-center gap-2 whitespace-nowrap">
            {children ?? defaultLabel}
          </span>
        </Element>
      </span>
    </>
  )
}