import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function RegisterOTP() {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(30)
  const navigate = useNavigate()

  // Timer for OTP resend
  useEffect(() => {
    if (timeLeft === 0) return
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return
    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)

    // Move to next input if current field is filled
    if (element.value && index < 3) {
      const nextInput = element.parentElement.nextElementSibling?.querySelector('input')
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = e.target.parentElement.previousElementSibling?.querySelector('input')
      if (prevInput) prevInput.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('OTP:', otp.join(''))
  }

  const handleResend = () => {
    setTimeLeft(30)
    // Add resend OTP logic here
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
          <p className="text-gray-600">
            Please enter the verification code sent to your email
          </p>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-4">
            {otp.map((digit, index) => (
              <div key={index} className="w-16">
                <input
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-indigo-300"
                />
              </div>
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="text-center">
            {timeLeft > 0 ? (
              <p className="text-sm text-gray-600">
                Resend code in <span className="font-medium text-indigo-600">{timeLeft}s</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
              >
                Resend Code
              </button>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center space-x-2">
              <Icon icon="heroicons:shield-check-20-solid" className="w-5 h-5" />
              <span>Verify Email</span>
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

export default RegisterOTP
