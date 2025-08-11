import Container from '../../shared/ui/Container/Container';
import './SkillsGallery.css';

const PLACEHOLDER_SMALL_1 = 'https://placehold.co/560x320/1F1F1F/F2F2F2.png?text=Design%20560x320';
const PLACEHOLDER_SMALL_2 = 'https://placehold.co/560x320/1F1F1F/F2F2F2.png?text=Photo%20560x320';
const PLACEHOLDER_LARGE   = 'https://placehold.co/1200x560/161616/F2F2F2.png?text=Web%20%E2%80%94%20Code%201200x560';

const SkillsGallery = () => {
  return (
    <section id="skills" className="section skills-gallery">
      <Container size="large">
        <header className="skills-gallery__head">
          <h2 className="skills-gallery__title">Навыки</h2>
        </header>

        <div className="skills-gallery__grid">
          <a className="tile tile--small" href="#" aria-label="Design">
            <img src={PLACEHOLDER_SMALL_1} alt="Design" loading="lazy" decoding="async" />
            <span className="tile__badge">Design</span>
          </a>

          <a className="tile tile--small" href="#" aria-label="Photo">
            <img src={PLACEHOLDER_SMALL_2} alt="Photo" loading="lazy" decoding="async" />
            <span className="tile__badge">Photo</span>
          </a>

          <a className="tile tile--large" href="#" aria-label="Web / Code">
            <img src={PLACEHOLDER_LARGE} alt="Web / Code" loading="lazy" decoding="async" />
            <span className="tile__badge">Web / Code</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default SkillsGallery;
