import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // Add a state for the profile dropdown
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('./');
  };

  // Toggles the profile dropdown menu
  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  // Close the profile menu when clicked outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.profile-menu')) {
      setProfileOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center p-3 flex-col">
      <div className='container mx-auto px-1 flex justify-between items-center'>
        <img
          onClick={goToHome}
          src={Logo}
          alt="DOC-Q"
          className="hover:cursor-pointer h-[25vw] h-[8vw] md:h-[4vw] pl-2 p-1"
        />

        <div className="hidden md:flex items-center justify-center space-x-6 bg-blue-500 w-[50%] rounded-full h-[3.5vw]">
          <div className="text-lg text-gray-600 cursor-pointer pr-3">
            <i className="fas fa-search"></i>
          </div>
          <ul className="flex space-x-8 items-center">
            <li>
              <a href="#" className="text-black font-semibold hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-semibold hover:underline">
                Performance
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-semibold hover:underline">
                Validation
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-semibold hover:underline">
                Documents
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-600 focus:outline-none ml-auto"
          >
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Profile Icon and Dropdown */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-2xl text-gray-600 cursor-pointer">
            <i className="fas fa-bell"></i>
          </div>
          <div
            className="w-10 h-10 rounded-full overflow-hidden cursor-pointer profile-menu relative"
            onClick={toggleProfileMenu}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            
          </div>
          {/* Dropdown Menu */}
          {profileOpen && (
            <div className="absolute top-14 right-0 w-48 bg-white shadow-lg rounded-lg py-4 z-50">
              <p className="text-center text-sm mb-4">Signed in as <br /><strong>Jhon Doe</strong></p>
              <hr />
              <ul className="flex flex-col space-y-3 px-[20%] py-3 font-semibold text-black">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-user text-xl"></i>
                  <a href="#" className=" hover:underline">Profile</a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-cog text-xl"></i>
                  <a href="#" className=" hover:underline">Settings</a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-question-circle text-xl"></i>
                  <a href="#" className=" hover:underline">Support</a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-globe text-xl"></i>
                  <a href="#" className=" hover:underline">Language</a>
                </li>
              </ul>
              <div className="text-center mt-2 flex-start">
                <button className="bg-gray-200 text-gray-700 px-1 rounded hover:bg-gray-300">Login/Signout</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden h-[180px]">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/practice-tests"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/progress"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Performance
              </Link>
            </li>
            <li>
              <Link
                to="/ai-assistant"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Validation
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Documents
              </Link>
            </li>

            <li>
            <div className="md:flex items-center space-x-6">
          
          <div
            className="w-10 h-10 rounded-full overflow-hidden cursor-pointer profile-menu relative"
            onClick={toggleProfileMenu}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            
          </div>
          {/* Dropdown Menu */}
          {profileOpen && (
            <div className="absolute top-14 right-0 w-48 bg-white shadow-lg rounded-lg py-4 z-50">
              <p className="text-center text-sm mb-4">Signed in as <br /><strong>Jhon Doe</strong></p>
              <hr />
              <ul className="flex flex-col space-y-3 px-[20%] py-3 font-semibold text-black">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-user text-xl"></i>
                  <a href="#" className=" hover:underline">Profile</a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-cog text-xl"></i>
                  <a href="#" className=" hover:underline">Settings</a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-question-circle text-xl"></i>
                  <a href="#" className=" hover:underline">Support</a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-globe text-xl"></i>
                  <a href="#" className=" hover:underline">Language</a>
                </li>
              </ul>
              <div className="text-center mt-2 flex-start">
                <button className="bg-gray-200 text-gray-700 px-1 rounded hover:bg-gray-300">Login/Signout</button>
              </div>
            </div>
          )}
        </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
