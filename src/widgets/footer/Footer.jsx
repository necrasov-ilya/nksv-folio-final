import React from 'react';
import Container from '../../shared/ui/Container/Container';
import './Footer.css';

const Footer = () => {
  const tgUser = 'username_placeholder';
  return (
    <footer className="footer">
      <Container size="large">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__title">Открыт к проектам с фокусом на продуктовую ценность</h3>
            <p className="footer__subtitle">Обсудим цели, риски и быстрый план первых релизов.</p>
          </div>
          <div className="footer__actions">
            <a href={`https://t.me/${tgUser}`} target="_blank" rel="noreferrer noopener" className="footer__cta">Связаться в Telegram</a>
            <a href={`tg://resolve?domain/${tgUser}`} className="footer__cta-secondary">Открыть в приложении</a>
          </div>
        </div>
        <div className="footer__meta">
          <a href="mailto:email@example.com" className="footer__link">email@example.com</a>
          <span className="footer__copy">© {new Date().getFullYear()} Илья Некрасов</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
