import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-yellow-500 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            {getTranslation(language, 'newsletterTitle')}
          </h2>
          <p className="text-white/90 mb-8">
            {getTranslation(language, 'newsletterSubtitle')}
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
              <h3 className="text-white text-xl font-bold mb-2">
                {language === 'PT' ? 'Obrigado por se Subscrever!' :
                 language === 'ES' ? '¡Gracias por Suscribirte!' :
                 'Thank You for Subscribing!'}
              </h3>
              <p className="text-white/90">
                {language === 'PT' ? 
                  'Você foi adicionado à nossa lista de emails. Prepare-se para receber inspiração de viagem incrível e ofertas exclusivas.' :
                 language === 'ES' ?
                  'Has sido añadido a nuestra lista de correo. Prepárate para recibir increíble inspiración de viaje y ofertas exclusivas.' :
                  'You\'ve been added to our mailing list. Get ready for amazing travel inspiration and exclusive offers.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder={getTranslation(language, 'emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                {getTranslation(language, 'subscribeButton')}
                <Send size={18} className="ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;