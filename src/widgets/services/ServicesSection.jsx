import Container from '../../shared/ui/Container/Container';
import './ServicesSection.css';

const ph = 'https://placehold.co/640x400/1F1F1F/F2F2F2.png?text=Service';

const defaultCards = [
  {
    id: 'web',
    title: 'Веб‑разработка',
    benefit: 'Быстрые SPA/SSR с чистой архитектурой и доступностью.',
    tags: ['React', 'Vite', 'FSD', 'A11y'],
    img: ph,
  },
  {
    id: 'design',
    title: 'UI/UX‑дизайн',
    benefit: 'Системный подход к визуалу: типографика, сетки, гайды.',
    tags: ['Design systems', 'Prototyping', 'Handoff'],
    img: ph,
  },
  {
    id: 'consult',
    title: 'Техническая консультация',
    benefit: 'Выбор стека, перфоманс‑аудит, миграции и CI/CD.',
    tags: ['Perf', 'DX', 'CI/CD'],
    img: ph,
  },
];

const ServicesSection = ({ id = 'services', cards = defaultCards }) => {
  return (
    <section id={id} className="section">
      <Container size="xl">
        <h2 className="section-title">Сервисы</h2>
        <div className="services-grid">
          {cards.map((c) => (
            <article key={c.id} className="service-card" tabIndex={0}>
              <img src={c.img} alt="Пример" loading="lazy" decoding="async" />
              <div className="service-card__body">
                <h3>{c.title}</h3>
                <p className="service-card__benefit">{c.benefit}</p>
                <div className="service-card__tags">
                  {c.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
