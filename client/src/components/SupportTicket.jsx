import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';

const SupportTicket = ({ name, issue, onClick }) => {
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
                src=''
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
