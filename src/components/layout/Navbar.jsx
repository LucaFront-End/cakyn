import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, siteConfig } from '../../data/content'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(v => {
      document.body.style.overflow = v ? '' : 'hidden'
      return !v
    })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container--wide">
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo-mark">
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M12 2L20 6V12L12 16L4 12V6L12 2Z" fill="currentColor" />
              <path d="M12 10L16 8L12 6L8 8L12 10Z" fill="white" opacity="0.5" />
            </svg>
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">{siteConfig.brandShort}</span>
            <span className="navbar__brand-sub">Industrial</span>
          </div>
        </Link>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn btn--accent navbar__cta">
            Cotizar ahora
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
