import { Section, Reveal, Button } from './ui'
import { forWhom } from '../data/content'
const img = '/images/mentor-beige.png'
export default function WhoFor() {
  return <Section id="for-you" className="bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light text-white">
    <div className="grid items-start gap-10 lg:grid-cols-5">
      <Reveal className="lg:col-span-2 lg:sticky lg:top-24">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Who Is This Masterclass For?</h2>
        <p className="mt-3 text-xl font-semibold">Kya Aapka Gut Bhi Aapse Kuch Keh Raha Hai?</p>
        <img src={img} alt="Dr. Abhimanyu Bhargav" loading="lazy" className="mt-6 aspect-square w-full max-w-sm rounded-3xl border-4 border-white/20 object-cover shadow-2xl" />
      </Reveal>
      <div className="lg:col-span-3">
        <ul className="space-y-3">{forWhom.map((q, i) => <Reveal key={q} delay={i * 40}><li className="flex gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-sm text-crimson">✔</span>{q}</li></Reveal>)}</ul>
        <p className="mt-8 rounded-2xl bg-ink p-5 text-lg font-semibold">Agar inmein se 2–3 baatein bhi aapki daily life se judi hain, toh yeh Masterclass aapke liye useful ho sakti hai.</p>
        <Button variant="white" className="mt-6">Join the Free Masterclass</Button>
      </div></div></Section>
}
