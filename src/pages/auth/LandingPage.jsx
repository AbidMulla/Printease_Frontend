import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollingText from '../../components/user/landingPage/ScrollingText'
import SlidingImages from '../../components/user/landingPage/SlidingImages'
import CategorySection from '../../components/user/landingPage/CategorySection'
import PopularProducts from '../../components/user/landingPage/PopularProducts'
import CustomerReview from '../../components/user/landingPage/CustomerReview'
import Footer from '../../components/user/landingPage/Footer'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Balls */}

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 relative">
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
              <div className="relative">
                <Link to="/" className="text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                  Home
                </Link>
                {/* Active Line Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 transition-transform duration-300" />
              </div>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/add-to-cart" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide relative">
                <Icon icon="heroicons:shopping-cart-20-solid" className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-extrabold transition-colors duration-200 font-body tracking-wide">
                Sign In
              </Link>
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-extrabold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-body tracking-wide"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button and cart */}
            <div className="md:hidden flex items-center space-x-3">
              <Link to="/add-to-cart" className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 relative">
                <Icon icon="heroicons:shopping-cart-20-solid" className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </Link>
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
                <div className="relative">
                  <Link to="/" className="text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                    Home
                  </Link>
                  {/* Active Line Indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 transition-transform duration-300" />
                </div>
                <Link to="/about" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                  About Us
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                  Contact
                </Link>
                <Link to="/add-to-cart" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide flex items-center justify-between">
                  <span>Cart</span>
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                </Link>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <Link to="/login" className="w-full text-left text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-extrabold transition-colors duration-200 font-body tracking-wide">
                    Sign In
                  </Link>
                  <button 
                    onClick={handleGetStarted}
                    className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-extrabold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-body tracking-wide"
                  >
                    Get Started
                  </button>
                </div>
              </div>
          </div>
        </div>
      </header>

      {/* Scrolling Text Banner */}
      <div className="relative z-10">
        <ScrollingText />
      </div>

      {/* Sliding Images Carousel */}
      <div className="relative z-10">
        <SlidingImages />
      </div>

      {/* Category Section */}
      <div className="relative z-10">
        <CategorySection />
      </div>

      {/* Popular Products Section */}
      <div className="relative z-10">
        <PopularProducts />
      </div>

      {/* Customer Review Section */}
      <div className="relative z-10">
        <CustomerReview />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}