import { useEffect, useRef, useState } from 'react';
import '../../assets/animations.css';

const Reveal = ({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'fade-up',
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  const classes = [
    'reveal',
    variant ? `reveal--${variant}` : '',
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
