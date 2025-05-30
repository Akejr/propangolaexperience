import React from 'react';
import { Users, Building2, Map, LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface StatItem {
  id: number;
  count: string;
  label: {
    PT: string;
    EN: string;
    ES: string;
  };
  icon: LucideIcon;
}

const stats: StatItem[] = [
  {
    id: 1,
    count: '10k+',
    label: {
      PT: 'Viajantes Felizes',
      EN: 'Happy Travelers',
      ES: 'Viajeros Felices'
    },
    icon: Users,
  },
  {
    id: 2,
    count: '50+',
    label: {
      PT: 'Parceiros Locais',
      EN: 'Local Partners',
      ES: 'Socios Locales'
    },
    icon: Building2,
  },
  {
    id: 3,
    count: '25+',
    label: {
      PT: 'Destinos Únicos',
      EN: 'Unique Destinations',
      ES: 'Destinos Únicos'
    },
    icon: Map,
  }
];

const Stats: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(stat => (
            <div 
              key={stat.id} 
              className="bg-yellow-50 rounded-xl p-8 flex flex-col items-center text-center hover:bg-yellow-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-yellow-500 p-3 rounded-full mb-4">
                <stat.icon size={24} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-2">{stat.count}</h3>
              <p className="text-gray-600">{stat.label[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;