import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function ProductDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState('white')
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [uploadedLogo, setUploadedLogo] = useState(null)
  const [logoPreview, setLogoPreview] = useState(null)
  const fileInputRef = React.useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Get product data from navigation state or use default
  const product = location.state?.product || {
    id: 'PRD-001',
    name: 'Premium Business Cards',
    category: 'Business Cards',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 127,
    description: 'High-quality business cards with premium finish and professional design. Perfect for making a lasting impression.',
    features: [
      'Premium 350gsm cardstock',
      'Full-color printing on both sides',
      'Matte or glossy finish options',
      'Quick turnaround time',
      'Free design consultation'
    ],
    colors: [
      { name: 'White', value: 'white', hex: '#FFFFFF' },
      { name: 'Cream', value: 'cream', hex: '#F5F5DC' },
      { name: 'Light Blue', value: 'lightblue', hex: '#ADD8E6' },
      { name: 'Green', value: 'green', hex: '#90EE90' },
      { name: 'Pink', value: 'pink', hex: '#FFC0CB' },
      { name: 'Gray', value: 'gray', hex: '#808080' }
    ],
    sizes: [
      { name: 'Standard', value: 'standard', dimensions: '3.5" x 2"' },
      { name: 'Large', value: 'large', dimensions: '4" x 2.5"' },
      { name: 'Square', value: 'square', dimensions: '2.5" x 2.5"' },
      { name: 'Mini', value: 'mini', dimensions: '2" x 1.5"' }
    ],
    images: [
      '/src/assets/photos/business-card-1.jpg',
      '/src/assets/photos/business-card-2.jpg',
      '/src/assets/photos/business-card-3.jpg',
      '/src/assets/photos/business-card-4.jpg'
    ]
  }

  // Set initial color and size based on product data
  React.useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].value)
    }
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].value)
    }
  }, [product])

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity
    })
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 100) {
      setQuantity(newQuantity)
    }
  }

  const handleLogoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      
      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml']
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (PNG, JPG, SVG)')
        return
      }
      
      setUploadedLogo(file)
      
      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoPreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const removeLogo = () => {
    setUploadedLogo(null)
    setLogoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Helper function to extract numeric price value
  const getNumericPrice = (price) => {
    if (typeof price === 'number') return price
    if (typeof price === 'string') {
      // Remove currency symbols and convert to number
      return parseFloat(price.replace(/[₹$€£,]/g, '')) || 0
    }
    return 0
  }

  // Use product image as main image if available, otherwise use default images
  const productImages = product.image ? [product.image] : product.images || []
  
  // Create array of all available images including thumbnails
  const allImages = [
    ...productImages,
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Panel - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={allImages[selectedImage] || allImages[0] || '/src/assets/photos/business-card-1.jpg'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-indigo-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Additional Small Photos */}
            <div className="grid grid-cols-4 gap-3">
              <button
                onClick={() => setSelectedImage(productImages.length)}
                className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                  selectedImage === productImages.length ? 'border-indigo-600' : 'border-gray-200'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Product detail 1"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(productImages.length + 1)}
                className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                  selectedImage === productImages.length + 1 ? 'border-indigo-600' : 'border-gray-200'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Product detail 2"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(productImages.length + 2)}
                className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                  selectedImage === productImages.length + 2 ? 'border-indigo-600' : 'border-gray-200'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Product detail 3"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(productImages.length + 3)}
                className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                  selectedImage === productImages.length + 3 ? 'border-indigo-600' : 'border-gray-200'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Product detail 4"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Product Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Brand</span>
                  <span className="text-sm text-gray-900">Status Contract</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Size</span>
                  <span className="text-sm text-gray-900">1'3" x 1'11" (Rectangular)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Material</span>
                  <span className="text-sm text-gray-900">Polypropylene</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Weave Type</span>
                  <span className="text-sm text-gray-900">Needle Punched</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Item Weight</span>
                  <span className="text-sm text-gray-900">350 Grams</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Pile Height</span>
                  <span className="text-sm text-gray-900">Medium Pile</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Construction Type</span>
                  <span className="text-sm text-gray-900">Machine Made</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Back Material Type</span>
                  <span className="text-sm text-gray-900">Rubber</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Colour</span>
                  <span className="text-sm text-gray-900">Blue</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-600">Indoor/Outdoor Usage</span>
                  <span className="text-sm text-gray-900">Indoor/Outdoor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Product Information */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.category}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon={i < Math.floor(product.rating) ? "heroicons:star-20-solid" : "heroicons:star-20-outline"}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-indigo-600">₹{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      Save ₹{(getNumericPrice(product.originalPrice) - getNumericPrice(product.price)).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={`flex-1 p-3 border-2 rounded-lg text-center transition-all ${
                        selectedSize === size.value
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-medium">{size.name}</div>
                      <div className="text-sm text-gray-600">{size.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400"
                  >
                    <Icon icon="heroicons:minus-20-solid" className="w-5 h-5" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-20 text-center border-2 border-gray-300 rounded-lg py-2"
                    min="1"
                    max="100"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400"
                  >
                    <Icon icon="heroicons:plus-20-solid" className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Total Price</div>
                  <div className="text-2xl font-bold text-indigo-600">
                    ₹{(getNumericPrice(product.price) * quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Logo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Upload Your Logo</h3>
              {!uploadedLogo ? (
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors cursor-pointer"
                  onClick={handleUploadClick}
                >
                  <Icon icon="heroicons:cloud-arrow-up-20-solid" className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload your logo</p>
                  <p className="text-sm text-gray-500">PNG, JPG, SVG up to 10MB</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                </div>
              ) : (
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Uploaded Logo</h4>
                    <button
                      onClick={removeLogo}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-16 h-16 object-cover rounded border"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{uploadedLogo.name}</p>
                      <p className="text-xs text-gray-500">
                        {(uploadedLogo.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Logo Placement Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Select where you have to print the logo</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <div className="w-full h-24 bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <Icon icon="heroicons:photo-20-solid" className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Front Center</p>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <div className="w-full h-24 bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <Icon icon="heroicons:photo-20-solid" className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Back Center</p>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <div className="w-full h-24 bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <Icon icon="heroicons:photo-20-solid" className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Left Sleeve</p>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <div className="w-full h-24 bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <Icon icon="heroicons:photo-20-solid" className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Right Sleeve</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Icon icon="heroicons:shopping-cart-20-solid" className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
