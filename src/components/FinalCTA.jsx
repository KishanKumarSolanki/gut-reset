import { Section, Reveal, Button } from './ui'
export default function FinalCTA() {
  return <Section className="bg-crimson text-center text-white">
    <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <Reveal className="mx-auto max-w-3xl">
      <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Your Gut-Health Journey Begins with Understanding.</h2>
      <p className="mt-4 text-xl font-semibold">You don’t have to start by guessing. Start by learning.</p>
      <p className="mt-4 text-white/85">Join Dr. Abhimanyu Bhargava’s 90-Minute LIVE Gut Reset Masterclass to understand common digestive concerns, explore food and lifestyle factors, and discover practical approaches to gut wellness.</p>
      <p className="mt-6 text-lg">90-Minute LIVE Online Masterclass · Actual Value: ₹999 · <b>Register Today: FREE</b></p>
      <p className="mt-3 text-2xl font-bold">Get Your 5 Exclusive Bonuses Worth ₹12,000 FREE!</p>
      <Button variant="dark" className="mt-8 w-full sm:w-auto">Register Now: Join for Free</Button></Reveal></Section>
}
