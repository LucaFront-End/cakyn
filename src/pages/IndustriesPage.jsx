import { useEffect } from 'react'
import Industries from '../components/sections/Industries'
import CTABanner from '../components/sections/CTABanner'

export default function IndustriesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <section style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>
        <Industries />
      </section>
      <CTABanner />
    </div>
  )
}
