const FEATURES = [
  {
    icon: 'ri-first-aid-kit-line',
    title: 'Painless Treatments',
    desc: 'Advanced anesthesia and modern techniques ensure every procedure is completely comfortable.',
    accent: 'text-orange-400',
  },
  {
    icon: 'ri-trophy-line',
    title: '24+ Years Experience',
    desc: 'Dr. Yogesh T.L. has been transforming smiles since 2002 — backed by MDS expertise.',
    accent: 'text-orange-400',
  },
  {
    icon: 'ri-microscope-line',
    title: 'Advanced Technology',
    desc: 'Digital X-rays, 3D scanning, laser dentistry and cutting-edge equipment in every room.',
    accent: 'text-orange-400',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Open 7 Days a Week',
    desc: 'We understand dental emergencies don\'t wait — we\'re here for you every single day.',
    accent: 'text-orange-400',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Expert Specialists',
    desc: 'A dedicated team of 10+ specialists covering every branch of modern dentistry.',
    accent: 'text-orange-400',
  },
  {
    icon: 'ri-emotion-happy-line',
    title: 'Child-Friendly Care',
    desc: 'Our pediatric team creates a safe, fun, anxiety-free experience for children of all ages.',
    accent: 'text-orange-400',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax-style fixed background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=happy%20smiling%20patient%20dentist%20dental%20clinic%20bright%20professional%20interior%20teal%20white%20modern%20dental%20care%20treatment%20warm%20trust%20confident%20doctor%20patient%20relationship%20bangalore%20india&width=1920&height=900&seq=whychoose1&orientation=landscape"
          alt="Why Choose Lakshmi Dental"
          className="w-full h-full object-cover object-center"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute inset-0 bg-[#8B6914]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            / Our Advantages
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            Why Patients <span className="text-[#F4A300]">Trust Us</span>
          </h2>
        </div>

        {/* 2 rows of 3 feature boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${Math.min(i * 100, 500)} group bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-[#F4A300]/20 mb-5 group-hover:bg-[#F4A300] transition-colors duration-300`}>
                <i className={`${f.icon} text-[#F4A300] group-hover:text-white text-2xl transition-colors duration-300`} />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
