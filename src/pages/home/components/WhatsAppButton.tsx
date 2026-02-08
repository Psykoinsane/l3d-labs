import React from 'react';

export default function WhatsAppButton() {
  // CONFIGURAÇÃO: Altera o número abaixo (mantém o 351)
  const phoneNumber = "351960337597"; 
  const message = "Olá L3d Labs! Gostaria de solicitar um orçamento para impressão 3D.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contactar via WhatsApp"
    >
      {/* Ícone do WhatsApp (Remix Icon) */}
      <i className="ri-whatsapp-line text-3xl"></i>
      
      {/* Ponto de Notificação Pulsante */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
      </span>

      {/* Tooltip (Legenda ao passar o rato) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        Orçamento Grátis
      </span>
    </a>
  );
}