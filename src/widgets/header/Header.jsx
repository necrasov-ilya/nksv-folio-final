import React, { memo, useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider';
import Container from '../../shared/ui/Container/Container';
import logoDark from '../../shared/assets/svg/logo/logo-dark.svg';
import logoLight from '../../shared/assets/svg/logo/logo-light.svg';
import telegramDark from '../../shared/assets/svg/social/telegram-logo-dark.svg';
import telegramLight from '../../shared/assets/svg/social/telegram-logo-light.svg';
import themeToggleDark from '../../shared/assets/svg/toggleThemBtn/dark/dark-theme-light-btn.svg';
import themeToggleLight from '../../shared/assets/svg/toggleThemBtn/light/light-theme-black-btn.svg';
import './Header.css';

const NAV_ITEMS = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'projects', label: 'Projects', href: '#projects' },
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
    const [active, setActive] = useState('about');
    const [progress, setProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const ticking = useRef(false);

    // Ensure scroll is not locked on component mount
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        html.style.overflow = '';
        body.style.overflow = '';
    }, []);

    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

    // Lock scroll on mobile menu open (only on mobile devices)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const html = document.documentElement;
        const body = document.body;
        
        // Only lock scroll on mobile/tablet devices
        const isMobile = window.innerWidth <= 768;
        
        if (menuOpen && isMobile) {
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
        } else {
            html.style.overflow = '';
            body.style.overflow = '';
        }
        
        return () => {
            html.style.overflow = '';
            body.style.overflow = '';
        };
    }, [menuOpen]);

    // Close on ESC when menu open
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = e => { if (e.key === 'Escape') closeMenu(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen, closeMenu]);

    // Active section highlight
    useEffect(() => {
        const sections = NAV_ITEMS.map(n => document.querySelector(n.href)).filter(Boolean);
        if (!sections.length || typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Reading progress and scroll state
    useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            window.requestAnimationFrame(() => {
                const doc = document.documentElement;
                const scrollTop = window.scrollY || doc.scrollTop;
                const height = doc.scrollHeight - doc.clientHeight;
                const value = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
                setProgress(value);
                
                // Set scrolled state for pill animation (threshold: 100px)
                setIsScrolled(scrollTop > 100);
                
                ticking.current = false;
            });
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    const handleNavClick = useCallback(() => { closeMenu(); }, [closeMenu]);

    const tgUser = 'username_placeholder';

    return (
        <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
            <div className="reading-progress" aria-hidden="true">
                <span className="reading-progress__bar" style={{ width: `${progress}%` }} />
            </div>
            <Container size="large">
                <div className="header-content">
                    <a href="#about" className="logo-section" aria-label="Илья Некрасов — на главную">
                        <img src={logo} alt="NKSV Logo" className="logo" draggable="false" decoding="async" />
                        <span className="brand-name">NKSV</span>
                    </a>
                    <nav className="nav-section" aria-label="Основная навигация">
                        {NAV_ITEMS.map(item => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`nav-link${active === item.id ? ' is-active' : ''}`}
                                draggable="false"
                            >
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
                        <a
                            href={`https://t.me/${tgUser}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="cta-button"
                        >
                            <img src={telegram} alt="Telegram" className="telegram-icon" decoding="async" />
                            <span>Telegram</span>
                        </a>
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
                            className={`mobile-nav-link${active === item.id ? ' is-active' : ''}`}
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
                        <a href={`tg://resolve?domain=${tgUser}`} className="mobile-cta" onClick={handleNavClick}>
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
