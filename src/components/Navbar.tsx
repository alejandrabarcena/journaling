import React, { useState } from 'react';
import { Menu, X, Music, Camera, Play, Github } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-100 border-b border-stone-300 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Navigation Links - Center */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8">
              <a href="#inicio" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium text-sm">
                Inicio
              </a>
              <a href="#memories" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium text-sm">
                Memories
              </a>
              <a href="#journaling" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium text-sm">
                Journaling
              </a>
              <a href="#blog" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium text-sm">
                Blog
              </a>
            </div>
          </div>

          {/* Social Icons - Right */}
          <div className="flex items-center space-x-3">
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">
              <Music className="h-5 w-5" />
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">
              <Camera className="h-5 w-5" />
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">
              <Play className="h-5 w-5" />
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.024.020a.588.588 0 01-.073.049l-.029.018-.01.007-.073.041L5.24 23.94a.604.604 0 01-.595.021.63.63 0 01-.344-.562V.601C4.301.27 4.565.02 4.896.02a.63.63 0 01.344.1L18.144.659a.635.635 0 01.276.572v11.03z"/>
              </svg>
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;