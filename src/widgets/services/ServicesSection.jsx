import Container from '../../shared/ui/Container/Container';
import web_make from './media/web_make.png';
import u_xui from './media/u_xui.png'
import tech_consult from './media/tech_consult.png';  
import './ServicesSection.css';


const defaultCards = [
  {
    id: 'web',
    title: 'Веб‑разработка',
    benefit: 'Быстрые (апокахзчтобыстрое) чистой архитектурой и доступностью.',
    tags: ['React', 'Vite', 'FSD'],
    img: web_make,
  },
  {
    id: 'design',
    title: 'UI/UX‑дизайн',
    benefit: 'Системный подход к визуалу: типографика, сетки, гайды.',
    tags: ['Design systems', 'Prototyping', 'Handoff'],
    img: u_xui,
  },
  {
    id: 'consult',
    title: 'Техническая консультация',
    benefit: 'Выбор стека, перфоманс‑аудит, миграции и CI/CD.',
    tags: ['Perf', 'DX', 'CI/CD'],
    img: tech_consult,
  },
];

const ServicesSection = ({ id = 'services', cards = defaultCards }) => {
  return (
    <section id={id} className="section">
      <Container size="xl">
        <h2 className="section-title">Чем я могу вам помочь?</h2>
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
