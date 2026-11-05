import { Section, Reveal, Button } from './ui'
const img = '/images/mentor-grey.png'
export default function About() {
  return <Section id="mentor" className="bg-ink text-white">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <Reveal className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-crimson to-crimson-dark" />
        <img src={img} alt="Dr. Abhimanyu Bhargava" loading="lazy" className="relative aspect-square w-full rounded-[2rem] object-cover" /></Reveal>
      <Reveal>
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Meet Your Mentor</h2>
        <p className="mt-2 text-xl text-white/70">Learn from Dr. Abhimanyu Bhargava</p>
        <h3 className="mt-6 text-2xl font-bold">Dr. Abhimanyu Bhargava</h3>
        <p className="text-crimson-light">Founder, Bhargav Ayurveda · Gut & Mind Coach</p>
        <p className="mt-2 font-semibold">BAMS | M.Sc. | M.Phil.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[['25+','Years of Experience'],['5 Lakh+','Happy Clients']].map(([n, l]) => <div key={l} className="rounded-2xl border border-white/15 bg-white/5 p-5"><div className="font-display text-3xl font-extrabold text-crimson-light">{n}</div><div className="text-white/75">{l}</div></div>)}</div>
        <p className="mt-6 text-white/80">Join Dr. Abhimanyu Bhargava in this LIVE educational Masterclass and gain a structured understanding of gut health, digestive concerns, food habits, lifestyle factors and Ayurvedic perspectives.</p>
        <Button className="mt-6 w-full sm:w-auto">Join the Free Masterclass</Button>
      </Reveal></div></Section>
}
