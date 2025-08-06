import React from 'react';
import Container from '../../shared/ui/Container/Container';
import Button from '../../shared/ui/Button/Button';
import { useTheme } from '../../shared/hooks/useTheme';
import portraitImg from './media/nksv-portrait.png';
import telegramDark from '../../shared/assets/svg/social/telegram-logo-dark.svg';
import telegramLight from '../../shared/assets/svg/social/telegram-logo-light.svg';
import './About.css';

const About = () => {
  const { theme } = useTheme();
  const telegramIcon = theme === 'dark' ? telegramLight : telegramDark;

  return (
    <section className="about" id="about">
      <Container size="large">
        <div className="about__content">
          <div className="about__text-section">
            <div className="about__header">
              <h1 className="about__title">
                <span className="about__title-main">NKSV</span>
                <span className="about__title-sub">Creative Developer</span>
              </h1>
              <p className="about__description">
                Создаю современные веб-решения с фокусом на пользовательский опыт.
                Превращаю идеи в функциональные и красивые интерфейсы.
              </p>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">50+</span>
                <span className="about__stat-label">Проектов</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Года опыта</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">Качество</span>
              </div>
            </div>

            <div className="about__cta">
              <button type="button" className="about__cta-button">
                <img src={telegramIcon} alt="Telegram" className="about__telegram-icon" />
                <span>Обсудить проект</span>
              </button>
              <Button variant="secondary" size="large">
                Смотреть портфолио
              </Button>
            </div>
          </div>

          <div className="about__visual-section">
            <div className="about__portrait-container">
              <div className="about__portrait-main">
                <img src={portraitImg} alt="NKSV Portrait" className="about__portrait-img" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
