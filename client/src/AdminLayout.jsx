import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import AddminAddIntern from './components/AddminAddIntern'
import AdminInternList from './components/AdminInternList'
import AdminDashboard from './components/AdminDashboard'
import AdminSupportTickets from './components/AdminSupportTickets'
import AdminInternStats from './components/AdminInternStats'
import Navbar from './components/AdminTopBar'
import AdminSidebar from './components/AdminSideBar'
import Settings from './components/AdminSettings'

const AdminLayout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-row'>

      <AdminSidebar />
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/add-intern" element={<AddminAddIntern />} />
        <Route path="/interns-list" element={<AdminInternList />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      </div>
    </div>
  )
}

export default AdminLayout