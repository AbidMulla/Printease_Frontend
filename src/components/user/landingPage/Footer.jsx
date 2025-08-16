import React from 'react'
import { Icon } from '@iconify/react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: 'ri:facebook-fill',
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: 'ri:twitter-fill',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: 'ri:instagram-fill',
      url: '#',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: 'ri:linkedin-fill',
      url: '#',
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: 'ri:youtube-fill',
      url: '#',
      color: 'hover:text-red-600'
    }
  ]

  const quickLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Portfolio', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Blog', url: '#' }
  ]

  const services = [
    { name: 'Business Cards', url: '#' },
    { name: 'Banners & Signs', url: '#' },
    { name: 'Logo Design', url: '#' },
    { name: 'Product Labels', url: '#' },
    { name: 'Custom Printing', url: '#' }
  ]

  const support = [
    { name: 'Help Center', url: '#' },
    { name: 'Order Tracking', url: '#' },
    { name: 'Returns', url: '#' },
    { name: 'FAQ', url: '#' },
    { name: 'Contact Support', url: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Icon icon="heroicons:printer-20-solid" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">PrintEase</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for all printing needs. We deliver high-quality, 
              professional printing solutions with exceptional customer service.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-700 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon icon="heroicons:chevron-right-20-solid" className="w-4 h-4 mr-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon icon="heroicons:chevron-right-20-solid" className="w-4 h-4 mr-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Icon icon="heroicons:map-pin-20-solid" className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Print Street<br />
                  Design District, NY 10001
                </p>
              </div>
              
              <div className="flex items-center">
                <Icon icon="heroicons:phone-20-solid" className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="flex items-center">
                <Icon icon="heroicons:envelope-20-solid" className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@printease.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@printease.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Icon icon="heroicons:clock-20-solid" className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  Mon - Fri: 9AM - 6PM<br />
                  Sat: 10AM - 4PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} PrintEase. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
