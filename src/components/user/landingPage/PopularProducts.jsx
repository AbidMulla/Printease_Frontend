import React from 'react'
import { Icon } from '@iconify/react'

function PopularProducts() {
  const popularDesigns = [
    {
      id: 1,
      name: "Modern Business Card",
      description: "Clean and professional business card designs for corporate clients",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Creative Logo Design",
      description: "Unique and memorable logo designs for startups and businesses",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Event Banner Design",
      description: "Eye-catching banners and posters for events and promotions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Product Label Design",
      description: "Professional product labels and packaging designs",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ]

  return (
    <section className="pt-16 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">   
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Popular Design
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our most loved and trending design templates crafted by our expert team
          </p>
        </div>

        {/* Popular Design Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden border border-gray-100"
            >
              {/* Design Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Popular Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Popular
                </div>
              </div>

              {/* Design Info */}
              <div className="p-6">
                {/* Design Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {design.name}
                </h3>

                {/* Design Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {design.description}
                </p>

                {/* Click More Button */}
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105">
                    <Icon icon="heroicons:arrow-right-20-solid" className="w-3 h-3" />
                    <span>Click More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Designs Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <Icon icon="heroicons:arrow-right-20-solid" className="w-4 h-4" />
            <span>View All Designs</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
