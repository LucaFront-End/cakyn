import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Clock, Phone, Mail, MapPin, Check, Send } from 'lucide-react'
import { contactContent, siteConfig } from '../data/content'
import './ContactPage.css'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const pageRef = useRef(null)
  const [formState, setFormState] = useState({
    name: '', company: '', phone: '', email: '', materialType: '', volume: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ct-hero__title', { y: 60, opacity: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 })
      gsap.from('.ct-hero__sub', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 })
      gsap.from('.ct-hero__tag', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.ct-hero__badge', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(2)', delay: 0.8 })

      gsap.from('.ct-form', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-body', start: 'top 80%' },
      })

      gsap.from('.ct-info__card', {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-info', start: 'top 80%' },
      })

      gsap.from('.ct-trust__item', {
        y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-trust', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const update = (field) => (e) => setFormState({ ...formState, [field]: e.target.value })

  const filledFields = Object.values(formState).filter(v => v.length > 0).length
  const totalFields = 7
  const progress = Math.round((filledFields / totalFields) * 100)

  return (
    <div className="ct-page" ref={pageRef}>

      {/* ═══ HERO (Light) ═══ */}
      <section className="ct-hero">
        <div className="ct-hero__grid" />
        <div className="ct-hero__glow" />
        <div className="container ct-hero__content">
          <span className="tag ct-hero__tag">
            <span className="tag__dot" />
            {contactContent.tag}
          </span>
          <h1 className="ct-hero__title">
            Solicita tu<br />
            <span className="text-accent">cotización.</span>
          </h1>
          <p className="ct-hero__sub">{contactContent.subtitle}</p>
          <div className="ct-hero__badge">
            <Zap size={18} />
            <span className="mono">Respuesta en &lt;24h</span>
          </div>
        </div>
      </section>

      {/* ═══ FORM + INFO ═══ */}
      <section className="ct-body">
        <div className="container">
          <div className="ct-split">

            {/* Left: Form */}
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form__header">
                <div>
                  <h2 className="ct-form__title">Datos del proyecto</h2>
                  <p className="ct-form__hint mono">Campos con * son requeridos</p>
                </div>
                <div className="ct-progress">
                  <div className="ct-progress__bar">
                    <div className="ct-progress__fill" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="ct-progress__text mono">{progress}%</span>
                </div>
              </div>

              <div className="ct-form__grid">
                {[
                  { id: 'name', label: 'Nombre *', type: 'text', ph: 'Tu nombre completo', req: true },
                  { id: 'company', label: 'Empresa *', type: 'text', ph: 'Nombre de tu empresa', req: true },
                  { id: 'phone', label: 'Teléfono', type: 'tel', ph: '+52 (55) 0000 0000' },
                  { id: 'email', label: 'Email *', type: 'email', ph: 'correo@empresa.com', req: true },
                ].map(f => (
                  <div key={f.id} className={`ct-field ${focusedField === f.id ? 'ct-field--focused' : ''}`}>
                    <label htmlFor={`ct-${f.id}`} className="ct-field__label mono">{f.label}</label>
                    <input
                      id={`ct-${f.id}`}
                      type={f.type}
                      placeholder={f.ph}
                      value={formState[f.id]}
                      onChange={update(f.id)}
                      onFocus={() => setFocusedField(f.id)}
                      onBlur={() => setFocusedField(null)}
                      required={f.req}
                    />
                    <span className="ct-field__line" />
                    {formState[f.id] && <div className="ct-field__check"><Check size={16} /></div>}
                  </div>
                ))}
              </div>

              <div className="ct-field">
                <label className="ct-field__label mono">Tipo de material</label>
                <div className="ct-chips">
                  {contactContent.materialTypes.map((mat, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`ct-chip ${formState.materialType === mat ? 'ct-chip--active' : ''}`}
                      onClick={() => setFormState({ ...formState, materialType: mat })}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="ct-form__grid">
                <div className="ct-field">
                  <label htmlFor="ct-volume" className="ct-field__label mono">Volumen requerido</label>
                  <input id="ct-volume" type="text" placeholder="Ej: 5 toneladas mensuales" value={formState.volume} onChange={update('volume')} onFocus={() => setFocusedField('volume')} onBlur={() => setFocusedField(null)} />
                  <span className="ct-field__line" />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-message" className="ct-field__label mono">Comentarios</label>
                  <input id="ct-message" type="text" placeholder="Información adicional" value={formState.message} onChange={update('message')} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} />
                  <span className="ct-field__line" />
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn--primary btn--glow ct-submit ${submitted ? 'ct-submit--ok' : ''}`}
              >
                {submitted ? (
                  <>
                    <Check size={18} strokeWidth={3} />
                    Enviado correctamente
                  </>
                ) : (
                  <>
                    Recibir cotización
                    <Send size={16} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </form>

            {/* Right: Info cards */}
            <div className="ct-info">
              <div className="ct-info__card ct-info__card--highlight">
                <div className="ct-info__card-glow" />
                <Clock className="ct-info__icon" />
                <h4 className="ct-info__title">Respuesta garantizada</h4>
                <p className="ct-info__text">Recibirás tu cotización personalizada en menos de 24 horas hábiles.</p>
              </div>
              <div className="ct-info__card">
                <Phone className="ct-info__icon" />
                <h4 className="ct-info__title">Teléfono</h4>
                <p className="ct-info__text mono">{siteConfig.phone}</p>
              </div>
              <div className="ct-info__card">
                <Mail className="ct-info__icon" />
                <h4 className="ct-info__title">Email</h4>
                <p className="ct-info__text mono">{siteConfig.email}</p>
              </div>
              <div className="ct-info__card">
                <MapPin className="ct-info__icon" />
                <h4 className="ct-info__title">Ubicación</h4>
                <p className="ct-info__text mono">{siteConfig.address}</p>
              </div>

              <div className="ct-trust">
                <span className="ct-trust__label mono">Confían en nosotros</span>
                {[
                  '+200 clientes industriales',
                  '15 años de operación continua',
                  'Control de calidad por lote',
                  'Entrega a todo México',
                ].map((item, i) => (
                  <div key={i} className="ct-trust__item">
                    <Check size={14} className="ct-trust__check" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
