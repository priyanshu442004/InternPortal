import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Left section (Logo and Search bar) */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div>
          <img
            src="" // Add logo source here
            alt="logo"
            className="h-8"
          />
        </div>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full py-1 px-4 outline-none focus:ring focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Right section (Admin, Date, Icons) */}
      <div className="flex items-center space-x-4">
        {/* Admin */}
        <div className="font-medium">Admin</div>

        {/* Date */}
        <div className="font-light text-gray-600">26 October 2023</div>

        {/* Icons */}
        <div className="flex space-x-3 items-center">
          {/* Mail Icon */}
          <div>
            <i className="far fa-envelope text-gray-600"></i> {/* Font Awesome Icon */}
          </div>

          {/* Notification Icon */}
          <div>
            <i className="far fa-bell text-gray-600"></i> {/* Font Awesome Icon */}
          </div>

          {/* Profile Icon */}
          <div>
            <i className="far fa-user-circle text-gray-600"></i> {/* Font Awesome Icon */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
