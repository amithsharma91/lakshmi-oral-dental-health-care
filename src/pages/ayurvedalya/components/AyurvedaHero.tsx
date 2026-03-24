import { Link } from 'react-router-dom';

export default function AyurvedaHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=authentic%20Ayurvedic%20healing%20herbs%20botanicals%20turmeric%20neem%20ashwagandha%20mortar%20pestle%20warm%20golden%20green%20earthy%20tones%20wooden%20background%20traditional%20Indian%20medicine%20flat%20lay%20lush%20botanical%20arrangement%20natural%20soft%20lighting%20wellness%20spa%20atmosphere%20high%20resolution%20professional%20photography&width=1440&height=900&seq=ayurveda-hero-bg-001&orientation=landscape"
          alt="Ayurvedic herbs background"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D1E]/85 via-[#2E7D32]/70 to-[#1A3A0A]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F4A300] text-white font-heading font-bold text-xs px-5 py-2 rounded-full mb-6 shadow-lg tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
          Now Open — 1st Floor
        </div>

        {/* Heading */}
        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
          Lakshmi Ayurvedalya &<br />
          <span className="text-[#F4A300]">Panchakarma Centre</span>
        </h1>

        {/* Subheading */}
        <p className="font-heading font-semibold text-white/90 text-xl sm:text-2xl mb-5">
          Ancient Healing, Modern Wellness
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-[#F4A300]/60 rounded-full" />
          <i className="ri-leaf-line text-[#F4A300] text-lg" />
          <div className="h-px w-16 bg-[#F4A300]/60 rounded-full" />
        </div>

        {/* Subtext */}
        <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Led by <strong className="text-white font-semibold">Dr. Ashwini Yogesh, BAMS</strong> — Authentic Ayurvedic treatments &amp; classical Panchakarma therapies at Sanjaynagar
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap shadow-xl"
          >
            Book Consultation
          </Link>
          <a
            href="#services"
            className="border-2 border-white/70 hover:border-[#F4A300] text-white hover:text-[#F4A300] font-heading font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            Explore Services
          </a>
        </div>

        {/* Info strips */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          {[
            { icon: 'ri-map-pin-2-line', text: 'Sanjaynagar, Bangalore' },
            { icon: 'ri-time-line', text: '9:30AM–2PM | 4:30PM–9PM' },
            { icon: 'ri-calendar-check-line', text: 'Open All 7 Days' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/75">
              <i className={`${item.icon} text-[#F4A300]`} />
              <span className="font-body text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <i className="ri-arrow-down-s-line text-white/60 text-2xl" />
      </div>
    </section>
  );
}
