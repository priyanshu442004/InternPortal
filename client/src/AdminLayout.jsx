import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'

const AdminLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default AdminLayout