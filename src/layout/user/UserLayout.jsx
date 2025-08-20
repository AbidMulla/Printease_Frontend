import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Sidebar from './Sidebar'

function UserLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 right-0 left-0 bg-white shadow-md z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Icon icon="heroicons:bars-3-20-solid" className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              PrintEase
            </h1>
          </div>
          <Link to="/profile" className="p-2">
            <Icon icon="heroicons:user-circle-20-solid" className="w-6 h-6 text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8 mt-14 lg:mt-0 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout
