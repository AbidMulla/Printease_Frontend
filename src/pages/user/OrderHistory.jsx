import React, { useState } from 'react'
import { Icon } from '@iconify/react'

function OrderHistory() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Sample order data
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-03-15',
      items: [
        { name: 'Business Cards', quantity: 500, price: '₹1,500' },
        { name: 'Letterheads', quantity: 100, price: '₹800' }
      ],
      total: '₹2,300',
      status: 'completed',
      paymentStatus: 'paid'
    },
    {
      id: 'ORD-002',
      date: '2024-03-14',
      items: [
        { name: 'Flyers', quantity: 1000, price: '₹3,000' }
      ],
      total: '₹3,000',
      status: 'processing',
      paymentStatus: 'paid'
    },
    {
      id: 'ORD-003',
      date: '2024-03-13',
      items: [
        { name: 'Banners', quantity: 2, price: '₹1,200' },
        { name: 'Posters', quantity: 50, price: '₹1,500' }
      ],
      total: '₹2,700',
      status: 'pending',
      paymentStatus: 'pending'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'processing':
        return 'bg-blue-100 text-blue-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'text-green-600'
      case 'pending':
        return 'text-yellow-600'
      default:
        return 'text-gray-600'
    }
  }

  const filteredOrders = orders.filter(order => {
    if (selectedFilter === 'all') return true
    return order.status === selectedFilter
  })

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
        <p className="text-gray-600">Track and manage your orders</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-3">
        {['all', 'completed', 'processing', 'pending'].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`
              px-4 py-2 rounded-lg font-medium capitalize transition-colors duration-200
              ${selectedFilter === filter
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payment</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">#{order.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="text-sm">
                          <p className="text-gray-900">{item.name}</p>
                          <p className="text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{order.total}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center space-x-1 text-sm font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
                      <Icon 
                        icon={order.paymentStatus === 'paid' ? 'heroicons:check-circle-20-solid' : 'heroicons:clock-20-solid'}
                        className="w-4 h-4"
                      />
                      <span className="capitalize">{order.paymentStatus}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1 border border-indigo-600 text-indigo-600 rounded text-xs hover:bg-indigo-50 transition-colors duration-200">
                        <Icon icon="heroicons:document-text-20-solid" className="w-4 h-4" />
                        <span>Invoice</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 text-gray-600 rounded text-xs hover:bg-gray-50 transition-colors duration-200">
                        <Icon icon="heroicons:chat-bubble-left-20-solid" className="w-4 h-4" />
                        <span>Support</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory

