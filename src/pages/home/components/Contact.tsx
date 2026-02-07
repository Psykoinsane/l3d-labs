import { useState, useEffect, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const serviceName = customEvent.detail;
      setFormData(prev => ({
        ...prev,
        message: `Olá, gostaria de saber mais sobre o serviço: ${serviceName}\n`
      }));
      setTimeout(() => {
        const messageEl = document.getElementById('message') as HTMLTextAreaElement | null;
        if (messageEl) {
          messageEl.focus();
        }
      }, 800);
    };

    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d62t6db0723ekv2it5c0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Abstract%20dark%20industrial%20background%20with%20geometric%20patterns%20and%20subtle%20golden%20accents%2C%20modern%20minimalist%20design%20with%20metallic%20textures%2C%20professional%20tech%20aesthetic%20with%20soft%20lighting%20and%20depth%2C%20dark%20charcoal%20and%20black%20tones&width=1920&height=1080&seq=contact-bg-001&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-[#FFD700]">
              Vamos Criar Juntos?
            </h2>
            <p className="text-xl text-[#B0B0B0] leading-relaxed">
              Entre em contato para discutir seu projeto. Resposta em até 24 horas.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="ri-mail-line text-[#FFD700] text-3xl"></i>
                </div>
                <div>
                  <div className="text-white text-lg font-semibold">Email</div>
                  <div className="text-[#B0B0B0]">geral@l3d-labs.pt</div>
                </div>
              </div>
            </div>

            {/* 3D Printing Image */}
            <div className="w-full h-[340px] mt-6">
              <img
                src="https://readdy.ai/api/search-image?query=A%20high%20quality%203D%20printer%20in%20action%20creating%20a%20detailed%20golden%20prototype%20object%2C%20close%20up%20shot%20with%20dramatic%20dark%20background%2C%20glowing%20filament%20and%20precise%20layers%20being%20printed%2C%20modern%20FDM%20or%20resin%203D%20printing%20technology%2C%20professional%20studio%20lighting%20with%20warm%20golden%20highlights%20on%20dark%20charcoal%20background%2C%20transparent%20PNG%20style%20isolated%20subject%20with%20clean%20minimal%20dark%20backdrop%2C%20futuristic%20industrial%20aesthetic&width=600&height=400&seq=contact-3dprint-img-001&orientation=landscape"
                alt="Impressão 3D em ação"
                title="Impressão 3D - Tecnologia e Precisão"
                className="w-full h-full object-contain object-top opacity-90"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-3xl p-10 border border-[#2A2A2A]/50">
            <form onSubmit={handleSubmit} data-readdy-form id="contact-form" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:border-[#FFD700] focus:outline-none focus:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:border-[#FFD700] focus:outline-none focus:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:border-[#FFD700] focus:outline-none focus:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all"
                  placeholder="+351 912 345 678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:border-[#FFD700] focus:outline-none focus:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
                <div className="text-right text-sm text-[#666] mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFD700] text-black font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  Erro ao enviar mensagem. Por favor, tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
