import React, { useState } from 'react';

// Popover component
export const Popover = ({ children }) => {
  return <div className="relative">{children}</div>;
};

// PopoverTrigger component
export const PopoverTrigger = ({ asChild, children }) => {
  return <>{children}</>;
};

// PopoverContent component
export const PopoverContent = ({ children, className }) => {
  return (
    <div className={`absolute z-10 mt-2 p-4 border rounded-lg shadow-lg bg-white ${className}`}>
      {children}
    </div>
  );
};
