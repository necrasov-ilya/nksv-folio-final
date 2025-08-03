import { personalData } from '../../shared/api/personalData';
import Button from '../../shared/ui/Button/Button';
import './About.css';

const About = () => {
  const { name, profession, description, contact, stats } = personalData;

  const handleContactClick = () => {
    window.open(`https://t.me/${contact.telegram.replace('@', '')}`, '_blank');
  };

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h1 className="about__title typography-h1">
              Привет, я <span className="about__name">{name}</span>
            </h1>

            <p className="about__profession typography-h2">
              {profession}
            </p>

            <p className="about__description typography-body">
              {description}
            </p>

            <div className="about__actions">
              <Button
                variant="primary"
                size="large"
                onClick={handleContactClick}
              >
                Связаться в Telegram
              </Button>

              <Button
                variant="secondary"
                size="large"
                onClick={() => window.open(contact.github, '_blank')}
              >
                GitHub
              </Button>
            </div>

            <div className="about__stats">
              {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="about__stat">
                  <span className="about__stat-value">{value}</span>
                  <span className="about__stat-label">
                    {key === 'experience' && 'лет опыта'}
                    {key === 'projects' && 'проектов'}
                    {key === 'clients' && 'клиентов'}
                    {key === 'technologies' && 'технологий'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__image">
            <div className="about__avatar">
              <img
                src={personalData.avatar}
                alt={`${name} - портрет`}
                className="about__avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
