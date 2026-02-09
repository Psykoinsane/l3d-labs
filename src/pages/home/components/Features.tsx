export default function Features() {
  const features = [
    {
      icon: 'ri-ruler-line',
      title: 'Precisão Milimétrica',
      description: 'Tecnologia de ponta que garante tolerâncias mínimas e acabamento perfeito em cada peça produzida.'
    },
    {
      icon: 'ri-flask-line',
      title: 'Materiais Técnicos',
      description: 'Ampla variedade de materiais industriais: ABS, PLA, PETG, Nylon, TPU.'
    },
    {
      icon: 'ri-time-line',
      title: 'Entrega Ágil',
      description: 'Processos otimizados que reduzem o tempo de produção sem comprometer a qualidade final.'
    }
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-10 hover:border-[#FFD700] hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-[#FFD700] text-6xl group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-[#C0C0C0] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
