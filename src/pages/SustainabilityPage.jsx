import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Truck, Search, Settings, Flame, Microscope, Recycle, 
  Trash2, Repeat, RefreshCw, Globe, CheckCircle2 
} from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import { sustainabilityContent } from '../data/content'
import SEOHead from '../components/SEOHead'
import CTABanner from '../components/sections/CTABanner'
import './SustainabilityPage.css'

gsap.registerPlugin(ScrollTrigger)

const IconMap = {
  Truck: <Truck strokeWidth={1.5} />,
  Search: <Search strokeWidth={1.5} />,
  Settings: <Settings strokeWidth={1.5} />,
  Flame: <Flame strokeWidth={1.5} />,
  Microscope: <Microscope strokeWidth={1.5} />,
  Recycle: <Recycle strokeWidth={1.5} />,
  Trash2: <Trash2 strokeWidth={1.5} />,
  Repeat: <Repeat strokeWidth={1.5} />,
  RefreshCw: <RefreshCw strokeWidth={1.5} />,
  Globe: <Globe strokeWidth={1.5} />
}

/* ─── Animated Metric ────────────────────────────── */
function MetricCard({ stat, triggered }) {
  const { count } = useCountUp(stat.value, 2200, triggered)
  return (
    <div className="su-met__card">
      <div className="su-met__val-row">
        <span className="su-met__val">{count}</span>
        <span className="su-met__suffix">{stat.suffix}</span>
      </div>
      <span className="su-met__label">{stat.label}</span>
      <span className="su-met__detail mono">{stat.detail}</span>
      {/* Animated progress ring */}
      <svg className="su-met__ring" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" className="su-met__ring-bg" />
        <circle cx="50" cy="50" r="44" className="su-met__ring-fill" />
      </svg>
    </div>
  )
}

export default function SustainabilityPage() {
  const pageRef = useRef(null)
  const [metTriggered, setMetTriggered] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Hero animation ── */
      gsap.from('.su-hero__title', { y: 60, opacity: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 })
      gsap.from('.su-hero__sub', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 })
      gsap.from('.su-hero__tag', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })

      /* ── Scroll-driven SVG Cycle ── */
      gsap.to('.su-cycle__path-draw', {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.su-cycle',
          start: 'top 50%',
          end: 'bottom 70%',
          scrub: 1,
        },
      })

      const steps = gsap.utils.toArray('.su-cycle__node')
      steps.forEach((node, i) => {
        ScrollTrigger.create({
          trigger: '.su-cycle',
          start: () => `top+=${(i / steps.length) * 80}% 50%`,
          onEnter: () => setActiveStep(prev => Math.max(prev, i)),
          onLeaveBack: () => setActiveStep(i - 1),
        })
      })

      gsap.to('.su-cycle__center-pulse', {
        scale: 1.5, opacity: 0, duration: 2.5, ease: 'power2.out', repeat: -1,
      })

      /* ── Process cards stagger ── */
      gsap.from('.su-proc__step', {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.su-proc', start: 'top 70%' },
      })

      /* ── Metrics ── */
      ScrollTrigger.create({
        trigger: '.su-met', start: 'top 75%', once: true,
        onEnter: () => setMetTriggered(true),
      })
      gsap.from('.su-met__card', {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.su-met', start: 'top 75%' },
      })

      gsap.to('.su-met__ring-fill', {
        strokeDashoffset: 60, stagger: 0.15, duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.su-met', start: 'top 75%' },
      })

      /* ── Pillars ── */
      gsap.from('.su-pill__card', {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.su-pill', start: 'top 70%' },
      })

    }, pageRef)
    return () => ctx.revert()
  }, [])

  // Node positions for circle
  const RADIUS = 180
  const CENTER = 220
  const nodePositions = sustainabilityContent.process.map((_, i) => {
    const angle = (i / sustainabilityContent.process.length) * Math.PI * 2 - Math.PI / 2
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    }
  })
  const circumference = 2 * Math.PI * RADIUS

  return (
    <div className="su-page" ref={pageRef}>

      <SEOHead
        title="Sustentabilidad y Reciclaje Industrial | Cakin México"
        description="En Cakin impulsamos la economía circular mediante reciclaje industrial y reutilización de materiales plásticos para una industria más sustentable en México."
      />

      {/* ═══ HERO (Light/Editorial) ═══ */}
      <section className="su-hero">
        <div className="su-hero__grid" />
        <div className="su-hero__glow" />
        
        <div className="container su-hero__content">
          <span className="tag su-hero__tag">
            <span className="tag__dot" />
            {sustainabilityContent.tag}
          </span>
          <h1 className="su-hero__title">
            {sustainabilityContent.heroHeadline.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-accent">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="su-hero__sub">{sustainabilityContent.heroSub}</p>
        </div>
      </section>

      {/* ═══ SCROLL-DRIVEN CYCLE ═══ */}
      <section className="su-cycle">
        <div className="container">
          <div className="su-cycle__header">
            <span className="tag"><span className="tag__dot" />Economía circular</span>
            <h2 className="su-cycle__heading">
              Un ciclo que <span className="text-accent">nunca se detiene</span>
            </h2>
            <p className="su-cycle__intro">
              El plástico no es basura. Es una materia prima valiosa que, mediante
              ingeniería de reciclaje, vuelve a la línea de producción sin perder propiedades.
            </p>
          </div>

          <div className="su-cycle__visual">
            <svg className="su-cycle__svg" viewBox="0 0 440 440">
              <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="var(--border)" strokeWidth="1" />
              <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="4 8" />
              
              {/* Animated draw path */}
              <circle cx={CENTER} cy={CENTER} r={RADIUS}
                className="su-cycle__path-draw"
                fill="none" stroke="url(#cycleGrad)" strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="cycleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--blue)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="su-cycle__center">
              <div className="su-cycle__center-pulse" />
              <div className="su-cycle__center-icon"><Recycle size={48} strokeWidth={1} /></div>
              <span className="su-cycle__center-text mono">REINTEGRACIÓN<br/>INDUSTRIAL</span>
            </div>

            {sustainabilityContent.process.map((p, i) => (
              <div
                key={i}
                className={`su-cycle__node ${i <= activeStep ? 'su-cycle__node--active' : ''}`}
                style={{
                  left: `${(nodePositions[i].x / 440) * 100}%`,
                  top: `${(nodePositions[i].y / 440) * 100}%`,
                }}
              >
                <div className="su-cycle__node-dot">
                  <div className="su-cycle__node-icon">{IconMap[p.icon]}</div>
                </div>
                <div className="su-cycle__node-label">
                  <span className="su-cycle__node-step mono">{p.step}</span>
                  <span className="su-cycle__node-title">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS CARDS ═══ */}
      <section className="su-proc">
        <div className="container">
          <div className="su-proc__header">
            <h2 className="su-proc__heading">Fases del <span className="text-accent">proceso</span></h2>
          </div>

          <div className="su-proc__grid">
            {sustainabilityContent.process.map((p, i) => (
              <div key={i} className="su-proc__step">
                <div className="su-proc__step-head">
                  <span className="su-proc__step-num mono">{p.step}</span>
                  <div className="su-proc__step-icon">{IconMap[p.icon]}</div>
                </div>
                <div className="su-proc__step-body">
                  <h3 className="su-proc__step-title">{p.title}</h3>
                  <p className="su-proc__step-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METRICS (Dark Dashboard) ═══ */}
      <section className="su-met">
        <div className="container">
          <div className="su-met__header">
            <span className="tag tag--light"><span className="tag__dot" />Transparencia</span>
            <h2 className="su-met__heading">Impacto <span className="text-accent">medible</span></h2>
            <p className="su-met__intro">Datos auditables de nuestra operación anual.</p>
          </div>

          <div className="su-met__grid">
            {sustainabilityContent.metrics.map((m, i) => (
              <MetricCard key={i} stat={m} triggered={metTriggered} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ═══ */}
      <section className="su-pill">
        <div className="container">
          <div className="su-pill__split">
            <div className="su-pill__left">
              <h2 className="su-pill__heading">Pilares de<br/>nuestra <span className="text-accent">filosofía</span></h2>
              <div className="su-commit">
                <CheckCircle2 className="su-commit__icon" />
                <p className="su-commit__text">{sustainabilityContent.commitment}</p>
              </div>
            </div>
            
            <div className="su-pill__grid">
              {sustainabilityContent.pillars.map((p, i) => (
                <div key={i} className="su-pill__card">
                  <div className="su-pill__icon">{IconMap[p.icon]}</div>
                  <h3 className="su-pill__title">{p.title}</h3>
                  <p className="su-pill__desc">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
