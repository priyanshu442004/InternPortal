import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Validate from "./components/Validate";
import ContactUs from "./components/ContactUs";
import Documents from "./components/Documents";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Performance from "./components/Performance";
import PerformanceLoginMessage from "./components/PerformanceLoginMessage";

const MainLayout = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="bg-[#f7fbff]">
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intern-performance" element={<Performance />} />
        <Route path="/Validate-Certificate" element={<Validate />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/not-login" element={<PerformanceLoginMessage />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default MainLayout;
