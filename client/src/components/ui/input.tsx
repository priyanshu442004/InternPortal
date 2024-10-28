import React from 'react';

export const Input = ({ id, type = 'text', ...props }) => {
  return (
    <input
      id={id}
      type={type}
      className="px-3 py-2 border rounded-md w-full"
      {...props}
    />
  );
};
