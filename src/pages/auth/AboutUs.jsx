import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import Footer from '../../components/user/landingPage/Footer'

function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "20+ years of printing industry experience"
    },
    {
      name: "Sarah Johnson",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Award-winning designer with passion for innovation"
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Expert in digital printing technologies"
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
              <div className="relative">
                <Link to="/about" className="text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                  About Us
                </Link>
                {/* Active Line Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 transition-transform duration-300" />
              </div>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                Contact
              </Link>
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
              <div className="relative">
                <Link to="/about" className="text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                  About Us
                </Link>
                {/* Active Line Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 transition-transform duration-300" />
              </div>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                Contact
              </Link>
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
            src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern printing facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-1 animate-fade-in">
              About PrintEase
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl animate-fade-in delay-200">
              Transforming ideas into exceptional print experiences
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Company Overview
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              PrintEase is a leading printing solutions provider, combining cutting-edge technology with exceptional craftsmanship to deliver outstanding results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon icon="heroicons:rocket-launch-20-solid" className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">Leveraging the latest printing technologies to deliver exceptional quality.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon icon="heroicons:sparkles-20-solid" className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control processes ensuring perfect results every time.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon icon="heroicons:clock-20-solid" className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery without compromising on quality or attention to detail.</p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  To revolutionize the printing industry by providing innovative, sustainable, and high-quality printing solutions that help businesses thrive in the digital age.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Icon icon="heroicons:check-circle-20-solid" className="w-6 h-6 text-green-500 mr-3" />
                    Commitment to sustainability
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Icon icon="heroicons:check-circle-20-solid" className="w-6 h-6 text-green-500 mr-3" />
                    Customer-centric approach
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Icon icon="heroicons:check-circle-20-solid" className="w-6 h-6 text-green-500 mr-3" />
                    Continuous innovation
                  </li>
                </ul>
              </div>
              <div className="relative h-96 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Printing press"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              Meet the experts behind PrintEase who make excellence possible every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutUs
