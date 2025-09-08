import React from 'react';
import ClancyLogo from './ClancyLogo';
import Navbar from './Navbar';

const NotebookPage = () => {
  return (
    <div className="min-h-screen bg-stone-200 w-full">
      <Navbar />
      
      <div className="p-4 md:p-8 w-full">
        {/* Notebook binding holes */}
        <div className="fixed left-2 md:left-8 top-16 bottom-0 w-4 md:w-8 flex flex-col justify-evenly z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3 h-3 md:w-6 md:h-6 bg-stone-300 rounded-full border border-stone-400 md:border-2"></div>
          ))}
        </div>

        {/* Main notebook page */}
        <div className="max-w-4xl mx-auto bg-stone-50 min-h-screen shadow-2xl relative ml-8 md:ml-16 mt-4">
          {/* Paper texture and lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, #94a3b8 28px, #94a3b8 29px)',
            }}></div>
          </div>

          {/* Red margin line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-red-400 opacity-60"></div>

          <div className="relative p-4 md:p-8 lg:p-12">
            {/* Header area */}
            <div className="mb-8 md:mb-12">
              <div className="mb-4 md:mb-6 relative flex justify-center">
                <ClancyLogo className="w-full max-w-xs h-auto" />
              </div>
              
              {/* Date stamp */}
              <div className="absolute top-4 md:top-8 right-4 md:right-8 transform rotate-2">
                <div className="bg-red-500 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-mono rounded">
                  25.01.2025
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div id="inicio" className="space-y-8 md:space-y-16">
              
              {/* Hero section */}
              <div className="transform -rotate-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-typewriter text-stone-900 mb-4 leading-tight">
                  Boundaries
                </h1>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light italic font-typewriter text-stone-700 mb-6">
                  Don't Limit Creativity
                </div>
                
                {/* Underline with marker */}
                <div className="w-20 md:w-32 h-1 md:h-2 bg-yellow-300 opacity-70 transform -rotate-1 mb-6"></div>
                
                <div className="bg-blue-100 border-l-4 border-blue-500 p-3 md:p-4 transform rotate-1 max-w-xs md:max-w-md">
                  <p className="text-base md:text-lg font-bold font-typewriter text-stone-900">They Shape It</p>
                </div>
                
                <p className="text-base md:text-lg font-typewriter text-stone-600 mt-6 max-w-sm md:max-w-lg leading-relaxed">
                  With too many options, we freeze. With smart constraints, we build. Let form lead function.
                </p>
              </div>

              {/* Gallery section */}
              <div id="memories" className="space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold font-typewriter text-stone-900 transform rotate-1 mb-6 md:mb-8">
                  MEMORIES
                </h2>
                
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
              </div>

              {/* Journaling section */}
              <div id="journaling" className="space-y-8 md:space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold font-typewriter text-stone-900 transform -rotate-1 mb-6 md:mb-8">
                  JOURNALING
                </h2>
                
                {/* Entry 1 */}
                <div className="bg-yellow-100 p-3 md:p-6 transform rotate-1 shadow-md max-w-full md:max-w-2xl">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-base md:text-xl font-bold font-typewriter text-stone-900 leading-tight">Finding Myself</h3>
                    <span className="text-xs md:text-sm text-stone-600 font-mono">06/15</span>
                  </div>
                  <p className="text-xs md:text-base font-typewriter text-stone-700 leading-relaxed mb-3 md:mb-4">
                    Style is more than clothes—it's a language. Every morning, I choose words to speak without saying anything.
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-red-500 text-white px-1.5 py-0.5 text-xs rounded">style</span>
                    <span className="bg-blue-500 text-white px-1.5 py-0.5 text-xs rounded">fashion</span>
                  </div>
                </div>

                {/* Entry 2 */}
                <div className="bg-blue-100 p-3 md:p-6 transform -rotate-1 shadow-md max-w-full md:max-w-2xl md:ml-auto">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-base md:text-xl font-bold font-typewriter text-stone-900 leading-tight">Modern Aesthetic</h3>
                    <span className="text-xs md:text-sm text-stone-600 font-mono">05/25</span>
                  </div>
                  <p className="text-xs md:text-base font-typewriter text-stone-700 leading-relaxed mb-3 md:mb-4">
                    Boundaries don't limit creativity—they shape it. Like a river carving through rock, constraints create beauty.
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-green-500 text-white px-1.5 py-0.5 text-xs rounded">modern</span>
                    <span className="bg-purple-500 text-white px-1.5 py-0.5 text-xs rounded">creative</span>
                  </div>
                </div>
              </div>

              {/* Blog section */}
              <div id="blog" className="space-y-6 md:space-y-12">
                <h2 className="text-xl md:text-3xl font-bold font-typewriter text-stone-900 transform rotate-1 mb-4 md:mb-8">
                  BLOG
                </h2>

                <div className="space-y-4 md:space-y-8">
                  <div className="bg-white p-3 md:p-6 transform -rotate-1 shadow-lg max-w-full md:max-w-3xl border-l-2 md:border-l-4 border-pink-400">
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <h3 className="text-base md:text-2xl font-bold font-typewriter text-stone-900 leading-tight">Style Evolution</h3>
                      <span className="text-xs md:text-sm text-stone-600 font-mono bg-stone-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded">Jan 25</span>
                    </div>
                    <p className="text-xs md:text-base font-typewriter text-stone-700 leading-relaxed mb-3 md:mb-4">
                      Fashion is more than clothes—it's a language. Every morning, I choose words to speak without saying anything.
                    </p>
                    <div className="flex space-x-2">
                      <span className="bg-pink-500 text-white px-2 py-0.5 text-xs rounded-full">fashion</span>
                      <span className="bg-purple-500 text-white px-2 py-0.5 text-xs rounded-full">personal</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 md:p-6 transform rotate-1 shadow-lg max-w-full md:max-w-3xl md:ml-auto border-l-2 md:border-l-4 border-blue-400">
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <h3 className="text-base md:text-2xl font-bold font-typewriter text-stone-900 leading-tight">Creative Constraints</h3>
                      <span className="text-xs md:text-sm text-stone-600 font-mono bg-stone-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded">Jan 20</span>
                    </div>
                    <p className="text-xs md:text-base font-typewriter text-stone-700 leading-relaxed mb-3 md:mb-4">
                      The more boundaries we set, the more creative we become. Like a river carving beautiful canyons.
                    </p>
                    <div className="flex space-x-2">
                      <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded-full">creativity</span>
                      <span className="bg-orange-500 text-white px-2 py-0.5 text-xs rounded-full">design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;