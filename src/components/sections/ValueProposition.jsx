import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { valueProps } from '../../data/content'
import './ValueProposition.css'

// Clean SVG icons
const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01" strokeLinecap="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
]

// Extra expanded content per card
const EXPANDED = [
  { stat: '500+', statLabel: 'ton / mes', detail: 'Red de distribución nacional con inventario garantizado.' },
  { stat: '35%', statLabel: 'ahorro', detail: 'Resinas recicladas certificadas a fracción del costo virgen.' },
  { stat: '4', statLabel: 'procesos', detail: 'Inyección, extrusión, soplado y rotomoldeo cubiertos.' },
  { stat: '24h', statLabel: 'respuesta', detail: 'Cotización técnica personalizada en un día hábil.' },
  { stat: '1–500', statLabel: 'ton', detail: 'Ajustamos cada pedido a tus ciclos de producción.' },
  { stat: '♻', statLabel: 'circular', detail: 'Cada kg reciclado evita emisiones y residuos de relleno.' },
]

export default function ValueProposition() {
  const ref = useScrollReveal()
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="vp section" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="vp__header reveal">
          <div className="vp__header-left">
            <span className="tag">
              <span className="tag__dot" />
              {valueProps.tag}
            </span>
            <h2 className="vp__title">
              Ventajas<br/>Competitivas.
            </h2>
          </div>
          <div className="vp__header-right">
            <p className="vp__subtitle">
              Suministramos materia prima confiable para que tu línea de producción nunca se detenga.
              Calidad constante, optimización de costos y flexibilidad.
            </p>
          </div>
        </div>

        {/* Bento Accordion Grid */}
        <div className="vp__bento reveal delay-1">
          {valueProps.items.map((item, i) => {
            const isOpen = expanded === i
            return (
              <div
                key={i}
                className={`bento ${getBentoSize(i)} ${isOpen ? 'bento--open' : ''} ${expanded !== null && !isOpen ? 'bento--dim' : ''}`}
                onMouseEnter={() => setExpanded(i)}
                onMouseLeave={() => setExpanded(null)}
              >
                {/* Glow */}
                <div className="bento__glow" />

                <div className="bento__inner">

                  {/* Top row: icon + number */}
                  <div className="bento__top">
                    <div className={`bento__icon ${i === 0 ? 'bento__icon--accent' : ''}`}>
                      {ICONS[i]}
                    </div>
                    <span className="bento__num mono">0{i + 1}</span>
                  </div>

                  {/* Title — always visible */}
                  <h4 className="bento__title">{item.title}</h4>

                  {/* Description — always visible */}
                  <p className="bento__desc">{item.description}</p>

                  {/* Expanded Content — slides in on hover */}
                  <div className="bento__expand">
                    <div className="bento__expand-inner">
                      <div className="bento__stat">
                        <span className="bento__stat-value">{EXPANDED[i].stat}</span>
                        <span className="bento__stat-label mono">{EXPANDED[i].statLabel}</span>
                      </div>
                      <p className="bento__detail">{EXPANDED[i].detail}</p>
                      <span className="bento__cta-hint">
                        Saber más →
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function getBentoSize(index) {
  switch(index) {
    case 0: return 'bento--hero'    // 2×2 top-left
    case 1: return 'bento--wide'    // 2×1 top-right
    case 2: return 'bento--tall'    // 1×2 right
    case 3: return 'bento--std'     // 1×1
    case 4: return 'bento--wide-b'  // 2×1 bottom
    case 5: return 'bento--std'     // 1×1
    default: return 'bento--std'
  }
}
