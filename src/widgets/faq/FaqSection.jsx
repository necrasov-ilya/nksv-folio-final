import { useState } from 'react';
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
