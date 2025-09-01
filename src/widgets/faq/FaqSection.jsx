import { useState, useRef, useEffect } from 'react';
import faqPlaceholder from './assets/faq-placeholder.png';
import Container from '../../shared/ui/Container/Container';
import './FaqSection.css';

const defaultItems = [
  {
    q: 'Как проходит работа?',
    a: 'Стартуем с короткого брифа и фикса целей. Затем прототип/макет, согласование и итеративная разработка с демо раз в 1–2 недели.'
  },
  {
    q: 'Сроки выполнения?',
    a: 'Оцениваю по объёму и рискам, разбиваю на этапы с контрольными точками. На каждом этапе фиксируем результат и планируем следующий.'
  },
  {
    q: 'Формат оплаты?',
    a: 'Фикс за этапы или почасовая оплата (T&M) — по задаче. Предоплата за первый этап, дальше — по факту выполненного объёма.'
  },
  {
    q: 'Как обеспечивается качество?',
    a: 'Код-ревью, линтеры и автопроверки, сборки через CI. На проде — мониторинг и логирование, чтобы ловить проблемы раннее.'
  },
  {
    q: 'Что с поддержкой после релиза?',
    a: 'Делаю пострелизное сопровождение: фикс багов, мелкие улучшения, оптимизация. По договорённости — SLA и регламент реакции.'
  },
  {
    q: 'Кому принадлежат права?',
    a: 'Исключительные права на результат передаются заказчику. Репозитории и доступы остаются у вас; я помогаю с переносом.'
  },
  {
    q: 'Как общаемся и согласовываем?',
    a: 'Основные каналы — Telegram и почта, созвоны по необходимости. Воркфлоу прозрачен: статусы задач, чекпоинты, короткие отчёты.'
  },
  {
    q: 'Можно ли подключиться к уже идущему проекту?',
    a: 'Да. Провожу экспресс-аудит, согласую план входа, расставляю приоритеты. Начинаем с быстрых побед и снятия узких мест.'
  },
];

const FaqItem = ({ q, a, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // When opened, measure scrollHeight and animate to that height, then set auto.
    if (isOpen) {
      const h = el.scrollHeight;
      el.style.height = h + 'px';
      el.style.opacity = '1';
      el.style.paddingTop = '4px';
      el.style.paddingBottom = '16px';

      const onEnd = (e) => {
        if (e.propertyName === 'height') {
          el.style.height = 'auto';
          el.removeEventListener('transitionend', onEnd);
        }
      };
      el.addEventListener('transitionend', onEnd);
    } else {
      // Collapse: if currently auto, set fixed pixel height first to enable transition
      if (getComputedStyle(el).height === 'auto') {
        el.style.height = el.scrollHeight + 'px';
        // force reflow
        void el.offsetHeight;
      }
      el.style.height = '0px';
      el.style.opacity = '0';
      el.style.paddingTop = '0px';
      el.style.paddingBottom = '0px';
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="faq-item__q" onClick={onToggle} aria-expanded={isOpen}>
        {q}
        <span className="faq-item__icon" aria-hidden>{isOpen ? '\u2212' : '+'}</span>
      </button>
      <div className="faq-item__a" role="region" ref={contentRef} style={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}>{a}</div>
    </div>
  );
};

const FaqSection = ({ id = 'faq', items = defaultItems }) => {
  const [open, setOpen] = useState(0);
  return (
    <section id={id} className="section">
      <Container size="xl">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-layout">
          <div className="faq">
            {items.map((it, idx) => (
              <FaqItem key={it.q} {...it} isOpen={open === idx} onToggle={() => setOpen(open === idx ? -1 : idx)} />
            ))}
          </div>
          <div className="faq-layout__media" aria-hidden>
            <img className="faq-layout__img" src={faqPlaceholder} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
