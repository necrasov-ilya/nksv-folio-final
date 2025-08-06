import React, { memo, useMemo, useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../shared/hooks/useTheme';
import Container from '../../shared/ui/Container/Container';
import logoDark from '../../shared/assets/svg/logo/logo-dark.svg';
import logoLight from '../../shared/assets/svg/logo/logo-light.svg';
import telegramDark from '../../shared/assets/svg/social/telegram-logo-dark.svg';
import telegramLight from '../../shared/assets/svg/social/telegram-logo-light.svg';
import themeToggleDark from '../../shared/assets/svg/toggleThemBtn/dark/dark-theme-light-btn.svg';
import themeToggleLight from '../../shared/assets/svg/toggleThemBtn/light/light-theme-black-btn.svg';
import './Header.css';

const NAV_ITEMS = [
    { id: 'home', label: 'Главная', href: '#home' },
    { id: 'services', label: 'Услуги', href: '#services' },
    { id: 'portfolio', label: 'Портфолио', href: '#portfolio' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
];

const ASSETS = {
    light: { logo: logoDark, telegram: telegramDark, themeToggle: themeToggleLight },
    dark: { logo: logoLight, telegram: telegramLight, themeToggle: themeToggleDark },
};

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { logo, telegram, themeToggle } = useMemo(() => ASSETS[theme] || ASSETS.light, [theme]);
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

    useEffect(() => {
        const { style } = document.body;
        if (menuOpen) {
            style.overflow = 'hidden';
            style.position = 'fixed';
            style.top = `-${window.scrollY}px`;
            style.width = '100%';
        } else {
            const top = style.top;
            style.overflow = '';
            style.position = '';
            style.top = '';
            style.width = '';
            if (top) {
                const y = parseInt(top || '0', 10);
                window.scrollTo(0, Math.abs(y));
            }
        }
        return () => {
            style.overflow = '';
            style.position = '';
            style.top = '';
            style.width = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = e => {
            if (e.key === 'Escape') closeMenu();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen, closeMenu]);

    const handleNavClick = useCallback(() => {
        closeMenu();
    }, [closeMenu]);

    return (
        <header className="header">
            <Container size="large">
                <div className="header-content">
                    <div className="logo-section">
                        <img src={logo} alt="NKSV Logo" className="logo" draggable="false" decoding="async" />
                        <span className="brand-name">NKSV</span>
                    </div>
                    <nav className="nav-section" aria-label="Основная навигация">
                        {NAV_ITEMS.map(item => (
                            <a key={item.id} href={item.href} className="nav-link" draggable="false">
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <button
                            type="button"
                            className="theme-toggle-button"
                            onClick={toggleTheme}
                            aria-label="Переключить тему"
                        >
                            <img src={themeToggle} alt="" aria-hidden="true" />
                        </button>
                        <button type="button" className="cta-button">
                            <img src={telegram} alt="Telegram" className="telegram-icon" decoding="async" />
                            <span>Связаться со мной</span>
                        </button>
                        <button
                            type="button"
                            className={`burger-button${menuOpen ? ' is-open' : ''}`}
                            aria-label="Открыть меню"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={toggleMenu}
                        >
                            <span className="burger-line" />
                            <span className="burger-line" />
                            <span className="burger-line" />
                        </button>
                    </div>
                </div>
            </Container>
            <div
                className={`mobile-backdrop${menuOpen ? ' open' : ''}`}
                onClick={closeMenu}
                aria-hidden={!menuOpen}
            />
            <aside
                id="mobile-menu"
                className={`mobile-menu${menuOpen ? ' open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Мобильное меню навигации"
            >
                <nav className="mobile-nav">
                    {NAV_ITEMS.map(item => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="mobile-nav-link"
                            onClick={handleNavClick}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="mobile-controls">
                        <button
                            type="button"
                            className="mobile-theme-toggle"
                            onClick={() => { toggleTheme(); }}
                            aria-label="Переключить тему"
                        >
                            <img src={themeToggle} alt="" aria-hidden="true" />
                            <span>Тема</span>
                        </button>
                        <a href="#contact" className="mobile-cta" onClick={handleNavClick}>
                            <img src={telegram} alt="" className="telegram-icon" />
                            <span>Связаться со мной</span>
                        </a>
                    </div>
                </nav>
            </aside>
        </header>
    );
};

export default memo(Header);
