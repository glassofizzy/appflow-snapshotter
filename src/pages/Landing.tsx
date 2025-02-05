import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [hoveredColumn, setHoveredColumn] = useState<'left' | 'right' | null>(null);

  return (
    <div className="min-h-screen bg-cohere-light-beige">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div
            className={`p-8 rounded-lg transition-opacity duration-300 flex flex-col justify-between min-h-[600px] border-r-2 border-cohere-light-gray ${
              hoveredColumn === 'right' ? 'opacity-50' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredColumn('left')}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div>
              <img
                src="/lovable-uploads/f0f2c6bf-860b-49a4-be80-48d903fab516.png"
                alt="Designer illustration"
                className="w-64 h-64 mx-auto mb-8"
              />
              <h2 className="text-3xl font-bold text-cohere-dark-green mb-4">
                Effortless App and Web Screenshots with AI
              </h2>
              <p className="text-cohere-medium-gray mb-8 text-lg">
                Just state your flow, enter secure login credentials, and let AI capture screenshots for you. Perfect for product documentations, exec decks and go-to-market assets.
              </p>
            </div>
            <Link
              to="/app"
              className="inline-block bg-cohere-dark-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors w-full text-center"
            >
              Snap my app
            </Link>
          </div>

          {/* Right Column */}
          <div
            className={`p-8 rounded-lg transition-opacity duration-300 flex flex-col justify-between min-h-[600px] ${
              hoveredColumn === 'left' ? 'opacity-50' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredColumn('right')}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div>
              <img
                src="/lovable-uploads/8b5bea41-205f-474a-9633-0bdfe4ba21d1.png"
                alt="Documentation illustration"
                className="w-64 h-64 mx-auto mb-8"
              />
              <h2 className="text-3xl font-bold text-cohere-dark-green mb-4">
                Inherited Shabby Docs?
              </h2>
              <p className="text-cohere-medium-gray mb-8 text-lg">
                Use AI to detect outdated screenshots, UX designs, and requirements. Because your project deserves better than yesterday's work.
              </p>
            </div>
            <Link
              to="/doc-comparison"
              className="inline-block bg-cohere-dark-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors w-full text-center"
            >
              Analyze my docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;