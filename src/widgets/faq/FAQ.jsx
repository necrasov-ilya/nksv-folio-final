import React, { useState } from 'react';
import { useRevealOnScroll } from '../../shared/hooks/useRevealOnScroll';
import './FAQ.css';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);
    const sectionRef = useRevealOnScroll();

    const faqData = [
        { id: 1, question: 'Как строится процесс работы?', answer: 'Стартуем с цели и ограничений, фиксируем критерии успеха. Далее быстрые итерации: прототип → проверка → доработка. Регулярные демо и прозрачный бэклог.' },
        { id: 2, question: 'Сроки и этапы', answer: 'Типовой цикл: оценка и план → прототип → реализация → тестирование → релиз. Небольшие поставки каждую неделю. Срок зависит от объёма и рисков.' },
        { id: 3, question: 'Коммуникации и отчётность', answer: 'Созваниваемся по графику, все решения фиксируются. Краткие отчёты по прогрессу и метрикам. Инструменты — по вашему стеку.' },
        { id: 4, question: 'Поддержка после релиза', answer: 'Гарантийный период и план стабилизации. По договорённости — сопровождение, развитие, контроль качества релизов.' },
        { id: 5, question: 'Стоимость и модели сотрудничества', answer: 'Фикс/тайм‑энд‑материал/ретейнер — выбираем под задачу. Предварительная оценка и рамочный бюджет перед стартом.' },
        { id: 6, question: 'Конфиденциальность и права', answer: 'NDA по запросу. Исключительные права — по договорённости и условиям проекта.' },
        { id: 7, question: 'Что нужно от клиента на старте', answer: 'Контекст, цели, ограничения, доступы и ответственное лицо для принятия решений. Желательно — материалы и примеры.' },
        { id: 8, question: 'Технологии', answer: 'Подбираются под задачу. Перечень и версии уточняются на этапе планирования и заполняются позже.' },
        { id: 9, question: 'Риски и изменения', answer: 'Риски фиксируем в начале, пересматриваем каждую итерацию. Изменения оформляются отдельными задачами с оценкой.' },
        { id: 10, question: 'Как начать', answer: 'Напишите в Telegram — обсудим цели, сбор вводных, базовую оценку и таймлайн.' },
    ];

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="faq" className="faq" ref={sectionRef}>
            <div className="faq-container">
                <div className="faq-content js-reveal">
                    <div className="faq-main">
                        <h2 className="faq-title">Ответы на вопросы</h2>
                        <p className="faq-subtitle">Коротко о процессе, сроках и взаимодействии</p>

                        <div className="faq-list">
                            {faqData.map((item) => (
                                <div key={item.id} className={`faq-item ${openItem === item.id ? 'active' : ''}`}>
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleItem(item.id)}
                                        aria-expanded={openItem === item.id}
                                        aria-controls={`faq-${item.id}`}
                                        id={`faq-btn-${item.id}`}
                                    >
                                        <span className="faq-question-text">{item.question}</span>
                                        <span className="faq-icon" aria-hidden="true">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 8L12 16M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className="faq-answer" id={`faq-${item.id}`} role="region" aria-labelledby={`faq-btn-${item.id}`}>
                                        <div className="faq-answer-content">{item.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
