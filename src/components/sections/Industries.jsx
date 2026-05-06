import { useState, useRef, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { industriesContent } from '../../data/content'
import './Industries.css'

const SECTOR_IMAGES = [
  '/images/injection.jpg',  // reusing existing high-q images as placeholders
  '/images/extrusion.jpg',
  '/images/recycling.jpg',
  '/images/injection.jpg',
  '/images/extrusion.jpg'
]

export default function Industries() {
  const ref = useScrollReveal()
  const [activeIdx, setActiveIdx] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const imageRefs = useRef([])

  // Pre-load images
  useEffect(() => {
    SECTOR_IMAGES.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <section className="industries section" ref={ref}>
      <div className="container">
        
        {/* Header */}
        <div className="industries__header reveal">
          <div className="industries__header-left">
            <span className="tag">
              <span className="tag__dot" />
              {industriesContent.tag}
            </span>
            <h2 className="industries__title">
              Sectores que<br/>
              <span className="industries__accent">atendemos.</span>
            </h2>
          </div>
          <div className="industries__header-right">
            <p className="industries__subtitle">
              {industriesContent.subtitle}
            </p>
          </div>
        </div>

        {/* Interactive Split Layout */}
        <div 
          className="industries__split"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Left: Huge Interactive Accordion List */}
          <div className="industries__list">
            {industriesContent.sectors.map((sector, i) => {
              const isActive = activeIdx === i
              return (
                <div 
                  key={sector.id} 
                  className={`ind-row ${isActive ? 'ind-row--active' : ''}`}
                  onMouseEnter={() => setActiveIdx(i)}
                >
                  <div className="ind-row__line" />
                  
                  <div className="ind-row__header">
                    <span className="ind-row__num mono">0{i + 1}</span>
                    <h3 className="ind-row__name">{sector.title}</h3>
                    <div className="ind-row__icon">
                      {isActive ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/></svg> // Minus
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg> // Plus
                      )}
                    </div>
                  </div>

                  <div className="ind-row__content-wrapper">
                    <div className="ind-row__content">
                      <p className="ind-row__desc">{sector.description}</p>
                      <a href="/contacto" className="ind-row__btn">
                        Solicitar información
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="ind-row__line" /> {/* Final bottom line */}
          </div>

          {/* Right: Sticky Image Portal */}
          <div className="industries__visual">
            <div className="ind-portal">
              {industriesContent.sectors.map((_, i) => (
                <div 
                  key={i}
                  ref={el => imageRefs.current[i] = el}
                  className={`ind-portal__img ${activeIdx === i ? 'ind-portal__img--active' : ''}`}
                  style={{ backgroundImage: `url(${SECTOR_IMAGES[i]})` }}
                />
              ))}
              
              {/* Optional overlay interaction state */}
              <div className={`ind-portal__overlay ${isHovering ? 'ind-portal__overlay--hover' : ''}`} />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
