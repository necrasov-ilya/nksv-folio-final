import Container from '../../shared/ui/Container/Container';
import './ProjectsSection.css';

const ph = 'https://placehold.co/800x600/1F1F1F/F2F2F2.png?text=Project';

const defaultItems = [
  { id: 'p1', title: 'CLI Utils', role: 'Dev', type: 'web', tags: ['Node'], tech: ['Node'], year: 2024, status: 'wip', coverUrl: ph, summary: 'Набор скриптов для рутины.' },
  { id: 'p2', title: 'Micro Animations', role: 'UI', type: 'design', tags: ['Motion'], tech: ['CSS'], year: 2023, status: 'live', coverUrl: ph, summary: 'Коллекция паттернов анимаций.' },
];

const ProjectsSection = ({ id = 'projects', items = defaultItems }) => {
  return (
  <section id={id} className="section section--compact">
      <Container size="xl">
        <h2 className="section-title">Мои проекты</h2>
        <div className="projects-grid">
          {items.map((i) => (
            <article key={i.id} className="project-card">
              <img src={i.coverUrl} alt={i.title} loading="lazy" decoding="async" />
              <div className="project-card__body">
                <h3>{i.title}</h3>
                <p className="muted">{i.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
