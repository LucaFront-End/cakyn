import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'
import Hero from '../components/sections/Hero'
import MarqueeBand from '../components/sections/MarqueeBand'
import Differential from '../components/sections/Differential'
import ValueProposition from '../components/sections/ValueProposition'
import Solutions from '../components/sections/Solutions'
import Industries from '../components/sections/Industries'
import Comparator from '../components/sections/Comparator'
import CTABanner from '../components/sections/CTABanner'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEOHead
        title="Desperdicios Industriales Cakin | Distribuidor de Polímeros en México"
        description="En Desperdicios Industriales Cakin distribuimos polímeros y materiales plásticos reciclados y vírgenes para la industria en México. Soluciones eficientes y sustentables."
      />
      <Hero />
      <MarqueeBand />
      <Differential />
      <ValueProposition />
      <Solutions />
      <Industries />
      <Comparator />
      <CTABanner />
    </>
  )
}
