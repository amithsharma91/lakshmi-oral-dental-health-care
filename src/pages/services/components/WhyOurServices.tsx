const FEATURES = [
  {
    icon: 'ri-trophy-line',
    title: 'Expert Specialists',
    desc: 'Led by Dr. Yogesh T.L., MDS — 24+ years across multiple dental specializations.',
    bg: 'bg-[#FBF5E6]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
    border: 'border-[#E0C970]',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Painless Procedures',
    desc: 'Advanced anesthesia and gentle techniques ensure every visit is comfortable and anxiety-free.',
    bg: 'bg-[#FFF8E6]',
    iconBg: 'bg-[#FEEDD0]',
    iconColor: 'text-[#D4900A]',
    border: 'border-[#FECDAA]',
  },
  {
    icon: 'ri-microscope-line',
    title: 'Latest Equipment',
    desc: 'Digital X-rays, 3D intraoral scanning, laser dentistry and CAD/CAM technology in use.',
    bg: 'bg-[#FBF5E6]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
    border: 'border-[#E0C970]',
  },
  {
    icon: 'ri-checkbox-circle-line',
    title: 'Proven Results',
    desc: '5000+ happy patients and decades of experience speak for our commitment to excellence.',
    bg: 'bg-[#FFF8E6]',
    iconBg: 'bg-[#FEEDD0]',
    iconColor: 'text-[#D4900A]',
    border: 'border-[#FECDAA]',
  },
];

export default function WhyOurServices() {
  return (
    <section className="py-20 bg-[#FFF9E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Commitment
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C]">
            Why Choose Our <span className="text-[#F4A300]">Treatments?</span>
          </h2>
          <p className="font-body text-gray-500 text-base mt-4 max-w-lg mx-auto">
            Every treatment at Lakshmi Oral &amp; Dental Health Care is backed by expertise, technology, and genuine care.
          </p>
        </div>

        {/* 4 feature boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`animate-on-scroll delay-${i * 100} group ${f.bg} border ${f.border} rounded-2xl p-7 text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${f.iconBg} mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${f.icon} ${f.iconColor} text-2xl`} />
              </div>
              <h3 className="font-heading font-bold text-[#4D3B0C] text-base mb-2">{f.title}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Mini stats row */}
        <div className="mt-14 bg-gradient-to-r from-[#8B6914] to-[#9E7A18] rounded-3xl p-8 animate-on-scroll">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: '5000+', label: 'Satisfied Patients' },
              { val: '24+', label: 'Years Experience' },
              { val: '10+', label: 'Specializations' },
              { val: '7', label: 'Days Open' },
            ].map((s, i) => (
              <div key={s.label} className={`relative ${i < 3 ? 'lg:border-r lg:border-[#C9A840]' : ''}`}>
                <p className="font-heading font-black text-white text-4xl sm:text-5xl">{s.val}</p>
                <div className="w-8 h-0.5 bg-[#F4A300] rounded-full mx-auto my-2" />
                <p className="font-body text-amber-100 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
