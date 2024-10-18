import React from 'react';

const AdminMembersList = ({ members }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-1/2">
      <h3 className="text-lg font-semibold">Doc-Q Team Members List</h3>
      <ul className="mt-4 space-y-2">
        {members.map((member, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{member.name}</span>
            <span>{member.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMembersList;
