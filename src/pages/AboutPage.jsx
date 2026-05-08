import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Handshake, Recycle, Lightbulb } from 'lucide-react'
import { aboutContent } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import SEOHead from '../components/SEOHead'
import CTABanner from '../components/sections/CTABanner'
import './AboutPage.css'

gsap.registerPlugin(ScrollTrigger)

const IconMap = {
  Star: <Star strokeWidth={1.5} />,
  Handshake: <Handshake strokeWidth={1.5} />,
  Recycle: <Recycle strokeWidth={1.5} />,
  Lightbulb: <Lightbulb strokeWidth={1.5} />
}

/* ─── Animated Counter Cell ──────────────────── */
function CapStat({ stat, triggered }) {
  const { count } = useCountUp(stat.value, 2000, triggered)
  return (
    <div className="ab-cap__cell">
      <div className="ab-cap__val-row">
        <span className="ab-cap__val">{count}</span>
        <span className="ab-cap__suffix">{stat.suffix}</span>
      </div>
      <span className="ab-cap__label">{stat.label}</span>
      <span className="ab-cap__detail mono">{stat.detail}</span>
    </div>
  )
}

/* ─── Timeline Node ──────────────────────────── */
function TimelineNode({ item, index, isActive }) {
  return (
    <div className={`ab-tl__node ${isActive ? 'ab-tl__node--active' : ''}`}>
      <div className="ab-tl__marker">
        <div className="ab-tl__dot" />
        <div className="ab-tl__pulse" />
      </div>
      <div className="ab-tl__content">
        <span className="ab-tl__year mono">{item.year}</span>
        <h3 className="ab-tl__title">{item.title}</h3>
        <p className="ab-tl__desc">{item.desc}</p>
      </div>
      {item.img && (
        <div className="ab-tl__img-wrap">
          <img src={item.img} alt={item.title} className="ab-tl__img" loading="lazy" />
        </div>
      )}
    </div>
  )
}

