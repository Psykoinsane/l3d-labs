import React, { useState, useEffect } from 'react';
import Header from './pages/home/components/Header';
import Hero from './pages/home/components/Hero';
import Services from './pages/home/components/Services';
import Footer from './pages/home/components/Footer';
import WhatsAppButton from './pages/home/components/WhatsAppButton';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header scrolled={scrolled} />
      
      <main>
        <Hero />
        <Services />
        {/* Adiciona as secções abaixo apenas quando os ficheiros existirem na pasta */}
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;