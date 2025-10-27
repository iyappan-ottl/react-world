// components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Boston React</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="#speakers" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Speakers
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Schedule
            </a>
            <a href="#sponsors" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Sponsors
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#speakers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Speakers
              </a>
              <a href="#schedule" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Schedule
              </a>
              <a href="#sponsors" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Sponsors
              </a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium mt-2">
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;