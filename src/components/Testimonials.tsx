import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: {
    EN: string;
    PT: string;
    ES: string;
  };
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'Brasil',
    rating: 5,
    text: {
      PT: 'Uma experiência incrível em Angola! Os guias eram extremamente conhecedores e apaixonados pelo país. As paisagens são de tirar o fôlego e a cultura é fascinante.',
      EN: 'An incredible experience in Angola! The guides were extremely knowledgeable and passionate about the country. The landscapes are breathtaking and the culture is fascinating.',
      ES: '¡Una experiencia increíble en Angola! Los guías eran extremadamente conocedores y apasionados por el país. Los paisajes son impresionantes y la cultura es fascinante.'
    },
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'John Smith',
    location: 'Reino Unido',
    rating: 5,
    text: {
      PT: 'A viagem superou todas as expectativas. A equipe da Angola Experience cuidou de todos os detalhes, permitindo que nos concentrássemos em aproveitar as maravilhas do país.',
      EN: 'The trip exceeded all expectations. The Angola Experience team took care of every detail, allowing us to focus on enjoying the wonders of the country.',
      ES: 'El viaje superó todas las expectativas. El equipo de Angola Experience se encargó de todos los detalles, permitiéndonos concentrarnos en disfrutar de las maravillas del país.'
    },
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    location: 'Espanha',
    rating: 5,
    text: {
      PT: 'Uma jornada inesquecível que nos permitiu descobrir a verdadeira Angola. Os momentos mais especiais foram as interações com as comunidades locais.',
      EN: 'An unforgettable journey that allowed us to discover the true Angola. The most special moments were the interactions with local communities.',
      ES: 'Un viaje inolvidable que nos permitió descubrir la verdadera Angola. Los momentos más especiales fueron las interacciones con las comunidades locales.'
    },
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {getTranslation(language, 'testimonialsTitle')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {getTranslation(language, 'testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={16} 
                  className="fill-yellow-400 text-yellow-400 mr-1" 
                />
              ))}
            </div>
            <span className="text-gray-800 font-medium">
              <span className="font-bold">4.9/5</span> 
              {language === 'PT' ? ' baseado em ' :
               language === 'ES' ? ' basado en ' :
               ' based on '}
              <span className="font-bold">200+</span>
              {language === 'PT' ? ' avaliações' :
               language === 'ES' ? ' reseñas' :
               ' reviews'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={16} 
            className={`${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed">
        {testimonial.text[language]}
      </p>
    </div>
  );
};

export default Testimonials;