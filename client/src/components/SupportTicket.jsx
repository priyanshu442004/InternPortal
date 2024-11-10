import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';

const SupportTicket = ({ name, issue, gender, onClick }) => {
  const malePic="https://i.pinimg.com/originals/22/f8/1f/22f81f5c4011da6a803d997260b2c772.jpg"
  const femalePic="https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-girl-avatar-png-image_4492903.jpg";
  return (
    <div className="p-4">
      
      <ul className="space-y-2">
          <li
            className="flex items-center justify-between bg-gray-50 p-2 rounded-full shadow-md hover:cursor-pointer"
            onClick={onClick}
          >
            {/* Avatar and Ticket Details */}
            <div className="flex items-center w-[25vw]">
              <img
                src={gender=='male'?`${femalePic}`:`${malePic}`}
                alt={name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{issue}</p>
              </div>
            </div>

            {/* Chat Icon */}
            <BsChatSquareDots className="text-xl text-gray-400 mr-2 " />
          </li>
        
      </ul>

      
    </div>
  );
};

export default SupportTicket;
