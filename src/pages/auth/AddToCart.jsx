import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function AddToCart() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  // Sample cart data - in a real app this would come from state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      description: "Premium cotton blend with custom print",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 499,
      originalPrice: 699,
      quantity: 2,
      size: "M",
      color: "White",
      logoUploaded: true
    },
    {
      id: 2,
      name: "Black Graphic T-Shirt",
      description: "Urban design with artistic print",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 599,
      originalPrice: 799,
      quantity: 1,
      size: "L",
      color: "Black",
      logoUploaded: false
    }
  ])

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateDiscount = () => {
    return cartItems.reduce((total, item) => {
      const originalTotal = item.originalPrice * item.quantity
      const currentTotal = item.price * item.quantity
      return total + (originalTotal - currentTotal)
    }, 0)
  }

  const shippingCost = 50
  const taxRate = 0.18 // 18% tax

  const calculateTax = () => {
    return calculateSubtotal() * taxRate
  }

  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost + calculateTax()
  }

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout with total:', calculateTotal())
    navigate('/checkout')
  }

  const handleContinueShopping = () => {
    navigate('/all-products')
  }

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200"
          >
            <Icon icon="heroicons:arrow-left-20-solid" className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-12">
            <Icon icon="heroicons:shopping-cart-20-outline" className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <button
              onClick={handleContinueShopping}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <Icon icon="heroicons:shopping-bag-20-solid" className="w-5 h-5" />
              <span>Continue Shopping</span>
            </button>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      
                      {/* Product Options */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center space-x-1">
                          <Icon icon="heroicons:tag-20-solid" className="w-4 h-4" />
                          <span>Size: {item.size}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon icon="heroicons:paint-brush-20-solid" className="w-4 h-4" />
                          <span>Color: {item.color}</span>
                        </span>
                        <span className={`flex items-center space-x-1 ${item.logoUploaded ? 'text-green-600' : 'text-yellow-600'}`}>
                          <Icon icon={item.logoUploaded ? "heroicons:check-circle-20-solid" : "heroicons:exclamation-circle-20-solid"} className="w-4 h-4" />
                          <span>{item.logoUploaded ? 'Logo Uploaded' : 'Logo Pending'}</span>
                        </span>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-indigo-600">₹{item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-400 line-through">₹{item.originalPrice}</span>
                          )}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
                          >
                            <Icon icon="heroicons:minus-20-solid" className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
                          >
                            <Icon icon="heroicons:plus-20-solid" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <Icon icon="heroicons:trash-20-solid" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                    <span className="font-medium">₹{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  
                  {calculateDiscount() > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Discount</span>
                      <span className="font-medium text-green-600">-₹{calculateDiscount().toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹{shippingCost.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (18%)</span>
                    <span className="font-medium">₹{calculateTax().toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-indigo-600">₹{calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Icon icon="heroicons:credit-card-20-solid" className="w-5 h-5" />
                    <span>Proceed to Checkout</span>
                  </button>
                  
                  <button
                    onClick={handleContinueShopping}
                    className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Icon icon="heroicons:arrow-left-20-solid" className="w-5 h-5" />
                    <span>Continue Shopping</span>
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Icon icon="heroicons:shield-check-20-solid" className="w-4 h-4 text-green-600" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Icon icon="heroicons:truck-20-solid" className="w-4 h-4 text-blue-600" />
                    <span>Free shipping on orders over ₹1000</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Icon icon="heroicons:arrow-path-20-solid" className="w-4 h-4 text-purple-600" />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default AddToCart
