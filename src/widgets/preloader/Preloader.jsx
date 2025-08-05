import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(onComplete, 300);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader ${!isAnimating ? 'preloader--hidden' : ''}`}>
      {/* Видео фон */}
      <video
        className="preloader__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/src/widgets/preloader/media/animate-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay для затемнения */}
      <div className="preloader__overlay" />

      <div className="preloader__content">
        <div className="logo-animation">
          {/* Точная копия вашего NKSV логотипа */}
          <svg className="nksv-logo" width="337" height="526" viewBox="0 0 337 526" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Правый длинный овал */}
            <rect
              className="logo-element logo-element--right-long"
              x="194.93"
              y="333.799"
              width="318.799"
              height="127.07"
              rx="63.535"
              transform="rotate(-90 194.93 333.799)"
              stroke="white"
              strokeWidth="30"
              fill="none"
            />

            {/* Правый круглый элемент (снизу) */}
            <rect
              className="logo-element logo-element--right-circle"
              x="194.93"
              y="510.779"
              width="127.07"
              height="127.07"
              rx="63.535"
              transform="rotate(-90 194.93 510.779)"
              stroke="white"
              strokeWidth="30"
              fill="none"
            />

            {/* Левый длинный овал */}
            <rect
              className="logo-element logo-element--left-long"
              x="142.07"
              y="191.98"
              width="318.799"
              height="127.07"
              rx="63.535"
              transform="rotate(90 142.07 191.98)"
              stroke="white"
              strokeWidth="30"
              fill="none"
            />

            {/* Левый круглый элемент (сверху) */}
            <rect
              className="logo-element logo-element--left-circle"
              x="142.07"
              y="15"
              width="127.07"
              height="127.07"
              rx="63.535"
              transform="rotate(90 142.07 15)"
              stroke="white"
              strokeWidth="30"
              fill="none"
            />
          </svg>
        </div>

        {/* Прогресс бар */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {Math.floor(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
