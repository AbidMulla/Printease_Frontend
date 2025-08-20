import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle reset password logic here
    console.log(formData)
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative">
        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-indigo-600/30 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-600/30 rounded-br-2xl"></div>

        {/* Logo and Title */}
        <div className="text-center mb-8 relative">
          <div className="inline-block">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-display tracking-tight mb-2">
              Print<span className="text-indigo-800">Ease</span>
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Password</h2>
          <p className="text-gray-600">
            Enter your new password below
          </p>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </div>

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="heroicons:lock-closed-20-solid" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 text-sm bg-white/50 backdrop-blur-sm hover:border-indigo-300"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Icon 
                  icon={showPassword ? "heroicons:eye-slash-20-solid" : "heroicons:eye-20-solid"}
                  className="h-5 w-5 text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                />
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="heroicons:lock-closed-20-solid" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none block w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 text-sm bg-white/50 backdrop-blur-sm hover:border-indigo-300"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Icon 
                  icon={showConfirmPassword ? "heroicons:eye-slash-20-solid" : "heroicons:eye-20-solid"}
                  className="h-5 w-5 text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                />
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Password must contain:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon icon="heroicons:check-circle-20-solid" className="w-4 h-4 text-green-500" />
                <span>At least 8 characters</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon icon="heroicons:check-circle-20-solid" className="w-4 h-4 text-green-500" />
                <span>One uppercase letter</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon icon="heroicons:check-circle-20-solid" className="w-4 h-4 text-green-500" />
                <span>One number</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon icon="heroicons:check-circle-20-solid" className="w-4 h-4 text-green-500" />
                <span>One special character</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center space-x-2">
              <Icon icon="heroicons:key-20-solid" className="w-5 h-5" />
              <span>Reset Password</span>
            </span>
          </button>

          {/* Back to Login */}
          <div className="text-center mt-4">
            <Link 
              to="/login"
              className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300 inline-flex items-center space-x-1"
            >
              <Icon icon="heroicons:arrow-left-20-solid" className="w-4 h-4" />
              <span>Back to Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
