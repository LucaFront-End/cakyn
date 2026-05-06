import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { contactContent } from '../data/content'
import './ContactPage.css'

export default function ContactPage() {
  const ref = useScrollReveal()
  const [formState, setFormState] = useState({
    name: '', company: '', phone: '', email: '', materialType: '', volume: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div ref={ref}>
      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <div className="container">
          <div className="tag reveal">{contactContent.tag}</div>
          <h1 className="reveal reveal-delay-1">{contactContent.title}</h1>
          <p className="contact-hero__sub reveal reveal-delay-2">{contactContent.subtitle}</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <form className="contact-form glass-card reveal" onSubmit={handleSubmit}>
            <div className="contact-form__grid">
              <div className="form-group">
                <label htmlFor="contact-name">Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
                <span className="form-group__line" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-company">Empresa</label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  required
                />
                <span className="form-group__line" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Teléfono</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+52 (55) 0000 0000"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
                <span className="form-group__line" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="correo@empresa.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
                <span className="form-group__line" />
              </div>
            </div>

            <div className="form-group">
              <label>Tipo de material</label>
              <div className="material-chips">
                {contactContent.materialTypes.map((mat, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`material-chip ${formState.materialType === mat ? 'material-chip--active' : ''}`}
                    onClick={() => setFormState({ ...formState, materialType: mat })}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-volume">Volumen requerido</label>
              <input
                id="contact-volume"
                type="text"
                placeholder="Ej: 5 toneladas mensuales"
                value={formState.volume}
                onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
              />
              <span className="form-group__line" />
            </div>

            <button
              type="submit"
              className={`btn btn--primary btn--glow contact-form__submit ${submitted ? 'contact-form__submit--success' : ''}`}
            >
              {submitted ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Enviado
                </>
              ) : (
                <>
                  Recibir cotización
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
