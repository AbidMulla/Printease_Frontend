import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function AllCategory() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleProductClick = (product) => {
    // Navigate to product detail page with product data
    navigate('/product-detail', { 
      state: { product: product }
    })
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      description: "Premium cotton blend with custom print",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹499",
      originalPrice: "₹699",
      rating: 4.5,
      reviews: 89,
      category: "T-Shirts",
      colors: [
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Gray', value: 'gray', hex: '#808080' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Premium cotton blend fabric',
        'Custom print technology',
        'Comfortable fit',
        'Machine washable',
        'Multiple size options'
      ]
    },
    {
      id: 2,
      name: "Black Graphic T-Shirt",
      description: "Urban design with artistic print",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.7,
      reviews: 156,
      category: "T-Shirts",
      colors: [
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Navy', value: 'navy', hex: '#000080' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Urban artistic design',
        'High-quality printing',
        'Comfortable cotton material',
        'Durable construction',
        'Trendy street style'
      ]
    },
    {
      id: 3,
      name: "Vintage Style T-Shirt",
      description: "Retro design with distressed print",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹649",
      originalPrice: "₹849",
      rating: 4.3,
      reviews: 67,
      category: "T-Shirts",
      colors: [
        { name: 'Cream', value: 'cream', hex: '#F5F5DC' },
        { name: 'Beige', value: 'beige', hex: '#F5F5DC' },
        { name: 'Light Gray', value: 'lightgray', hex: '#D3D3D3' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Vintage distressed design',
        'Retro styling',
        'Comfortable fit',
        'Unique print technique',
        'Classic appeal'
      ]
    },
    {
      id: 4,
      name: "Sports Team T-Shirt",
      description: "Athletic design with team logo",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹549",
      originalPrice: "₹749",
      rating: 4.6,
      reviews: 234,
      category: "T-Shirts",
      colors: [
        { name: 'Blue', value: 'blue', hex: '#0000FF' },
        { name: 'Red', value: 'red', hex: '#FF0000' },
        { name: 'Green', value: 'green', hex: '#008000' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Team logo design',
        'Athletic fit',
        'Moisture-wicking fabric',
        'Durable construction',
        'Team spirit design'
      ]
    },
    {
      id: 5,
      name: "Custom Design T-Shirt",
      description: "Your design, perfectly printed",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹699",
      originalPrice: "₹899",
      rating: 4.8,
      reviews: 189,
      category: "T-Shirts",
      colors: [
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Gray', value: 'gray', hex: '#808080' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Custom design printing',
        'High-quality fabric',
        'Perfect color reproduction',
        'Professional finish',
        'Your unique design'
      ]
    },
    {
      id: 6,
      name: "Minimalist T-Shirt",
      description: "Simple, elegant design",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹449",
      originalPrice: "₹649",
      rating: 4.4,
      reviews: 123,
      category: "T-Shirts",
      colors: [
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Navy', value: 'navy', hex: '#000080' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Minimalist design',
        'Clean aesthetic',
        'Comfortable fit',
        'Versatile styling',
        'Timeless appeal'
      ]
    },
    {
      id: 7,
      name: "Band T-Shirt",
      description: "Music-themed custom print",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.5,
      reviews: 98,
      category: "T-Shirts",
      colors: [
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Gray', value: 'gray', hex: '#808080' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Music-themed design',
        'Band logo printing',
        'Comfortable cotton',
        'Concert-ready style',
        'Music fan favorite'
      ]
    },
    {
      id: 8,
      name: "Colorful Pattern T-Shirt",
      description: "Vibrant all-over print design",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹749",
      originalPrice: "₹949",
      rating: 4.7,
      reviews: 145,
      category: "T-Shirts",
      colors: [
        { name: 'Multicolor', value: 'multicolor', hex: '#FFD700' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Vibrant all-over print',
        'Colorful pattern design',
        'Eye-catching style',
        'High-quality printing',
        'Unique artistic design'
      ]
    },
    {
      id: 9,
      name: "Limited Edition T-Shirt",
      description: "Exclusive design collection",
      image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹899",
      originalPrice: "₹1099",
      rating: 4.9,
      reviews: 78,
      category: "T-Shirts",
      colors: [
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Gold', value: 'gold', hex: '#FFD700' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Limited edition design',
        'Exclusive collection',
        'Premium quality fabric',
        'Unique artwork',
        'Collector\'s item'
      ]
    },
    {
      id: 10,
      name: "Typography T-Shirt",
      description: "Creative text-based design",
      image: "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹549",
      originalPrice: "₹749",
      rating: 4.3,
      reviews: 112,
      category: "T-Shirts",
      colors: [
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Gray', value: 'gray', hex: '#808080' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Creative typography design',
        'Text-based artwork',
        'Clean lettering',
        'Modern style',
        'Statement piece'
      ]
    },
    {
      id: 11,
      name: "Eco-Friendly T-Shirt",
      description: "Sustainable fabric with eco print",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.6,
      reviews: 167,
      category: "T-Shirts",
      colors: [
        { name: 'Natural', value: 'natural', hex: '#F5DEB3' },
        { name: 'Green', value: 'green', hex: '#90EE90' },
        { name: 'Brown', value: 'brown', hex: '#A0522D' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Sustainable fabric',
        'Eco-friendly printing',
        'Organic materials',
        'Environmentally conscious',
        'Green technology'
      ]
    },
    {
      id: 12,
      name: "Anime T-Shirt",
      description: "Japanese anime inspired design",
      image: "https://images.unsplash.com/photo-1619086311112-6c194c65e2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: "₹649",
      originalPrice: "₹849",
      rating: 4.8,
      reviews: 234,
      category: "T-Shirts",
      colors: [
        { name: 'White', value: 'white', hex: '#FFFFFF' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Pink', value: 'pink', hex: '#FFC0CB' }
      ],
      sizes: [
        { name: 'Small', value: 'S', dimensions: 'S' },
        { name: 'Medium', value: 'M', dimensions: 'M' },
        { name: 'Large', value: 'L', dimensions: 'L' },
        { name: 'XL', value: 'XL', dimensions: 'XL' }
      ],
      features: [
        'Anime-inspired design',
        'Japanese artwork',
        'Vibrant colors',
        'Pop culture style',
        'Fan favorite design'
      ]
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
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden border border-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product)}
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
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {product.price}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-indigo-600">{product.price}</span>
                    <button 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic here
                        console.log('Added to cart:', product);
                      }}
                    >
                      <Icon icon="heroicons:shopping-cart-20-solid" className="w-4 h-4" />
                      <span>Order</span>
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
