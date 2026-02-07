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
            <img 
              src="https://static.readdy.ai/image/f97c8a6bc1b5a02ffd35f331c7010e2d/3f554b1f9d2932180c7076cbda37c8c1.jpeg" 
              alt="L3d Logo" 
              className="h-12 w-auto"
            />
            <p className="text-[#B0B0B0] text-sm">
              Impressão 3D de Precisão
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584450621414&sk=photos&locale=pt_PT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
              >
                <i className="ri-facebook-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/l3d-laborat%C3%B3rio-3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
              >
                <i className="ri-linkedin-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/l3d_laboratorio3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
              >
                <i className="ri-instagram-fill text-[#FFD700] group-hover:text-black text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/@L3D_Laboratorio3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700] transition-colors group cursor-pointer"
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
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#FFD700]"></i>
                <span>geral@l3d-labs.pt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFD700]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#808080] text-sm">
            <p>© 2025 L3d. Todos os direitos reservados.</p>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}