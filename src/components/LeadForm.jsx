import { useState, useRef } from 'react'
import { track } from '../utils/track'
import { Section, Reveal } from './ui'
import { FORM_ENDPOINT } from '../data/config'
const validate = v => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.whatsapp.replace(/[\s-]/g, '').replace(/^\+/, '+'))) e.whatsapp = 'Enter a valid 10-digit WhatsApp number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  return e
}
export default function LeadForm() {
  const [v, setV] = useState({ name: '', whatsapp: '', email: '' })
  const [err, setErr] = useState({}); const [status, setStatus] = useState({ type: '', msg: '' }); const [busy, setBusy] = useState(false)
  const started = useRef(false)
  const onStart = () => { if (!started.current) { started.current = true; track('form_start') } }
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const submit = async e => {
    e.preventDefault(); const er = validate(v); setErr(er); setStatus({ type: '', msg: '' })
    if (Object.keys(er).length) { track('form_error', { fields: Object.keys(er).join(',') }); return }
    if (!FORM_ENDPOINT) return setStatus({ type: 'warn', msg: 'Your details look valid, but registration is not connected yet. Set FORM_ENDPOINT in src/data/config.js.' })
    setBusy(true)
    try {
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error()
      track('registration')
      window.location.hash = 'thank-you'
    } catch { setStatus({ type: 'error', msg: 'Registration failed. Check your connection and try again.' }) }
    setBusy(false)
  }
  const field = (k, label, type, ph) => <label className="block"><span className="mb-1 block font-semibold">{label}</span>
    <input type={type} value={v[k]} onChange={set(k)} placeholder={ph} aria-invalid={!!err[k]} className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-crimson ${err[k] ? 'border-red-500' : 'border-neutral-300'}`} />
    {err[k] && <span className="mt-1 block text-sm text-red-600">{err[k]}</span>}</label>
  return <Section id="register" className="bg-gradient-to-br from-ink via-neutral-900 to-crimson-dark">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <Reveal className="text-white">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Take the First Step Towards Better Gut Awareness</h2>
        <p className="mt-4 text-lg text-white/80">Register for the Gut Reset Masterclass and learn practical approaches to understanding your digestive health, food habits and daily routine.</p>
        <p className="mt-4 text-white/70">Masterclass Value ₹999 · Your Registration: <b className="text-white">FREE</b></p></Reveal>
      <Reveal><form onSubmit={submit} onFocus={onStart} noValidate className="space-y-4 rounded-3xl bg-paper p-6 shadow-2xl sm:p-8">
        <h3 className="text-2xl font-bold">Fill in Your Details to Register for Free</h3>
        {field('name', 'Full Name', 'text', 'Your full name')}
        {field('whatsapp', 'WhatsApp Number', 'tel', '10-digit mobile number')}
        {field('email', 'Email Address', 'email', 'you@example.com')}
        <button disabled={busy} className="w-full rounded-full bg-gradient-to-r from-crimson to-crimson-light px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:opacity-60">{busy ? 'Submitting…' : 'Register Now: Join for Free'}</button>
        {status.msg && <p role="alert" className={`rounded-xl p-3 text-sm ${status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-800'}`}>{status.msg}</p>}
        <p className="text-sm text-neutral-500">By registering, you agree to receive Masterclass-related communication through the contact details provided.</p>
      </form></Reveal></div></Section>
}
