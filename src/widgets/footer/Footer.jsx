import Container from '../../shared/ui/Container/Container';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import './Footer.css';

const Footer = ({
  id = 'footer',
  name = 'Илья Некрасов',
  tagline = 'Frontend • UI/UX • Perf',
  telegram = 'https://t.me/',
  email = 'hello@example.com',
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
    <footer id={id} role="contentinfo" className="footer section section--panel section--bleed">
      <Container size="xl">
        <div className="footer__inner">
          <div className="footer__col footer__col--left">
            <strong className="footer__brand">{name}</strong>
            <div className="footer__tagline">{tagline}</div>
            <div className="footer__copy">© {year}</div>
          </div>

          <nav className="footer__col footer__col--center" aria-label="Footer">
            <ul className="footer__nav">
              {links.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer__col footer__col--right">
            <a className="btn btn--primary" href={telegram} target="_blank" rel="noreferrer">
              <img className="btn__icon" src={tgIcon} alt="" aria-hidden />
              <span className="btn__label">Telegram</span>
            </a>
            <a className="footer__email" href={`mailto:${email}`}>Email</a>
            <a className="footer__top" href="#top" aria-label="Back to top">↑ Back to top</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
