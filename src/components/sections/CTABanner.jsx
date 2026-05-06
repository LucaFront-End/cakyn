import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './CTABanner.css'

export default function CTABanner() {
  const ref = useScrollReveal()

  return (
    <section className="cta-banner" ref={ref}>
      {/* Background photo */}
      <div className="cta-banner__bg" />
      <div className="cta-banner__overlay" />

      <div className="container cta-banner__inner">
        <div className="cta-banner__text reveal">
          <span className="tag tag--dark">
            <span className="tag__dot" style={{ background: 'var(--accent)' }} />
            Empieza hoy
          </span>
          <h2 className="cta-banner__title">
            Optimiza tu operación<br />
            con la materia prima<br />
            <span className="cta-banner__highlight">correcta.</span>
          </h2>
          <p className="cta-banner__desc">
            Cotización personalizada en menos de 24 horas. Asesoría técnica especializada sin costo.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contacto" className="btn btn--accent btn--lg">
              Solicitar cotización
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/productos" className="btn btn--outline-light btn--lg">
              Ver catálogo
            </Link>
          </div>
        </div>

        <div className="cta-banner__stats reveal delay-2">
          <div className="cta-banner__stat">
            <div className="cta-banner__stat-num">500+</div>
            <div className="cta-banner__stat-lbl">Toneladas / mes</div>
          </div>
          <div className="cta-banner__stat">
            <div className="cta-banner__stat-num">15+</div>
            <div className="cta-banner__stat-lbl">Años de experiencia</div>
          </div>
          <div className="cta-banner__stat">
            <div className="cta-banner__stat-num">200+</div>
            <div className="cta-banner__stat-lbl">Clientes activos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
