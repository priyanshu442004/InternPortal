import { FaArrowRight } from "react-icons/fa6";

import React, { useState } from 'react';

const SlideToReply = () => {
  const [isDragging, setIsDragging] = useState(false); 
  const [position, setPosition] = useState(0); 
  const [message, setMessage] =useState("Slide To Reply")    

  
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  
  const handleMouseUp = () => {
    if (position > 150) {
      setMessage("Reply Sent")
    }
    setTimeout(()=>{
        setMessage("Slide To Reply")
    },3000)
    setIsDragging(false);
    setPosition(0); 
  };

 
  const handleMouseMove = (e) => {
    if (isDragging) {
      const slider = e.currentTarget.getBoundingClientRect();
      let newPosition = e.clientX - slider.left - 20;  
      if (newPosition >= 0 && newPosition <= slider.width - 40) {
        setPosition(newPosition);
      }
    }
  };

  return (
    <div
      className="relative flex items-center justify-center w-[250px] h-[40px] bg-gradient-to-r from-[#89a1de] via-[#8b8ede] to-[#907be0] rounded-full select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
    >
      <div className="absolute text-black font-semibold text-[16px]  pointer-events-none">
        {message}
      </div>

      {/* Sliding arrow */}
      <div
        className={`absolute top-1 left-1 w-[2.6vw] h-[2.6vw] bg-[#0c1ae0] rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform duration-200 ease-in-out `}
        onMouseDown={handleMouseDown}
        style={{ transform: `translateX(${position}vw)` }}
      >
        <FaArrowRight className="h-6 w-6"/>
      </div>
    </div>
  );
};

export default SlideToReply;
