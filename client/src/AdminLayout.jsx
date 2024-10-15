import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import AddminAddIntern from './components/AddminAddIntern'

const AdminLayout = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/add-intern" element={<AddminAddIntern />} />
      </Routes>
    </div>
  )
}

export default AdminLayout