import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Package, Car, HardHat, Cpu, Scissors, ArrowRight, ArrowUpRight } from 'lucide-react'
import { industriesContent, comparatorContent } from '../data/content'
import SEOHead from '../components/SEOHead'
import CTABanner from '../components/sections/CTABanner'
import './IndustriesPage.css'

gsap.registerPlugin(ScrollTrigger)

const IconMap = {
  Package: <Package strokeWidth={1.5} />,
  Car: <Car strokeWidth={1.5} />,
  HardHat: <HardHat strokeWidth={1.5} />,
  Cpu: <Cpu strokeWidth={1.5} />,
  Scissors: <Scissors strokeWidth={1.5} />,
}

export default function IndustriesPage() {
  const pageRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from('.ind-hero__title', { y: 60, opacity: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 })
      gsap.from('.ind-hero__sub', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 })
      gsap.from('.ind-hero__tag', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })

      // Stats
      gsap.from('.ind-stat', {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-stats', start: 'top 80%' },
      })

      // Image Portal Reveal
      gsap.from('.ind-portal__media', {
        scale: 1.05, opacity: 0, duration: 1.5, ease: 'power4.out',
        scrollTrigger: { trigger: '.ind-split', start: 'top 70%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSectorHover = (idx) => {
    if (idx === activeIdx) return
    setActiveIdx(idx)
  }

  return (
    <div className="ind-page" ref={pageRef}>

      <SEOHead
        title="Polímeros Industriales para Empresas en México | Cakin"
        description="Materiales plásticos y polímeros industriales para sectores de manufactura, construcción, empaque y automotriz en México. Calidad y suministro confiable."
      />

      {/* ═══ HERO (Light) ═══ */}
      <section className="ind-hero">
        <div className="ind-hero__grid" />
        <div className="ind-hero__glow" />
        <div className="container ind-hero__content">
          <span className="tag ind-hero__tag">
            <span className="tag__dot" />
            {industriesContent.tag}
          </span>
          <h1 className="ind-hero__title">{industriesContent.title}</h1>
          <p className="ind-hero__sub">{industriesContent.subtitle}</p>
        </div>
      </section>

      {/* ═══ STATS BAR (Dark) ═══ */}
      <section className="ind-stats">
        <div className="container">
          <div className="ind-stats__grid">
            <div className="ind-stat">
              <span className="ind-stat__val">15+</span>
              <span className="ind-stat__label">Años de experiencia industrial</span>
            </div>
            <div className="ind-stat">
              <span className="ind-stat__val">200+</span>
              <span className="ind-stat__label">Clientes en todo México</span>
            </div>
            <div className="ind-stat">
              <span className="ind-stat__val">100%</span>
              <span className="ind-stat__label">Garantía de calidad por lote</span>
            </div>
            <div className="ind-stat">
              <span className="ind-stat__val">24/7</span>
              <span className="ind-stat__label">Soporte logístico y técnico</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPLIT SECTORS ═══ */}
      <section className="ind-split">
        <div className="container ind-split__container">
          
          {/* Left: Accordion List */}
          <div className="ind-list" ref={contentRef}>
            <div className="ind-list__header">
              <h2 className="ind-list__heading">Materiales diseñados para tu <span className="text-accent">sector</span></h2>
            </div>

            <div className="ind-accordion">
              {industriesContent.sectors.map((sector, i) => {
                const isActive = activeIdx === i
                return (
                  <div
                    key={sector.id}
                    className={`ind-row ${isActive ? 'ind-row--active' : ''}`}
                    onMouseEnter={() => handleSectorHover(i)}
                    onClick={() => handleSectorHover(i)}
                  >
                    <div className="ind-row__head">
                      <div className="ind-row__num mono">{String(i + 1).padStart(2, '0')}</div>
                      <h3 className="ind-row__title">{sector.title}</h3>
                      <div className="ind-row__icon-wrap">
                        {IconMap[sector.icon]}
                      </div>
                    </div>
                    
                    <div className="ind-row__body" style={{ height: isActive ? 'auto' : 0 }}>
                      <div className="ind-row__content">
                        <p className="ind-row__desc">{sector.description}</p>
                        <a href="/contacto" className="ind-row__link mono">
                          Ver especificaciones <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Sticky Portal */}
          <div className="ind-portal">
            <div className="ind-portal__sticky">
              <div className="ind-portal__media">
                {industriesContent.sectors.map((sector, i) => (
                  <img
                    key={sector.id}
                    src={`/images/${sector.id}.jpg`}
                    alt={sector.title}
                    className={`ind-portal__img ${activeIdx === i ? 'ind-portal__img--active' : ''}`}
                  />
                ))}
                
                {/* Portal Overlay */}
                <div className="ind-portal__overlay">
                  <div className="ind-portal__badge">
                    <span className="mono">
                      {String(activeIdx + 1).padStart(2, '0')} / {String(industriesContent.sectors.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="ind-portal__title">
                    {industriesContent.sectors[activeIdx]?.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ COMPARATOR ═══ */}
      <section className="ind-comp">
        <div className="container">
          <div className="ind-comp__header">
            <span className="tag"><span className="tag__dot" />{comparatorContent.tag}</span>
            <h2 className="ind-comp__heading">{comparatorContent.title}</h2>
          </div>

          <div className="ind-table-wrap">
            <table className="ind-table">
              <thead>
                <tr>
                  <th>Propiedad</th>
                  <th>Resina Virgen</th>
                  <th>Resina Reciclada (CAKYN)</th>
                </tr>
              </thead>
              <tbody>
                {comparatorContent.rows.map((row, i) => (
                  <tr key={i}>
                    <td className="ind-table__feature mono">{row.feature}</td>
                    <td>
                      <div className="ind-table__cell">
                        <span className="ind-table__val">{row.virgin}</span>
                        <div className="ind-table__bar">
                          <div className="ind-table__fill ind-table__fill--blue" style={{ width: `${row.virginPct}%` }} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ind-table__cell">
                        <span className="ind-table__val">{row.recycled}</span>
                        <div className="ind-table__bar">
                          <div className="ind-table__fill ind-table__fill--green" style={{ width: `${row.recycledPct}%` }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ind-comp__action">
            <a href="/contacto" className="btn btn--primary btn--glow">
              {comparatorContent.cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
