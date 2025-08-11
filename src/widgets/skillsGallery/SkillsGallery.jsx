import Container from '../../shared/ui/Container/Container';
import PLACEHOLDER_SMALL_1 from './media/placeholder-small-1.png';
import PLACEHOLDER_SMALL_2 from './media/placeholder-small-2.png';
import PLACEHOLDER_LARGE from './media/placeholder-large.png';
import './SkillsGallery.css';


const SkillsGallery = () => {
  return (
    <section id="skills" className="section skills-gallery">
      <Container size="large">
        <header className="skills-gallery__head">
          <h2 className="skills-gallery__title">Что я умею?</h2>
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
