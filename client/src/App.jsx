import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Validate from "./components/Validate";

function App() {

  return (
    <div className="bg-[#f7fbff]">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Validate-Certificate" element={<Validate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
