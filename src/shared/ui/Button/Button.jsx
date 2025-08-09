import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  as,
  href,
  ...props
}) => {
  const buttonClass = `
    button 
    button--${variant} 
    button--${size} 
    ${disabled ? 'button--disabled' : ''} 
    ${className}
  `.trim();

  if (as === 'a') {
    return (
      <a
        className={buttonClass}
        href={href}
        onClick={onClick}
        aria-disabled={disabled || undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
