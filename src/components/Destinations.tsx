import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { getTranslation } from '../translations';

const destinations = [
  {
    id: 1,
    name: 'Quedas de Kalandula',
    location: 'Malanje',
    description: {
      PT: 'Uma das maiores quedas de água da África, uma maravilha natural de tirar o fôlego.',
      EN: 'One of Africa\'s largest waterfalls, a breathtaking natural wonder.',
      ES: 'Una de las cascadas más grandes de África, una maravilla natural impresionante.'
    },
    image: '/images/Quedas.jpg',
    rating: 4.8,
    price: 299,
    popular: true
  },
  {
    id: 2,
    name: 'Ilha de Luanda',
    location: 'Luanda',
    description: {
      PT: 'Uma bela península com praias, restaurantes e locais culturais.',
      EN: 'A beautiful peninsula with beaches, restaurants and cultural sites.',
      ES: 'Una hermosa península con playas, restaurantes y sitios culturales.'
    },
    image: '/images/ilha de luanda.jpg',
    rating: 4.6,
    price: 199,
    popular: true
  },
  {
    id: 3,
    name: 'Serra da Leba',
    location: 'Namibe-Huíla',
    description: {
      PT: 'Famosa passagem montanhosa com vistas espetaculares e curvas em zigue-zague.',
      EN: 'Famous mountain pass with spectacular views and hairpin turns.',
      ES: 'Famoso paso de montaña con vistas espectaculares y curvas cerradas.'
    },
    image: '/images/serra da leba.jpg',
    rating: 4.9,
    price: 349,
    popular: true
  },
  {
    id: 4,
    name: 'Parque Nacional do Kissama',
    location: 'Luanda',
    description: {
      PT: 'O principal parque de vida selvagem de Angola com diversos animais e paisagens.',
      EN: 'Angola\'s premier wildlife park with diverse animals and landscapes.',
      ES: 'El principal parque de vida silvestre de Angola con diversos animales y paisajes.'
    },
    image: 'https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    price: 279,
    popular: false
  },
  {
    id: 5,
    name: 'Miradouro da Lua',
    location: 'Luanda',
    description: {
      PT: 'Paisagem única semelhante à lunar criada por séculos de erosão.',
      EN: 'Unique lunar-like landscape created by centuries of erosion.',
      ES: 'Paisaje único similar al lunar creado por siglos de erosión.'
    },
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    price: 159,
    popular: false
  },
  {
    id: 6,
    name: 'Safari em Benguela',
    location: 'Benguela',
    description: {
      PT: 'Explore a vida selvagem e as paisagens deslumbrantes da região de Benguela em um safari emocionante.',
      EN: 'Explore the wildlife and stunning landscapes of the Benguela region on an exciting safari.',
      ES: 'Explora la vida silvestre y los impresionantes paisajes de la región de Benguela en un emocionante safari.'
    },
    image: '/images/safari benguela.jpg',
    rating: 4.4,
    price: 229,
    popular: true
  },
];

const Destinations: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'popular'>('popular');
  const { language } = useLanguage();
  
  const filteredDestinations = filter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.popular);

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'PT' ? 'Descubra as Joias Escondidas de Angola' :
               language === 'ES' ? 'Descubre las Joyas Escondidas de Angola' :
               'Discover Angola\'s Hidden Gems'}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {language === 'PT' ? 'Das quedas de água de tirar o fôlego às praias intocadas e vistas montanhosas deslumbrantes, Angola oferece experiências inesquecíveis para cada viajante.' :
               language === 'ES' ? 'Desde cascadas impresionantes hasta playas vírgenes y vistas montañosas espectaculares, Angola ofrece experiencias inolvidables para cada viajero.' :
               'From breathtaking waterfalls to pristine beaches and stunning mountain vistas, Angola offers unforgettable experiences for every traveler.'}
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4">
            <button 
              onClick={() => setFilter('popular')}
              className={`px-6 py-2 rounded-full ${
                filter === 'popular' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              {language === 'PT' ? 'Populares' :
               language === 'ES' ? 'Populares' :
               'Popular'}
            </button>
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${
                filter === 'all' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              {language === 'PT' ? 'Todos os Destinos' :
               language === 'ES' ? 'Todos los Destinos' :
               'All Destinations'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
          >
            {language === 'PT' ? 'Ver todos os destinos' :
             language === 'ES' ? 'Ver todos los destinos' :
             'View all destinations'}
            <ChevronRight size={20} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface DestinationCardProps {
  destination: {
    id: number;
    name: string;
    location: string;
    description: {
      PT: string;
      EN: string;
      ES: string;
    };
    image: string;
    rating: number;
    price: number;
    popular: boolean;
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { language } = useLanguage();
  const { formatPrice } = useCurrency();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2"></div>
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <Star className="fill-yellow-400 text-yellow-400 mr-1" size={16} />
          <span className="font-medium">{destination.rating}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
          <div className="text-yellow-500 font-bold">
            {formatPrice(destination.price)}
            <span className="text-gray-500 font-normal text-sm">
              {language === 'PT' ? '/pessoa' :
               language === 'ES' ? '/persona' :
               '/person'}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{destination.location}</p>
        <p className="text-gray-700 mb-5 flex-grow">{destination.description[language]}</p>
        <button className="w-full py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300 mt-auto">
          {language === 'PT' ? 'Explorar Agora' :
           language === 'ES' ? 'Explorar Ahora' :
           'Explore Now'}
        </button>
      </div>
    </div>
  );
};

export default Destinations;