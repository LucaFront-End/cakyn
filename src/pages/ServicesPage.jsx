import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Factory, Recycle, Inbox, Settings, TestTube,
  ArrowRight, Check, Zap, Truck, FileText 
} from 'lucide-react'
import { servicesContent } from '../data/content'
import SEOHead from '../components/SEOHead'
import CTABanner from '../components/sections/CTABanner'
import './ServicesPage.css'

gsap.registerPlugin(ScrollTrigger)

const IconMap = {
  Factory: <Factory strokeWidth={1.5} />,
  Recycle: <Recycle strokeWidth={1.5} />,
  Inbox: <Inbox strokeWidth={1.5} />,
  Settings: <Settings strokeWidth={1.5} />,
  TestTube: <TestTube strokeWidth={1.5} />,
}

export default function ServicesPage() {
  const pageRef = useRef(null)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sv-hero__title', { y: 60, opacity: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 })
      gsap.from('.sv-hero__sub', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 })
      gsap.from('.sv-hero__tag', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })

      gsap.from('.sv-tab', {
        x: -30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.sv-explorer', start: 'top 70%' },
      })

      gsap.from('.sv-detail', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sv-explorer', start: 'top 70%' },
      })

      gsap.from('.sv-feat__card', {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sv-feat', start: 'top 70%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const current = servicesContent.services[activeService]

  return (
    <div className="sv-page" ref={pageRef}>

      <SEOHead
        title="Servicios de Reciclaje y Suministro de Polímeros | Cakin"
        description="Servicios industriales de reciclaje, procesamiento y suministro de resinas plásticas en México. Soluciones eficientes para la industria manufacturera."
      />

      {/* ═══ HERO (Light) ═══ */}
      <section className="sv-hero">
        <div className="sv-hero__grid" />
        <div className="sv-hero__glow" />
        <div className="container sv-hero__content">
          <span className="tag sv-hero__tag">
            <span className="tag__dot" />
            {servicesContent.tag}
          </span>
          <h1 className="sv-hero__title">
            {servicesContent.heroHeadline.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-accent">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="sv-hero__sub">{servicesContent.heroSub}</p>
        </div>
      </section>

      {/* ═══ SERVICE EXPLORER ═══ */}
      <section className="sv-explorer">
        <div className="container">
          <div className="sv-explorer__header">
            <h2 className="sv-explorer__heading">
              Explora nuestros <span className="text-accent">servicios</span>
            </h2>
          </div>

          <div className="sv-explorer__split">
            {/* Left: Tabs */}
            <div className="sv-tabs">
              {servicesContent.services.map((svc, i) => (
                <button
                  key={i}
                  className={`sv-tab ${activeService === i ? 'sv-tab--active' : ''}`}
                  onClick={() => setActiveService(i)}
                  onMouseEnter={() => setActiveService(i)}
                >
                  <div className="sv-tab__indicator" />
                  <span className="sv-tab__num mono">{String(i + 1).padStart(2, '0')}</span>
                  <div className="sv-tab__icon">{IconMap[svc.icon]}</div>
                  <span className="sv-tab__title">{svc.title}</span>
                  <ArrowRight className="sv-tab__arrow" size={20} />
                </button>
              ))}
            </div>

            {/* Right: Detail Panel */}
            <div className="sv-detail" key={activeService}>
              <div className="sv-detail__head">
                <div className="sv-detail__icon">{IconMap[current.icon]}</div>
                <div>
                  <span className="sv-detail__num mono">
                    {String(activeService + 1).padStart(2, '0')} / {String(servicesContent.services.length).padStart(2, '0')}
                  </span>
                  <h3 className="sv-detail__title">{current.title}</h3>
                </div>
              </div>

              <p className="sv-detail__desc">{current.description}</p>

              {current.features && (
                <div className="sv-detail__features">
                  <span className="sv-detail__features-label mono">Incluye en el servicio</span>
                  <ul className="sv-detail__feat-list">
                    {current.features.map((f, fi) => (
                      <li key={fi} className="sv-detail__feat">
                        <div className="sv-detail__feat-check">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a href="/contacto" className="btn btn--primary btn--glow sv-detail__cta">
                Cotizar requerimiento
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES GRID (Dark) ═══ */}
      <section className="sv-feat">
        <div className="container">
          <div className="sv-feat__header">
            <span className="tag tag--light"><span className="tag__dot" />Diferencial</span>
            <h2 className="sv-feat__heading">
              Por qué somos tu mejor <span className="text-accent">socio</span>
            </h2>
          </div>

          <div className="sv-feat__grid">
            {[
              { icon: <Zap strokeWidth={1.5} size={36}/>, title: 'Respuesta en 24h', desc: 'Cotizaciones personalizadas en menos de un día hábil.' },
              { icon: <TestTube strokeWidth={1.5} size={36}/>, title: 'Laboratorio propio', desc: 'Control de MFI, densidad y pruebas mecánicas en cada lote.' },
              { icon: <Truck strokeWidth={1.5} size={36}/>, title: 'Logística flexible', desc: 'Entregas programadas a todo México con seguimiento continuo.' },
              { icon: <FileText strokeWidth={1.5} size={36}/>, title: 'Fichas técnicas', desc: 'Documentación técnica completa de cada material que entregamos.' },
            ].map((item, i) => (
              <div key={i} className="sv-feat__card">
                <div className="sv-feat__icon">{item.icon}</div>
                <h3 className="sv-feat__title">{item.title}</h3>
                <p className="sv-feat__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
