import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { aboutContent } from '../data/content'
import CTABanner from '../components/sections/CTABanner'
import './AboutPage.css'

export default function AboutPage() {
  const ref = useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div ref={ref}>
      <section className="about-hero">
        <div className="about-hero__orb glow-orb glow-orb--green" />
        <div className="container">
          <div className="tag reveal">{aboutContent.tag}</div>
          <h1 className="reveal reveal-delay-1">Sobre <span className="accent">CAKYN</span></h1>
          <p className="about-hero__desc reveal reveal-delay-2">{aboutContent.description}</p>
        </div>
      </section>

      <section className="about-mv">
        <div className="container">
          <div className="about-mv__grid">
            <div className="about-mv__card glass-card reveal">
              <div className="about-mv__card-accent about-mv__card-accent--green" />
              <h3>{aboutContent.mission.title}</h3>
              <p>{aboutContent.mission.text}</p>
            </div>
            <div className="about-mv__card glass-card reveal reveal-delay-2">
              <div className="about-mv__card-accent about-mv__card-accent--blue" />
              <h3>{aboutContent.vision.title}</h3>
              <p>{aboutContent.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header reveal">
            <h2>Nuestros <span className="accent">valores</span></h2>
          </div>
          <div className="about-values__grid">
            {aboutContent.values.map((val, i) => (
              <div key={i} className={`about-value glass-card reveal reveal-delay-${i + 1}`}>
                <div className="about-value__orbit">
                  <div className="about-value__orbit-ring" />
                  <span className="about-value__icon">{val.icon}</span>
                </div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  )
}
