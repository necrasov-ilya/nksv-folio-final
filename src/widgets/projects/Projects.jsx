import React from 'react';
import Container from '../../shared/ui/Container/Container';
import './Projects.css';
import { useRevealOnScroll } from '../../shared/hooks/useRevealOnScroll';

const extra = [
  { id: 'p1', title: 'Внутренний портал', desc: 'Ускорение рабочих процессов.', status: 'Live', year: 2024 },
  { id: 'p2', title: 'CRM‑инструмент', desc: 'Стабильные сценарии продаж.', status: 'В работе', year: 2025 },
  { id: 'p3', title: 'Конструктор лендингов', desc: 'Быстрые итерации кампаний.', status: 'Live', year: 2023 },
  { id: 'p4', title: 'Отчётный дэшборд', desc: 'Прозрачная аналитика.', status: 'Live', year: 2022 },
  { id: 'p5', title: 'Сервис опросов', desc: 'Сбор обратной связи.', status: 'Архив', year: 2021 },
  { id: 'p6', title: 'Планировщик релизов', desc: 'Управляемые поставки.', status: 'В работе', year: 2025 },
];

const Projects = () => {
  const ref = useRevealOnScroll();
  return (
    <section id="projects" className="projects" ref={ref}>
      <Container size="large">
        <header className="projects__header js-reveal">
          <h2 className="projects__title">Ещё проекты</h2>
        </header>
        <div className="projects__grid">
          {extra.map((p) => (
            <article key={p.id} className="project js-reveal" tabIndex={0}>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>
              <div className="project__meta">
                <span className="project__status">{p.status}</span>
                <span className="project__year">{p.year}</span>
              </div>
              <button className="project__cta" type="button">Детали</button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
