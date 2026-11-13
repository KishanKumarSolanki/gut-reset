import { Reveal, Section } from './ui'

const testimonials = [
  {
    src: '/images/testimonial.png',
    alt: 'Client testimonial from Satpal Prajapati, Uttar Pradesh',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-paper !py-8 sm:!py-12">
      <div className="text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">
          Real Client Experience
        </h2>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {testimonials.map(({ src, alt }, i) => (
          <Reveal key={src} delay={i * 40} className="w-full max-w-[280px] sm:max-w-xs">
            <div className="overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-[0_16px_40px_-24px_rgba(139,0,20,0.4)] ring-1 ring-neutral-200/70">
              <img src={src} alt={alt} loading="lazy" className="block w-full rounded-xl" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
