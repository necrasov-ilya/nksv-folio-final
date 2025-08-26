import Container from '../../shared/ui/Container/Container';
import PLACEHOLDER_SMALL_1 from './media/placeholder-small-1.png';
import PLACEHOLDER_SMALL_2 from './media/placeholder-small-2.png';
import PLACEHOLDER_LARGE from './media/placeholder-large.png';
import './SkillsGallery.css';



import { useState } from 'react';

const skills = [
  {
    img: PLACEHOLDER_SMALL_1,
    badge: 'Design',
    title: 'Дизайн',
    desc: 'Создаю современные UI, работаю с Figma, делаю адаптивные макеты.',
    type: 'small',
  },
  {
    img: PLACEHOLDER_SMALL_2,
    badge: 'Photo',
    title: 'Фотография',
    desc: 'Обрабатываю фото, работаю с цветом, делаю креативные снимки.',
    type: 'small',
  },
  {
    img: PLACEHOLDER_LARGE,
    badge: 'Web / Code',
    title: 'Веб-разработка',
    desc: 'Пишу сайты и приложения на React, делаю анимации, оптимизирую под SEO.',
    type: 'large',
  },
];

const SkillsGallery = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const handleTileClick = idx => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section id="skills" className="section skills-gallery">
      <Container size="large">
        <header className="skills-gallery__head">
          <h2 className="skills-gallery__title">Что я умею?</h2>
        </header>
        <div className="skills-gallery__grid">
          {skills.map((skill, idx) => (
            <div
              key={skill.badge}
              className={`tile tile--${skill.type}`}
              tabIndex={0}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              onClick={() => handleTileClick(idx)}
              aria-label={skill.badge}
            >
              <img src={skill.img} alt={skill.badge} loading="lazy" decoding="async" />
              <span className="tile__badge">{skill.badge}</span>
              <div className={`tile__overlay${activeIdx === idx ? ' tile__overlay--active' : ''}`}>
                <div className="tile__overlay-content">
                  <div className="tile__overlay-title">{skill.title}</div>
                  <div className="tile__overlay-desc">{skill.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsGallery;
