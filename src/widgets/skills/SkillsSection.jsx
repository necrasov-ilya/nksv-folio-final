import Container from '../../shared/ui/Container/Container';
import './SkillsSection.css';

const defaultGroups = {
  Core: ['React', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
  Plus: ['Next.js', 'Vite', 'Vercel', 'i18n'],
  Tools: ['Git', 'Figma', 'Jest', 'ESLint', 'Prettier'],
};

const SkillsSection = ({ id = 'skills', groups = defaultGroups }) => {
  const entries = Object.entries(groups);
  return (
  <section id={id} className="section section--compact">
      <Container size="xl">
        <h2 className="section-title">Кто я?</h2>
        <div className="skills-grid">
          {entries.map(([group, items]) => (
            <div className="skills-col" key={group}>
              <h3>{group}</h3>
              <div className="skills-chips" role="list">
                {items.map((i) => (
                  <span key={i} role="listitem" className="chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
