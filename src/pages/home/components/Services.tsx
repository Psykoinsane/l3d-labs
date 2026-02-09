export default function Services() {
  const services = [
    {
      title: 'Prototipagem Rápida',
      description: 'Transforme suas ideias em protótipos funcionais em tempo recorde. Ideal para testes, validações e apresentações de conceito.',
      image: 'https://readdy.ai/api/search-image?query=rapid-prototyping-3d-printed-prototype-parts-arranged-on-dark-industrial-surface-with-yellow-gold-lighting-technical-engineering-components-clean-minimal-background-professional-product-photography&width=400&height=400&seq=service-prototyping-001&orientation=squarish',
      benefits: [
        'Redução de 70% no tempo de desenvolvimento',
        'Testes iterativos rápidos',
        'Validação antes da produção em série'
      ]
    },
    {
      title: 'Produção em Série',
      description: 'Fabricação escalável de peças técnicas com qualidade consistente. Perfeito para pequenas e médias séries de produção.',
      image: 'https://readdy.ai/api/search-image?query=industrial-3d-printing-production-line-multiple-identical-technical-parts-on-dark-background-yellow-gold-accent-lighting-manufacturing-series-production-clean-organized-layout&width=400&height=400&seq=service-production-002&orientation=squarish',
      benefits: [
        'Produção de 10 a 10.000 unidades',
        'Controle de qualidade rigoroso',
        'Custos competitivos para médias séries'
      ]
    },
    {
      title: 'Modelação 3D Personalizada',
      description: 'Serviço completo de design e modelação 3D. Nossa equipe transforma seus conceitos em modelos prontos para impressão.',
      image: 'https://readdy.ai/api/search-image?query=3d-modeling-cad-design-technical-blueprint-with-rendered-3d-model-on-dark-background-yellow-gold-wireframe-engineering-design-process-professional-technical-illustration&width=400&height=400&seq=service-modeling-003&orientation=squarish',
      benefits: [
        'Engenharia reversa de peças existentes',
        'Otimização para impressão 3D',
        'Arquivos prontos em múltiplos formatos'
      ]
    }
  ];

  const scrollToContact = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }));
  };

  return (
    <section id="servicos" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#FFD700] mb-16">
          Nossos Serviços
        </h2>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border-l-4 border-[#FFD700] rounded-3xl p-8 md:p-12 hover:translate-x-2 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                {/* Image */}
                <div className="w-full h-52 rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#C0C0C0] leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-fill text-[#FFD700] text-xl mt-0.5"></i>
                        <span className="text-[#E5E5E5]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => scrollToContact(service.title)}
                    className="mt-4 border-2 border-[#FFD700] text-[#FFD700] font-semibold px-6 py-3 rounded-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
