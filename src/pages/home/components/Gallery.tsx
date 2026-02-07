import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const valentinesImages = [
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-romantic-heart-sculpture-red-color-valentines-day-gift-love-symbol-on-soft-pink-background-elegant-romantic-atmosphere-professional-product-photography-minimal-style&width=400&height=400&seq=valentines-001&orientation=squarish',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-couple-figurine-romantic-gift-valentines-day-two-hearts-intertwined-red-and-pink-tones-soft-background-love-decoration-professional-shot&width=400&height=400&seq=valentines-002&orientation=squarish',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-rose-flower-sculpture-red-romantic-valentines-gift-elegant-design-soft-pink-background-love-symbol-professional-product-photography&width=400&height=400&seq=valentines-003&orientation=squarish',
    },
    {
      url: 'https://readdy.ai/api/search-image?query=3d-printed-love-text-sculpture-romantic-valentines-day-decoration-red-hearts-soft-background-personalized-gift-professional-photography-minimal&width=400&height=400&seq=valentines-004&orientation=squarish',
    },
  ];

  const images = [
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

        {/* Secção Especial Dia dos Namorados */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <i className="ri-heart-fill text-3xl text-red-500"></i>
            <h3 className="text-3xl font-bold text-center text-white">
              Especial Dia dos Namorados
            </h3>
            <i className="ri-heart-fill text-3xl text-red-500"></i>
          </div>
          <p className="text-center text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
            Presentes únicos e personalizados para surpreender quem você ama. Impressões 3D com todo o carinho para o Dia dos Namorados.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {valentinesImages.map((image, index) => (
              <div
                key={`valentines-${index}`}
                className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square bg-gradient-to-br from-red-500/10 to-pink-500/10 p-1"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={image.url}
                    alt={`Presente Dia dos Namorados ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-zoom-in-line text-white text-4xl drop-shadow-lg"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent flex-1 max-w-xs"></div>
          <i className="ri-printer-3d-line text-2xl text-[#FFD700]"></i>
          <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent flex-1 max-w-xs"></div>
        </div>

        {/* Galeria Principal */}
        <h3 className="text-2xl font-bold text-center text-[#B0B0B0] mb-10">
          Outros Projetos
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Projeto ${index + 1}`}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#FFD700]/0 group-hover:bg-[#FFD700]/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-zoom-in-line text-white text-4xl drop-shadow-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
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
