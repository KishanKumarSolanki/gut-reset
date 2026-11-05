import { Section, Heading, Reveal, Button } from './ui'
import { details } from '../data/content'
export default function MasterclassDetails() {
  return <Section className="bg-gradient-to-b from-neutral-100 to-paper">
    <Heading title="Masterclass Details" sub="Everything You Need to Know" />
    <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">
      {details.map(([k, v]) => <div key={k} className="flex flex-col gap-1 border-b border-neutral-100 px-6 py-4 sm:flex-row sm:justify-between"><span className="font-semibold text-crimson">{k}</span><span className="sm:text-right">{v}</span></div>)}
      <div className="bg-ink p-6 text-center text-white"><p className="mb-4">Attend from the comfort of your home using your mobile phone, laptop or tablet.</p><Button>Save My Free Seat</Button></div>
    </Reveal></Section>
}
