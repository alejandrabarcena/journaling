import React from 'react';

const ClancyLogo = ({ className = "w-full h-auto" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      {/* Recorte del letrero con tipografía Futura */}
      <div className="bg-white p-6 shadow-lg transform -rotate-1 relative border border-gray-200">
        <div className="text-center">
          <div 
            className="text-4xl md:text-6xl font-bold text-black tracking-wider mb-2"
            style={{ 
              fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            CLANCY
          </div>
          <div 
            className="text-2xl md:text-4xl font-bold text-black tracking-wider"
            style={{ 
              fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            PINK PUNK
          </div>
        </div>
        
        {/* Efectos de cinta adhesiva para simular que está pegado */}
        <div className="absolute -top-3 left-12 w-16 h-8 bg-yellow-200 opacity-80 transform rotate-12 shadow-sm"></div>
        <div className="absolute -top-3 right-12 w-16 h-8 bg-yellow-200 opacity-80 transform -rotate-12 shadow-sm"></div>
        <div className="absolute -bottom-3 left-1/3 w-20 h-6 bg-gray-300 opacity-70 transform rotate-6 shadow-sm"></div>
        <div className="absolute -bottom-3 right-1/4 w-18 h-6 bg-blue-200 opacity-70 transform -rotate-8 shadow-sm"></div>
      </div>
    </div>
  );
};

export default ClancyLogo;