import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import SlideToReply from './SlideToReply';

const TicketDetails = ({ ticket, selectTicket }) => {
  const [isSlid, setIsSlid] = useState(false); // Track if the button is fully slid
  const [position, setPosition] = useState(0);
  

  // Reset the slider (optional)
  const handleReset = () => {
    setPosition(0);
    setIsSlid(false);
  };

  const goBack=()=>{
    selectTicket(null)
  }

  return (
    <div className='flex flex-col space-y-2 items-center justify-center'>
    <div className="bg-white p-6 rounded-md shadow-md w-[90%]">
      {/* Ticket Header */}
      <div className="flex items-center justify-between mb-6 border-b-4 pb-4">
        <div className="flex items-center space-x-3">
          <div className='flex justify-between space-x-3'>
          <p className='text-2xl hover:cursor-pointer' onClick={goBack}>{'<'}</p>
          <img
            src="" 
            alt={ticket.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          </div>
        
          <div>
            
            <h3 className="text-lg font-bold">{ticket.name}</h3>
          </div>
        </div>
        <div>
          <HiOutlineDotsHorizontal className='hover:text-black hover:cursor-pointer h-5 w-5'/>
        </div>
      </div>


      {/* Conversation Section */}
      <div className="mb-6">
            <p className="text-xl text-black font-semibold">Ticket #{ticket.ticketId}</p>
    <div className='w-full flex items-center justify-center flex-col'>

            <p className="text-sm text-blue-400">{ticket.date}</p>
          <p className="text-sm text-blue-400">{ticket.time}</p>
    </div>

        <div className="mt-[1vw] flex flex-col space-y-[2vw]">
          <div className="bg-gray-200 p-4 rounded-md text-sm text-gray-800 w-max">
             Great, when can we have the meeting?
          </div>
          <div className="bg-gray-200 p-4 rounded-md text-sm text-gray-800 w-max">
             I have a discrepancy in my offer letter.
          </div>
          <div className="bg-gray-200 p-4 rounded-md text-sm text-gray-800 w-max">
           Can we connect on Meet?
            <br />
            I have queries regarding the internship.
          </div>
         {/* { <div className="bg-blue-100 p-3 rounded-md text-sm text-gray-800 w-max self-end">
            Support: 
          </div>} */}
        </div>
      </div>

      {/* Slide to Reply Section */}
      <div className='w-full flex justify-center items-center'>

      <SlideToReply />
      </div>

     

      {/* Ticket Status Section */}
      
    </div>
    <div className="bg-gray-50 pt-5 pl-6 pr-6 pb-5 rounded-md w-full bg-white shadow-lg">
    <div className="flex justify-between items-center mb-2 space-x-6">
      <div className='w-[80%]'>
        <p className="font-semibold text-lg">Ticket #{ticket.ticketId}</p>
        <p className="text-sm text-gray-500 mt-1">Details:</p>
        <p className="text-sm text-gray-600 mt-3">
      The ticket has been raised by {ticket.name} from the email address {ticket.email}.
      It states that they have discrepancies in their offer letter and are seeking a resolution.
      Please address the issue accordingly.
    </p>
      </div>
      <div className="flex flex-col w-[20%] space-y-2 bg-[#f7f7f7] rounded-[25px] shadow-lg p-3">
        <p className='text-black text-md font-semibold text-center'>
          Option
        </p>
        <button
          className={`px-1 py-1 rounded-full text-black ${
            ticket.status === 'Solved' ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          Solved
        </button>
        <button
          className={`px-1 py-1 rounded-full text-black ${
            ticket.status === 'Pending' ? 'bg-red-500' : 'bg-gray-300'
          }`}
        >
          Pending
        </button>
      </div>
    </div>

    {/* Ticket Description */}
    
  </div>
  </div>
  );
};

export default TicketDetails;
