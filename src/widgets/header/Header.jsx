import { useEffect, useState } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import logoLight from './assets/logo-light.png';
import logoDark from './assets/logo-dark.png';
import darkIconBlack from '../../shared/assets/svg/toggleThemBtn/dark/dark-theme-black-btn.svg';
import lightIconLight from '../../shared/assets/svg/toggleThemBtn/light/light-theme-light-btn.svg';
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
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === 'light' ? logoDark : logoLight;
  const themeIcon = theme === 'light' ? darkIconBlack : lightIconLight;
  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${hasActive ? 'has-active' : ''}`}>
      <div className="backdrop" aria-hidden="true" />
      <div className="inner">
        <Container size="xl" bleed>
          <div className="row">
            <a className="logo" href="#top" aria-label="Главная">
              <img className="logo__image" src={logoSrc} alt="logo" width="28" height="28" />
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
              <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Сменить тему">
                <img className="theme-toggle__icon" src={themeIcon} alt="" aria-hidden />
              </button>
              <Button
                href={ctaHref}
                target="_blank"
                variant="primary"
                size="small"
                className="header__cta"
                aria-label="Связаться со мной"
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
