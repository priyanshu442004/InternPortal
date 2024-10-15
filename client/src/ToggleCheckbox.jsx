import React, { useState } from 'react';

const ToggleCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e) => {
    setIsChecked(!isChecked);
    const { name } = e.target;
    setNotifications({
      ...notifications,
      [name]: !notifications[name],
    });
    console.log({name})
  };

  return (
    <label className="pl-4 relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={` w-14 h-6 bg-gray-400 rounded-full peer-checked:bg-purple-700 relative transition-colors duration-300 `}
      >
        {/* Outer Circle */}
        <div
          className={`absolute top-[1.1vw] left-[2.4vw] transform  -translate-y-[1.6vw] w-9 h-9 bg-blue-300 opacity-20 rounded-full transition-all duration-300 ${
            isChecked ? "-translate-x-[0.1vw] scale-125 bg-purple-300 opacity-75" : "-translate-x-2/3"
          }`}
        ></div>
        
        {/* Inner Switch */}
        <div
          className={`absolute -top-[0.1vw] left-1 bg-white border border-gray-300 rounded-full h-7 w-7 transform transition-transform duration-300 ${
            isChecked ? "translate-x-6" : ""
          } flex items-center justify-center`}
        >
          {isChecked && (
            <span className="text-purple-700 text-lg">✔️</span>
          )}
        </div>
      </div>
    </label>
  );
};

export default ToggleCheckbox;
