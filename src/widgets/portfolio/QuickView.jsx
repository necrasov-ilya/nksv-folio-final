import Modal from '../../shared/ui/Modal/Modal';
import placeholderImg from '../skillsGallery/media/placeholder-large.png';

const QuickView = ({ open, onClose, item }) => {
  if (!open || !item) return null;
  const src = item.coverUrl || item.image || placeholderImg;
  const alt = item.title ? `${item.title} — обложка` : 'Обложка кейса';
  return (
    <Modal open={open} onClose={onClose}>
      <img
        className="modal__media"
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onError={(e) => { if (e.currentTarget.src !== placeholderImg) e.currentTarget.src = placeholderImg; }}
      />
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
    </Modal>
  );
};

export default QuickView;
