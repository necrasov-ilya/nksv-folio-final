import React, { useEffect, useRef } from 'react';
import './OverscrollStretch.css';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function atDocumentBottom() {
  const doc = document.documentElement;
  const gap = doc.scrollHeight - (window.scrollY + window.innerHeight);
  return gap <= 0.5; // строгая проверка низа
}

function footerTouchesViewport() {
  const footer = document.getElementById('footer');
  if (!footer) return false;
  const r = footer.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom <= window.innerHeight + 2;
}

export default function OverscrollStretch({ maxBoost = 1.25 }) {
  const ref = useRef(null);
  const stateRef = useRef({ value: 0, target: 0, touchStartY: null, reduce: false, raf: 0 });

  useEffect(() => {
    const state = stateRef.current;
    state.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (state.reduce) return;

    const canEngage = () => atDocumentBottom() && footerTouchesViewport();

    const onWheel = (e) => {
      if (!canEngage()) return;
      if (e.deltaY > 0) {
        state.target = clamp(state.target + e.deltaY * 0.002, 0, maxBoost);
      }
    };

    const onTouchStart = (e) => {
      if (e.touches && e.touches.length) {
        state.touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (!canEngage() || state.touchStartY == null) return;
      const y = e.touches[0].clientY;
      const dy = state.touchStartY - y; // positive when swiping up (trying to scroll further down)
      if (dy > 0) {
        state.target = clamp(state.target + dy * 0.02, 0, maxBoost);
      }
    };

    const onTouchEnd = () => {
      state.touchStartY = null;
    };

    const animate = () => {
      const el = ref.current;
      if (!el) return;
      // Dampen target and ease value towards it
      state.target *= 0.9; // friction
      state.value += (state.target - state.value) * 0.18; // springy ease
      if (state.value < 0.001) state.value = 0;

      // Apply visualisation
      const engaged = canEngage();
      const k = clamp(state.value, 0, maxBoost);
      el.style.setProperty('--os-k', String(k));
      el.style.opacity = engaged ? String(clamp(k * 0.9, 0, 1)) : '0';

      state.raf = requestAnimationFrame(animate);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    state.raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [maxBoost]);

  return (
    <div className="overscroll-stretch" aria-hidden="true">
      <div ref={ref} className="overscroll-stretch__blob">
        <div className="overscroll-stretch__line" />
      </div>
    </div>
  );
}
