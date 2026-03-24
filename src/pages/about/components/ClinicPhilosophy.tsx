const PILLARS = [
  {
    icon: 'ri-checkbox-circle-line',
    title: 'Trust',
    desc: 'Complete transparency in diagnosis, treatment plans and pricing. You always know what to expect.',
    delay: 'delay-100',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Excellence',
    desc: 'Over two decades of perfecting our craft. We settle for nothing less than the best outcome.',
    delay: 'delay-200',
  },
  {
    icon: 'ri-heart-2-line',
    title: 'Compassion',
    desc: 'Every patient is treated like family. Your comfort and confidence matter deeply to us.',
    delay: 'delay-300',
  },
];

export default function ClinicPhilosophy() {
  return (
    <section className="py-20 bg-[#8B6914] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            What We Stand For
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our Promise to You
          </h2>
          <p className="font-body text-[#E0C970] text-base max-w-md mx-auto">
            Built on three core pillars that define every interaction we have with our patients.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll ${pillar.delay} group text-center bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-10 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Icon circle */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/15 mx-auto mb-6 group-hover:bg-[#F4A300] transition-colors duration-300 border border-white/20">
                <i className={`${pillar.icon} text-white text-3xl`} />
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-2xl text-white mb-3">{pillar.title}</h3>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-[#F4A300] rounded-full mx-auto mb-4" />

              {/* Description */}
              <p className="font-body text-[#E0C970] text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
