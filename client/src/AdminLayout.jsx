import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import AddminAddIntern from './components/AddminAddIntern'
import AdminInternList from './components/AdminInternList'
import AdminDashboard from './components/AdminDashboard'
import AdminSupportTickets from './components/AdminSupportTickets'
import AdminInternStats from './components/AdminInternStats'


const AdminLayout = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/add-intern" element={<AddminAddIntern />} />
        <Route path="/interns-list" element={<AdminInternList />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/support" element={<AdminSupportTickets/>}/>
        <Route path="/cards" element={<AdminInternStats/>}/>
      </Routes>
    </div>
  )
}

export default AdminLayout