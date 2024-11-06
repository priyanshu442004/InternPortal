import React, { useState, useEffect } from "react";
import add from "@/assets/add.png";
import search from "@/assets/search.png";
import deleteImage from "@/assets/delete.png";
import info from "@/assets/info.png";
import call from "@/assets/call.png";
import mail from "@/assets/mail.png";

const AdminMembersList = () => {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/members.json"); // Assuming the JSON is served from the public folder
        const data = await response.json();
        setMembers(data.members);
        setLoading(false); // Data is loaded
      } catch (error) {
        console.error("Error fetching members data:", error);
      }
    };

    fetchMembers();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedMembers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((memberId) => memberId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle delete action
  const handleDelete = () => {
    const remainingMembers = members.filter(
      (member) => !selectedMembers.includes(member.id)
    );
    console.log("Remaining Members:", remainingMembers);
  };

  const handleCallClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  const renderCallPopUp = (memberName, MemberPhone) => {
    return <div className="flex mx-auto w-1/2 h-10 bg-slate-50"></div>
  };

  if (loading) return <div>Loading Members data...</div>;
  
  return (
    <div className="bg-white shadow-md p-4 h-auto rounded-lg w-full">
        <div className='flex flex-row justify-between'>
          <div className="flex flex-row gap-[6.7vw]">
          <h3 className="text-lg font-bold font-mukta">Doc-Q Team Members List</h3>
          <h3 className='text-lg font-bold font-mukta'>Role</h3>
          </div>
            <div className='flex flex-row justify-end gap-3 mr-10'>
              <button>
                <img src={add} alt="add member icon" />
              </button>
              <button>
                <img src={search} alt="search memeber icon" />
              </button>
              <button onClick={handleDelete}>
                <img src={deleteImage} alt="delete member icon" />
              </button>
              <button>
                <img src={info} alt="info icon" />
              </button>
            </div>
        </div>
      <ul className="mt-4 space-y-2">
        {members.map((member, idx) => (
          <li key={member.id} className="flex justify-start">
            <div className="w-[20vw] align-middle">
            <input
                  type="checkbox"
                  checked={selectedMembers.includes(member.id)}
                  onChange={() => handleCheckboxChange(member.id)}
                  className="form-checkbox h-4 w-4 mr-1 text-purple-600 border-gray-300 rounded"
                />
            <span className=''>{member.name}</span>
            </div>
            <span className='w-1/3'>{member.role}</span>
            <div className="w-1/5 flex flex-row justify-around ml"> 
              <button onClick={() => handleCallClick(member)}>
                <img src={call} alt="Call Details" />
              </button>
              <button onClick={() => {
                console.log(`mailto:${member.email}`); // Log email
                window.open(`mailto:${member.email}`);
              }}>
                <img src={mail} alt="Send Email" />
              </button>
           </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-bold mb-4">Member Info</h3>
            {selectedMember && (
              <>
                <p className="text-lg">Name: {selectedMember.name}</p>
                <p className="text-lg">Phone: {selectedMember.phone}</p>
              </>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMembersList;
