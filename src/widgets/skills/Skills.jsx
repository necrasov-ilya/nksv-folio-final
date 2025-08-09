import React from 'react';
import Container from '../../shared/ui/Container/Container';
import './Skills.css';
import { useRevealOnScroll } from '../../shared/hooks/useRevealOnScroll';

const groups = [
  {
    id: 'product',
    title: 'Продуктовый подход',
    desc: 'Исследование, метрики, A/B‑тесты, приоритизация. Решения, которые двигают продукт.',
    skills: ['Гипотезы и измерения', 'Карта целей и метрик', 'Циклы итераций'],
    level: 'Senior',
  },
  {
    id: 'ds',
    title: 'Дизайн‑системы',
    desc: 'Компоненты, токены, консистентность. Системный подход и масштабируемость.',
    skills: ['Наслоение уровней', 'Токены и гайды', 'Процессы обновлений'],
    level: 'Advanced',
  },
  {
    id: 'ui',
    title: 'Интерфейсы',
    desc: 'Прототипирование, информационная архитектура, микроанимации. Понятные сценарии.',
    skills: ['Информационная иерархия', 'Состояния и пустые экраны', 'Motion как смысл'],
    level: 'Advanced',
  },
  {
    id: 'build',
    title: 'Реализация',
    desc: 'Структурирование кода, производительность, доступность. Сильная инженерная база.',
    skills: ['Сложные состояния', 'Оптимизация рендера', 'A11y в деталях'],
    level: 'Advanced',
  },
];

const Skills = () => {
  const ref = useRevealOnScroll();
  return (
    <section id="skills" className="skills" ref={ref}>
      <Container size="large">
        <header className="skills__header js-reveal">
          <h2 className="skills__title">Навыки</h2>
          <p className="skills__lead">Сильные стороны, которые обеспечивают предсказуемую поставку и качество интерфейса.</p>
        </header>
        <div className="skills__grid">
          {groups.map(g => (
            <article key={g.id} className="skills-card js-reveal" tabIndex={0}>
              <div className="skills-card__head">
                <h3 className="skills-card__title">{g.title}</h3>
                <span className="skills-card__level">Уровень: {g.level}</span>
              </div>
              <p className="skills-card__desc">{g.desc}</p>
              <div className="skills-card__meter" aria-hidden="true"><span style={{ width: g.level === 'Senior' ? '92%' : '86%' }} /></div>
              <div className="skills-card__list">
                <strong>Ключевые умения:</strong>
                <ul>
                  {g.skills.map((s,i) => (<li key={i}>{s}</li>))}
                </ul>
              </div>
              <div className="skills-card__examples">
                <strong>Примеры:</strong> — добавлю при релизе
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
