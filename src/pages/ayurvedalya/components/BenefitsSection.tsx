const BENEFITS = [
  { text: 'Body & soul purification', icon: 'ri-sparkling-2-line' },
  { text: 'Slows aging process', icon: 'ri-time-line' },
  { text: 'Boosts immunity significantly', icon: 'ri-shield-check-line' },
  { text: 'Relaxes mind & body', icon: 'ri-mental-health-line' },
  { text: 'Tissue rejuvenation', icon: 'ri-seedling-line' },
  { text: 'Relieves chronic stress', icon: 'ri-emotion-happy-line' },
  { text: 'Balances the three doshas', icon: 'ri-scales-3-line' },
  { text: 'Improves digestion', icon: 'ri-fire-line' },
  { text: 'Opens body channels', icon: 'ri-flow-chart' },
  { text: 'Supports weight reduction', icon: 'ri-scales-line' },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-[#2E7D32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Why Panchakarma?
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">
            Benefits of Panchakarma
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-0.5 w-12 bg-[#F4A300]/60 rounded-full" />
            <i className="ri-leaf-line text-[#F4A300]" />
            <div className="h-0.5 w-12 bg-[#F4A300]/60 rounded-full" />
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.text}
              className="flex flex-col items-center text-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-all duration-200 cursor-default group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4A300]/20 group-hover:bg-[#F4A300]/40 transition-colors duration-200">
                <i className={`${benefit.icon} text-[#F4A300] text-xl`} />
              </div>
              <p className="font-body text-white font-medium text-sm leading-snug">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
