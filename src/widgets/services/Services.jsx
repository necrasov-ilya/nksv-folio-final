import { servicesData } from '../../shared/api/servicesData';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="services__header">
        <h2 className="services__title typography-h2">Мои услуги</h2>
        <p className="services__subtitle typography-body">
          Предоставляю полный спектр услуг по разработке и дизайну
        </p>
      </div>

      <div className="services__grid">
        {servicesData.map((service) => (
          <div key={service.id} className="services__card">
            <div className="services__card-icon">
              <span className="services__icon">{service.icon}</span>
            </div>

            <div className="services__card-content">
              <h3 className="services__card-title typography-h3">
                {service.title}
              </h3>

              <p className="services__card-description typography-body">
                {service.description}
              </p>

              <div className="services__features">
                {service.features.map((feature, index) => (
                  <span key={index} className="services__feature">
                    ✓ {feature}
                  </span>
                ))}
              </div>

              <div className="services__technologies">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="services__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="services__price">
                <span className="services__price-text">{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
