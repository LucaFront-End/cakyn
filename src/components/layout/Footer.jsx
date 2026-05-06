import { Link } from 'react-router-dom'
import { siteConfig, navLinks } from '../../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="20" cy="20" r="4" fill="currentColor" />
              </svg>
              <span>{siteConfig.brandShort}</span>
            </div>
            <p className="footer__tagline">{siteConfig.tagline}</p>
            <p className="footer__legal">{siteConfig.companyName}</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            {navLinks.slice(0, 4).map((link) => (
              <Link key={link.path} to={link.path} className="footer__link">{link.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Empresa</h4>
            {navLinks.slice(4).map((link) => (
              <Link key={link.path} to={link.path} className="footer__link">{link.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <a href={`mailto:${siteConfig.email}`} className="footer__link">{siteConfig.email}</a>
            <p className="footer__link">{siteConfig.address}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="section-divider" />
          <div className="footer__bottom-inner">
            <p>© {new Date().getFullYear()} {siteConfig.brandShort}. Todos los derechos reservados.</p>
            <div className="footer__bottom-links">
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
