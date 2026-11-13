import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Learn from './components/Learn'
import WhoFor from './components/WhoFor'
import Testimonials from './components/Testimonials'
import WhyJoin from './components/WhyJoin'
import About from './components/About'
import WhyAttend from './components/WhyAttend'
import Bonuses from './components/Bonuses'
import MasterclassDetails from './components/MasterclassDetails'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Floating from './components/Floating'
import ThankYou from './components/ThankYou'
import { initAnalytics, trackScrollDepth } from './utils/track'

export default function App() {
  const [thanks, setThanks] = useState(window.location.hash === '#thank-you')

  useEffect(() => { initAnalytics(); return trackScrollDepth() }, [])
  useEffect(() => {
    const f = () => {
      setThanks(window.location.hash === '#thank-you')
      if (window.location.hash === '#thank-you') window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])

  if (thanks) return <ThankYou />

  return (
    <>
      <main>
        <Hero />
        <Learn />
        <WhoFor />
        <Testimonials />
        <WhyJoin />
        <About />
        <WhyAttend />
        <Bonuses />
        {/* <MasterclassDetails /> */}
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
      <Floating />
    </>
  )
}