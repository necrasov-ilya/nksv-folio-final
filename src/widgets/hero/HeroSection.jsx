import Container from '../../shared/ui/Container/Container';
import './HeroSection.css';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import Button from '../../shared/ui/Button/Button';
import heroPortrait from './media/nksv-portrait.png';
import mobileHeroPortrait from './media/nksv-portrait-mobile.png';

const defaultPortrait = {
  desktop: heroPortrait,
  mobile: mobileHeroPortrait,
};

const HeroSection = ({
  kicker = 'Web • UI/UX • Техконсалт',
  title = 'Илья Некрасов',
  subtitle = 'Делаю быстрые, выразительные веб-интерфейсы и помогаю бизнесу принимать техрешения.',
  portrait = defaultPortrait,
  ctaPrimaryHref = 'https://t.me/nksv_ilya',
  ctaSecondaryHref = '#portfolio',
}) => {
  return (
  <section className="section section--expanded hero" id="hero">
      <Container size="xl" bleed>
        <div className="hero__inner">
          <div className="hero__content" aria-live="polite">
            <p className="hero__kicker">{kicker}</p>
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
            <div className="hero__actions">
              <Button
                href={ctaPrimaryHref}
                target="_blank"
                variant="primary"
                size="large"
                className="hero__cta"
                aria-label="Связаться со мной"
              >
                <img className="hero__cta-icon" src={tgIcon} alt="" aria-hidden />
                <span>Связаться со мной</span>
              </Button>
              <a className="btn btn--secondary" href={ctaSecondaryHref}>Смотреть работы</a>
            </div>
          </div>

          <div className="hero__visual">
            <img
              className="hero__img"
              src={portrait.desktop}
              alt="Portrait"
              loading="eager"
              decoding="async"
              srcSet={`${portrait.desktop} 1x, ${portrait.desktop} 2x`}
            />
            <img
              className="hero__img-mobile"
              src={portrait.mobile}
              alt="Portrait"
              loading="eager"
              decoding="async"
              width="160"
              height="160"
            />
          </div>
        </div>
      </Container>
      <div className="section__radial-bg" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
