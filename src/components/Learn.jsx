import { Section, Heading, Reveal, Button } from './ui'
import { learn } from '../data/content'
export default function Learn() {
  return <Section id="learn" className="bg-paper">
    <Heading title="What Will You Learn in This Masterclass?" sub="Build a Better Understanding of Your Gut Health" />
    <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
      {learn.map(([ic, t, d], i) => <Reveal key={t} delay={(i % 2) * 80}>
        <div className="group flex h-full gap-4 border-b border-neutral-200 py-5 transition hover:border-crimson">
          <span className="font-display text-4xl font-extrabold text-crimson/25 transition group-hover:text-crimson">{String(i + 1).padStart(2, '0')}</span>
          <div><h3 className="text-xl font-bold">{ic} {t}</h3><p className="mt-1 text-neutral-600">{d}</p></div></div></Reveal>)}
    </div>
    <div className="mt-12 text-center"><Button>Reserve Your Free Seat</Button></div></Section>
}
