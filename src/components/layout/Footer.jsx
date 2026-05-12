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
              <img
                src="/images/logo-color.png"
                alt={siteConfig.brandShort}
                className="footer__logo-img"
              />
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
