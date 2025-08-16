import React from 'react'
import { Icon } from '@iconify/react'

function CategorySection() {
  const products = [
    {
      id: 1,
      name: "Custom T-Shirt Design",
      brand: "PRINTEASE",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#0EA5E9", "#22C55E", "#06B6D4", "#F472B6", "#EF4444"]
    },
    {
      id: 2,
      name: "Premium Coffee Mug",
      brand: "PRINTEASE",
      price: 18.50,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#F59E0B", "#8B5CF6", "#EC4899", "#10B981", "#3B82F6"]
    },
    {
      id: 3,
      name: "2024 Wall Calendar",
      brand: "PRINTEASE",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#059669", "#DC2626", "#7C3AED", "#EA580C", "#0891B2"]
    },
    {
      id: 4,
      name: "Professional Notebook",
      brand: "PRINTEASE",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      colors: ["#6B7280", "#1F2937", "#374151", "#4B5563", "#9CA3AF"]
    }
  ]



  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">   
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Category
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our premium printing products with customizable designs
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden border border-gray-100"
            >
              {/* Product Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
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

              {/* Product Info */}
              <div className="p-6">
                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  High-quality custom printing with premium materials and fast turnaround times.
                </p>

                {/* View More Button */}
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105">
                    <Icon icon="heroicons:eye-20-solid" className="w-3 h-3" />
                    <span>View More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <Icon icon="heroicons:arrow-right-20-solid" className="w-4 h-4" />
            <span>View All Products</span>
          </button>
        </div>
      </div>

    </section>
  )
}

export default CategorySection
