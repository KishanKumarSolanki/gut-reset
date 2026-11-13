import { Section } from './ui'

const testimonials = [
  {
    src: '/images/testimonial.png',
    alt: 'Client testimonial from Satpal Prajapati, Uttar Pradesh',
  },
  {
    src: '/images/Preeti Saini’s Gut Health Recovery Story.png',
    alt: 'Client testimonial from Preeti Saini, Punjab',
  },
  {
    src: '/images/Ravinder Kaur’s Gut Reset Journey.png',
    alt: 'Client testimonial from Ravinder Kaur, Haryana',
  },
  {
    src: '/images/Kasturi Kamboj’s Gut Reset Journey.png',
    alt: 'Client testimonial from Kasturi Kamboj, Haryana',
  },
  {
    src: '/images/review_1_highlighted_v2.png',
    alt: 'Client review screenshot 1',
  },
  {
    src: '/images/review_2_highlighted_v2.png',
    alt: 'Client review screenshot 2',
  },
  {
    src: '/images/review_3_highlighted_v2.png',
    alt: 'Client review screenshot 3',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-paper !py-8 sm:!py-12">
      <div className="text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Real Client Testimonials
        </h2>
      </div>

      <div className="mt-6 overflow-hidden" role="region" aria-label="Client testimonials">
        <div className="flex w-max animate-testimonial-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 gap-4 pr-4" aria-hidden={group === 1}>
              {testimonials.map(({ src, alt }) => (
                <article
                  key={`${group}-${src}`}
                  className="flex h-[320px] w-[230px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_16px_40px_-24px_rgba(139,0,20,0.4)] sm:h-[400px] sm:w-[280px]"
                >
                  <img src={src} alt={alt} loading="lazy" className="h-full w-full rounded-xl object-contain" />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
