import React from 'react';
import SearchBox from './SearchBox';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="relative min-h-[120vh] sm:min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <img
        src="/images/background.png"
        alt="Beautiful Angolan landscape"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 min-h-[120vh] sm:min-h-screen flex items-start sm:items-center container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pt-36 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in">
              {getTranslation(language, 'heroTitle')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white opacity-90 mb-6 sm:mb-8 animate-fade-in-delayed leading-relaxed">
              {getTranslation(language, 'heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delayed-more">
              <a 
                href="#packages" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
              >
                {getTranslation(language, 'packagesTitle')}
              </a>
              <a 
                href="#destinations" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
              >
                {getTranslation(language, 'exploreButton')}
              </a>
            </div>
          </div>

          {/* Search Box */}
          <div className="lg:flex justify-end mt-8 lg:mt-0 pb-12 sm:pb-0">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;