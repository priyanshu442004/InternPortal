import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaUserFriends, FaInbox, FaChartBar, FaCog } from 'react-icons/fa'; 
import { HiOutlineViewGrid } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-screen bg-white shadow-lg flex flex-col pt-6 pr-6">
      {/* MENU Section */}
      <div className="mb-8">
        <h3 className="text-gray-500 uppercase text-sm mb-4">Menu</h3>
        <ul className="space-y-4 pt-2">
          <li>
            <NavLink
              to="./dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                  : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
              }
            >
              <HiOutlineViewGrid className="mr-3 text-lg" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="./edit-interns"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                  : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
              }
            >
              <FaPlus className="mr-3 text-lg" />
              Edit Interns
            </NavLink>
          </li>

          <li>
            <NavLink
              to="./interns"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                  : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
              }
            >
              <FaUserFriends className="mr-3 text-lg" />
              Interns
            </NavLink>
          </li>

          <li>
            <NavLink
              to="./add-intern"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                  : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
              }
            >
              <FaPlus className="mr-3 text-lg" />Add Intern
            </NavLink>
          </li>

          <li>
            <NavLink
              to="./messages"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4 relative'
                  : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4 relative'
              }
            >
              <FaInbox className="mr-3 text-lg" />
              Messages
              {/* Notification Badge */}
              <span className="absolute right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">2</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="./analytics"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 line-through border-l-4 border-blue-800 pl-4'
                  : 'flex items-center border-l-4 border-transparent text-gray-400 py-2 line-through pl-4'
              }
            >
              <FaChartBar className="mr-3 text-lg" />
              Analytics
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='pl-4'>
              <hr />

      </div>
      {/* GENERAL Section */}
      <div className='pt-6 mb-[10vw]'>
        <h3 className="text-gray-500 uppercase text-sm mb-4">General</h3>
        <ul>
          <li>
            <NavLink
              to="./settings"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                  : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
              }
            >
              <FaCog className="mr-3 text-lg" />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='pl-4'>

      <hr />
      </div>
    </div>
  );
};

export default Sidebar;
