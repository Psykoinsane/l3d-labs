import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lista unificada de todas as fotos (Ex-Namorados + Portefólio Geral)
  const allImages = [
    // Fotos que estavam na secção Dia dos Namorados
    { url: '/images/DN/1.png', span: '' },
    { url: '/images/DN/2.png', span: '' },
    { url: '/images/DN/3.png', span: '' },
    { url: '/images/DN/4.png', span: '' },
    { url: '/images/DN/5.png', span: '' },
    { url: '/images/DN/6.png', span: '' },
    { url: '/images/DN/7.png', span: '' },
    { url: '/images/DN/8.png', span: '' },
    { url: '/images/DN/9.png', span: '' },
    { url: '/images/DN/11.png', span: '' },
    { url: '/images/DN/12.png', span: '' },
    { url: '/images/DN/13.png', span: '' },
    { url: '/images/DN/14.png', span: '' },
    // Fotos do Portefólio de Engenharia/Protótipos
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-custom-gift-personalized-decorative-object-on-dark-surface-yellow-gold-highlights-industrial-design-artistic-piece-clean-background-professional-product-photography&width=600&height=800&seq=gallery-001&orientation=portrait',
      span: 'md:row-span-2'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-decorative-heart-sculpture-on-dark-background-yellow-lighting-artistic-design-modern-gift-item-minimal-style-professional-shot&width=600&height=400&seq=gallery-002&orientation=landscape',
      span: ''
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-prototype-housing-enclosure-on-dark-surface-yellow-gold-highlights-industrial-design-technical-part-clean-background&width=600&height=400&seq=gallery-003&orientation=landscape',
      span: ''
    },
    {
      url: 'https://readdy.ai/api/search-image?query=precision-3d-printed-connector-fitting-on-dark-background-yellow-lighting-industrial-component-technical-engineering-part-minimal-style&width=600&height=400&seq=gallery-004&orientation=landscape',
      span: ''
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-custom-tool-adapter-on-dark-surface-yellow-gold-accent-industrial-prototype-technical-component-professional-product-shot&width=600&height=800&seq=gallery-005&orientation=portrait',
      span: 'md:row-span-2'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=industrial-3d-printed-valve-component-on-dark-background-yellow-highlights-precision-engineering-part-technical-prototype-clean-minimal&width=600&height=400&seq=gallery-006&orientation=landscape',
      span: ''
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-robotic-arm-joint-on-dark-surface-yellow-gold-lighting-industrial-mechanical-part-technical-engineering-component&width=600&height=400&seq=gallery-007&orientation=landscape',
      span: ''
    },
    {
      url: 'https://readdy.ai/api/search-image?query=complex-3d-printed-manifold-part-on-dark-background-yellow-accent-industrial-prototype-technical-engineering-component-professional-photography&width=600&height=400&seq=gallery-008&orientation=landscape',
      span: ''
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#FFD700] mb-16">
          Projetos Realizados
        </h2>

        {/* Galeria Unificada em Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[250px]">
          {allImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Projeto L3D Labs ${index + 1}`}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              {/* Overlay Dourado ao passar o rato */}
              <div className="absolute inset-0 bg-[#FFD700]/0 group-hover:bg-[#FFD700]/10 transition-all duration-500"></div>
              
              {/* Ícone de Zoom */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-zoom-in-line text-white text-4xl drop-shadow-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Visualização (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#FFD700] transition-colors cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <i className="ri-close-line"></i>
          </button>
          <img
            src={selectedImage}
            alt="Visualização ampliada"
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}