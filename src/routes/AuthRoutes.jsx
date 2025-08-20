import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import RegisterOTP from '../pages/auth/RegisterOTP'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ForgotPasswordOTP from '../pages/auth/ForgotPasswordOTP'
import ResetPassword from '../pages/auth/ResetPassword'
import LandingPage from '../pages/auth/LandingPage'
import AboutUs from '../pages/auth/AboutUs'
import Contact from '../pages/auth/Contact'
import AllCategory from '../pages/auth/AllCategory'
import AllProducts from '../pages/auth/AllProducts'
import ProductDetail from '../pages/auth/ProductDetail'
import AddToCart from '../pages/auth/AddToCart'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/all-categories" element={<AllCategory />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/add-to-cart" element={<AddToCart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-otp" element={<RegisterOTP />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-otp" element={<ForgotPasswordOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  )
}

export default AuthRoutes
