import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Coins } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { getTranslation } from '../translations';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  const languages = [
    { code: 'PT', label: 'Português' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' }
  ];

  const currencies = [
    { code: 'USD', label: 'USD ($)', symbol: '$' },
    { code: 'EUR', label: 'EUR (€)', symbol: '€' },
    { code: 'AOA', label: 'AOA (Kz)', symbol: 'Kz' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <div className="flex items-center space-x-4 xl:space-x-6">
            <NavLink href="#" label={getTranslation(language, 'home')} isScrolled={isScrolled} />
            <NavLink href="#destinations" label={getTranslation(language, 'destinations')} isScrolled={isScrolled} />
            <NavLink href="#packages" label={getTranslation(language, 'packages')} isScrolled={isScrolled} />
            <NavLink href="#about" label={getTranslation(language, 'aboutUs')} isScrolled={isScrolled} />
            <NavLink href="#contact" label={getTranslation(language, 'contact')} isScrolled={isScrolled} />
          </div>
          
          {/* Language and Currency Selector */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-yellow-50 hover:bg-yellow-100'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <div className="flex items-center">
                <Globe size={16} className={isScrolled ? 'text-yellow-600' : 'text-white'} />
                <span className={`ml-1 font-medium text-sm ${isScrolled ? 'text-yellow-600' : 'text-white'}`}>
                  {language}
                </span>
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className="flex items-center">
                <Coins size={16} className={isScrolled ? 'text-yellow-600' : 'text-white'} />
                <span className={`ml-1 font-medium text-sm ${isScrolled ? 'text-yellow-600' : 'text-white'}`}>
                  {currency}
                </span>
              </div>
              <ChevronDown size={12} className={isScrolled ? 'text-yellow-600' : 'text-white'} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl py-3 w-48">
                <div className="px-3 pb-2 mb-2 border-b">
                  <p className="text-xs font-medium text-gray-500 mb-2">Idioma</p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'PT' | 'EN' | 'ES');
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-1.5 rounded text-sm ${
                        language === lang.code
                          ? 'bg-yellow-50 text-yellow-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <div className="px-3">
                  <p className="text-xs font-medium text-gray-500 mb-2">Moeda</p>
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code as 'USD' | 'EUR' | 'AOA');
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-1.5 rounded text-sm ${
                        currency === curr.code
                          ? 'bg-yellow-50 text-yellow-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {curr.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-yellow-900' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-yellow-900' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 sm:px-6">
          <div className="flex flex-col space-y-3">
            <MobileNavLink href="#" label={getTranslation(language, 'home')} />
            <MobileNavLink href="#destinations" label={getTranslation(language, 'destinations')} />
            <MobileNavLink href="#packages" label={getTranslation(language, 'packages')} />
            <MobileNavLink href="#about" label={getTranslation(language, 'aboutUs')} />
            <MobileNavLink href="#contact" label={getTranslation(language, 'contact')} />
            
            {/* Mobile/Tablet Language and Currency Selector */}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Idioma</p>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as 'PT' | 'EN' | 'ES')}
                        className={`px-3 py-1.5 rounded text-sm ${
                          language === lang.code
                            ? 'bg-yellow-50 text-yellow-600'
                            : 'bg-gray-50 text-gray-700'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Moeda</p>
                  <div className="flex space-x-2">
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => setCurrency(curr.code as 'USD' | 'EUR' | 'AOA')}
                        className={`px-3 py-1.5 rounded text-sm ${
                          currency === curr.code
                            ? 'bg-yellow-50 text-yellow-600'
                            : 'bg-gray-50 text-gray-700'
                        }`}
                      >
                        {curr.symbol}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled }) => {
  return (
    <a 
      href={href} 
      className={`text-sm font-medium relative hover:opacity-100 transition-all duration-300 ${
        isScrolled ? 'text-gray-800 hover:text-yellow-600' : 'text-white hover:text-white'
      } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:duration-300`}
    >
      {label}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className="text-gray-800 font-medium py-1.5 hover:text-yellow-600 text-sm">
      {label}
    </a>
  );
};

export default Navbar;