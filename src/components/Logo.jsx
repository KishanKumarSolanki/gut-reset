export default function Logo({ className = '' }) {
  return <a href="#top" className={`inline-flex items-center gap-2 font-display text-lg font-extrabold text-white ${className}`}>
    <img src="/favicon.svg" alt="" className="h-7 w-7" />
    <span>Gut Reset <span className="text-crimson-light">Masterclass</span></span></a>
}
