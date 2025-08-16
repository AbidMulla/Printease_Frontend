import React from 'react'
import { Routes, Route } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<div>Admin Dashboard</div>} />
      <Route path="/admin/users" element={<div>Manage Users</div>} />
      <Route path="/admin/orders" element={<div>Manage Orders</div>} />
      <Route path="/admin/products" element={<div>Manage Products</div>} />
      <Route path="/admin/reports" element={<div>Reports</div>} />
      <Route path="/admin/settings" element={<div>Admin Settings</div>} />
    </Routes>
  )
}

export default AdminRoutes
