import Container from '../../shared/ui/Container/Container';
import './HeroSection.css';
import tgIcon from '../../shared/assets/svg/social/telegram-logo-light.svg';
import heroPortrait from './media/nksv-portrait.png';

const defaultPortrait = {
  desktop: heroPortrait,
  mobile: heroPortrait,
};

const HeroSection = ({
  kicker = 'Web • UI/UX • Техконсалт',
  title = 'Илья Некрасов',
  subtitle = 'Делаю быстрые, выразительные веб-интерфейсы и помогаю бизнесу принимать техрешения.',
  portrait = defaultPortrait,
  ctaPrimaryHref = 'https://t.me/',
  ctaSecondaryHref = '#portfolio',
}) => {
  return (
  <section className="section section--expanded hero">
      <Container size="xl" bleed>
        <div className="hero__inner">
          <div className="hero__content" aria-live="polite">
            <p className="hero__kicker">{kicker}</p>
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={ctaPrimaryHref} target="_blank" rel="noreferrer">
                <img className="btn__icon" src={tgIcon} alt="" aria-hidden />
                <span className="btn__label">Telegram</span>
              </a>
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
