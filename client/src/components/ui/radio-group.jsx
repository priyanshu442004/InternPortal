import React from 'react';

// RadioGroup component
export const RadioGroup = ({ children, ...props }) => {
  return (
    <div role="radiogroup" {...props}>
      {children}
    </div>
  );
};

// RadioGroupItem component
export const RadioGroupItem = ({ id, value, checked, onChange, ...props }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name="radio-group"
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
