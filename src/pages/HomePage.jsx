import { useEffect } from 'react'
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
