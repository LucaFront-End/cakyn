import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'
import { sustainabilityContent } from '../data/content'
import CTABanner from '../components/sections/CTABanner'
import './SustainabilityPage.css'

function MetricCard({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2200)
  return (
    <div className="sust-metric glass-card" ref={ref}>
      <span className="sust-metric__value mono">
        {count}<span className="sust-metric__suffix">{suffix}</span>
      </span>
      <span className="sust-metric__label">{label}</span>
    </div>
  )
}

export default function SustainabilityPage() {
  const ref = useScrollReveal()
  const circleRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cycle-stage').forEach((el, i) => {
        gsap.fromTo(el, {
          opacity: 0, scale: 0.8
        }, {
          opacity: 1, scale: 1, duration: 0.6,
          delay: i * 0.2,
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
      })
    }, circleRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>
      <section className="sust-hero">
        <div className="sust-hero__gradient" />
        <div className="container">
          <div className="tag reveal">{sustainabilityContent.tag}</div>
          <h1 className="reveal reveal-delay-1">{sustainabilityContent.title}</h1>
          <p className="sust-hero__phrase reveal reveal-delay-2">
            <span className="text-gradient">{sustainabilityContent.keyPhrase}</span>
          </p>
        </div>
      </section>

      <section className="sust-cycle" ref={circleRef}>
        <div className="container">
          <div className="sust-cycle__visual">
            <div className="sust-cycle__center">
              <span className="sust-cycle__center-icon">♻️</span>
              <span className="sust-cycle__center-text mono">Economía<br/>Circular</span>
            </div>
            <svg className="sust-cycle__ring" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="170" stroke="rgba(0,230,118,0.15)" strokeWidth="2" strokeDasharray="8 8" />
              <circle cx="200" cy="200" r="170" stroke="url(#ringGrad)" strokeWidth="2" strokeDasharray="267 800" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
              </circle>
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#42A5F5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="sust-cycle__stages">
              {sustainabilityContent.pillars.map((p, i) => (
                <div key={i} className={`cycle-stage cycle-stage--${i}`}>
                  <span className="cycle-stage__icon">{p.icon}</span>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sust-metrics">
        <div className="container">
          <div className="section-header reveal">
            <h2>Impacto <span className="accent">medible</span></h2>
          </div>
          <div className="sust-metrics__grid">
            {sustainabilityContent.metrics.map((m, i) => (
              <MetricCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  )
}
