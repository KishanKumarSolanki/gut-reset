import { useState, useRef } from 'react'
import { track } from '../utils/track'
import { Section, Reveal } from './ui'
import Button from './Button'
import { FORM_ENDPOINT } from '../data/config'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.whatsapp.replace(/[\s-]/g, '').replace(/^\+/, '+')))
    e.whatsapp = 'Enter a valid 10-digit WhatsApp number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  return e
}

const perks = [
  'Live 90-minute online masterclass',
  'Practical, structured gut health understanding',
  'Explore how food, sleep, stress and daily routines relate to gut health',
  'Learn to observe recurring food and symptom patterns',
  'Explore basic Ayurvedic perspectives on gut wellness',
  '5 exclusive bonuses worth ₹12,000',
]

export default function LeadForm() {
  const [v, setV] = useState({ name: '', whatsapp: '', email: '' })
  const [err, setErr] = useState({})
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [busy, setBusy] = useState(false)
  const started = useRef(false)

  const onStart = () => {
    if (!started.current) {
      started.current = true
      track('form_start')
    }
  }

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const er = validate(v)
    setErr(er)
    setStatus({ type: '', msg: '' })

    if (Object.keys(er).length) {
      track('form_error', { fields: Object.keys(er).join(',') })
      return
    }

    if (!FORM_ENDPOINT) {
      return setStatus({
        type: 'warn',
        msg: 'Your details look valid, but registration is not connected yet. Set FORM_ENDPOINT in src/data/config.js.',
      })
    }

    setBusy(true)
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v),
      })
      if (!r.ok) throw new Error()
      track('registration')
      window.location.hash = 'thank-you'
    } catch {
      setStatus({ type: 'error', msg: 'Registration failed. Check your connection and try again.' })
    }
    setBusy(false)
  }

  const field = (k, label, type, ph, hint) => (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-sm font-semibold text-ink">
        {label}
        {hint && <span className="text-xs font-normal text-neutral-400">{hint}</span>}
      </span>
      <input
        type={type}
        value={v[k]}
        onChange={set(k)}
        placeholder={ph}
        aria-invalid={!!err[k]}
        className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-neutral-400 outline-none transition-all duration-200 focus:-translate-y-px focus:shadow-[0_10px_24px_-14px_rgba(155,17,30,0.45)] focus:ring-4 focus:ring-crimson/15 ${
          err[k] ? 'border-red-400 bg-red-50/40 focus:border-red-500' : 'border-neutral-200 hover:border-neutral-300 focus:border-crimson'
        }`}
      />
      {err[k] && (
        <span className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
          <span className="h-1 w-1 rounded-full bg-red-500" aria-hidden="true" />
          {err[k]}
        </span>
      )}
    </label>
  )

  return (
    <Section
      id="register"
      className="relative overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light text-white"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-ink/30 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy (centered) */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            Free Registration
          </span>

          <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            Take the First Step Towards Healthier Gut
          </h2>

          <ul className="mx-auto mt-8 grid grid-cols-2 gap-2 text-left sm:gap-3">
            {perks.map((p) => (
              <li
                key={p}
                className="group flex h-full items-start gap-2 rounded-2xl border border-white/10 bg-ink/70 px-3 py-3 text-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-ink/85 sm:px-4 sm:py-3.5"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-crimson shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-xs leading-snug sm:text-sm">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-white/85 shadow-lg shadow-black/10 backdrop-blur-md">
            <span className="text-sm">Masterclass Value</span>
            <span className="text-sm line-through decoration-white/60">₹999</span>
            <span className="h-4 w-px bg-white/25" aria-hidden="true" />
            <span className="text-sm">Your Registration: <b className="font-extrabold text-white">FREE</b></span>
          </div>
        </Reveal>

        {/* Right: form card */}
        <Reveal>
          <div className="relative">
            {/* Offset glow behind card */}
            <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-white/30 via-transparent to-crimson-light/30 blur-xl" aria-hidden="true" />

            <form
              onSubmit={submit}
              onFocus={onStart}
              noValidate
              className="relative space-y-4 rounded-[2rem] border border-white/60 bg-paper p-5 shadow-2xl shadow-black/30 sm:space-y-5 sm:p-9"
            >
              <div>
                <h3 className="font-display text-2xl font-extrabold text-ink sm:text-[1.7rem]">
                  Fill in Your Details
                </h3>
                <p className="mt-1 text-sm text-neutral-500">Takes less than a minute to register.</p>
              </div>

              {field('name', 'Full Name', 'text', 'Your full name')}
              {field('whatsapp', 'WhatsApp Number', 'tel', '10-digit mobile number', 'We send the joining link here')}
              {field('email', 'Email Address', 'email', 'you@example.com')}

              <Button
                variant="red"
                pulseScale
                as="button"
                type="submit"
                disabled={busy}
                className="w-full disabled:animate-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {busy ? (
                  <>
                    <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                    Submitting…
                  </>
                ) : null}
              </Button>

              {status.msg && (
                <p
                  role="alert"
                  className={`rounded-2xl border p-3.5 text-sm ${
                    status.type === 'error'
                      ? 'border-red-200 bg-red-50 text-red-700'
                      : 'border-amber-200 bg-amber-50 text-amber-800'
                  }`}
                >
                  {status.msg}
                </p>
              )}

              <p className="border-t border-neutral-200 pt-4 text-xs leading-relaxed text-neutral-500">
                By registering, you agree to receive Masterclass-related communication through the contact details provided.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}