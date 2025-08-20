import React from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

function CategorySection() {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: "Custom T-Shirt Design",
      brand: "PRINTEASE",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#0EA5E9", "#22C55E", "#06B6D4", "#F472B6", "#EF4444"],
      rating: 4.8,
      reviews: 128
    },
    {
      id: 2,
      name: "Premium Coffee Mug",
      brand: "PRINTEASE",
      price: 18.50,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#F59E0B", "#8B5CF6", "#EC4899", "#10B981", "#3B82F6"],
      rating: 4.9,
      reviews: 95
    },
    {
      id: 3,
      name: "2024 Wall Calendar",
      brand: "PRINTEASE",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#059669", "#DC2626", "#7C3AED", "#EA580C", "#0891B2"],
      rating: 4.7,
      reviews: 73
    },
    {
      id: 4,
      name: "Professional Notebook",
      brand: "PRINTEASE",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#6B7280", "#1F2937", "#374151", "#4B5563", "#9CA3AF"],
      rating: 4.6,
      reviews: 214
    }
  ]

  return (
    <section className="pt-24 pb-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">   
          <div className="inline-block">
            <span className="inline-block text-indigo-600 text-sm font-semibold tracking-wider uppercase mb-4 bg-indigo-50 px-4 py-2 rounded-full">
              Featured Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Popular Print Products
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Discover our most loved printing solutions crafted with premium materials and attention to detail
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-br-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-tl-full transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>

              {/* Product Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-indigo-100">
                  ${product.price}
                </div>

                {/* Brand Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {product.brand}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 relative">
                {/* Color Options */}
                <div className="absolute -top-4 left-6 flex space-x-1 bg-white rounded-full py-1 px-2 shadow-lg transform -translate-y-1/2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full transform hover:scale-125 transition-transform duration-300 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        icon="heroicons:star-20-solid" 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <button 
                    onClick={() => navigate('/all-products')}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <span>View More</span>
                    <Icon icon="heroicons:arrow-right-20-solid" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/all-products')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Icon icon="heroicons:arrow-right-20-solid" className="w-4 h-4" />
            <span>View All Products</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CategorySection