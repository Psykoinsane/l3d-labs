export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"></div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
              L3d: A Engenharia do Futuro,{' '}
              <span className="text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                Camada por Camada
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#B0B0B0] leading-relaxed max-w-2xl">
              Transformamos ideias em protótipos de precisão milimétrica com tecnologia de impressão 3D industrial
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#FFD700] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] whitespace-nowrap cursor-pointer"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-[#FFD700] text-[#FFD700] font-bold px-8 py-4 rounded-xl hover:bg-[#FFD700] hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Ver Portfólio
              </button>
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-radial from-[#1A1A1A] to-[#0A0A0A]"></div>
              <img
                src="https://readdy.ai/api/search-image?query=high-precision-industrial-3d-printed-mechanical-part-with-intricate-details-on-clean-dark-background-professional-studio-lighting-showcasing-yellow-gold-accents-futuristic-engineering-component-technical-prototype&width=800&height=800&seq=hero-3d-model-001&orientation=squarish"
                alt="Peça impressa em 3D de alta precisão"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>
              
              {/* 3D Printing Process Image Overlay */}
              <div className="absolute bottom-0 right-0 w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=close-up-3d-printer-nozzle-extruding-yellow-gold-filament-creating-precise-layers-industrial-manufacturing-process-dark-background-with-warm-lighting-technical-engineering-in-action-professional-photography&width=800&height=800&seq=hero-printing-process-002&orientation=squarish"
                  alt="Processo de impressão 3D em ação"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 shadow-xl">
              <div className="text-[#FFD700] text-4xl font-bold">99.9%</div>
              <div className="text-[#B0B0B0] text-sm mt-1">Precisão</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 shadow-xl">
              <div className="text-[#FFD700] text-4xl font-bold">24h</div>
              <div className="text-[#B0B0B0] text-sm mt-1">Entrega Rápida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-[#FFD700] text-3xl"></i>
      </div>
    </section>
  );
}
