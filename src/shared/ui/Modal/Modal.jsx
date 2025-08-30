import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <button className="modal__backdrop" aria-label="Close" onClick={onClose} />
      <div className="modal__panel" role="document">
        {children}
      </div>
    </div>
  );
};

export default Modal;
