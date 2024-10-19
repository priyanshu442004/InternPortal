import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { BsClipboard2Check } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlChart } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FiMenu } from "react-icons/fi"; // For hamburger menu

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu - visible only on mobile */}
      <button className="md:hidden p-2" onClick={toggleSidebar}>
        <FiMenu className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div className={`md:w-[20vw] min-h-screen bg-white shadow-lg md:relative md:flex flex-col pt-6 pr-6 transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0 w-[60vw]' : '-translate-x-full w-[0.5vw] hidden'} md:translate-x-0`}>
        {/* MENU Section */}
        <div className="mb-8">
          <h3 className="text-gray-500 uppercase text-sm mb-4 ml-2">Menu</h3>
          <ul className="space-y-4 pt-2">
            <li onClick={toggleSidebar}>
              <NavLink
                to="./dashboard"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                    : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
                }
              >
                <MdOutlineSpaceDashboard className="mr-3 text-2xl" />
                Dashboard
              </NavLink>
            </li>

            <li onClick={toggleSidebar}>
              <NavLink
                to="./edit-interns"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                    : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
                }
              >
                <FiPlus className="mr-3 text-2xl" />
                Edit Interns
              </NavLink>
            </li>

            <li onClick={toggleSidebar}>
              <NavLink
                to="./interns-list"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                    : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
                }
              >
                <BsClipboard2Check className="mr-3 text-2xl" />
                Interns
              </NavLink>
            </li>

            <li onClick={toggleSidebar}>
              <NavLink
                to="./add-intern"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                    : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
                }
              >
                <BsPeople className="mr-3 text-2xl" />Add Intern
              </NavLink>
            </li>

            <li onClick={toggleSidebar}>
              <NavLink
                to="./messages"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4 relative'
                    : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4 relative'
                }
              >
                <RxEnvelopeClosed className="mr-3 text-2xl" />
                Messages
                {/* Notification Badge */}
                <span className="hidden md:absolute right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">2</span>
              </NavLink>
            </li>

            <li onClick={toggleSidebar}>
              <NavLink
                to="./analytics"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 line-through border-l-4 border-blue-800 pl-4'
                    : 'flex items-center border-l-4 border-transparent text-gray-400 py-2 line-through pl-4'
                }
              >
                <SlChart className="mr-3 text-2xl" />
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
          <h3 className="text-gray-500 uppercase text-sm mb-4 ml-2">General</h3>
          <ul>
            <li onClick={toggleSidebar}>
              <NavLink
                to="./settings"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-blue-800 py-2 border-l-4 border-blue-800 pl-4'
                    : 'flex items-center border-l-4 border-transparent text-gray-600 hover:text-blue-800  py-2 pl-4'
                }
              >
                <IoSettingsOutline className="mr-3 text-2xl" />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='pl-4'>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
