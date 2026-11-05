import { Section, Heading, Reveal, Button } from './ui'
import { bonuses } from '../data/content'
export default function Bonuses() {
  return <Section id="bonuses" className="bg-white">
    <Heading title="Register Now & Get These Exclusive Gut Health Bonuses Free!" sub="5 Exclusive Bonuses Worth ₹12,000: Absolutely FREE When You Register! Register for the Gut Reset Masterclass and receive five complementary educational resources to support your learning journey." />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {bonuses.map(([ic, t, d, g], i) => <Reveal key={t} delay={i * 70} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
        <div className="group flex h-full overflow-hidden rounded-3xl border border-neutral-200 bg-paper shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className={`grid w-24 shrink-0 place-items-center bg-gradient-to-b ${g} text-4xl transition group-hover:scale-105 sm:w-28`}>{ic}</div>
          <div className="p-5"><b className="text-crimson">Bonus #{i + 1}</b><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-neutral-600">{d}</p></div></div></Reveal>)}
    </div>
    <Reveal className="mt-12 rounded-3xl bg-ink p-8 text-center text-white">
      <p className="font-display text-3xl font-extrabold text-crimson-light sm:text-4xl">TOTAL BONUS VALUE: ₹12,000/-</p>
      <p className="mt-2 text-lg">Get All 5 Bonuses FREE When You Register!</p>
      <p className="mt-3 text-white/70">Masterclass Value: ₹999 · Your Registration Fee: <b className="text-white">FREE</b></p>
      <Button className="mt-6 w-full sm:w-auto">Register Now: Claim Your Free Bonuses</Button></Reveal>
  </Section>
}
