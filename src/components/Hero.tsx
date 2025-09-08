import React from 'react';
import ClancyLogo from './ClancyLogo';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Large Logo */}
            <div className="mb-8">
              <ClancyLogo className="w-full max-w-2xl h-auto" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-stone-900 leading-none">
                Boundaries
              </h1>
              <div className="text-4xl md:text-6xl font-light italic text-stone-800">
                Don't Limit
              </div>
              <div className="text-4xl md:text-6xl font-light italic text-stone-800">
                Creativity
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-amber-400"></div>
            
            <div className="relative">
              <div className="text-xl md:text-2xl font-bold text-stone-900 border-2 border-blue-500 rounded-full px-6 py-3 inline-block transform -rotate-2 bg-white">
                They Shape It
              </div>
            </div>
            
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              With too many options, we freeze. With smart constraints, we build. Let form lead function.
            </p>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="bg-slate-400 h-96 lg:h-[500px] w-full rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-400"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-stone-200"></div>
              
              {/* Date stamp */}
              <div className="absolute bottom-8 left-8 bg-stone-900 text-white px-4 py-2 text-sm font-mono">
                Style 05.25.2023
              </div>
              
              {/* Text overlay */}
              <div className="absolute top-8 left-8 text-white text-sm max-w-xs">
                <p>Style is a way to say who you are without having to speak.</p>
              </div>
              
              <div className="absolute top-8 right-8 text-stone-900 text-sm max-w-xs">
                <p>Style is a reflection of your attitude and your personality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 text-[20rem] font-bold text-stone-100 select-none pointer-events-none hidden xl:block">
        01
      </div>
    </section>
  );
};

export default Hero;