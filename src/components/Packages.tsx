import React from 'react';
import { Clock, MapPin, Calendar, Users, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { getTranslation } from '../translations';

interface Package {
  id: number;
  title: {
    PT: string;
    EN: string;
    ES: string;
  };
  description: {
    PT: string;
    EN: string;
    ES: string;
  };
  image: string;
  price: number;
  duration: number;
  locations: string[];
  startDates: {
    PT: string;
    EN: string;
    ES: string;
  };
  groupSize: string;
  features: {
    PT: string[];
    EN: string[];
    ES: string[];
  };
}

const packages: Package[] = [
  {
    id: 1,
    title: {
      PT: "Expedição Cultural em Angola",
      EN: "Angola Cultural Expedition",
      ES: "Expedición Cultural en Angola"
    },
    description: {
      PT: "Mergulhe na rica herança cultural de Angola com visitas a sítios históricos, aldeias tradicionais e comunidades locais.",
      EN: "Immerse yourself in Angola's rich cultural heritage with visits to historical sites, traditional villages, and local communities.",
      ES: "Sumérgete en la rica herencia cultural de Angola con visitas a sitios históricos, pueblos tradicionales y comunidades locales."
    },
    image: "https://images.pexels.com/photos/1304473/pexels-photo-1304473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1299,
    duration: 8,
    locations: ["Luanda", "Malanje", "Benguela"],
    startDates: {
      PT: "Todo o ano",
      EN: "Year-round",
      ES: "Todo el año"
    },
    groupSize: "2-12",
    features: {
      PT: ["Imersão cultural", "Culinária local", "Sítios históricos", "Apresentações tradicionais"],
      EN: ["Cultural immersion", "Local cuisine", "Historical sites", "Traditional performances"],
      ES: ["Inmersión cultural", "Cocina local", "Sitios históricos", "Espectáculos tradicionales"]
    }
  },
  {
    id: 2,
    title: {
      PT: "Safari pela Vida Selvagem de Angola",
      EN: "Angola Wildlife Safari",
      ES: "Safari por la Vida Silvestre de Angola"
    },
    description: {
      PT: "Explore a diversa vida selvagem e paisagens naturais de Angola no Parque Nacional do Kissama e outras áreas protegidas.",
      EN: "Explore Angola's diverse wildlife and natural landscapes in Kissama National Park and other protected areas.",
      ES: "Explora la diversa vida silvestre y paisajes naturales de Angola en el Parque Nacional de Kissama y otras áreas protegidas."
    },
    image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1599,
    duration: 10,
    locations: ["Parque Nacional do Kissama", "Parque Nacional do Iona"],
    startDates: {
      PT: "Maio-Outubro",
      EN: "May-October",
      ES: "Mayo-Octubre"
    },
    groupSize: "4-10",
    features: {
      PT: ["Safáris", "Observação de animais", "Palestras sobre conservação", "Acampamentos de luxo"],
      EN: ["Game drives", "Wildlife viewing", "Conservation talks", "Luxury camps"],
      ES: ["Safaris", "Observación de animales", "Charlas sobre conservación", "Campamentos de lujo"]
    }
  },
  {
    id: 3,
    title: {
      PT: "Aventura Costeira em Angola",
      EN: "Angola Coastal Adventure",
      ES: "Aventura Costera en Angola"
    },
    description: {
      PT: "Descubra o litoral deslumbrante de Angola com uma jornada por belas praias, vilas de pescadores e portos históricos.",
      EN: "Discover Angola's stunning coastline with a journey along beautiful beaches, fishing villages, and historical ports.",
      ES: "Descubre la impresionante costa de Angola con un viaje por hermosas playas, pueblos pesqueros y puertos históricos."
    },
    image: "https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1099,
    duration: 7,
    locations: ["Luanda", "Benguela", "Namibe"],
    startDates: {
      PT: "Todo o ano",
      EN: "Year-round",
      ES: "Todo el año"
    },
    groupSize: "2-14",
    features: {
      PT: ["Atividades na praia", "Passeios de barco", "Gastronomia marítima", "Caminhadas costeiras"],
      EN: ["Beach activities", "Boat tours", "Seafood cuisine", "Coastal hiking"],
      ES: ["Actividades en la playa", "Tours en barco", "Cocina marinera", "Senderismo costero"]
    }
  }
];

const Packages: React.FC = () => {
  const { language } = useLanguage();
  const { formatPrice } = useCurrency();
  
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {getTranslation(language, 'packagesTitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {getTranslation(language, 'packagesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={pkg.image} 
                  alt={pkg.title[language]} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formatPrice(pkg.price)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {pkg.title[language]}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pkg.description[language]}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar size={20} className="text-yellow-500 mr-3" />
                    <span>{pkg.duration} {language === 'PT' ? 'dias' : language === 'ES' ? 'días' : 'days'}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={20} className="text-yellow-500 mr-3" />
                    <span>{pkg.locations.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={20} className="text-yellow-500 mr-3" />
                    <span>{pkg.startDates[language]}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users size={20} className="text-yellow-500 mr-3" />
                    <span>{pkg.groupSize} {language === 'PT' ? 'pessoas' : language === 'ES' ? 'personas' : 'people'}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {pkg.features[language].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Star size={16} className="text-yellow-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300">
                  {language === 'PT' ? 'Reservar Agora' :
                   language === 'ES' ? 'Reservar Ahora' :
                   'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-3 rounded-lg inline-block transition-all duration-300 transform hover:scale-105"
          >
            {language === 'PT' ? 'Ver Todos os Pacotes' :
             language === 'ES' ? 'Ver Todos los Paquetes' :
             'View All Packages'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;