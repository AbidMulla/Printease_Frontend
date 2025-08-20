import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log(formData)
    navigate('/profile')
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
          <p className="text-gray-600">
            Please sign in to your account
          </p>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="heroicons:envelope-20-solid" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 text-sm bg-white/50 backdrop-blur-sm hover:border-indigo-300"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="heroicons:lock-closed-20-solid" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 text-sm bg-white/50 backdrop-blur-sm hover:border-indigo-300"
                placeholder="Enter your password"
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-5 w-5 text-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:border-indigo-500"
                />
                <div className="absolute inset-0 bg-indigo-600 rounded-md transform scale-0 transition-transform duration-300 peer-checked:scale-100"></div>
              </div>
              <label htmlFor="remember-me" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors duration-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link 
                to="/forgot-password" 
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300 flex items-center space-x-1 group"
              >
                <Icon icon="heroicons:key-20-solid" className="w-4 h-4" />
                <span className="border-b border-transparent group-hover:border-indigo-500 transition-all duration-300">
                  Forgot your password?
                </span>
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center space-x-2">
              <Icon icon="heroicons:arrow-right-on-rectangle-20-solid" className="w-5 h-5" />
              <span>Sign In</span>
            </span>
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300 group inline-flex items-center space-x-1"
              >
                <span className="border-b border-transparent group-hover:border-indigo-500 transition-all duration-300">Sign up now</span>
                <Icon icon="heroicons:arrow-right-20-solid" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </p>
          </div>

          {/* Home Link */}
          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 group"
            >
              <Icon icon="heroicons:home-20-solid" className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

     
        </form>
      </div>
    </div>
  )
}

export default Login
