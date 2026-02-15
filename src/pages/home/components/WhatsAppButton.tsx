import React from 'react';

/**
 * Componente de botão flutuante para contacto via WhatsApp.
 * Posicionado no canto inferior direito com efeitos de animação.
 */
export default function WhatsAppButton() {
  // CONFIGURAÇÃO: Substitui pelo teu número real (mantém o prefixo 351)
  const phoneNumber = "351960337597"; 
  const message = "Olá L3d Labs! Gostaria de solicitar um orçamento para impressão 3D.";
  
  // Formata o link para abrir o WhatsApp com a mensagem pré-definida
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center"
      aria-label="Contactar via WhatsApp"
    >
      {/* Ícone do WhatsApp - Requer o link do Remix Icon no index.html */}
      <i className="ri-whatsapp-line text-3xl"></i>
      
      {/* Ponto de Notificação Pulsante (Branco) para chamar a atenção */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
      </span>

      {/* Tooltip: Aparece apenas quando o utilizador passa o rato (Desktop) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
        Orçamento Rápido
      </span>
    </a>
  );
}