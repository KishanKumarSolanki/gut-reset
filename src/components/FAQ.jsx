import { useState } from 'react'
import { Section, Heading } from './ui'
import { faqs } from '../data/content'
export default function FAQ() {
  const [open, setOpen] = useState(0)
  return <Section id="faq" className="bg-white">
    <Heading title="Frequently Asked Questions" />
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map(([q, a], i) => { const o = open === i; return <div key={q} className={`rounded-2xl border transition ${o ? 'border-crimson bg-paper shadow-md' : 'border-neutral-200'}`}>
        <button onClick={() => setOpen(o ? -1 : i)} aria-expanded={o} className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-semibold">
          <span>Q{i + 1}. {q}</span><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson text-white transition-transform ${o ? 'rotate-45' : ''}`}>+</span></button>
        <div className={`grid transition-all duration-300 ${o ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-neutral-600">{a}</p></div></div></div> })}
    </div></Section>
}
