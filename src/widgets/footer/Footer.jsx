import Container from '../../shared/ui/Container/Container';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import Button from '../../shared/ui/Button/Button';
import './Footer.css';

const Footer = ({
  id = 'footer',
  name = 'Илья Некрасов',
  tagline = 'Frontend • UI/UX • Perf',
  telegram = 'https://t.me/nksv_ilya',
  email = 'evart2006@gmail.com',
}) => {
  const year = new Date().getFullYear();
  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#projects', label: 'Projects' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <footer id={id} role="contentinfo" className="footer section">
      <Container size="xl">
        <div className="footer__panel">
          <div className="footer__brand-block">
            <strong className="footer__brand">{name}</strong>
            <div className="footer__tagline">{tagline}</div>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </nav>

          <div className="footer__contacts">
            <Button href={telegram} target="_blank" variant="primary" size="small" className="footer__cta">
              <img className="footer__cta-icon" src={tgIcon} alt="" aria-hidden />
              <span>Связаться со мной</span>
            </Button>
            <a className="footer__text-link" href={`mailto:${email}`}>Email</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {year} • Сделано с вниманием к деталям</span>
          <a className="footer__top" href="#top" aria-label="Back to top">Наверх ↑</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
