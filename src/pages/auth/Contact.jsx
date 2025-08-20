import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import Footer from '../../components/user/landingPage/Footer'

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const contactInfo = [
    {
      icon: 'heroicons:map-pin-20-solid',
      title: 'Our Location',
      content: '123 Print Street, Design District, NY 10001'
    },
    {
      icon: 'heroicons:phone-20-solid',
      title: 'Phone Number',
      content: '+1 (234) 567-890'
    },
    {
      icon: 'heroicons:envelope-20-solid',
      title: 'Email Address',
      content: 'info@printease.com'
    },
    {
      icon: 'heroicons:clock-20-solid',
      title: 'Working Hours',
      content: 'Mon - Fri: 9AM - 6PM'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-black text-indigo-600 font-display tracking-tight">
                  <span className="text-indigo-800">Print</span>Ease
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                About Us
              </Link>
              <div className="relative">
                <Link to="/contact" className="text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                  Contact
                </Link>
                {/* Active Line Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 transition-transform duration-300" />
              </div>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-extrabold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-body tracking-wide">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
              >
                {isMenuOpen ? (
                  <Icon icon="heroicons:x-mark-20-solid" className="h-6 w-6" />
                ) : (
                  <Icon icon="heroicons:bars-3-20-solid" className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Fixed Overlay */}
          <div className={`md:hidden fixed inset-x-0 top-[73px] bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 z-50 transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}>
            <div className="px-4 py-2 space-y-1">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                About Us
              </Link>
              <div className="relative">
                <Link to="/contact" className="text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                  Contact
                </Link>
                {/* Active Line Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 transition-transform duration-300" />
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="w-full text-left text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                  Sign In
                </button>
                <button className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-extrabold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-body tracking-wide">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Background Image Section */}
        <div className="relative h-[150px] md:h-[200px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Professional printing service workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-1 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl animate-fade-in delay-200">
              We're here to help and answer any questions you might have
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Have questions or need assistance? We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3">
                  <Icon icon={info.icon} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Icon icon="ri:facebook-fill" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Icon icon="ri:twitter-fill" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Icon icon="ri:instagram-fill" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Icon icon="ri:linkedin-fill" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact

