import { useState } from 'react';
import Container from '../../shared/ui/Container/Container';
import Modal from '../../shared/ui/Modal/Modal';
import placeholderImg from '../skillsGallery/media/placeholder-large.png';
import './ProjectsSection.css';

const ph = 'https://placehold.co/800x600/1F1F1F/F2F2F2.png?text=Project';

const defaultItems = [
  { id: 'p1', title: 'CLI Utils', role: 'Dev', type: 'web', tags: ['Node'], tech: ['Node'], year: 2024, status: 'wip', coverUrl: ph, summary: 'Набор скриптов для рутины.' },
  { id: 'p2', title: 'Micro Animations', role: 'UI', type: 'design', tags: ['Motion'], tech: ['CSS'], year: 2023, status: 'live', coverUrl: ph, summary: 'Коллекция паттернов анимаций.' },
];

const ProjectsSection = ({ id = 'projects', items = defaultItems }) => {
  const [openId, setOpenId] = useState(null);
  const active = openId ? items.find(i => i.id === openId) : null;
  return (
  <section id={id} className="section section--compact">
      <Container size="xl">
        <h2 className="section-title">Мои проекты</h2>
        <div className="projects-grid">
          {items.map((i) => (
            <article key={i.id} className="project-card" onClick={() => setOpenId(i.id)} tabIndex={0}>
              <img
                src={i.coverUrl || i.image || placeholderImg}
                alt={i.title}
                loading="lazy"
                decoding="async"
                onError={(e) => { if (e.currentTarget.src !== placeholderImg) e.currentTarget.src = placeholderImg; }}
              />
              <div className="project-card__body">
                <h3>{i.title}</h3>
                <p className="muted">{i.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <Modal open={Boolean(openId)} onClose={() => setOpenId(null)}>
          {active && (
            <>
              <img
                className="modal__media"
                src={active.coverUrl || active.image || placeholderImg}
                alt={active.title ? `${active.title} — обложка` : 'Обложка проекта'}
                loading="eager"
                decoding="async"
                onError={(e) => { if (e.currentTarget.src !== placeholderImg) e.currentTarget.src = placeholderImg; }}
              />
              <div className="modal__body">
                <h3>{active.title}</h3>
                <p className="muted">{active.summary || active.description}</p>
                <div className="kv">
                  {active.year && (<><span>Год</span><span>{active.year}</span></>)}
                  {active.role && (<><span>Роль</span><span>{active.role}</span></>)}
                  {active.tech?.length && (<><span>Стек</span><span>{active.tech.join(', ')}</span></>)}
                  {active.status && (<><span>Статус</span><span>{active.status}</span></>)}
                </div>
                <div className="modal__actions">
                  {active.link && (
                    <a className="btn btn--primary" href={active.link} target="_blank" rel="noreferrer">Live</a>
                  )}
                  {active.github && (
                    <a className="btn btn--secondary" href={active.github} target="_blank" rel="noreferrer">Repo</a>
                  )}
                </div>
              </div>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default ProjectsSection;
