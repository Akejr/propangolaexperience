import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

interface FooterLink {
  href: string;
  label: {
    PT: string;
    EN: string;
    ES: string;
  };
}

const quickLinks: FooterLink[] = [
  { href: "#", label: { PT: 'Início', EN: 'Home', ES: 'Inicio' } },
  { href: "#destinations", label: { PT: 'Destinos', EN: 'Destinations', ES: 'Destinos' } },
  { href: "#packages", label: { PT: 'Pacotes', EN: 'Tour Packages', ES: 'Paquetes' } },
  { href: "#about", label: { PT: 'Sobre Nós', EN: 'About Us', ES: 'Sobre Nosotros' } },
  { href: "#contact", label: { PT: 'Contacto', EN: 'Contact Us', ES: 'Contacto' } }
];

const destinations: FooterLink[] = [
  { href: "#", label: { PT: 'Quedas de Kalandula', EN: 'Kalandula Falls', ES: 'Cataratas de Kalandula' } },
  { href: "#", label: { PT: 'Ilha de Luanda', EN: 'Luanda Island', ES: 'Isla de Luanda' } },
  { href: "#", label: { PT: 'Serra da Leba', EN: 'Serra da Leba', ES: 'Sierra de Leba' } },
  { href: "#", label: { PT: 'Parque Nacional do Kissama', EN: 'Kissama National Park', ES: 'Parque Nacional de Kissama' } },
  { href: "#", label: { PT: 'Benguela', EN: 'Benguela', ES: 'Benguela' } }
];

const Footer: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              {language === 'PT' ?
                'Proporcionando experiências de viagem excepcionais em Angola desde 2010. Nossa missão é mostrar a beleza e a cultura de Angola para o mundo.' :
                language === 'ES' ?
                'Proporcionando experiencias de viaje excepcionales en Angola desde 2010. Nuestra misión es mostrar la belleza y la cultura de Angola al mundo.' :
                'Providing exceptional travel experiences in Angola since 2010. Our mission is to showcase the beauty and culture of Angola to the world.'
              }
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
              <SocialLink icon={<Instagram size={20} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'PT' ? 'Links Rápidos' :
               language === 'ES' ? 'Enlaces Rápidos' :
               'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} href={link.href} label={link.label[language]} />
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'PT' ? 'Principais Destinos' :
               language === 'ES' ? 'Destinos Principales' :
               'Top Destinations'}
            </h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <FooterLink key={index} href={destination.href} label={destination.label[language]} />
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'PT' ? 'Contacte-nos' :
               language === 'ES' ? 'Contáctenos' :
               'Contact Us'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Nova Vida, Luanda - Angola
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300">
                  +244 923 790 953<br/>
                  +244 930 928 402
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300">geral@angolaexperience.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Angola Experience. {getTranslation(language, 'footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      className="bg-gray-800 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-300 hover:text-white transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;