'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RefreshCw } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500 shadow-lg',
    secondary: 'bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 focus:ring-orange-500',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-orange-600 hover:bg-orange-50 focus:ring-orange-500',
    gradient: 'bg-gradient-to-r from-orange-600 to-pink-600 text-white hover:from-orange-700 hover:to-pink-700 focus:ring-orange-500 shadow-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`.trim();

  const buttonContent = (
    <>
      {loading && (
        <RefreshCw size={20} className="animate-spin -ml-1 mr-2" />
      )}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes} {...props}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}
