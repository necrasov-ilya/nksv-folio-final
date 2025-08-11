import { useMemo, useState } from 'react';
import Container from '../../shared/ui/Container/Container';
import QuickView from './QuickView';
import './PortfolioSection.css';

const ph = 'https://placehold.co/1200x675/161616/F2F2F2.png?text=Case%2016:9';

const defaultItems = [
  { id: '1', title: 'Dashboard Kit', role: 'Frontend', type: 'web', tags: ['SPA'], tech: ['React', 'Vite'], year: 2024, status: 'live', coverUrl: ph, galleryUrls: [], summary: 'Сложная панель с графиками и анимациями.', links: { live: '#', repo: '#' } },
  { id: '2', title: 'Portfolio Theme', role: 'UI/UX', type: 'design', tags: ['Design'], tech: ['Figma'], year: 2023, status: 'draft', coverUrl: ph, galleryUrls: [], summary: 'Система блоков для персональных сайтов.', links: {} },
  { id: '3', title: 'Photo Story', role: 'Dev', type: 'photo', tags: ['Story'], tech: ['Next'], year: 2022, status: 'live', coverUrl: ph, galleryUrls: [], summary: 'Лэндинг с акцентом на изображения.', links: { live: '#' } },
];

const chips = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'design', label: 'Design' },
  { key: 'photo', label: 'Photo' },
];

const PortfolioSection = ({ id = 'portfolio', items = defaultItems }) => {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return items.filter((i) => (filter === 'all' ? true : i.type === filter)).filter((i) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        i.title.toLowerCase().includes(q) ||
        i.tags?.some((t) => t.toLowerCase().includes(q)) ||
        i.tech?.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [items, filter, query]);

  const openItem = filtered.find((i) => i.id === openId);

  return (
    <section id={id} className="section">
      <Container size="xl">
        <div className="portfolio section--panel">
          <div className="portfolio__toolbar" role="toolbar" aria-label="Фильтры">
            <div className="chips">
              {chips.map((c) => (
                <button
                  key={c.key}
                  className={`chip ${filter === c.key ? 'is-active' : ''}`}
                  onClick={() => setFilter(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <input
              type="search"
              className="search"
              placeholder="Поиск"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Поиск по портфолио"
            />
          </div>

          <div className="portfolio-grid">
            {filtered.map((i) => (
              <article key={i.id} className="case-card" onClick={() => setOpenId(i.id)} tabIndex={0}>
                <img src={i.coverUrl} alt={i.title} loading="lazy" decoding="async" />
                <div className="case-card__meta">
                  <div className="tags">
                    {i.tags?.map((t) => (
                      <span className="chip" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="muted">{i.year} • {i.role}</span>
                </div>
                <h3 className="case-card__title">{i.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <QuickView open={Boolean(openId)} onClose={() => setOpenId(null)} item={openItem} />
    </section>
  );
};

export default PortfolioSection;
