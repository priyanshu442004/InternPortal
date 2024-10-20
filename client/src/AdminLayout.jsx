import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import AddminAddIntern from './components/AddminAddIntern'
import AdminInternList from './components/AdminInternList'
import AdminDashboard from './components/AdminDashboard'
import Navbar from './components/AdminTopBar'
import AdminSidebar from './components/AdminSideBar'
import Settings from './components/AdminSettings'
import AdminEditIntern from './components/AdminEditIntern'

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
        <Route path="/Edit-Interns" element={<AdminEditIntern />} />
      </Routes>
      </div>
    </div>
  )
}

export default AdminLayout