import { track } from '../utils/track'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/config'
export default function Floating() {
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  return <>
    <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} aria-label="Chat on WhatsApp" className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 md:bottom-6">
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current"><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3Zm0 23.7a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.8 1.2 1.2-3.7-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.700 8.700 0 0 1-4.300-3.800c-.3-.6.3-.5.9-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700 6.400 6.400 0 0 0 1.300 3.400 14.600 14.600 0 0 0 5.600 4.900c2 .8 2.800.9 3.800.7a3.200 3.200 0 0 0 2.100-1.500 2.600 2.600 0 0 0 .2-1.500c-.1-.1-.3-.2-.6-.4Z"/></svg></a>
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 p-3 backdrop-blur md:hidden">
      <a href="#register" className="block rounded-full bg-gradient-to-r from-crimson to-crimson-light py-3 text-center font-semibold text-white">Register Now: Join for Free</a></div></>
}
