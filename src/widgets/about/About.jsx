import React from 'react';
import Container from '../../shared/ui/Container/Container';
import Button from '../../shared/ui/Button/Button';
import { useRevealOnScroll } from '../../shared/hooks/useRevealOnScroll';
import portrait from './media/nksv-portrait.png';
import './About.css';

const About = () => {
  const ref = useRevealOnScroll();

  return (
    <section id="about" className="about" ref={ref} aria-label="Обо мне — превью секция">
      <Container size="large">
        <div className="about__inner">
          <div className="about__content">
            <span className="about__eyebrow js-reveal">Frontend engineer</span>
            <h1 className="about__title js-reveal">
            NKSV
            </h1>
            <p className="about__lead js-reveal">
              Фокус на производительности, доступности и чистой архитектуре. Помогаю
              бизнесу быстрее доставлять ценность пользователю — от идеи до
              стабильного релиза.
            </p>
            <div className="about__actions js-reveal">
              <Button as="a" href="#projects" variant="primary" size="medium">
                Смотреть проекты
              </Button>
              <Button as="a" href="#portfolio" variant="secondary" size="medium">
                Портфолио
              </Button>
            </div>
            <ul className="about__highlights js-reveal" aria-label="Ключевые факты">
              <li className="about__highlight">
                <span className="about__highlight-value">5+ лет</span>
                <span className="about__highlight-label">Опыт</span>
              </li>
              <li className="about__highlight">
                <span className="about__highlight-value">20+ проектов</span>
                <span className="about__highlight-label">Коммерческих</span>
              </li>
              <li className="about__highlight">
                <span className="about__highlight-value">Core Web Vitals</span>
                <span className="about__highlight-label">в «зеленой зоне»</span>
              </li>
            </ul>
          </div>

          <div className="about__media js-reveal" aria-hidden="true">
            <div className="about__photo-wrap">
              <img
                src={portrait}
                alt="Портрет Ильи Некрасова"
                className="about__photo"
                decoding="async"
                loading="eager"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
