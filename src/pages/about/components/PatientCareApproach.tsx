const APPROACH_POINTS = [
  {
    icon: 'ri-shield-check-line',
    title: 'Painless Treatment First',
    desc: 'Every procedure is performed with maximum comfort — pain-free dentistry is our standard, not a luxury.',
    bg: 'bg-[#FFF8E6]',
    iconBg: 'bg-[#FEEDD0]',
    iconColor: 'text-[#D4900A]',
    border: 'border-[#FECDAA]',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Personalized Care Plans',
    desc: 'No two patients are the same. Every treatment plan is customized specifically to your dental needs and goals.',
    bg: 'bg-[#FBF5E6]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
    border: 'border-[#E0C970]',
  },
  {
    icon: 'ri-microscope-line',
    title: 'Latest Technology & Digital Dentistry',
    desc: 'We provide digital impressions and 3D scanning for all crowns including implant crowns — a practice we have followed for the past 8 years, well ahead of traditional impression methods. Our clinic offers the complete range of modern crown solutions: 3D printed crowns, metal crowns, ceramic crowns, and premium zirconia metal-free crowns. High-end brand crowns are recommended as per each patient\'s convenience and requirement, ensuring the most natural look, strength, and long-lasting results for every patient we treat.',
    bg: 'bg-[#FFF8E6]',
    iconBg: 'bg-[#FEEDD0]',
    iconColor: 'text-[#D4900A]',
    border: 'border-[#FECDAA]',
  },
  {
    icon: 'ri-heart-2-line',
    title: 'Long-Term Relationships',
    desc: 'We don\'t just treat — we educate, guide, and support every patient through their complete dental health journey.',
    bg: 'bg-[#FBF5E6]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
    border: 'border-[#E0C970]',
  },
];

export default function PatientCareApproach() {
  return (
    <section className="py-20 bg-[#FFF9E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left accent strip */}
          <div className="hidden lg:flex flex-col items-center gap-3 self-stretch py-2">
            <div className="w-1.5 flex-1 bg-gradient-to-b from-[#F4A300] to-[#8B6914] rounded-full" />
          </div>

          {/* Content area */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-12 animate-on-scroll">
              <p className="text-[#8B6914] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Our Philosophy
              </p>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C] leading-tight">
                Dr. Yogesh&apos;s Approach{' '}
                <span className="text-[#F4A300]">to Patient Care</span>
              </h2>
              <p className="font-body text-gray-500 text-base mt-4 max-w-xl">
                A philosophy built on empathy, precision, and a genuine commitment to every patient&apos;s wellbeing.
              </p>
            </div>

            {/* 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {APPROACH_POINTS.map((pt, i) => (
                <div
                  key={pt.title}
                  className={`animate-on-scroll delay-${i * 100} group ${pt.bg} border ${pt.border} rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${pt.iconBg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${pt.icon} ${pt.iconColor} text-xl`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#4D3B0C] text-base mb-1.5">{pt.title}</h3>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
