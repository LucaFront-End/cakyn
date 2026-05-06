import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { heroContent } from '../../data/content'
import './Hero.css'

const titleLine1 = ['Materia', 'Prima']
const titleLine2 = ['Industrial']

export default function Hero() {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)
  const subtitleRef = useRef(null)
  const actionsRef  = useRef(null)
  const statsRef    = useRef(null)
  const imageRef    = useRef(null)
  const badge1Ref   = useRef(null)
  const badge2Ref   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.2 })

      // Eyebrow pill
      tl.from(eyebrowRef.current, {
        y: -20, opacity: 0, duration: 0.6, ease: 'power3.out'
      })

      // Title lines word by word
      tl.from(line1Ref.current.querySelectorAll('.hero-word'), {
        y: '110%', opacity: 0, duration: 0.9, stagger: 0.07
      }, '-=0.2')

      tl.from(line2Ref.current.querySelectorAll('.hero-word'), {
        y: '110%', opacity: 0, duration: 0.9, stagger: 0.08
      }, '-=0.65')

      // Subtitle + actions
      tl.from(subtitleRef.current, {
        y: 24, opacity: 0, duration: 0.7, ease: 'power3.out'
      }, '-=0.5')

      tl.from(actionsRef.current.children, {
        y: 18, opacity: 0, duration: 0.5, stagger: 0.1
      }, '-=0.4')

      // Stats
      tl.from(statsRef.current.children, {
        x: -24, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out'
      }, '-=0.35')

      // Image
      tl.from(imageRef.current, {
        x: 60, opacity: 0, duration: 1.0, ease: 'power3.out'
      }, 0.15)

      // Float badges
      tl.from([badge1Ref.current, badge2Ref.current], {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out'
      }, '-=0.5')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      {/* Watermark */}
      <div className="hero__watermark" aria-hidden="true">CAKYN</div>

      {/* Subtle grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        {/* LEFT — Text */}
        <div className="hero__left">
          {/* Eyebrow */}
          <div className="hero__eyebrow" ref={eyebrowRef}>
            <span className="hero__eyebrow-dot" />
            <span className="t-label" style={{ color: 'var(--accent)' }}>
              {heroContent.tag}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero__title" aria-label="Materia Prima Industrial para México">
            <span ref={line1Ref} className="hero__title-line">
              {titleLine1.map((w) => (
                <span key={w} className="hero-word-wrap">
                  <span className="hero-word hero__title-main">{w}</span>
                </span>
              ))}
            </span>
            <span ref={line2Ref} className="hero__title-line">
              {titleLine2.map((w) => (
                <span key={w} className="hero-word-wrap">
                  <span className="hero-word hero__title-em">{w}</span>
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle" ref={subtitleRef}>
            {heroContent.subtitle}
          </p>

          {/* Actions */}
          <div className="hero__actions" ref={actionsRef}>
            <Link to="/contacto" className="btn btn--accent btn--lg">
              {heroContent.ctaPrimary}
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/productos" className="btn btn--outline btn--lg">
              {heroContent.ctaSecondary}
            </Link>
          </div>

          {/* Stats */}
          <div className="hero__stats" ref={statsRef}>
            {heroContent.stats.map((stat, i) => (
              <div className="hero__stat" key={i}>
                <div className="hero__stat-num">{stat.value}{stat.suffix}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="hero__right" ref={imageRef}>
          <div className="hero__img-wrap">
            <img
              src="/images/hero-factory.jpg"
              alt="Planta industrial de CAKYN — procesamiento de resinas plásticas"
              className="hero__img"
              loading="eager"
            />
            <div className="hero__img-overlay" />
          </div>

          {/* Float badge 1 */}
          <div className="hero__float-card hero__float-card--1" ref={badge1Ref}>
            <div className="hero__float-icon">♻️</div>
            <div>
              <div className="hero__float-val">1,200 T</div>
              <div className="hero__float-lbl">recicladas / año</div>
            </div>
          </div>

          {/* Float badge 2 */}
          <div className="hero__float-card hero__float-card--2" ref={badge2Ref}>
            <div className="hero__float-icon">✅</div>
            <div>
              <div className="hero__float-val">Certificado</div>
              <div className="hero__float-lbl">Calidad garantizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  )
}
