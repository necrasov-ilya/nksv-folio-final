import { skillsData } from '../../shared/api/servicesData';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__header">
        <h2 className="skills__title typography-h2">Навыки и технологии</h2>
        <p className="skills__subtitle typography-body">
          Технический стек и уровень владения инструментами
        </p>
      </div>

      <div className="skills__categories">
        {skillsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skills__category">
            <h3 className="skills__category-title typography-h3">
              {category.category}
            </h3>

            <div className="skills__items">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skills__item">
                  <div className="skills__item-header">
                    <span className="skills__skill-name">{skill.name}</span>
                    <span className="skills__skill-experience">{skill.experience}</span>
                  </div>

                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      <span className="skills__progress-text">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
