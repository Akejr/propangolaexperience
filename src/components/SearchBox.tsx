import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

type Destination = {
  id: number;
  name: string;
  region: string;
}

const popularDestinations: Destination[] = [
  { id: 1, name: 'Luanda', region: 'Luanda Province' },
  { id: 2, name: 'Lubango', region: 'Huíla Province' },
  { id: 3, name: 'Benguela', region: 'Benguela Province' },
  { id: 4, name: 'Namibe', region: 'Namibe Province' },
  { id: 5, name: 'Malanje', region: 'Malanje Province' },
];

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const { language } = useLanguage();

  const filteredDestinations = popularDestinations.filter(dest => 
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg animate-float-up">
      <h2 className="text-white text-xl font-bold mb-6">{getTranslation(language, 'requestQuote')}</h2>
      <div className="flex flex-col space-y-4">
        {/* Destination Search */}
        <div className="relative">
          <label htmlFor="destination" className="block text-white text-sm font-medium mb-2">
            {getTranslation(language, 'destinations')}
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-yellow-500" size={20} />
            <input
              type="text"
              id="destination"
              placeholder={language === 'EN' ? 'Where are you going?' : language === 'PT' ? 'Para onde vai?' : '¿A dónde vas?'}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            
            {/* Suggestions Dropdown */}
            {showSuggestions && searchTerm && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map((dest) => (
                    <div 
                      key={dest.id}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSearchTerm(dest.name);
                        setShowSuggestions(false);
                      }}
                    >
                      <div className="font-medium text-gray-800">{dest.name}</div>
                      <div className="text-sm text-gray-500">{dest.region}</div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">{language === 'EN' ? 'No destinations found' : language === 'PT' ? 'Nenhum destino encontrado' : 'No se encontraron destinos'}</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-white text-sm font-medium mb-2">
            {language === 'EN' ? 'When' : language === 'PT' ? 'Quando' : 'Cuándo'}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-yellow-500" size={20} />
            <input
              type="date"
              id="date"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Guests Selection */}
        <div>
          <label htmlFor="guests" className="block text-white text-sm font-medium mb-2">
            {language === 'EN' ? 'Travelers' : language === 'PT' ? 'Viajantes' : 'Viajeros'}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-yellow-500" size={20} />
            <select
              id="guests"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 appearance-none"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? (language === 'EN' ? 'Person' : language === 'PT' ? 'Pessoa' : 'Persona') : (language === 'EN' ? 'People' : language === 'PT' ? 'Pessoas' : 'Personas')}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <div className="h-4 w-4 border-r-2 border-b-2 border-gray-400 transform rotate-45 translate-y-[-4px]"></div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button 
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-2"
        >
          {getTranslation(language, 'requestButton')}
        </button>
      </div>
    </div>
  );
};

export default SearchBox;