import { useState, useRef, useCallback } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { differentialContent } from '../../data/content'
import './Differential.css'

const CARDS = [
  {
    key: 'virgin',
    data: differentialContent.virgin,
    tagColor: '#1560A8',
    bg: 'linear-gradient(145deg, rgba(21,96,168,0.06) 0%, rgba(21,96,168,0.02) 100%)',
    glowColor: 'rgba(21, 96, 168, 0.12)',
    checkBg: 'rgba(21, 96, 168, 0.10)',
    checkColor: '#1560A8',
    number: '01',
    subtitle: 'Resinas de alto desempeño con especificaciones controladas para procesos exigentes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="8" y="10" width="32" height="28" rx="4"/>
        <path d="M8 20h32" opacity="0.3"/>
        <circle cx="24" cy="30" r="4.5"/>
        <path d="M18 30h-4M34 30h-4" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    key: 'recycled',
    data: differentialContent.recycled,
    tagColor: '#1A6B3A',
    bg: 'linear-gradient(145deg, rgba(26,107,58,0.06) 0%, rgba(26,107,58,0.02) 100%)',
    glowColor: 'rgba(26, 107, 58, 0.12)',
    checkBg: 'rgba(26, 107, 58, 0.10)',
    checkColor: '#1A6B3A',
    number: '02',
    subtitle: 'Alternativas rentables y sustentables sin comprometer la calidad operativa.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M24 6l14 9v18l-14 9-14-9V15l14-9z"/>
        <path d="M24 6v16m0 0l14 9m-14-9L10 15" opacity="0.25"/>
        <circle cx="24" cy="30" r="5"/>
        <path d="M22 30l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Differential() {
  const ref = useScrollReveal()
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section className="diff section" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="diff__header reveal">
          <span className="tag">
            <span className="tag__dot" />
            {differentialContent.tag}
          </span>
          <h2 className="diff__title">
            Una sola solución,<br/>
            <span className="diff__accent">dos líneas de suministro.</span>
          </h2>
        </div>

        {/* Twin Cards */}
        <div className="diff__twins reveal delay-1">
          {CARDS.map((card, i) => (
            <MagneticCard
              key={card.key}
              card={card}
              isHovered={hoveredIdx === i}
              isDimmed={hoveredIdx !== null && hoveredIdx !== i}
              onEnter={() => setHoveredIdx(i)}
              onLeave={() => setHoveredIdx(null)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Magnetic 3D Card ───────────────────────────────── */
function MagneticCard({ card, isHovered, isDimmed, onEnter, onLeave }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Tilt angles (max ±8deg)
    const rotateY = ((x - centerX) / centerX) * 8
    const rotateX = ((centerY - y) / centerY) * 6

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

    // Move glow spotlight
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${card.glowColor}, transparent 60%)`
    }
  }, [card.glowColor])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    if (glowRef.current) {
      glowRef.current.style.background = 'transparent'
    }
    onLeave()
  }, [onLeave])

  return (
    <div
      ref={cardRef}
      className={`diff-card ${isHovered ? 'diff-card--hover' : ''} ${isDimmed ? 'diff-card--dim' : ''}`}
      style={{ '--card-bg': card.bg }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow overlay that follows mouse */}
      <div ref={glowRef} className="diff-card__glow" />

      {/* Glass border highlight */}
      <div className="diff-card__border" style={{ '--border-color': card.tagColor }} />

      {/* Content */}
      <div className="diff-card__content">

        {/* Eyebrow */}
        <div className="diff-card__eyebrow">
          <span className="diff-card__num mono">{card.number}</span>
          <span className="diff-card__eye-line" />
          <span className="diff-card__eye-tag" style={{ color: card.tagColor }}>
            {card.data.title}
          </span>
        </div>

        {/* Icon */}
        <div className="diff-card__icon" style={{ color: card.tagColor }}>
          {card.icon}
        </div>

        {/* Title & Description */}
        <h3 className="diff-card__title">{card.data.title}</h3>
        <p className="diff-card__sub">{card.subtitle}</p>

        {/* Feature List */}
        <ul className="diff-card__list">
          {card.data.items.map((item, j) => (
            <li key={j} className="diff-card__item">
              <span className="diff-card__check" style={{ background: card.checkBg, color: card.checkColor }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="/productos" className="diff-card__cta" style={{ color: card.tagColor }}>
          Explorar {card.key === 'virgin' ? 'virgen' : 'reciclado'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
