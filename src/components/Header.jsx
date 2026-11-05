import { useState } from 'react'
import { Button } from './ui'
import Logo from './Logo'
const links = [['Learn','#learn'],['Who It’s For','#for-you'],['Mentor','#mentor'],['Bonuses','#bonuses'],['FAQ','#faq']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <Logo />
      <nav className="hidden items-center gap-7 md:flex">{links.map(([t, h]) => <a key={h} href={h} className="text-sm text-white/80 transition hover:text-white">{t}</a>)}
        <Button className="!px-5 !py-2 !text-sm !animate-none">Register Free</Button></nav>
      <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
        {[0, 1, 2].map(i => <span key={i} className={`h-0.5 w-6 bg-white transition ${open && i === 1 ? 'opacity-0' : ''} ${open && i === 0 ? 'translate-y-2 rotate-45' : ''} ${open && i === 2 ? '-translate-y-2 -rotate-45' : ''}`} />)}</button>
    </div>
    <div className={`overflow-hidden bg-ink transition-all duration-300 md:hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
      {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-t border-white/10 px-6 py-3 text-white/90">{t}</a>)}
      <div className="p-4"><Button onClick={() => setOpen(false)} className="w-full">Register Now: Join for Free</Button></div></div>
  </header>
}
