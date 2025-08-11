import { useState } from 'react';
import Container from '../../shared/ui/Container/Container';
import './FaqSection.css';

const defaultItems = [
  { q: 'Как устроен процесс?', a: 'Сбор требований, прототип, итерации — короткие циклы и ранняя проверка гипотез.' },
  { q: 'Сроки?', a: 'Оцениваю по сложностям, делю на этапы. Делаю прозрачный план и контрольные точки.' },
  { q: 'Оплата?', a: 'Фикс / спринты / T&M — как удобнее. Авансы по соглашению.' },
  { q: 'Поддержка?', a: 'Да, настраиваю мониторинг, алерты и помогаю развивать продукт.' },
  { q: 'Права?', a: 'Код и артефакты передаются, право использования — у заказчика.' },
  { q: 'Коммуникации?', a: 'Telegram / e-mail / calls. Быстрые апдейты и статусы.' },
];

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
    <button className="faq-item__q" onClick={onToggle} aria-expanded={isOpen}>
      {q}
      <span className="faq-item__icon" aria-hidden>+</span>
    </button>
    <div className="faq-item__a" role="region">{a}</div>
  </div>
);

const FaqSection = ({ id = 'faq', items = defaultItems }) => {
  const [open, setOpen] = useState(0);
  return (
    <section id={id} className="section">
      <Container size="xl">
        <h2 className="section-title">FAQ</h2>
        <div className="faq">
          {items.map((it, idx) => (
            <FaqItem key={it.q} {...it} isOpen={open === idx} onToggle={() => setOpen(open === idx ? -1 : idx)} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
