import { useState, useEffect } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider';
import Container from '../../shared/ui/Container/Container';
import Button from '../../shared/ui/Button/Button';
import { SECTIONS } from '../../shared/config/constants';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Отслеживание скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: SECTIONS.ABOUT, label: 'О себе' },
    { id: SECTIONS.SERVICES, label: 'Услуги' },
    { id: SECTIONS.SKILLS, label: 'Навыки' },
    { id: SECTIONS.PORTFOLIO, label: 'Портфолио' },
    { id: SECTIONS.PROJECTS, label: 'Проекты' },
    { id: SECTIONS.FAQ, label: 'FAQ' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <Container>
        <div className="header__inner">
          <div className="header__logo">
            <span className="header__logo-text">NKSV</span>
          </div>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.id} className="header__nav-item">
                  <button
                    className="header__nav-link"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button
              className="header__theme-toggle"
              onClick={toggleTheme}
              aria-label="Переключить тему"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <Button
              variant="primary"
              size="small"
              onClick={() => handleNavClick('about')}
              className="header__cta"
            >
              Связаться
            </Button>

            <button
              className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Открыть меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
