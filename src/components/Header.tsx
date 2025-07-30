import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Apollo Marketing</div>
              <div className="text-sm text-blue-600">iLMS Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`font-medium transition-colors ${isActive('/features') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium transition-colors ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Pricing
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown size={16} />
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a 
                    href="https://salescentri.com/solutions/psa-suite" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    PSA Suite
                  </a>
                  <a 
                    href="https://salescentri.com/solutions/use-case-navigator" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Use Case Navigator
                  </a>
                  <a 
                    href="https://salescentri.com/solutions/by-industry/it" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    IT Solutions
                  </a>
                  <a 
                    href="https://salescentri.com/solutions/by-use-case/sdr-teams" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    SDR Teams
                  </a>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/features" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link to="/blog" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  className="px-4 py-2 text-blue-600 font-medium text-center border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Free Trial
                </a>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-center rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Book Demo
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;