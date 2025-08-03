import { useState } from 'react';
import { projectsData, projectCategories } from '../../shared/api/projectsData';
import Button from '../../shared/ui/Button/Button';
import './Portfolio.css';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);

    if (categoryId === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === categoryId));
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Завершен';
      case 'in-progress': return 'В разработке';
      default: return status;
    }
  };

  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <h2 className="portfolio__title typography-h2">Портфолио работ</h2>
        <p className="portfolio__subtitle typography-body">
          Избранные проекты с детальным описанием и использованными технологиями
        </p>
      </div>

      <div className="portfolio__filters">
        {projectCategories.map((category) => (
          <button
            key={category.id}
            className={`portfolio__filter ${
              activeCategory === category.id ? 'portfolio__filter--active' : ''
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      <div className="portfolio__grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio__card">
            <div className="portfolio__image">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio__img"
              />
              <div className="portfolio__overlay">
                <div className="portfolio__actions">
                  {project.link && (
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Посмотреть
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="portfolio__content">
              <div className="portfolio__meta">
                <span className={`portfolio__status portfolio__status--${project.status}`}>
                  {getStatusText(project.status)}
                </span>
                <span className="portfolio__year">{project.year}</span>
              </div>

              <h3 className="portfolio__card-title typography-h3">
                {project.title}
              </h3>

              <p className="portfolio__description typography-body">
                {project.description}
              </p>

              <div className="portfolio__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="portfolio__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="portfolio__empty">
          <p>Проекты в этой категории не найдены</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
