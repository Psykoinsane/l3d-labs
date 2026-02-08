export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#151515] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div className="space-y-6">
            {/* Logo Atualizado para o ficheiro local */}
            <img 
              src="/L3d.svg" 
              alt="L3d Logo" 
              className="h-10 w-auto"
            />
            <p className="text-[#B0B0B0] text-sm">
              Impressão 3D de Precisão Industrial e Prototipagem Técnica.
            </p>
            <div className="flex gap-4">
              {/* Facebook Corrigido */}
              <a
                href="https://www.facebook.com/profile.php?id=61584450621414"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
                title="Facebook L3d"
              >
                <i className="ri-facebook-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
              {/* LinkedIn Corrigido */}
              <a
                href="https://www.linkedin.com/company/l3d-laborat%C3%B3rio-3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
                title="LinkedIn L3d"
              >
                <i className="ri-linkedin-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
              {/* Instagram Corrigido (Link solicitado) */}
              <a
                href="https://www.instagram.com/l3d_laboratorio3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
                title="Instagram L3d"
              >
                <i className="ri-instagram-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
              {/* YouTube Corrigido */}
              <a
                href="https://www.youtube.com/@L3D_Laboratorio3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
                title="YouTube L3d"
              >
                <i className="ri-youtube-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-[#FFD700] font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-[#C0C0C0] hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-[#FFD700] font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-[#C0C0C0] text-sm">
              <li className="flex items-center gap-2 hover:text-[#FFD700] transition-colors">
                <i className="ri-mail-line text-[#FFD700]"></i>
                <a href="mailto:geral@l3d-labs.pt">geral@l3d-labs.pt</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFD700]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#808080] text-sm">
            <p>© 2026 L3d. Todos os direitos reservados.</p>
            <span className="text-[#505050]">Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}