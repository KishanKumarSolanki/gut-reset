import Logo from './Logo'
export default function Footer() {
  return <footer className="bg-ink px-5 py-12 pb-28 text-white/70 sm:px-8 md:pb-12"><div className="mx-auto max-w-6xl">
    <Logo />
    <p className="mt-4 text-sm leading-relaxed">The Gut Reset Masterclass is an educational program. Information shared during the session is intended for general awareness and should not be considered individual medical advice, diagnosis or treatment. Individual health needs vary. Consult a qualified healthcare professional for persistent symptoms or personal medical concerns. Do not discontinue prescribed medication or begin supplements or herbal products without appropriate professional guidance.</p>
    <p className="mt-6 border-t border-white/10 pt-4 text-sm">© Gut Reset Masterclass. All rights reserved.</p></div></footer>
}
