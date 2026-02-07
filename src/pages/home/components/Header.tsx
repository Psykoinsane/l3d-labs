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
        {/* Logo */}
        <div className={`flex items-center transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <img 
            src="https://static.readdy.ai/image/f97c8a6bc1b5a02ffd35f331c7010e2d/3f554b1f9d2932180c7076cbda37c8c1.jpeg" 
            alt="L3d Logo" 
            className="h-56 w-auto mt-16"
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

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('contato')}
          className="hidden md:block bg-[#FFD700] text-black font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] whitespace-nowrap cursor-pointer"
        >
          Orçamento
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#FFD700] text-2xl cursor-pointer"
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-[#2A2A2A]">
          <nav className="flex flex-col p-6 space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-medium text-left cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-medium text-left cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-[#E5E5E5] hover:text-[#FFD700] transition-colors duration-300 font-medium text-left cursor-pointer"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#FFD700] text-black font-bold px-8 py-3 rounded-lg text-center whitespace-nowrap cursor-pointer"
            >
              Orçamento
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
