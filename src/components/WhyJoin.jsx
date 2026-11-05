import { Section, Heading, Reveal } from './ui'
import { why } from '../data/content'
export default function WhyJoin() {
  return <Section className="bg-white">
    <Heading title="Why Should You Join?" sub="Sirf Symptoms Nahi — Apne Gut Ko Samajhna Seekhiye." />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {why.map(([ic, t, d], i) => <Reveal key={t} delay={i * 70}>
        <div className="h-full rounded-3xl border-t-4 border-crimson bg-paper p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark text-2xl">{ic}</div>
          <h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 text-neutral-600">{d}</p></div></Reveal>)}
    </div></Section>
}
