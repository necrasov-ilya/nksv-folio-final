import './Container.css';

const Container = ({ children, size = 'default', className = '' }) => {
  const containerClass = `container container--${size} ${className}`.trim();

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

export default Container;
