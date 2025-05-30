import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import AboutSection from './components/AboutSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <div className="font-sans">
          <Navbar />
          <Hero />
          <Destinations />
          <Packages />
          <Testimonials />
          <Stats />
          <AboutSection />
          <Newsletter />
          <Footer />
        </div>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default App;