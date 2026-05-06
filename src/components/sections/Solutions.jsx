import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { solutionsContent } from '../../data/content'
import ParticleMorph from '../three/ParticleMorph'
import './Solutions.css'

gsap.registerPlugin(ScrollTrigger)

// Shape labels for the particle morph
const SHAPE_LABELS = ['Pellets', 'Molde', 'Tubo', 'Botella']

export default function Solutions() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const processes = solutionsContent.processes
      const totalPanels = processes.length

      // ── Pin the entire section ────────────────────────────────
      ScrollTrigger.create({
        trigger: '.sol-pin-wrap',
        start: 'top top',
        end: () => `+=${totalPanels * window.innerHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Map scroll progress to step index
          const progress = self.progress
          const stepIndex = Math.min(
            Math.floor(progress * totalPanels),
            totalPanels - 1
          )
          setActiveStep(stepIndex)
        }
      })

      // Animate the progress line
      ScrollTrigger.create({
        trigger: '.sol-pin-wrap',
        start: 'top top',
        end: () => `+=${totalPanels * window.innerHeight}`,
        scrub: 0.5,
        onUpdate: (self) => {
          const line = document.querySelector('.sol-progress__fill')
          if (line) line.style.height = `${self.progress * 100}%`
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="solutions" ref={sectionRef}>

      {/* Section Intro (scrolls away) */}
      <div className="sol-intro">
        <div className="container">
          <div className="sol-intro__content">
            <span className="tag">
              <span className="tag__dot" />
              {solutionsContent.tag}
            </span>
            <h2 className="sol-intro__title">
              Soluciones por<br />
              <span className="sol-intro__accent">proceso industrial</span>
            </h2>
            <p className="sol-intro__sub">{solutionsContent.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Pinned Section */}
      <div className="sol-pin-wrap">

        {/* ── LEFT: 3D Particle Canvas ──────────────────────────── */}
        <div className="sol-canvas">
          <ParticleMorph activeStep={activeStep} />

          {/* Shape label */}
          <div className="sol-canvas__label mono">
            <span className="sol-canvas__label-dot" />
            {SHAPE_LABELS[activeStep + 1] || SHAPE_LABELS[0]}
          </div>

          {/* Radial ambient glow */}
          <div className="sol-canvas__glow" />
        </div>

        {/* ── CENTER: Vertical Progress ────────────────────────── */}
        <div className="sol-progress">
          <div className="sol-progress__track">
            <div className="sol-progress__fill" />
          </div>
          <div className="sol-progress__steps">
            {solutionsContent.processes.map((_, i) => (
              <div
                key={i}
                className={`sol-progress__dot ${i <= activeStep ? 'sol-progress__dot--active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Process Info Cards ─────────────────────────── */}
        <div className="sol-info">
          {solutionsContent.processes.map((proc, i) => (
            <div
              key={proc.id}
              className={`sol-info__card ${i === activeStep ? 'sol-info__card--active' : ''}`}
            >
              <div className="sol-info__eyebrow mono">
                <span>0{i + 1}</span>
                <span className="sol-info__divider" />
                <span>{solutionsContent.tag}</span>
              </div>

              <h3 className="sol-info__title">{proc.title}</h3>
              <p className="sol-info__desc">{proc.description}</p>

              <div className="sol-info__features">
                {proc.features.map((f, j) => (
                  <div key={j} className="sol-info__feature">
                    <div className="sol-info__feature-bar" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
