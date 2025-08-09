import React, { useEffect, useMemo, useState } from 'react';
import Container from '../../shared/ui/Container/Container';
import './Portfolio.css';
import { useRevealOnScroll } from '../../shared/hooks/useRevealOnScroll';
import placeholderImg from '../about/media/nksv-portrait.png';

const ALL_TAGS = ['Веб‑разработка', 'Дизайн', 'Фотография'];

const rawItems = [
  { id: 1, title: 'Платформа подписок', desc: 'Запуск модели подписок, рост LTV и удержания.', tags: ['Веб‑разработка'], status: 'Live', year: 2025 },
  { id: 2, title: 'Сервис бронирований', desc: 'Упрощение сценариев, снижение брошенных корзин.', tags: ['Веб‑разработка', 'Дизайн'], status: 'В работе', year: 2024 },
  { id: 3, title: 'Личный кабинет', desc: 'Ускорение ключевых задач пользователей.', tags: ['Веб‑разработка'], status: 'Live', year: 2023 },
  { id: 4, title: 'Редизайн корпоративного сайта', desc: 'Рост конверсии заявки на 34%.', tags: ['Дизайн'], status: 'Live', year: 2025 },
  { id: 5, title: 'Медиа‑галерея', desc: 'Лёгкая навигация, быстрая загрузка.', tags: ['Фотография', 'Дизайн'], status: 'Архив', year: 2022 },
  { id: 6, title: 'Маркетплейс услуг', desc: 'Простые потоки оплаты, доверие и прозрачность.', tags: ['Веб‑разработка'], status: 'В работе', year: 2024 },
  { id: 7, title: 'Промо‑лендинг', desc: 'Сильное УТП, фокус на первой прокрутке.', tags: ['Дизайн'], status: 'Live', year: 2021 },
  { id: 8, title: 'Фото‑кампания бренда', desc: 'Визуальный язык и стиль.', tags: ['Фотография'], status: 'Live', year: 2023 },
];

const items = rawItems.map(i => ({ ...i, cover: placeholderImg }));

const featured = {
  title: 'Featured Case — Цифровая витрина для e‑commerce',
  points: ['Сокращение времени до покупки', 'Рост конверсии в корзину', 'Улучшение показателей вовлечённости'],
  role: 'Роль: продуктовый дизайнер и разработчик',
  status: 'Статус: Live',
  year: 'Год: 2025',
  cta: 'Смотреть кейс',
  cover: placeholderImg,
};

const Portfolio = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [opened, setOpened] = useState(null);
  const ref = useRevealOnScroll();

  const filtered = useMemo(() => {
    if (!activeTags.length) return items;
    return items.filter((it) => activeTags.every(t => it.tags.includes(t)));
  }, [activeTags]);

  const toggleTag = (tag) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpened(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const ph = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#cbd5e1"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>')}`;

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <Container size="large">
        <header className="portfolio__header js-reveal">
          <h2 className="portfolio__title">Портфолио</h2>
          <div className="portfolio__filters" role="group" aria-label="Фильтры портфолио">
            {ALL_TAGS.map((t) => (
              <button
                key={t}
                type="button"
                className={`chip ${activeTags.includes(t) ? 'is-active' : ''}`}
                onClick={() => toggleTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        <div className="featured js-reveal" aria-label="Featured Case" role="region">
          <div className="featured__media" style={{ backgroundImage: `url(${featured.cover})` }} />
          <div className="featured__overlay" />
          <div className="featured__content">
            <h3 className="featured__title">{featured.title}</h3>
            <ul className="featured__points">
              {featured.points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
            <div className="featured__meta">
              <span>{featured.role}</span>
              <span>{featured.status}</span>
              <span>{featured.year}</span>
            </div>
            <button className="featured__cta" type="button">{featured.cta}</button>
          </div>
        </div>

        <div className="portfolio__grid">
          {filtered.map((it) => (
            <article key={it.id} className="card js-reveal" tabIndex={0}>
              <div className="card__media">
                <img src={it.cover} alt={it.title} loading="lazy" decoding="async" onError={(e) => { e.currentTarget.src = ph; }} />
              </div>
              <div className="card__body">
                <h3 className="card__title">{it.title}</h3>
                <p className="card__desc">{it.desc}</p>
                <div className="card__tags">
                  {it.tags.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>
                <div className="card__meta">
                  <span className={`status status--${it.status.replace(' ', '\\20')}`}>{it.status}</span>
                  <span className="year">{it.year}</span>
                </div>
                <button className="card__cta" type="button" aria-haspopup="dialog" onClick={() => setOpened(it)}>Подробнее</button>
              </div>
            </article>
          ))}
        </div>

        {opened && (
          <aside className="case-modal open" role="dialog" aria-modal="true" aria-label={`Кейс: ${opened.title}`}>
            <div className="case-modal__backdrop" onClick={() => setOpened(null)} />
            <div className="case-modal__dialog" role="document">
              <header className="case-modal__header">
                <h3 className="case-modal__title">{opened.title}</h3>
                <button className="case-modal__close" type="button" aria-label="Закрыть" onClick={() => setOpened(null)}>×</button>
              </header>
              <div className="case-modal__media">
                <img src={opened.cover} alt="Обложка кейса" />
              </div>
              <div className="case-modal__content">
                <p className="case-modal__desc">{opened.desc}</p>
                <div className="case-modal__section"><strong>Задача:</strong> Повысить эффективность ключевых пользовательских сценариев и конверсию.</div>
                <div className="case-modal__section"><strong>Роли:</strong> Продуктовый дизайн, проектирование, реализация.</div>
                <div className="case-modal__section"><strong>Процесс:</strong> Исследования → прототип → валидация → итерации → внедрение.</div>
                <div className="case-modal__section"><strong>Результаты:</strong> Улучшение метрик завершения сценариев, рост конверсии, сокращение времени до целевого действия.</div>
                <div className="case-modal__section"><strong>Метрики:</strong> Конверсия, время до действия, активность. Отчёт — по запросу.</div>
                <div className="case-modal__section"><strong>Технологии:</strong> — заполнятся позже</div>
              </div>
              <footer className="case-modal__footer">
                <span className="status">Статус: {opened.status}</span>
                <span className="year">Год: {opened.year}</span>
              </footer>
            </div>
          </aside>
        )}
      </Container>
    </section>
  );
};

export default Portfolio;
