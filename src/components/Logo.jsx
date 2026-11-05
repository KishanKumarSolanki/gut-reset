export default function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      aria-label="Gut Reset Masterclass home"
      className={`group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crimson-light ${className}`}
    >
      {/* Icon badge */}
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-crimson to-crimson-dark shadow-lg shadow-crimson/30 ring-1 ring-white/15 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" aria-hidden="true" />
        <img src="/favicon.svg" alt="" className="relative h-6 w-6" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-extrabold tracking-tight text-white sm:text-base">
          Gut Reset
        </span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-crimson-light sm:text-[11px]">
          Masterclass
        </span>
      </span>
    </a>
  )
}