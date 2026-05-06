import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { servicesContent } from '../data/content'
import CTABanner from '../components/sections/CTABanner'
import './ServicesPage.css'

export default function ServicesPage() {
  const ref = useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div ref={ref}>
      <section className="services-hero">
        <div className="container">
          <div className="tag reveal">{servicesContent.tag}</div>
          <h1 className="reveal reveal-delay-1">{servicesContent.title}</h1>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services__timeline">
            {servicesContent.services.map((svc, i) => (
              <div key={i} className={`service-item reveal ${i % 2 === 0 ? 'service-item--left' : 'service-item--right'}`}>
                <div className="service-item__connector">
                  <div className="service-item__dot" />
                  <div className="service-item__line" />
                </div>
                <div className="service-item__card glass-card">
                  <span className="service-item__number mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="service-item__icon">{svc.icon}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  )
}
