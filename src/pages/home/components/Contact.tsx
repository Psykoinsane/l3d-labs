import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // IMPORTANTE: Substitui este valor pela chave que receberes no email
    formData.append("access_key", "d9a581a0-77cb-47e3-8f0d-3d39d369706a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Houve um erro ao enviar. Por favor, tenta novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifica a tua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold text-[#FFD700] mb-8">Vamos Criar Algo Juntos?</h2>
            <p className="text-[#B0B0B0] text-lg mb-12">
              Tens uma ideia ou um projeto que precisa de ganhar vida em 3D? 
              Estamos prontos para ajudar a transformar os teus conceitos em realidade.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center">
                  <i className="ri-mail-line text-2xl text-[#FFD700]"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail</h4>
                  <p className="text-[#B0B0B0]">geral@l3d-labs.pt</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center">
                  <i className="ri-instagram-line text-2xl text-[#FFD700]"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instagram</h4>
                  <p className="text-[#B0B0B0]">@l3d.labs</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center">
                  <i className="ri-map-pin-line text-2xl text-[#FFD700]"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-[#B0B0B0]">Portugal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-10 rounded-3xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Teu nome completo"
                  className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="teu@email.com"
                  className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-2">Mensagem</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}