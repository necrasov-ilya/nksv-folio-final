import './Container.css';

const Container = ({ children, size = 'default', bleed = false, className = '' }) => {
  const classes = [
    'container',
    `container--${size}`,
    bleed ? 'container--bleed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

export default Container;
