import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    {
      name: 'Profile',
      path: '/profile',
      icon: 'heroicons:user-circle-20-solid'
    },
    {
      name: 'Order History',
      path: '/order-history',
      icon: 'heroicons:document-text-20-solid'
    },
    {
      name: 'Payment History',
      path: '/payment-history',
      icon: 'heroicons:credit-card-20-solid'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              PrintEase
            </h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <Icon icon="heroicons:x-mark-20-solid" className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200
                    ${isActivePath(item.path)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info and Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <Icon icon="heroicons:user-20-solid" className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
          </div>
          <button
            onClick={() => {
              // Handle logout logic here
              console.log('Logout clicked');
              // Redirect to home page
              navigate('/');
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
          >
            <Icon icon="heroicons:arrow-right-on-rectangle-20-solid" className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
