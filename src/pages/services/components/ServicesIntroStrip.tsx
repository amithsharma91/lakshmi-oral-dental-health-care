const HIGHLIGHTS = [
  {
    icon: 'ri-hospital-line',
    title: '10+ Specializations',
    desc: 'Complete dental care across all major branches under one roof',
    bg: 'bg-[#FBF5E6]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Expert Dentists',
    desc: 'Led by Dr. Yogesh T.L., MDS with 24+ years of experience',
    bg: 'bg-[#FFF8E6]',
    iconBg: 'bg-[#FEEDD0]',
    iconColor: 'text-[#D4900A]',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Open 7 Days',
    desc: 'Morning 9:30AM–2PM · Evening 4:30PM–9PM — including Sundays',
    bg: 'bg-[#FBF5E6]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
  },
];

export default function ServicesIntroStrip() {
  return (
    <section className="py-12 bg-[#FFF9E9] border-b border-[#F0E8D0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.title}
              className={`animate-on-scroll delay-${i * 100} flex items-center gap-5 ${item.bg} rounded-2xl px-6 py-5 group hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${item.iconBg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${item.icon} ${item.iconColor} text-2xl`} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#4D3B0C] text-base mb-0.5">{item.title}</h3>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
