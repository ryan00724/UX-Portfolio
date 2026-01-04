'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const element = document.querySelector(item.href)
        return { name: item.name, element, href: item.href }
      })

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name)
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-2 sm:px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home', 'Home')
          }}
          className="text-xl sm:text-2xl font-bold text-black hover:text-gray-700 transition-colors"
        >
          Ryan Creary
        </a>

        {/* Pill Navigation - Centered (Desktop only) */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-full px-1 sm:px-2 py-1 sm:py-1.5 shadow-lg">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href, item.name)
                  }}
                  className={`relative px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-300 text-black font-bold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          aria-expanded="false"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <FiMenu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Spacer to balance the layout (Desktop only) */}
        <div className="hidden md:block text-xl sm:text-2xl font-bold invisible">
          Ryan Creary
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-white rounded-lg shadow-lg px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href, item.name)
                  }}
                  className={`block px-4 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-gray-200 text-black font-bold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

