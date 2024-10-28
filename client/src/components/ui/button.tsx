import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md text-white";
  const variantStyles = {
    default: "bg-blue-500 hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 bg-transparent",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};
