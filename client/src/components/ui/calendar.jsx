import React from 'react';

export const Calendar = ({ selected, onSelect }) => {
  const handleDateChange = (e) => {
    onSelect(new Date(e.target.value));
  };

  return (
    <input
      type="date"
      value={selected ? selected.toISOString().substring(0, 10) : ''}
      onChange={handleDateChange}
    />
  );
};
