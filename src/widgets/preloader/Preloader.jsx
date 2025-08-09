import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => {
      if (!reduce) {
        setHidden(true);
        setTimeout(onComplete, 300);
      } else {
        onComplete();
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${hidden ? 'preloader--hidden' : ''}`} role="status" aria-live="polite">
      <div className="preloader__spinner" />
    </div>
  );
};

export default Preloader;
