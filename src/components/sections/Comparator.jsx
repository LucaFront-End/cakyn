import { useState, useRef, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { comparatorContent } from '../../data/content'
import './Comparator.css'

// Icon SVGs for each feature
const FEATURE_ICONS = {
  'Calidad': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12l2 2 4-4"/>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  'Consistencia': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  'Costo': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  ),
  'Sustentabilidad': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="M7 15s1.5-2 5-2 5 2 5 2"/>
      <path d="M8 9h.01M16 9h.01"/>
    </svg>
  ),
  'Aplicaciones críticas': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  ),
}

export default function Comparator() {
  const ref = useScrollReveal()
  const [isRecycled, setIsRecycled] = useState(false)
  const [animating, setAnimating] = useState(false)
  const prevModeRef = useRef(isRecycled)

  const handleToggle = () => {
    if (animating) return
    setAnimating(true)
    prevModeRef.current = isRecycled
    setIsRecycled(prev => !prev)
    setTimeout(() => setAnimating(false), 700)
  }

  return (
    <section className="comparator section" ref={ref}>
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="comp__header reveal">
          <span className="tag">
            <span className="tag__dot" />
            {comparatorContent.tag}
          </span>
          <h2 className="comp__title">{comparatorContent.title}</h2>
          <p className="comp__subtitle">
            Compará las características de nuestras dos líneas de producto y descubrí cuál se adapta mejor a tu operación.
          </p>
        </div>

        {/* ── Toggle Switch ───────────────────────────────── */}
        <div className="comp__toggle-wrap reveal delay-1">
          <button
            className={`comp__toggle ${isRecycled ? 'comp__toggle--recycled' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle between virgin and recycled material"
          >
            <span className="comp__toggle-bg" />
            <span className="comp__toggle-label comp__toggle-label--left">
              <span className="comp__toggle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </span>
              Virgen
            </span>
            <span className="comp__toggle-label comp__toggle-label--right">
              <span className="comp__toggle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              </span>
              Reciclado
            </span>
            <span className="comp__toggle-thumb" />
          </button>
        </div>

        {/* ── Mode Badge ──────────────────────────────────── */}
        <div className="comp__mode-badge reveal delay-1">
          <div className={`comp__mode-dot ${isRecycled ? 'comp__mode-dot--green' : 'comp__mode-dot--blue'}`} />
          <span className="comp__mode-text mono">
            {isRecycled ? 'MATERIAL RECICLADO' : 'MATERIAL VIRGEN'}
          </span>
        </div>

        {/* ── Metrics Grid ────────────────────────────────── */}
        <div className="comp__grid reveal delay-2">
          {comparatorContent.rows.map((row, i) => {
            const value    = isRecycled ? row.recycled : row.virgin
            const pct      = isRecycled ? row.recycledPct : row.virginPct
            const prevPct  = isRecycled ? row.virginPct : row.recycledPct

            return (
              <div
                key={row.feature}
                className={`comp__card ${animating ? 'comp__card--flip' : ''}`}
                style={{ '--delay': `${i * 0.08}s`, '--bar-pct': `${pct}%`, '--bar-prev': `${prevPct}%` }}
              >
                {/* Top: Feature Icon + Name */}
                <div className="comp__card-top">
                  <div className={`comp__card-icon ${isRecycled ? 'comp__card-icon--green' : 'comp__card-icon--blue'}`}>
                    {FEATURE_ICONS[row.feature]}
                  </div>
                  <span className="comp__card-feature">{row.feature}</span>
                </div>

                {/* Middle: Big animated value */}
                <div className="comp__card-value-wrap">
                  <div className={`comp__card-roller ${animating ? 'comp__card-roller--spin' : ''}`}>
                    <span className="comp__card-value">{value}</span>
                  </div>
                </div>

                {/* Bottom: Progress bar */}
                <div className="comp__card-bar-track">
                  <div
                    className={`comp__card-bar-fill ${isRecycled ? 'comp__card-bar-fill--green' : 'comp__card-bar-fill--blue'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Percentage label */}
                <div className="comp__card-pct mono">
                  <span className={`comp__card-pct-num ${animating ? 'comp__card-pct-num--count' : ''}`}>
                    {pct}
                  </span>%
                </div>
              </div>
            )
          })}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="comp__cta-wrap reveal delay-3">
          <a className="comp__cta" href="/contacto">
            <span>{comparatorContent.cta}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
