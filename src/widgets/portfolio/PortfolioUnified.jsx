import { useMemo, useState } from 'react';
import Container from '../../shared/ui/Container/Container';
import QuickView from './QuickView';
import { projectsData } from '../../shared/api/projectsData';
import placeholderImg from '../skillsGallery/media/placeholder-large.png';
import './PortfolioSection.css';

const normalize = (p) => ({
  id: String(p.id),
  title: p.title,
  role: p.role || (p.category === 'design' ? 'UI/UX' : p.category === 'photography' ? 'Фото' : 'Dev'),
  type: p.category === 'web-development' ? 'web' : p.category === 'design' ? 'design' : p.category === 'photography' ? 'photo' : p.category,
  normalizedType: p.category === 'web-development' ? 'web' : p.category,
  tags: p.technologies || p.tags || [],
  tech: p.technologies || [],
  year: p.year,
  status: p.status,
  coverUrl: p.image || p.coverUrl,
  image: p.image,
  summary: p.description,
  links: { live: p.link, repo: p.github },
  isFeatured: Boolean(p.isFeatured),
});

const chips = [
  { key: 'all', label: 'Все' },
  { key: 'web', label: 'Сайты' },
  { key: 'design', label: 'Дизайн' },
  { key: 'photography', label: 'Фото' },
  { key: 'side', label: 'Side projects' },
];

const PortfolioUnified = ({ id = 'portfolio', data = projectsData }) => {
  const items = useMemo(() => data.map(normalize), [data]);
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return items
      .filter((i) => (filter === 'all' ? true : i.normalizedType === filter || i.type === filter))
      .filter((i) => {
        if (!query) return true;
        const q = query.toLowerCase();
        return (
          i.title.toLowerCase().includes(q) ||
          i.tags?.some((t) => String(t).toLowerCase().includes(q)) ||
          i.tech?.some((t) => String(t).toLowerCase().includes(q))
        );
      });
  }, [items, filter, query]);

  const openItem = filtered.find((i) => i.id === openId) || items.find((i)=> i.id === openId);

  return (
    <section id={id} className="section">
      <Container size="xl">
        <h2 className="section-title">Портфолио</h2>

  {/* Featured carousel removed for now */}

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
                <img src={i.coverUrl || i.image || placeholderImg} alt={i.title} loading="lazy" decoding="async" onError={(e)=>{ if (e.currentTarget.src !== placeholderImg) e.currentTarget.src = placeholderImg; }} />
                <div className="case-card__meta">
                  <div className="tags">
                    {i.tags?.slice(0,3).map((t) => (
                      <span className="chip" key={String(t)}>{String(t)}</span>
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

export default PortfolioUnified;
