import { useState } from 'react';
import { faqData } from '../../shared/api/personalData';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="faq">
      <div className="faq__header">
        <h2 className="faq__title typography-h2">Часто задаваемые вопросы</h2>
        <p className="faq__subtitle typography-body">
          Ответы на популярные вопросы о процессе работы и услугах
        </p>
      </div>

      <div className="faq__list">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`faq__item ${openItems.has(item.id) ? 'faq__item--open' : ''}`}
          >
            <button
              className="faq__question"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.has(item.id)}
            >
              <span className="faq__question-text typography-h3">
                {item.question}
              </span>
              <span className="faq__toggle">
                <svg
                  className="faq__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div className="faq__answer-wrapper">
              <div className="faq__answer">
                <p className="faq__answer-text typography-body">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="faq__contact">
        <div className="faq__contact-content">
          <h3 className="faq__contact-title typography-h3">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="faq__contact-text typography-body">
            Свяжитесь со мной напрямую, и я отвечу в течение нескольких часов
          </p>
          <div className="faq__contact-methods">
            <a
              href="https://t.me/ilya_nksv"
              className="faq__contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Telegram
            </a>
            <a
              href="mailto:ilya.nekrasov@example.com"
              className="faq__contact-link"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
