import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(language, 'aboutTitle')}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'PT' ?
                'A Angola Experience é uma empresa dedicada a proporcionar experiências turísticas únicas e inesquecíveis em Angola. Com uma equipe de especialistas apaixonados por explorar e compartilhar as maravilhas deste país, oferecemos uma ampla gama de passeios e serviços personalizados para atender às necessidades e desejos de cada viajante.' :
                language === 'ES' ?
                'Angola Experience es una empresa dedicada a proporcionar experiencias turísticas únicas e inolvidables en Angola. Con un equipo de expertos apasionados por explorar y compartir las maravillas de este país, ofrecemos una amplia gama de tours y servicios personalizados para satisfacer las necesidades y deseos de cada viajero.' :
                'Angola Experience is a company dedicated to providing unique and unforgettable tourist experiences in Angola. With a team of experts passionate about exploring and sharing the wonders of this country, we offer a wide range of tours and personalized services to meet the needs and desires of each traveler.'
              }
            </p>
            <p className="text-gray-700 mb-4">
              {language === 'PT' ?
                'Fundada com o objetivo de mostrar ao mundo as riquezas naturais, culturais e históricas de Angola, a nossa empresa orgulha-se de oferecer um serviço de alta qualidade, com atenção aos detalhes e um compromisso inabalável com a satisfação do cliente.' :
                language === 'ES' ?
                'Fundada con el objetivo de mostrar al mundo las riquezas naturales, culturales e históricas de Angola, nuestra empresa se enorgullece de ofrecer un servicio de alta calidad, con atención a los detalles y un compromiso inquebrantable con la satisfacción del cliente.' :
                'Founded with the goal of showing the world the natural, cultural and historical riches of Angola, our company takes pride in offering high-quality service, with attention to detail and an unwavering commitment to customer satisfaction.'
              }
            </p>
            <p className="text-gray-700 mb-6">
              {language === 'PT' ?
                'Com uma equipe de guias locais experientes e especialistas em viagens, criamos jornadas que vão além do caminho turístico comum, revelando as joias escondidas de Angola e promovendo o intercâmbio cultural e a compreensão.' :
                language === 'ES' ?
                'Con un equipo de guías locales experimentados y expertos en viajes, creamos viajes que van más allá del camino turístico común, revelando las joyas ocultas de Angola y fomentando el intercambio cultural y el entendimiento.' :
                'With a team of experienced local guides and travel experts, we curate journeys that go beyond the ordinary tourist path, revealing Angola\'s hidden gems and fostering cultural exchange and understanding.'
              }
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-yellow-50 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-1">
                  {language === 'PT' ? 'Guias Locais Especializados' :
                   language === 'ES' ? 'Guías Locales Expertos' :
                   'Expert Local Guides'}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === 'PT' ? 'Conhecedores e apaixonados por Angola' :
                   language === 'ES' ? 'Conocedores y apasionados por Angola' :
                   'Knowledgeable and passionate about Angola'}
                </p>
              </div>
              <div className="bg-yellow-50 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-1">
                  {language === 'PT' ? 'Experiências Personalizadas' :
                   language === 'ES' ? 'Experiencias Personalizadas' :
                   'Tailored Experiences'}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === 'PT' ? 'Roteiros personalizados para todos os interesses' :
                   language === 'ES' ? 'Itinerarios personalizados para todos los intereses' :
                   'Customized itineraries for all interests'}
                </p>
              </div>
              <div className="bg-yellow-50 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-1">
                  {language === 'PT' ? 'Turismo Responsável' :
                   language === 'ES' ? 'Turismo Responsable' :
                   'Responsible Tourism'}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === 'PT' ? 'Apoiando comunidades locais e conservação' :
                   language === 'ES' ? 'Apoyando comunidades locales y conservación' :
                   'Supporting local communities and conservation'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/images/about1.webp" 
                alt={language === 'PT' ? 'Paisagem de Angola' :
                     language === 'ES' ? 'Paisaje de Angola' :
                     'Angola landscape'} 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="/images/about2.jpg" 
                alt={language === 'PT' ? 'Cultura local' :
                     language === 'ES' ? 'Cultura local' :
                     'Local culture'} 
                className="rounded-lg h-40 w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="/images/about3.jpeg" 
                alt={language === 'PT' ? 'Vida selvagem' :
                     language === 'ES' ? 'Vida silvestre' :
                     'Wildlife'} 
                className="rounded-lg h-40 w-full object-cover"
              />
              <img 
                src="/images/about4.jpg" 
                alt={language === 'PT' ? 'Experiência de viagem' :
                     language === 'ES' ? 'Experiencia de viaje' :
                     'Travel experience'} 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;