import React, { useState } from 'react'
import { Icon } from '@iconify/react'

function PaymentHistory() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Sample payment data
  const payments = [
    {
      id: 'PAY-001',
      date: '2024-03-15',
      amount: '₹2,300',
      method: 'Credit Card',
      cardLast4: '4242',
      status: 'successful',
      orderId: 'ORD-001'
    },
    {
      id: 'PAY-002',
      date: '2024-03-14',
      amount: '₹3,000',
      method: 'UPI',
      upiId: 'user@upi',
      status: 'successful',
      orderId: 'ORD-002'
    },
    {
      id: 'PAY-003',
      date: '2024-03-13',
      amount: '₹2,700',
      method: 'Net Banking',
      bank: 'HDFC Bank',
      status: 'pending',
      orderId: 'ORD-003'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'successful':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'failed':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getPaymentIcon = (method) => {
    switch (method.toLowerCase()) {
      case 'credit card':
        return 'heroicons:credit-card-20-solid'
      case 'upi':
        return 'heroicons:device-phone-mobile-20-solid'
      case 'net banking':
        return 'heroicons:building-library-20-solid'
      default:
        return 'heroicons:banknotes-20-solid'
    }
  }

  const filteredPayments = payments.filter(payment => {
    if (selectedFilter === 'all') return true
    return payment.status === selectedFilter
  })

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Payment History</h1>
        <p className="text-gray-600">View all your payment transactions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Spent</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">₹8,000</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Icon icon="heroicons:banknotes-20-solid" className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Successful Payments</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 mt-1">2</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Icon icon="heroicons:check-circle-20-solid" className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Payments</p>
              <p className="text-xl sm:text-2xl font-bold text-yellow-600 mt-1">1</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Icon icon="heroicons:clock-20-solid" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
        {['all', 'successful', 'pending', 'failed'].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`
              px-3 sm:px-4 py-2 rounded-lg font-medium capitalize transition-colors duration-200 text-sm sm:text-base
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

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium text-gray-500">Transaction ID</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium text-gray-500">Payment Method</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium text-gray-500">Order ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-900 font-medium">{payment.id}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-500">{payment.date}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-900 font-medium">{payment.amount}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center space-x-2">
                      <Icon icon={getPaymentIcon(payment.method)} className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-900">{payment.method}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium capitalize ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <a href="#" className="text-sm text-indigo-600 hover:text-indigo-900">
                      {payment.orderId}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden">
          {filteredPayments.map((payment) => (
            <div key={payment.id} className="p-4 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon icon={getPaymentIcon(payment.method)} className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">{payment.method}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(payment.status)}`}>
                  {payment.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Transaction ID</span>
                  <span className="text-sm font-medium text-gray-900">{payment.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Date</span>
                  <span className="text-sm text-gray-900">{payment.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Amount</span>
                  <span className="text-sm font-medium text-gray-900">{payment.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Order ID</span>
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-900">
                    {payment.orderId}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory

