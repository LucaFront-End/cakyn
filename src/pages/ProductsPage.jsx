import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { productsContent } from '../data/content'
import SEOHead from '../components/SEOHead'
import CTABanner from '../components/sections/CTABanner'
import './ProductsPage.css'

gsap.registerPlugin(ScrollTrigger)

const SYMBOLS = {
  'Polipropileno virgen (PP)':     { sym: 'PP',  group: 'Poliolefina' },
  'Polietileno virgen (HDPE)':     { sym: 'HD',  group: 'Poliolefina' },
  'Polietileno virgen (LDPE)':     { sym: 'LD',  group: 'Poliolefina' },
  'Poliestireno virgen':           { sym: 'PS',  group: 'Estireno' },
  'Polietileno reciclado':         { sym: 'rPE', group: 'Post-industrial' },
  'Polipropileno reciclado':       { sym: 'rPP', group: 'Post-industrial' },
  'Mezclas industriales':          { sym: 'MX',  group: 'Blend' },
  'Desarrollo de mezclas personalizadas': { sym: 'DM', group: 'Custom' },
  'Ajuste por aplicación':         { sym: 'AX', group: 'Custom' },
  'Optimización según proceso':    { sym: 'OP', group: 'Custom' },
}

const PROCESSES = {
  'Polipropileno virgen (PP)':     ['Inyección', 'Extrusión', 'Soplado'],
  'Polietileno virgen (HDPE)':     ['Soplado', 'Extrusión', 'Rotomoldeo'],
  'Polietileno virgen (LDPE)':     ['Film', 'Extrusión', 'Recubrimiento'],
  'Poliestireno virgen':           ['Inyección', 'Termoformado'],
  'Polietileno reciclado':         ['Inyección', 'Extrusión', 'Soplado'],
  'Polipropileno reciclado':       ['Inyección', 'Extrusión'],
  'Mezclas industriales':          ['Multi-proceso'],
  'Desarrollo de mezclas personalizadas': ['A medida'],
  'Ajuste por aplicación':         ['Optimizado'],
  'Optimización según proceso':    ['Inyección', 'Extrusión', 'Soplado'],
}

const CAT_STATS = {
  virgin:   { stat: '4', label: 'polímeros', stat2: '99.5%', label2: 'pureza' },
  recycled: { stat: '3', label: 'líneas', stat2: '35%', label2: 'ahorro' },
  custom:   { stat: '∞', label: 'posibilidades', stat2: '24h', label2: 'respuesta' },
}

export default function ProductsPage() {
  const trackRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current
      const track = trackRef.current
      if (!slider || !track) return

      const getWidth = () => slider.scrollWidth - window.innerWidth

      gsap.to(slider, {
        x: () => -getWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: () => `+=${getWidth()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      // Stagger reveal cards within each panel
      gsap.utils.toArray('.pp__panel').forEach((panel) => {
        const cards = panel.querySelectorAll('.pp__card')
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.getById?.('hScroll'),
            start: 'left 80%',
            toggleActions: 'play none none reverse',
          }
        })
      })

    }, trackRef)
    return () => ctx.revert()
  }, [])

  const cats = productsContent.categories

  return (
    <div className="pp-page">

      <SEOHead
        title="Polímeros y Resinas Plásticas Industriales | Cakin México"
        description="Distribuidor de polímeros en México especializado en polietileno, polipropileno y materiales plásticos reciclados y vírgenes para procesos industriales."
      />

      {/* ── Hero ── */}
      <section className="pp-hero">
        <div className="pp-hero__grid-bg" />
        <div className="pp-hero__glow" />
        <div className="container pp-hero__inner">
          <span className="tag"><span className="tag__dot" />{productsContent.tag}</span>
          <h1 className="pp-hero__h1">
            {productsContent.title}
          </h1>
          <p className="pp-hero__sub">{productsContent.subtitle}</p>
          <div className="pp-hero__nav">
            {cats.map((c, i) => (
              <span key={c.id} className={`pp-hero__chip pp-hero__chip--${c.accent}`}>
                <span className="pp-hero__chip-dot" />
                {c.title}
              </span>
            ))}
          </div>
          <div className="pp-hero__arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
            <span className="mono">SCROLL</span>
          </div>
        </div>
      </section>

      {/* ── Horizontal Track ── */}
      <div className="pp__track" ref={trackRef}>
        <div className="pp__slider" ref={sliderRef}>

          {cats.map((cat, cIdx) => {
            const stats = CAT_STATS[cat.id]
            return (
              <div key={cat.id} className={`pp__panel pp__panel--${cat.accent}`}>

                {/* LEFT: Category Sidebar */}
                <div className="pp__sidebar">
                  <div className="pp__sidebar-inner">
                    <span className="pp__cat-num mono">0{cIdx + 1} / 0{cats.length}</span>
                    <h2 className="pp__cat-title">{cat.title}</h2>
                    <p className="pp__cat-sub">{cat.subtitle}</p>
                    <div className="pp__cat-divider" />
                    <p className="pp__cat-desc">{cat.description}</p>
                    <div className="pp__cat-stats">
                      <div className="pp__cat-stat">
                        <span className="pp__cat-stat-val">{stats.stat}</span>
                        <span className="pp__cat-stat-label mono">{stats.label}</span>
                      </div>
                      <div className="pp__cat-stat">
                        <span className="pp__cat-stat-val">{stats.stat2}</span>
                        <span className="pp__cat-stat-label mono">{stats.label2}</span>
                      </div>
                    </div>
                    <a href="/contacto" className="pp__cat-cta">
                      Cotizar {cat.title.toLowerCase()} →
                    </a>
                  </div>
                </div>

                {/* RIGHT: Product Cards Grid */}
                <div className="pp__cards">
                  {cat.items.map((item, i) => {
                    const meta = SYMBOLS[item.name] || { sym: '??', group: '' }
                    const procs = PROCESSES[item.name] || []
                    return (
                      <div className="pp__card" key={i}>
                        {/* Giant bg letter */}
                        <span className="pp__card-bg">{meta.sym}</span>

                        <div className="pp__card-top">
                          <span className="pp__card-sym">{meta.sym}</span>
                          <span className="pp__card-group mono">{meta.group}</span>
                        </div>

                        <h4 className="pp__card-name">{item.name}</h4>
                        <p className="pp__card-specs mono">{item.specs}</p>

                        <div className="pp__card-tags">
                          {procs.map((p, pi) => (
                            <span className="pp__card-tag" key={pi}>{p}</span>
                          ))}
                        </div>

                        <div className="pp__card-cta">
                          Solicitar ficha técnica →
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            )
          })}

        </div>
      </div>

      {/* ── CTA ── */}
      <CTABanner />
    </div>
  )
}
