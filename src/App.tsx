import React, { useState, useEffect } from 'react';
import Header from './pages/home/components/Header';
import Hero from './pages/home/components/Hero';
import Services from './pages/home/components/Services';
import Portfolio from './pages/home/components/Portfolio';
import Contact from './pages/home/components/Contact';
import Footer from './pages/home/components/Footer';
import WhatsAppButton from './pages/home/components/WhatsAppButton';

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Lógica para detetar o scroll e mudar o estilo do Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-yellow-400 selection:text-black">
      {/* O Header recebe o estado do scroll para ficar transparente ou sólido */}
      <Header scrolled={scrolled} />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Botão flutuante do WhatsApp que aparece em todo o site */}
      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default App;