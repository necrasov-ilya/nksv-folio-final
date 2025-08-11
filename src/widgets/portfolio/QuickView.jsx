import { useEffect } from 'react';
import './PortfolioSection.css';

const QuickView = ({ open, onClose, item }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !item) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <button className="modal__backdrop" aria-label="Close" onClick={onClose} />
      <div className="modal__panel" role="document">
        <img src={item.coverUrl} alt="Cover" loading="eager" decoding="async" />
        <div className="modal__body">
          <h3>{item.title}</h3>
          <p className="muted">{item.summary}</p>
          <div className="kv">
            <span>Год</span><span>{item.year}</span>
            <span>Роль</span><span>{item.role}</span>
            <span>Стек</span><span>{item.tech?.join(', ')}</span>
            <span>Статус</span><span>{item.status}</span>
          </div>
          <div className="modal__actions">
            {item?.links?.live && (
              <a className="btn btn--primary" href={item.links.live} target="_blank" rel="noreferrer">Live</a>
            )}
            {item?.links?.repo && (
              <a className="btn btn--secondary" href={item.links.repo} target="_blank" rel="noreferrer">Repo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
