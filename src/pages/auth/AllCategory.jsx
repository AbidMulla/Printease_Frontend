import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function AllCategory() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleViewMore = (categoryId) => {
    navigate('/all-products')
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const categories = [
    {
      id: 1,
      name: "Business Cards",
      icon: "mdi:card-account-details",
      description: "Professional business cards with premium finishes",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 2,
      name: "Flyers & Brochures",
      icon: "mdi:file-document-multiple",
      description: "Eye-catching marketing materials",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 3,
      name: "Banners & Signs",
      icon: "mdi:flag-variant",
      description: "Large format printing for maximum impact",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 4,
      name: "Custom Stickers",
      icon: "mdi:sticker",
      description: "Die-cut stickers and labels",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 5,
      name: "Photo Prints",
      icon: "mdi:image",
      description: "High-quality photo printing services",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 6,
      name: "Posters",
      icon: "mdi:poster",
      description: "Stunning poster prints in various sizes",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 7,
      name: "Business Stationery",
      icon: "mdi:notebook",
      description: "Professional letterheads and envelopes",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 8,
      name: "Packaging",
      icon: "mdi:package-variant",
      description: "Custom packaging solutions",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 9,
      name: "Greeting Cards",
      icon: "mdi:card",
      description: "Personalized greeting cards",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 10,
      name: "Canvas Prints",
      icon: "mdi:image-frame",
      description: "Gallery-quality canvas prints",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 11,
      name: "Calendars",
      icon: "mdi:calendar",
      description: "Custom calendars for any occasion",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 12,
      name: "Booklets & Catalogs",
      icon: "mdi:book-open-page-variant",
      description: "Professional bound documents",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 13,
      name: "Wedding Stationery",
      icon: "mdi:heart",
      description: "Elegant wedding invitations and more",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 14,
      name: "Promotional Items",
      icon: "mdi:gift",
      description: "Branded merchandise and giveaways",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 15,
      name: "Art Prints",
      icon: "mdi:palette",
      description: "Fine art reproduction services",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 16,
      name: "Custom T-Shirts",
      icon: "mdi:tshirt-crew",
      description: "Quality custom apparel printing",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"

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
                <Link to="/" className="cursor-pointer">
                  <h1 className="text-3xl font-black text-indigo-600 font-display tracking-tight hover:text-indigo-800 transition-colors duration-200">
                    <span className="text-indigo-800">Print</span>Ease
                  </h1>
                </Link>
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
              <Link to="/register" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-extrabold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-body tracking-wide">
                Get Started
              </Link>
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

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              <Link to="/add-to-cart" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between">
                <span>Cart</span>
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200 mb-4"
          >
            <Icon icon="heroicons:arrow-left-20-solid" className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">   
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              All Products We Have
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              Explore our comprehensive range of high-quality printing solutions for all your needs
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden border border-gray-100"
              >
                {/* Category Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Featured
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex justify-center">
                                         <button 
                       onClick={() => handleViewMore(category.id)}
                       className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
                     >
                       <Icon icon="heroicons:eye-20-solid" className="w-3 h-3" />
                       <span>View More</span>
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AllCategory
