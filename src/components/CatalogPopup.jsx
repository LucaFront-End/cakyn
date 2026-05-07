import { useState, useEffect } from 'react'
import { X, BookOpen, Send, Check } from 'lucide-react'
import { siteConfig } from '../data/content'
import './CatalogPopup.css'

const ESTADOS = [
  'Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas',
  'Chihuahua','Ciudad de México','Coahuila','Colima','Durango','Estado de México',
  'Guanajuato','Guerrero','Hidalgo','Jalisco','Michoacán','Morelos','Nayarit',
  'Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí',
  'Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'
]

const DELAY_MS = 6000 // 6 seconds after page load

export default function CatalogPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', state: '' })

  // Auto-open after delay, only once per session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('catalog_dismissed')
    if (dismissed) return

    const timer = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setOpen(false)
    sessionStorage.setItem('catalog_dismissed', '1')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Solicitud de Catálogo — ${form.name}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nTeléfono: ${form.phone}\nCorreo: ${form.email}\nEstado: ${form.state}\n\nSolicito recibir el catálogo de productos de ${siteConfig.brandShort}.`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`

    setSubmitted(true)
    setTimeout(() => {
      close()
      setSubmitted(false)
      setForm({ name: '', phone: '', email: '', state: '' })
    }, 3000)
  }

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  if (!open) return null

  return (
    <div className="cpop-overlay" onClick={close}>
      <div className="cpop" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="cpop__close" onClick={close} aria-label="Cerrar">
          <X size={20} />
        </button>

        {/* Left visual strip */}
        <div className="cpop__visual">
          <div className="cpop__visual-grid" />
          <div className="cpop__visual-glow" />
          <BookOpen className="cpop__visual-icon" strokeWidth={1} />
          <span className="cpop__visual-label mono">CATÁLOGO 2025</span>
        </div>

        {/* Right form area */}
        <div className="cpop__body">
          {submitted ? (
            <div className="cpop__success">
              <div className="cpop__success-icon">
                <Check size={32} strokeWidth={2.5} />
              </div>
              <h3>¡Solicitud enviada!</h3>
              <p>Te enviaremos el catálogo a tu correo.</p>
            </div>
          ) : (
            <>
              <div className="cpop__header">
                <h3 className="cpop__title">Solicita nuestro catálogo</h3>
                <p className="cpop__desc">
                  Recibe nuestro catálogo completo de resinas vírgenes y recicladas directamente en tu correo.
                </p>
              </div>

              <form className="cpop__form" onSubmit={handleSubmit}>
                <div className="cpop__field">
                  <label htmlFor="cpop-name" className="cpop__label mono">Nombre *</label>
                  <input
                    id="cpop-name" type="text" required
                    placeholder="Tu nombre completo"
                    value={form.name} onChange={update('name')}
                  />
                </div>

                <div className="cpop__field">
                  <label htmlFor="cpop-phone" className="cpop__label mono">Teléfono *</label>
                  <input
                    id="cpop-phone" type="tel" required
                    placeholder="+52 (55) 0000 0000"
                    value={form.phone} onChange={update('phone')}
                  />
                </div>

                <div className="cpop__field">
                  <label htmlFor="cpop-email" className="cpop__label mono">Correo *</label>
                  <input
                    id="cpop-email" type="email" required
                    placeholder="correo@empresa.com"
                    value={form.email} onChange={update('email')}
                  />
                </div>

                <div className="cpop__field">
                  <label htmlFor="cpop-state" className="cpop__label mono">Estado de la República *</label>
                  <select
                    id="cpop-state" required
                    value={form.state} onChange={update('state')}
                  >
                    <option value="" disabled>Selecciona tu estado</option>
                    {ESTADOS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <button type="submit" className="btn btn--primary btn--glow cpop__submit">
                  Solicitar catálogo
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
