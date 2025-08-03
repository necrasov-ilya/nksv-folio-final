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
    <div className="header-container">
      <header className="header">
        <div className="header__logo-container">
          <img
            src={theme === 'dark' ? '/src/shared/assets/svg/logo-dark.svg' : '/src/shared/assets/svg/logo-light.svg'}
            alt="NKSV Logo"
            className="header__logo"
          />
        </div>

        <nav className="header__nav">
          {/* Навигационные кнопки */}
          <div className="header__nav-buttons">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className="header__nav-button"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Кнопка переключения темы */}
          <button
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label="Переключить тему"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* CTA кнопка */}
          <Button
            variant="primary"
            size="medium"
            onClick={handleContactClick}
            className="header__cta"
          >
            Связаться
          </Button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
