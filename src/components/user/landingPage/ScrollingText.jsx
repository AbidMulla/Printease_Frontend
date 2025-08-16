import React from 'react'
import { Icon } from '@iconify/react'

function ScrollingText() {
  const scrollingItems = [
    { icon: "heroicons:rocket-launch-20-solid", text: "Fast & Reliable Printing Services" },
    { icon: "heroicons:sparkles-20-solid", text: "Premium Quality Materials" },
    { icon: "heroicons:currency-dollar-20-solid", text: "Best Prices Guaranteed" },
    { icon: "heroicons:clock-20-solid", text: "24/7 Customer Support" },
    { icon: "heroicons:device-phone-mobile-20-solid", text: "Easy Online Ordering" },
    { icon: "heroicons:trophy-20-solid", text: "Award-Winning Service" }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of items */}
        <div className="flex whitespace-nowrap">
          {scrollingItems.map((item, index) => (
            <span key={index} className="text-white font-semibold text-lg mx-8 flex items-center space-x-2">
              <Icon icon={item.icon} className="w-5 h-5" />
              <span>{item.text}</span>
            </span>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex whitespace-nowrap">
          {scrollingItems.map((item, index) => (
            <span key={`duplicate-${index}`} className="text-white font-semibold text-lg mx-8 flex items-center space-x-2">
              <Icon icon={item.icon} className="w-5 h-5" />
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingText
