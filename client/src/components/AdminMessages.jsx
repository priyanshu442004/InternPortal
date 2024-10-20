import React, { useEffect, useState } from 'react';
import SupportTicket from './SupportTicket';
import Pagination from './Pagination'; 
import TicketDetails from './TicketDetails';

const AdminMessages = () => {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const ticketsPerPage = 6;

    useEffect(() => {
        fetch('/tickets.json')
            .then((response) => response.json())
            .then((data) => setTickets(data.tickets));
    }, []);

    // Get current tickets
    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket);
    };

    return (
        <div className="flex flex-col justify-center items-center bg-slate-50 w-full">
            <div className='w-full flex justify-start p-4'>
  <p className='w-full font-semibold text-gray-900 text-md text-left'>
      Messages
  </p>
</div>

<div className='flex flex-row'>
{/* Left side - Support tickets */}
<div className="mt-[3vw] ml-[5vw] bg-white p-3 rounded-md">
                <h2 className="text-3xl font-bold mt-4 mb-4 ml-4">Support Tickets</h2>
                {currentTickets.map((ticket) => (
                    <SupportTicket
                        key={ticket.ticketId}
                        name={ticket.name}
                        issue={ticket.issue}
                        status={ticket.status}
                        onClick={() => handleTicketClick(ticket)}
                    />
                ))}
                
                {/* Pagination Component */}
                <Pagination
                    ticketsPerPage={ticketsPerPage}
                    totalTickets={tickets.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>

            {/* Right side - Ticket resolving section */}
            <div className="mt-[1vw] w-1/2 ml-[1vw]">
                {selectedTicket ? (
                    <TicketDetails ticket={selectedTicket} selectTicket={setSelectedTicket} />
                ) : (
                    <p className="text-gray-500 mt-[25vw]">Click on a ticket to view details</p>
                )}
            </div>
</div>
            
        </div>
    );
};

export default AdminMessages;
