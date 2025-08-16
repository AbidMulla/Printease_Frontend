import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

function CustomerReview() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const customerReviews = [
    {
      id: 1,
      customerName: "Sarah Johnson",
      customerTitle: "Marketing Director",
      rating: 5,
      comment: "PrintEase exceeded all my expectations! The quality of our business cards is outstanding, and the turnaround time was incredible. Highly recommend!"
    },
    {
      id: 2,
      customerName: "Michael Chen",
      customerTitle: "Startup Founder",
      rating: 5,
      comment: "The logo design service was fantastic. They really understood our brand vision and delivered exactly what we needed. Professional and creative team!"
    },
    {
      id: 3,
      customerName: "Emily Rodriguez",
      customerTitle: "Event Coordinator",
      rating: 5,
      comment: "Our event banners looked absolutely stunning! The printing quality is top-notch and the customer service was exceptional throughout the process."
    },
    {
      id: 4,
      customerName: "David Thompson",
      customerTitle: "Product Manager",
      rating: 5,
      comment: "The product labels we ordered are perfect. Great attention to detail and the materials used are premium quality. Will definitely use PrintEase again!"
    },
    {
      id: 5,
      customerName: "Lisa Wang",
      customerTitle: "Creative Director",
      rating: 5,
      comment: "As a creative professional, I'm very particular about print quality. PrintEase delivered exceptional results that perfectly matched our design vision."
    },
    {
      id: 6,
      customerName: "Robert Davis",
      customerTitle: "Business Owner",
      rating: 5,
      comment: "Fast, reliable, and professional service. Our company branding materials look amazing and the team was incredibly helpful throughout the project."
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(customerReviews.length / 3))
    }, 5000) // 5 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying, customerReviews.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(customerReviews.length / 3)) % Math.ceil(customerReviews.length / 3))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(customerReviews.length / 3))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Group reviews into sets of 3
  const reviewGroups = []
  for (let i = 0; i < customerReviews.length; i += 3) {
    reviewGroups.push(customerReviews.slice(i, i + 3))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">   
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers who have experienced our exceptional service
          </p>
        </div>

        {/* Customer Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Reviews Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviewGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.map((review) => (
                                             <div
                         key={review.id}
                         className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 relative group"
                       >
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors duration-300">
                          <Icon icon="heroicons:chat-bubble-left-right-20-solid" className="w-8 h-8" />
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center mb-6">
                          {[...Array(5)].map((_, index) => (
                            <Icon 
                              key={index}
                              icon="heroicons:star-20-solid"
                              className={`w-5 h-5 ${index < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 text-base mb-8 leading-relaxed italic relative z-10">
                          "{review.comment}"
                        </p>

                        {/* Customer Info */}
                        <div className="flex items-center relative z-10">
                          <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                            {review.customerName.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{review.customerName}</h4>
                            <p className="text-indigo-600 text-sm font-medium">{review.customerTitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-xl hover:shadow-2xl text-gray-700 hover:text-indigo-600 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 group z-10"
            aria-label="Previous reviews"
          >
            <Icon icon="heroicons:chevron-left-20-solid" className="w-6 h-6 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-xl hover:shadow-2xl text-gray-700 hover:text-indigo-600 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 group z-10"
            aria-label="Next reviews"
          >
            <Icon icon="heroicons:chevron-right-20-solid" className="w-6 h-6 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-6 right-6 bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-indigo-600 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <Icon icon="heroicons:pause-20-solid" className="w-5 h-5" />
            ) : (
              <Icon icon="heroicons:play-20-solid" className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {reviewGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <Icon icon="heroicons:chat-bubble-left-right-20-solid" className="w-4 h-4" />
            <span>Read All Reviews</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CustomerReview
