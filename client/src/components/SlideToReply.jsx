import { FaArrowRight } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

import React, { useState } from "react";

const SlideToReply = ({ ticket }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [message, setMessage] = useState("Slide To Reply");
  const [showReplyBox, setShowReplyBox] = useState(false);
  console.log(ticket);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (position > 150) {
      setMessage("Reply Sent");
      setShowReplyBox(true);
    }
    setTimeout(() => {
      setMessage("Slide To Reply");
    }, 3000);
    setIsDragging(false);
    setPosition(0);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const slider = e.currentTarget.getBoundingClientRect();
      let newPosition = e.clientX - slider.left - 40;
      if (newPosition >= 0 && newPosition <= slider.width - 40) {
        setPosition(newPosition);
      }
    }
  };

  return showReplyBox ? (
    <div className="mt-[6vw] flex items-center justify-center">
      <form className="flex flex-row items-center">
      <input
            type="text"
            placeholder="reply.."
            className="border border-gray-300 rounded-lg py-2 pl-4 pr-10 outline-none focus:ring focus:ring-blue-400 w-full"
          />
          <button className="flex justify-center items-center flex-col mt-4">

        <IoMdSend className="text-4xl ml-4 hover:cursor-pointer"/>
        <p className="ml-4">send</p>
          </button>
        </form>
    </div>
  ) : (
    <div
      className="relative flex items-center justify-center w-[250px] h-[40px] bg-gradient-to-r from-[#89a1de] via-[#8b8ede] to-[#907be0] rounded-full select-none mt-[6vw]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute text-black font-semibold text-[16px]  pointer-events-none">
        {message}
      </div>

      {/* Sliding arrow */}
      <div
        className={`absolute top-[0.2vw] left-[0.2VW] w-[35px] h-[35px] bg-[#0c1ae0] rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform duration-200 ease-in-out `}
        onMouseDown={handleMouseDown}
        style={{ transform: `translateX(${position}px)` }}
      >
        <FaArrowRight className="h-6 w-6" />
      </div>
    </div>
  );
};

export default SlideToReply;
