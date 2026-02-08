import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md h-16 shadow-lg shadow-[#FFD700]/10'
          : 'bg-transparent h-20'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - Ajustado para o teu ficheiro local e tamanho mobile reduzido */}
        <div className={`flex items-center transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <img 
            src="/L3d.svg" 
            alt="L3d Logo" 
            className="h-7 w-auto sm:h-9 md:h-11 transition-all"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-medium relative group cursor-pointer"
          >
            Início
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-medium relative group cursor-pointer"
          >
            Serviços
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-medium relative group cursor-pointer"
          >
            Portfólio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* CTA Button Desktop */}
        <button
          onClick={() => scrollToSection('contato')}
          className="hidden md:block bg-[#FFD700] text-black font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] whitespace-nowrap cursor-pointer"
        >
          Orçamento
        </button>

        {/* Mobile Menu Button - Ajustado para facilitar o clique */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#FFD700] text-3xl cursor-pointer p-2 focus:outline-none"
          aria-label="Menu"
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      {/* Mobile Menu - Otimizado para Contraste e Marca */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/98 border-t border-[#FFD700]/20 backdrop-blur-lg shadow-2xl overflow-hidden">
          <nav className="flex flex-col p-8 space-y-6">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-lg text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-semibold text-left border-b border-white/5 pb-2 cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-lg text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-semibold text-left border-b border-white/5 pb-2 cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-lg text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-semibold text-left border-b border-white/5 pb-2 cursor-pointer"
            >
              Portfólio
            </button>
            
            {/* Botão de Orçamento Mobile com destaque */}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#FFD700] text-black font-extrabold px-8 py-4 rounded-xl text-center shadow-[0_5px_20px_rgba(255,215,0,0.3)] active:scale-95 transition-all cursor-pointer"
            >
              PEDIR ORÇAMENTO
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}