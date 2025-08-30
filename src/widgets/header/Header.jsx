import { useEffect, useState } from 'react';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import logoLight from './assets/logo-light.png';
import Container from '../../shared/ui/Container/Container';
import Button from '../../shared/ui/Button/Button';
import './Header.css';

const Header = ({ ctaHref = 'https://t.me/nksv_ilya', links = [] }) => {
  const navLinks = links.length
    ? links
    : [
        { href: '#top', label: 'Главная' },
        { href: '#about', label: 'Обо мне' },
        { href: '#skills', label: 'Навыки' },
        { href: '#services', label: 'Услуги' },
        { href: '#portfolio', label: 'Портфолио' },
        { href: '#projects', label: 'Проекты' },
        { href: '#faq', label: 'FAQ' },
      ];

  const [active, setActive] = useState('#top');
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
        const top = el.offsetTop + 8; // small threshold to avoid early activation at the very top
        if (y >= top) {
          setActive(`#${id}`);
          break;
        }
      }
      if (window.scrollY < 60) setActive('#top');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hasActive = active !== '#top';
  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${hasActive ? 'has-active' : ''}`}>
      <div className="backdrop" aria-hidden="true" />
      <div className="inner">
        <Container size="xl" bleed>
          <div className="row">
            <a className="logo" href="#top" aria-label="Главная">
              <img className="logo__image" src={logoLight} alt="logo" width="28" height="28" />
              <span className="logo__text">NKSV</span>
            </a>

            <nav className="nav" aria-label="Main navigation">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className={`nav__chip ${active === l.href ? 'is-active' : ''}`}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="actions">
              <Button
                href={ctaHref}
                target="_blank"
                variant="primary"
                size="small"
                className="header__cta"
              >
                <img className="header__cta-icon" src={tgIcon} alt="" aria-hidden />
                <span>Связаться со мной</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
