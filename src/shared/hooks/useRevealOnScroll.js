import { useEffect } from 'react';

/**
 * Adds 'is-visible' class to elements with the class 'js-reveal' inside the provided root element
 * when they intersect viewport. Respects prefers-reduced-motion.
 *
 * Usage: const rootRef = useRevealOnScroll(); <section ref={rootRef}> ... <div class="js-reveal"/> ...</section>
 */
export function useRevealOnScroll(options = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }) {
  return (node) => {
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(node.querySelectorAll('.js-reveal'));

    if (!items.length) return;

    if (reduce || typeof IntersectionObserver === 'undefined') {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, options);

    items.forEach((el, idx) => {
      el.style.transitionDelay = `${Math.min(idx * 60, 360)}ms`;
      io.observe(el);
    });

    // cleanup
    return () => io.disconnect();
  };
}
