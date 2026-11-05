import { Section, Heading, Reveal } from './ui'
import { worth } from '../data/content'
const img = '/images/mentor-maroon.png'
const testi = '/images/testimonial.png'
export default function WhyAttend() {
  return <Section className="bg-paper">
    <Heading title="What Makes This Masterclass Worth Attending?" sub="Practical Learning for Your Gut-Health Journey" />
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative border-l-2 border-crimson/30 pl-8">
        {worth.map(([t, d], i) => <Reveal key={t} delay={i * 60} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-4 border-paper bg-crimson" />
          <h3 className="text-xl font-bold">{t}</h3><p className="text-neutral-600">{d}</p></Reveal>)}</div>
      <Reveal><img src={img} alt="Dr. Abhimanyu Bhargava" loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-2xl" /></Reveal>
    </div>
    <Reveal className="mt-16"><img src={testi} alt="Client testimonial from Satpal Prajapati, Uttar Pradesh" loading="lazy" className="mx-auto w-full max-w-md rounded-3xl shadow-xl" /></Reveal>
  </Section>
}
