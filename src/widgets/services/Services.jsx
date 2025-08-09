import React from 'react';
import Container from '../../shared/ui/Container/Container';
import './Services.css';
import { useRevealOnScroll } from '../../shared/hooks/useRevealOnScroll';

const cards = [
  {
    id: 'webdev',
    title: 'Веб‑разработка',
    description:
      'Проектирование архитектуры страницы и компонентов. Чистая, поддерживаемая реализация. Упор на скорость загрузки и доступность.',
    bullets: [
      'Быстрый рендер',
      'Понятная логика',
      'Измеримый перформанс',
    ],
    techSlot: 'Технологии: — заполнятся позже',
  },
  {
    id: 'design',
    title: 'UI/UX дизайн',
    description:
      'Исследования, прототипы, дизайн‑система, визуальный язык. Интерфейсы, которые объясняют себя сами.',
    bullets: [
      'Единый гайд',
      'Предсказуемые паттерны',
      'Рост конверсии',
    ],
    techSlot: 'Технологии: — заполнятся позже',
  },
  {
    id: 'consult',
    title: 'Техническая консультация',
    description:
      'Аудит, приоритизация задач, дорожная карта. Помогаю принять верные решения быстрее.',
    bullets: [
      'Снижение рисков',
      'Прозрачная оценка',
      'Управляемые релизы',
    ],
    techSlot: 'Технологии: — заполнятся позже',
  },
];

const Services = () => {
  const ref = useRevealOnScroll();
  return (
    <section id="services" className="services" ref={ref}>
      <Container size="large">
        <header className="services__header js-reveal">
          <h2 className="services__title">Услуги</h2>
          <p className="services__lead">
            Помогаю запускать и ускорять цифровые продукты — от ранних гипотез до масштабируемой реализации.
            Сфокусирован на результате для бизнеса, скорости поставки и качестве интерфейса.
          </p>
        </header>
        <div className="services__grid">
          {cards.map((c) => (
            <article key={c.id} className="service-card js-reveal" tabIndex={0}>
              <div className="service-card__body">
                <h3 className="service-card__title">{c.title}</h3>
                <p className="service-card__desc">{c.description}</p>
                <ul className="service-card__bullets">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="service-card__bullet">{b}</li>
                  ))}
                </ul>
              </div>
              <footer className="service-card__footer">
                <span className="service-card__tech">{c.techSlot}</span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
