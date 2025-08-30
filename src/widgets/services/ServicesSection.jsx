
import Container from '../../shared/ui/Container/Container';
import Button from '../../shared/ui/Button/Button';
import web_make from './media/web_make.png';
import u_xui from './media/u_xui.png';
import tech_consult from './media/tech_consult.png';
import { useState } from 'react';
import Modal from '../../shared/ui/Modal/Modal';
import placeholderImg from '../skillsGallery/media/placeholder-large.png';
import './ServicesSection.css';


const defaultCards = [
  {
    id: 'web',
    title: 'Веб‑разработка',
    benefit: 'Быстрые сайты и приложения с чистой архитектурой и доступностью.',
    tags: ['React', 'Vite', 'FSD'],
    img: web_make,
    details: 'Разработка современных сайтов и приложений: SPA, SSR, анимации, интеграция с API, оптимизация загрузки, SEO, адаптивность, поддержка и развитие.'
  },
  {
    id: 'design',
    title: 'UI/UX‑дизайн',
    benefit: 'Системный подход к визуалу: типографика, сетки, гайды.',
    tags: ['Design systems', 'Prototyping', 'Handoff'],
    img: u_xui,
    details: 'Создание дизайн-систем, прототипирование, подготовка макетов для разработки, аудит интерфейсов, работа с Figma, адаптация под мобильные.'
  },
  {
    id: 'consult',
    title: 'Техническая консультация',
    benefit: 'Выбор стека, перфоманс‑аудит, миграции и CI/CD.',
    tags: ['Perf', 'DX', 'CI/CD'],
    img: tech_consult,
    details: 'Помощь в выборе технологий, аудит производительности, миграция проектов, настройка CI/CD, DevOps, оптимизация процессов.'
  },
];

const ServicesSection = ({ id = 'services', cards = defaultCards }) => {
  const [modalId, setModalId] = useState(null);

  const activeCard = modalId !== null ? cards.find(x => x.id === modalId) : null;

  return (
    <section id={id} className="section">
      <Container size="xl">
        <h2 className="section-title">Чем я могу вам помочь?</h2>
        <div className="services-grid">
          {cards.map((c) => (
            <article key={c.id} className="service-card" tabIndex={0}>
              <img
                src={c.img || placeholderImg}
                alt={c.title || 'Пример'}
                loading="lazy"
                decoding="async"
                onError={(e) => { if (e.currentTarget.src !== placeholderImg) e.currentTarget.src = placeholderImg; }}
              />
              <div className="service-card__body">
                <h3>{c.title}</h3>
                <p className="service-card__benefit">{c.benefit}</p>
                <div className="service-card__tags">
                  {c.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
                <Button
                  variant="secondary"
                  size="small"
                  style={{ marginTop: 12, minWidth: 110 }}
                  onClick={() => setModalId(c.id)}
                >Подробнее</Button>
              </div>
            </article>
          ))}
        </div>

        <Modal open={modalId !== null} onClose={() => setModalId(null)}>
          {activeCard && (
            <>
              <img
                className="modal__media"
                src={activeCard.img || placeholderImg}
                alt={activeCard.title ? `${activeCard.title} — иллюстрация` : 'Иллюстрация'}
                loading="eager"
                decoding="async"
                onError={(e) => { if (e.currentTarget.src !== placeholderImg) e.currentTarget.src = placeholderImg; }}
              />
              <div className="modal__body">
                <h3>{activeCard.title}</h3>
                <p className="muted" style={{ marginTop: 8 }}>{activeCard.details}</p>
                <div className="modal__actions">
                  <Button onClick={() => setModalId(null)} size="small">Понятно</Button>
                </div>
              </div>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default ServicesSection;
