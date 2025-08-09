import React from 'react';
import Container from '../../shared/ui/Container/Container';
import Button from '../../shared/ui/Button/Button';
import { useTheme } from '../../app/providers/ThemeProvider';
import portraitImg from './media/nksv-portrait.png';
import telegramDark from '../../shared/assets/svg/social/telegram-logo-dark.svg';
import telegramLight from '../../shared/assets/svg/social/telegram-logo-light.svg';
import './About.css';

const About = () => {
  const { theme } = useTheme();
  const telegramIcon = theme === 'dark' ? telegramLight : telegramDark;
  const tgUser = 'username_placeholder';

  return (
    <section className="about" id="about">
      <Container size="large">
        <div className="about__content">
          <div className="about__text-section">
            <div className="about__header">
              <h1 className="about__title">
                <span className="about__title-main">NKSV</span>
              </h1>
              <p className="about__description">
                Помогаю бизнесам запускать и ускорять цифровые продукты — от идеи и дизайна интерфейса до корректной реализации и поддержки.
                Работаю быстро, прозрачно и по делу.
              </p>
            </div>

            <div className="about__cta">
              <a href={`https://t.me/${tgUser}`} target="_blank" rel="noreferrer noopener" className="about__cta-button">
                <img src={telegramIcon} alt="Telegram" className="about__telegram-icon" />
                <span>Связаться в Telegram</span>
              </a>
              <Button variant="secondary" size="large" as="a" href="#portfolio">Смотреть портфолио</Button>
            </div>

            <div className="about__mini-toc" aria-label="Разделы страницы">
              <ul>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#skills">Навыки</a></li>
                <li><a href="#portfolio">Кейсы</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#faq">Ответы</a></li>
              </ul>
            </div>
          </div>

          <div className="about__visual-section">
            <div className="about__portrait-container">
              <div className="about__portrait-main">
                <img src={portraitImg} alt="Портрет Ильи Некрасова" className="about__portrait-img" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
