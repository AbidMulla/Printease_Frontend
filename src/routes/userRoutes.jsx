import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLayout from '../layout/user/UserLayout'
import Profile from '../pages/user/Profile'
import OrderHistory from '../pages/user/OrderHistory'
import PaymentHistory from '../pages/user/PaymentHistory'

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
      </Route>
    </Routes>
  )
}

export default UserRoutes
