import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "Какие технологии вы используете в разработке?",
            answer: "Я специализируюсь на современных технологиях: React, Vue.js, Node.js, TypeScript, а также работаю с дизайном в Figma и Adobe Creative Suite."
        },
        {
            id: 2,
            question: "Сколько времени занимает разработка проекта?",
            answer: "Время разработки зависит от сложности проекта. Простой лендинг может быть готов за 1-2 недели, комплексное веб-приложение — от 1 до 3 месяцев."
        },
        {
            id: 3,
            question: "Предоставляете ли вы техническую поддержку?",
            answer: "Да, я предоставляю техническую поддержку в течение 6 месяцев после завершения проекта, а также предлагаю услуги по дальнейшему развитию и обновлению."
        },
        {
            id: 4,
            question: "Работаете ли вы с международными клиентами?",
            answer: "Конечно! Я работаю с клиентами по всему миру. Общение ведется на русском и английском языках, используем удобные для вас каналы связи."
        },
        {
            id: 5,
            question: "Как происходит процесс разработки?",
            answer: "Процесс включает: анализ требований, создание дизайн-макетов, разработку, тестирование и запуск. Вы получаете регулярные обновления на каждом этапе."
        }
    ];

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="faq" className="faq">
            <div className="faq-container">
                <div className="faq-content">
                    <div className="faq-image">
                        <img src="/nksv-folio/assets/images/faq/left-block.png" alt="FAQ illustration" draggable="false" />
                    </div>
                    <div className="faq-main">
                        <h2 className="faq-title">Часто задаваемые вопросы</h2>
                        <p className="faq-subtitle">
                            Ответы на самые популярные вопросы о процессе работы и услугах
                        </p>

                        <div className="faq-list">
                            {faqData.map((item) => (
                                <div key={item.id} className={`faq-item ${openItem === item.id ? 'active' : ''}`}>
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleItem(item.id)}
                                        aria-expanded={openItem === item.id}
                                    >
                                        <span className="faq-question-text">{item.question}</span>
                                        <span className="faq-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M12 8L12 16M8 12L16 12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className="faq-answer">
                                        <div className="faq-answer-content">
                                            {item.answer}
                                        </div>
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
