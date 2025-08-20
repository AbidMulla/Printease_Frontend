import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    phone2: '+1 234 567 8901',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10001',
    country: 'United States',
    company: 'PrintEase Inc.',
    companyAddress: '456 Business Park, Suite 100, City, State 12345'
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // Handle save logic here
    console.log('Profile updated:', profileData)
  }

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <Icon icon="heroicons:user-20-solid" className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profile</h1>
              <p className="text-gray-600">Manage your account settings</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Icon icon="heroicons:pencil-20-solid" className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit'}</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Icon icon="heroicons:arrow-right-on-rectangle-20-solid" className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Personal Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Icon icon="heroicons:user-circle-20-solid" className="w-5 h-5 text-indigo-600" />
              <span>Personal Information</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone 2</label>
                <input
                  type="tel"
                  name="phone2"
                  value={profileData.phone2}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={profileData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={profileData.state}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zipcode</label>
                <input
                  type="text"
                  name="zipcode"
                  value={profileData.zipcode}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={profileData.country}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Company Info Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Icon icon="heroicons:building-office-20-solid" className="w-5 h-5 text-indigo-600" />
              <span>Company Information</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={profileData.company}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Address</label>
                <textarea
                  name="companyAddress"
                  value={profileData.companyAddress}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows="3"
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:text-gray-500"
                />
                <p className="text-xs text-blue-600 font-medium mt-1">
                  We will deliver your product from this address.
                </p>
              </div>
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Icon icon="heroicons:check-20-solid" className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Orders</span>
                <span className="font-semibold text-indigo-600">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Completed</span>
                <span className="font-semibold text-green-600">22</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold text-yellow-600">2</span>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Icon icon="heroicons:map-pin-20-solid" className="w-5 h-5 text-indigo-600" />
              <span>(Please Read Carefully)</span>
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-gray-500">
                Orders will be delivered to this address. Update your address in the Personal Information section.
              </p>
              <p className="text-xs text-red-500 font-medium">
                Please ensure you fill in the correct and complete address to avoid delivery issues.
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Profile
