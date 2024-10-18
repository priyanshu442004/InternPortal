import React from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaEnvelope, FaBell } from "react-icons/fa";
import logoutIcon from "../assets/logout-icon.png";

const Navbar = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white border">
      <div className="flex items-center space-x-6">
        <div>
          <img src={logo} alt="logo" className="h-[4.5vw] w-[10vw]" />
        </div>

        <div className="relative pl-[6vw]">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg py-1 pl-4 pr-10 outline-none focus:ring focus:ring-blue-400 w-[40vw]"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-[3vw]">
        <div className="font-medium">Admin</div>

        <div className="text-black text-sm border rounded-lg px-2 py-1">
          {formattedDate}
        </div>

        <div className="flex space-x-[2vw] items-center">
          <div>
            <FaEnvelope className="text-gray-600 hover:cursor-pointer" />
          </div>

          <div>
            <FaBell className="text-gray-600 hover:cursor-pointer" />
          </div>

          <div>
            <img
              src={logoutIcon}
              alt="Logout"
              className="h-6 w-6 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
