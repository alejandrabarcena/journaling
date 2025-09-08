import React from 'react';

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
      {/* Photo 1 */}
      <div className="transform -rotate-2 relative">
        <div className="bg-white p-2 shadow-lg">
          <img 
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Portrait" 
            className="w-full h-40 sm:h-48 md:h-64 object-cover"
          />
          <div className="p-2">
            <span className="text-sm font-mono text-stone-600">(01)</span>
          </div>
        </div>
        {/* Tape effect */}
        <div className="absolute -top-1 md:-top-2 -left-1 md:-left-2 w-6 md:w-8 h-6 md:h-8 bg-yellow-200 opacity-80 transform rotate-45"></div>
        <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 md:w-8 h-6 md:h-8 bg-yellow-200 opacity-80 transform -rotate-45"></div>
      </div>

      {/* Photo 2 */}
      <div className="transform rotate-1 relative">
        <div className="bg-white p-2 shadow-lg">
          <img 
            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Still life" 
            className="w-full h-40 sm:h-48 md:h-64 object-cover"
          />
          <div className="p-2">
            <span className="text-sm font-mono text-stone-600">(02)</span>
          </div>
        </div>
        {/* Tape effect */}
        <div className="absolute -top-1 md:-top-2 left-1/2 w-8 md:w-12 h-4 md:h-6 bg-gray-300 opacity-80 transform -translate-x-1/2"></div>
      </div>

      {/* Photo 3 */}
      <div className="transform rotate-2 relative">
        <div className="bg-white p-2 shadow-lg">
          <img 
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Fashion" 
            className="w-full h-40 sm:h-48 md:h-64 object-cover"
          />
          <div className="p-2">
            <span className="text-sm font-mono text-stone-600">(03)</span>
          </div>
        </div>
        {/* Washi tape */}
        <div className="absolute -bottom-1 md:-bottom-2 -right-1 md:-right-2 w-12 md:w-16 h-3 md:h-4 bg-pink-300 opacity-80 transform rotate-12"></div>
      </div>

      {/* Photo 4 */}
      <div className="transform -rotate-1 relative">
        <div className="bg-white p-2 shadow-lg">
          <img 
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Details" 
            className="w-full h-40 sm:h-48 md:h-64 object-cover"
          />
          <div className="p-2">
            <span className="text-sm font-mono text-stone-600">(04)</span>
          </div>
        </div>
        {/* Corner tape */}
        <div className="absolute top-0 right-0 w-4 md:w-6 h-4 md:h-6 bg-blue-200 opacity-80"></div>
      </div>
    </div>
  );
};

export default Gallery;