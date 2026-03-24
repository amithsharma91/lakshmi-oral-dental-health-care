import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-[62vh] flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #8B6914 0%, #4D3B0C 50%, #F4A300 100%)' }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div
        className={`relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 transition-all duration-900 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <Link to="/" className="text-white/60 hover:text-white font-body text-sm cursor-pointer transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-white/40 text-sm" />
          <span className="text-orange-300 font-body text-sm font-medium">Services</span>
        </div>

        {/* White label */}
        <div className="inline-flex items-center gap-2 bg-white/12 border border-white/25 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
          <i className="ri-tooth-line text-[#F4A300] text-sm" />
          <span className="text-white font-body text-sm font-medium tracking-wide">Expert Dental Care</span>
        </div>

        {/* Heading */}
        <h1
          className={`font-heading font-black text-white leading-tight mb-5 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="block text-5xl sm:text-6xl lg:text-7xl">Our Dental</span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#F4A300]">Services</span>
        </h1>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-px w-14 bg-[#F4A300]/50" />
          <i className="ri-sparkling-line text-[#F4A300] text-lg" />
          <div className="h-px w-14 bg-[#F4A300]/50" />
        </div>

        {/* Subtext */}
        <p
          className={`font-body text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Comprehensive care under one roof —{' '}
          <strong className="text-orange-200">10 specialized departments</strong>, one trusted clinic
        </p>

        {/* Quick stat pills */}
        <div
          className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[
            { icon: 'ri-hospital-line', text: '10+ Specializations' },
            { icon: 'ri-user-star-line', text: 'Expert Dentists' },
            { icon: 'ri-calendar-check-line', text: 'Open 7 Days' },
          ].map((p) => (
            <span
              key={p.text}
              className="inline-flex items-center gap-1.5 bg-white/12 border border-white/20 text-white/90 font-body text-xs sm:text-sm px-4 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap"
            >
              <i className={`${p.icon} text-[#F4A300] text-sm`} />
              {p.text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom white cap */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <div className="h-8 bg-[#FFF9E9]" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>
    </section>
  );
}
