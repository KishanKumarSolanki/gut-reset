import { useEffect, useState } from 'react'
import Button from './Button'
import Logo from './Logo'

const links = [
  ['Learn', '#learn'],
  ['Who It’s For', '#for-you'],
  ['Mentor', '#mentor'],
  ['Bonuses', '#bonuses'],
  ['FAQ', '#faq'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a stronger background and shadow once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/85 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'border-b border-transparent bg-ink/60 backdrop-blur-md'
      }`}
    >
      {/* Top brand accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-crimson-light/70 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map(([t, h]) => (
            <a
              key={h}
              href={h}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-0 scale-90 rounded-full bg-white/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/5" />
              <span className="relative">{t}</span>
            </a>
          ))}

          <div className="ml-4 pl-4 border-l border-white/10">
            <Button className="!px-3 !py-2 !text-xs" />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 animate-ring items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:bg-white/10 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-all duration-500 ease-out md:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="flex flex-col py-2" aria-label="Mobile navigation">
          {links.map(([t, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/5 px-6 py-4 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
            >
              {t}
              <span className="text-crimson-light" aria-hidden="true">→</span>
            </a>
          ))}
        </nav>

        <div className="p-5">
          <Button
            onClick={() => setOpen(false)}
            className="w-full"
          />
        </div>
      </div>
    </header>
  )
}