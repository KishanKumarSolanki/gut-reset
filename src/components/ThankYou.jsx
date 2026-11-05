import { Button } from './ui'
const steps = [['Check Your WhatsApp','Look out for your Masterclass joining details and updates.'],['Check Your Email','Check your inbox and spam folder for registration-related communication.'],['Save Your Joining Details','Keep your joining information handy so you can access the session easily.'],['Get Ready to Learn','Join from a quiet place using your mobile phone, laptop or tablet.']]
const bonus = ['Gut Trigger Food Checklist','7-Day Gut-Friendly Diet Guide','Gut Health Daily Routine Planner','Gut Symptom & Food Tracker','Ayurvedic Gut Wellness Guide']
export default function ThankYou() {
  return <main className="min-h-screen bg-paper px-5 py-16 sm:px-8"><div className="mx-auto max-w-3xl">
    <div className="rounded-3xl bg-gradient-to-br from-crimson-dark to-crimson p-8 text-center text-white shadow-xl">
      <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Congratulations! Your Registration Is Successful.</h1>
      <p className="mt-3 text-xl font-semibold">Welcome to the Gut Reset Masterclass!</p>
      <p className="mt-3 text-white/85">You have successfully registered for the 90-Minute LIVE Online Masterclass with Dr. Abhimanyu Bhargava. Get ready to learn more about gut health, food habits, lifestyle factors and practical approaches to digestive wellness.</p></div>
    <h2 className="mt-10 font-display text-2xl font-extrabold">What Happens Next?</h2>
    <ol className="mt-4 space-y-3">{steps.map(([t, d], i) => <li key={t} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-crimson font-bold text-white">{i + 1}</span><div><b>Step {i + 1}: {t}</b><p className="text-neutral-600">{d}</p></div></li>)}</ol>
    <h2 className="mt-10 font-display text-2xl font-extrabold">Your FREE Bonuses Are Part of the Registration Offer!</h2>
    <p className="mt-2 text-neutral-600">Your registration offer includes these five educational resources:</p>
    <ol className="mt-3 list-decimal space-y-1 pl-6">{bonus.map(b => <li key={b}>{b}</li>)}</ol>
    <p className="mt-3 font-semibold">Keep an eye on your WhatsApp and email for bonus delivery instructions.</p>
    <h2 className="mt-10 font-display text-2xl font-extrabold">We’re Glad You’re Here!</h2>
    <p className="mt-2 text-neutral-600">Take this opportunity to learn, ask better questions about your gut health and build a more informed approach to your everyday wellness habits.</p>
    <Button href="#top" onClick={() => { window.location.hash = '' }} className="mt-8">Return to Homepage</Button>
    <p className="mt-8 text-sm italic text-neutral-500">Note: This Masterclass is for educational purposes only and does not replace professional medical advice, diagnosis or treatment.</p></div></main>
}
