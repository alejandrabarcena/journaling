import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ClancyLogo from './ClancyLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-50 border-b border-stone-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ClancyLogo className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#gallery" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium">
              Gallery
            </a>
            <a href="#blog" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium">
              Journal
            </a>
            <a href="#about" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium">
              About
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium py-2">
                Home
              </a>
              <a href="#gallery" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium py-2">
                Gallery
              </a>
              <a href="#blog" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium py-2">
                Journal
              </a>
              <a href="#about" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium py-2">
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;