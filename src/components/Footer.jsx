import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-5 pb-28 pt-14 text-white/70 sm:px-8 md:pb-14">
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-light/60 to-transparent"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-crimson/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              A live educational masterclass to help you understand gut health, one step at a time.
            </p>
          </div>

          {/* Disclaimer card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-crimson-light">
              Important Disclaimer
            </p>
            <p className="text-sm leading-relaxed text-white/65">
              The Gut Reset Masterclass is an educational program. Information shared during the session is intended for general awareness and should not be considered individual medical advice, diagnosis or treatment. Individual health needs vary. Consult a qualified healthcare professional for persistent symptoms or personal medical concerns. Do not discontinue prescribed medication or begin supplements or herbal products without appropriate professional guidance.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:text-sm">
          <p>© Gut Reset Masterclass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}