import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'bg-accent text-dark hover:bg-accent/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-white dark:hover:text-white',
    ghost: 'text-primary hover:bg-primary/10 dark:text-white dark:hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;