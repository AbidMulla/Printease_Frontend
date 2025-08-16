import React, { useState, useEffect, useCallback } from 'react'
import { Icon } from '@iconify/react'

function SlidingImages() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Modern Digital Printing Press",
      title: "Digital Printing Excellence",
      description: "High-speed digital printing for all your needs",
      badge: "Digital"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Professional Print Shop",
      title: "Professional Print Shop",
      description: "State-of-the-art equipment and expert technicians",
      badge: "Professional"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Print Finishing Services",
      title: "Perfect Finishing",
      description: "Binding, laminating, and custom finishing services",
      badge: "Finishing"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Business Cards and Stationery",
      title: "Business Essentials",
      description: "Professional business cards, letterheads, and stationery",
      badge: "Business"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Large Format Printing",
      title: "Large Format Printing",
      description: "Banners, posters, and large-scale printing solutions",
      badge: "Large Format"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 6000) // Increased to 6 seconds for better UX

    return () => clearInterval(timer)
  }, [isAutoPlaying, images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsAutoPlaying(!isAutoPlaying)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAutoPlaying])

  // Touch handlers for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }, [images.length])

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <div className="relative w-full h-64 md:h-[400px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Slides */}
      <div 
        className="relative w-full h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 transform animate-bounce">
                  {image.badge}
                </div>
                
                {/* Title with enhanced animation */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block transform transition-all duration-1000 delay-300">
                    {image.title.split(' ').map((word, i) => (
                      <span 
                        key={i} 
                        className="inline-block mr-4 animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                </h2>
                
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/20 group"
        aria-label="Previous slide"
      >
        <Icon icon="heroicons:chevron-left-20-solid" className="w-6 h-6 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/20 group"
        aria-label="Next slide"
      >
        <Icon icon="heroicons:chevron-right-20-solid" className="w-6 h-6 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>

             {/* Modern Slide Navigation */}
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
         {images.map((_, index) => (
           <button
             key={index}
             onClick={() => goToSlide(index)}
             className={`relative transition-all duration-500 transform hover:scale-110 ${
               index === currentSlide
                 ? 'w-12 h-2 bg-white rounded-full shadow-lg'
                 : 'w-8 h-2 bg-white/40 hover:bg-white/60 rounded-full'
             }`}
             aria-label={`Go to slide ${index + 1}`}
           >
             {index === currentSlide && (
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
             )}
           </button>
         ))}
       </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-6000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / images.length) * 100}%`
          }}
        />
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <Icon icon="heroicons:pause-20-solid" className="w-5 h-5" />
        ) : (
          <Icon icon="heroicons:play-20-solid" className="w-5 h-5" />
        )}
      </button>

      {/* Slide Counter */}
      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium border border-white/20">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}

export default SlidingImages
