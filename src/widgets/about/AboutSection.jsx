import Container from '../../shared/ui/Container/Container';
import './AboutSection.css';

const avatar = 'https://placehold.co/160x160/1F1F1F/F2F2F2.png?text=Avatar';

const AboutSection = ({
  id = 'about',
  text = 'Инженер фронтенда с упором на производительность и дизайн-системы. Делаю интерфейсы, которые двигают продукт и не ломают скорость релизов.',
  tags = ['React', 'Vite', 'CSS-in-CSS', 'Design systems', 'Perf'],
}) => {
  return (
  <section id={id} className="section section--compact">
      <Container size="xl">
        <div className="about section--panel">
          <img src={avatar} alt="Avatar" className="about__avatar" loading="lazy" decoding="async" />
          <div className="about__content">
            <h2 className="about__title">О себе</h2>
            <p className="about__text">{text}</p>
            <div className="about__tags" role="list">
              {tags.map((t) => (
                <span key={t} role="listitem" className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
