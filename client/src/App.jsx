import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";

function App() {
  return (
    <div className="bg-[#f7fbff]">
      <BrowserRouter>
        <Routes>
          {/* User routes */}
          <Route path="/*" element={<MainLayout />} />

          {/* Admin route */}
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
