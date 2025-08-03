import { projectsData } from '../../shared/api/projectsData';
import Button from '../../shared/ui/Button/Button';
import './Projects.css';

const Projects = () => {
  const featuredProjects = projectsData.slice(0, 6); // Показываем первые 6 проектов

  return (
    <div className="projects">
      <div className="projects__header">
        <h2 className="projects__title typography-h2">Последние проекты</h2>
        <p className="projects__subtitle typography-body">
          Краткий обзор последних работ и решений
        </p>
      </div>

      <div className="projects__grid">
        {featuredProjects.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__image">
              <img
                src={project.image}
                alt={project.title}
                className="projects__img"
              />
              <div className="projects__category">
                {project.category === 'web-development' && 'Веб-разработка'}
                {project.category === 'design' && 'Дизайн'}
                {project.category === 'photography' && 'Фотография'}
              </div>
            </div>

            <div className="projects__content">
              <h3 className="projects__card-title typography-h3">
                {project.title}
              </h3>

              <p className="projects__description typography-body">
                {project.description}
              </p>

              <div className="projects__footer">
                <div className="projects__technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="projects__tech">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="projects__tech-more">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="projects__actions">
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Посмотреть →
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects__more">
        <Button
          variant="secondary"
          size="large"
          onClick={() => {
            const portfolioSection = document.getElementById('portfolio');
            portfolioSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Смотреть все проекты
        </Button>
      </div>
    </div>
  );
};

export default Projects;
