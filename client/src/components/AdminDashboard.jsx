import React, { useEffect, useState } from 'react';
import AdminInternStats from './AdminInternStats';
import AdminMembersList from './AdminMembersList';
import AdminSupportTickets from './AdminSupportTickets';

function AdminDashboard() {
  const [interns, setInterns] = useState([]);
  const [members, setMembers] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON files
    fetch('/interns.json')
      .then(res => res.json())
      .then(data => setInterns(data.interns));

    fetch('/members.json')
      .then(res => res.json())
      .then(data => setMembers(data.members));

    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data.tickets));
  }, []);

  return (
    <div className="p-6 w-full bg-slate-50 rounded-lg shadow-md">

      <div className="flex md:flex-row flex-col h-auto md:h-16 justify-between bg-white items-center mb-4">
        <h2 className="font-mukta text-slate-400 text-lg font-medium ml-5 md:mt-0 mt-5">
          {`Dashboard>Overview`}
        </h2>
      </div>
      <div className="flex  ml-16 mr-16 flex-row h-auto justify-end shadow-2xl bg-white mb-4">
        <div className='flex flex-col mt-8 ml-6  w-3/4'>
            <div>
                <AdminInternStats interns={interns} />
            </div>
            <div className='mt-8'>
                <AdminMembersList members={members} />
            </div> 
        </div>
        <div className='w-1/4 mr-28 mt-4 mb-4'>
        <AdminSupportTickets tickets={tickets} />
        </div>
        
      </div>
    </div>
  );
}

export default AdminDashboard;