export default function AboutPage() {
  const pageRef = useRef(null)
  const heroRef = useRef(null)
  const capRef = useRef(null)
  const tlRef = useRef(null)
  const [capTriggered, setCapTriggered] = useState(false)
  const [activeTl, setActiveTl] = useState(-1)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Hero parallax & reveal ── */
      gsap.from('.ab-hero__title', {
        y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.2,
      })
      gsap.from('.ab-hero__sub', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5,
      })
      gsap.from('.ab-hero__tag', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1,
      })

      /* ── Hero grid parallax on scroll ── */
      gsap.to('.ab-hero__grid', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.ab-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      /* ── Capacity stats trigger ── */
      ScrollTrigger.create({
        trigger: '.ab-cap',
        start: 'top 75%',
        once: true,
        onEnter: () => setCapTriggered(true),
      })

      /* ── Capacity cards stagger ── */
      gsap.from('.ab-cap__cell', {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ab-cap',
          start: 'top 75%',
        },
      })

      /* ── Timeline: activate nodes on scroll ── */
      const nodes = gsap.utils.toArray('.ab-tl__node')
      nodes.forEach((node, i) => {
        ScrollTrigger.create({
          trigger: node,
          start: 'top 65%',
          onEnter: () => setActiveTl(i),
          onLeaveBack: () => setActiveTl(i - 1),
        })
      })

      /* ── Timeline track fill ── */
      gsap.to('.ab-tl__track-fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.ab-tl',
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 0.5,
        },
      })

      /* ── Mission / Vision cards ── */
      gsap.from('.ab-mv__card', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ab-mv',
          start: 'top 70%',
        },
      })

      /* ── Values cards stagger ── */
      gsap.from('.ab-vals__card', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ab-vals',
          start: 'top 70%',
        },
      })

    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="ab-page" ref={pageRef}>

      <SEOHead
        title="Sobre Desperdicios Industriales Cakin | Expertos en Polímeros"
        description="Empresa mexicana especializada en reciclaje industrial y distribución de polímeros en México. Comprometidos con calidad, sustentabilidad y eficiencia."
      />

      {/* ═══════════════════════════════════════════
          SECTION 1: Cinematic Hero
          ═══════════════════════════════════════════ */}
      <section className="ab-hero" ref={heroRef}>
        {/* Background layers */}
        <div className="ab-hero__grid" />
        <div className="ab-hero__glow" />
        <div className="ab-hero__vignette" />

        <div className="container ab-hero__content">
          <span className="tag ab-hero__tag">
            <span className="tag__dot" />
            {aboutContent.tag}
          </span>

          <h1 className="ab-hero__title">
            {aboutContent.heroHeadline.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-accent">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          <p className="ab-hero__sub">{aboutContent.heroSub}</p>
        </div>

        {/* Capacity Dashboard — sits at the bottom of the hero */}
        <div className="ab-cap" ref={capRef}>
          <div className="container">
            <div className="ab-cap__grid">
              {aboutContent.capacity.map((s, i) => (
                <CapStat key={i} stat={s} triggered={capTriggered} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: Interactive Timeline
          ═══════════════════════════════════════════ */}
      <section className="ab-tl" ref={tlRef}>
        <div className="container">
          <div className="ab-tl__header">
            <span className="tag">
              <span className="tag__dot" />
              Evolución
            </span>
            <h2 className="ab-tl__heading">
              15 años construyendo <span className="text-accent">industria</span>
            </h2>
            <p className="ab-tl__intro">
              Cada paso de nuestra historia refleja un compromiso por crecer junto a nuestros clientes,
              ampliando capacidades y elevando estándares en cada etapa.
            </p>
          </div>

          <div className="ab-tl__body">
            {/* Vertical Track */}
            <div className="ab-tl__track">
              <div className="ab-tl__track-bg" />
              <div className="ab-tl__track-fill" />
            </div>

            {/* Nodes */}
            <div className="ab-tl__nodes">
              {aboutContent.timeline.map((item, i) => (
                <TimelineNode
                  key={i}
                  item={item}
                  index={i}
                  isActive={i <= activeTl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: Mission / Vision — Dark Split
          ═══════════════════════════════════════════ */}
      <section className="ab-mv">
        <div className="container">
          <div className="ab-mv__header">
            <span className="tag tag--light">
              <span className="tag__dot" />
              Propósito
            </span>
            <h2 className="ab-mv__heading">
              Lo que nos <span className="text-accent">mueve</span>
            </h2>
          </div>

          <div className="ab-mv__grid">
            {/* Mission */}
            <div className="ab-mv__card ab-mv__card--mission">
              <div className="ab-mv__card-line" />
              <span className="ab-mv__label mono">01 — {aboutContent.mission.title}</span>
              <p className="ab-mv__text">{aboutContent.mission.text}</p>
              <div className="ab-mv__accent-glow" />
            </div>

            {/* Vision */}
            <div className="ab-mv__card ab-mv__card--vision">
              <div className="ab-mv__card-line ab-mv__card-line--blue" />
              <span className="ab-mv__label mono">02 — {aboutContent.vision.title}</span>
              <p className="ab-mv__text">{aboutContent.vision.text}</p>
              <div className="ab-mv__accent-glow ab-mv__accent-glow--blue" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: Values — Industrial Grid
          ═══════════════════════════════════════════ */}
      <section className="ab-vals">
        <div className="container">
          <div className="ab-vals__header">
            <span className="tag">
              <span className="tag__dot" />
              ADN Industrial
            </span>
            <h2 className="ab-vals__heading">
              Los valores que definen <span className="text-accent">cada entrega</span>
            </h2>
            <p className="ab-vals__intro">
              Más que principios corporativos, son compromisos operativos que se reflejan
              en cada lote, cada asesoría y cada relación comercial.
            </p>
          </div>

          <div className="ab-vals__grid">
            {aboutContent.values.map((val, i) => (
              <div key={i} className="ab-vals__card">
                <span className="ab-vals__index mono">{String(i + 1).padStart(2, '0')}</span>
                <div className="ab-vals__icon">{IconMap[val.icon]}</div>
                <h3 className="ab-vals__title">{val.title}</h3>
                <p className="ab-vals__desc">{val.description}</p>
                <div className="ab-vals__border-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
