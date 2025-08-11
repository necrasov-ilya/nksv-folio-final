import { useEffect, useState } from 'react';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import Container from '../../shared/ui/Container/Container';
import './Header.css';

const Header = ({ ctaHref = 'https://t.me/', links = [] }) => {
  const navLinks = links.length
    ? links
    : [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#skills', label: 'Skills' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#projects', label: 'Projects' },
        { href: '#faq', label: 'FAQ' },
      ];

  const [active, setActive] = useState(navLinks[0].href);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const offsets = navLinks
        .map((l) => ({ id: l.href.slice(1), el: document.getElementById(l.href.slice(1)) }))
        .filter((x) => x.el);
      const y = window.scrollY + 120;
      for (let i = offsets.length - 1; i >= 0; i--) {
        const { id, el } = offsets[i];
        const top = el.offsetTop;
        if (y >= top) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="backdrop" aria-hidden="true" />
      <div className="inner">
        <Container size="xl" bleed>
          <div className="row">
            <a className="logo" href="#top" aria-label="Home">
              <img src="src\shared\assets\svg\logo\logo-light.svg" className='logo__image' alt="logo" />NKSV
            </a>
            <nav className="nav" aria-label="Main navigation">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className={active === l.href ? 'is-active' : ''}>
                  {l.label}
                </a>
              ))}
            </nav>

            <a className="cta" href={ctaHref} target="_blank" rel="noreferrer">
              <img className="cta__icon" src={tgIcon} alt="" aria-hidden />
              <span className="cta__label">Telegram</span>
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
