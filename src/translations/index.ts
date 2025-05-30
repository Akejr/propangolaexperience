export const translations = {
  EN: {
    // Navbar
    home: 'Home',
    destinations: 'Destinations',
    packages: 'Packages',
    aboutUs: 'About Us',
    contact: 'Contact',
    
    // Search Box
    requestQuote: 'Request a Quote',
    requestButton: 'Request',
    
    // Hero section
    heroTitle: 'Discover the Beauty of Angola',
    heroSubtitle: 'Explore the Wonders of Angola – Nature, Culture, and Adventure in one destination. Discover breathtaking landscapes, untouched beaches, lush natural parks, and cities full of history and culture. Get ready to live authentic experiences, meet the hospitality of the Angolan people, and be enchanted by every detail of this surprising country.',
    exploreButton: 'Explore Now',
    
    // Destinations section
    destinationsTitle: 'Popular Destinations',
    destinationsSubtitle: 'Explore Angola\'s most beautiful places',
    
    // Packages section
    packagesTitle: 'Travel Packages',
    packagesSubtitle: 'Find the perfect package for your adventure',
    
    // Testimonials section
    testimonialsTitle: 'What Our Travelers Say',
    testimonialsSubtitle: 'Read about experiences from our satisfied customers',
    
    // Stats section
    statsTitle: 'Our Numbers Speak',
    
    // About section
    aboutTitle: 'About Angola Experience',
    aboutSubtitle: 'Your gateway to authentic Angolan adventures',
    
    // Newsletter section
    newsletterTitle: 'Subscribe to Our Newsletter',
    newsletterSubtitle: 'Get updates on new destinations and special offers',
    emailPlaceholder: 'Your email address',
    subscribeButton: 'Subscribe',
    
    // Footer
    footerRights: 'All rights reserved',
    footerCompany: 'Company',
    footerSupport: 'Support',
    footerLegal: 'Legal',
  },
  PT: {
    // Navbar
    home: 'Início',
    destinations: 'Destinos',
    packages: 'Pacotes',
    aboutUs: 'Sobre Nós',
    contact: 'Contacto',
    
    // Search Box
    requestQuote: 'Solicite um Orçamento',
    requestButton: 'Solicitar',
    
    // Hero section
    heroTitle: 'Descubra a Beleza de Angola',
    heroSubtitle: 'Explore as Maravilhas de Angola – Natureza, Cultura e Aventura em um só destino. Descubra paisagens de tirar o fôlego, praias intocadas, parques naturais exuberantes e cidades cheias de história e cultura. Prepare-se para viver experiências autênticas, conhecer a hospitalidade do povo angolano e se encantar com cada detalhe desse país surpreendente.',
    exploreButton: 'Explorar Agora',
    
    // Destinations section
    destinationsTitle: 'Destinos Populares',
    destinationsSubtitle: 'Explore os lugares mais bonitos de Angola',
    
    // Packages section
    packagesTitle: 'Pacotes de Viagem',
    packagesSubtitle: 'Encontre o pacote perfeito para a sua aventura',
    
    // Testimonials section
    testimonialsTitle: 'O Que Dizem Nossos Viajantes',
    testimonialsSubtitle: 'Leia sobre experiências dos nossos clientes satisfeitos',
    
    // Stats section
    statsTitle: 'Nossos Números Falam',
    
    // About section
    aboutTitle: 'Sobre a Angola Experience',
    aboutSubtitle: 'Sua porta de entrada para aventuras angolanas autênticas',
    
    // Newsletter section
    newsletterTitle: 'Subscreva a Nossa Newsletter',
    newsletterSubtitle: 'Receba atualizações sobre novos destinos e ofertas especiais',
    emailPlaceholder: 'O seu endereço de email',
    subscribeButton: 'Subscrever',
    
    // Footer
    footerRights: 'Todos os direitos reservados',
    footerCompany: 'Empresa',
    footerSupport: 'Suporte',
    footerLegal: 'Legal',
  },
  ES: {
    // Navbar
    home: 'Inicio',
    destinations: 'Destinos',
    packages: 'Paquetes',
    aboutUs: 'Sobre Nosotros',
    contact: 'Contacto',
    
    // Search Box
    requestQuote: 'Solicitar un Presupuesto',
    requestButton: 'Solicitar',
    
    // Hero section
    heroTitle: 'Descubre la Belleza de Angola',
    heroSubtitle: 'Explora las Maravillas de Angola – Naturaleza, Cultura y Aventura en un solo destino. Descubre paisajes impresionantes, playas vírgenes, exuberantes parques naturales y ciudades llenas de historia y cultura. Prepárate para vivir experiencias auténticas, conocer la hospitalidad del pueblo angoleño y encantarte con cada detalle de este sorprendente país.',
    exploreButton: 'Explorar Ahora',
    
    // Destinations section
    destinationsTitle: 'Destinos Populares',
    destinationsSubtitle: 'Explora los lugares más hermosos de Angola',
    
    // Packages section
    packagesTitle: 'Paquetes de Viaje',
    packagesSubtitle: 'Encuentra el paquete perfecto para tu aventura',
    
    // Testimonials section
    testimonialsTitle: 'Lo Que Dicen Nuestros Viajeros',
    testimonialsSubtitle: 'Lee sobre experiencias de nuestros clientes satisfechos',
    
    // Stats section
    statsTitle: 'Nuestros Números Hablan',
    
    // About section
    aboutTitle: 'Sobre Angola Experience',
    aboutSubtitle: 'Tu puerta de entrada a auténticas aventuras angoleñas',
    
    // Newsletter section
    newsletterTitle: 'Suscríbete a Nuestro Boletín',
    newsletterSubtitle: 'Recibe actualizaciones sobre nuevos destinos y ofertas especiales',
    emailPlaceholder: 'Tu dirección de correo electrónico',
    subscribeButton: 'Suscribirse',
    
    // Footer
    footerRights: 'Todos los derechos reservados',
    footerCompany: 'Empresa',
    footerSupport: 'Soporte',
    footerLegal: 'Legal',
  }
};

export type TranslationKey = keyof typeof translations.EN;

export const getTranslation = (language: 'EN' | 'PT' | 'ES', key: TranslationKey): string => {
  return translations[language][key] || translations.EN[key];
};