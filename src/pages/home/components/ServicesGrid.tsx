import { Link } from 'react-router-dom';
import { DENTAL_SERVICES } from '../../../mocks/dental';

const PREVIEW_SERVICES = DENTAL_SERVICES.slice(0, 6);

function ServiceImageCard({ svc, index }: { svc: typeof DENTAL_SERVICES[0]; index: number }) {
  const num = String(svc.id).padStart(2, '0');
  return (
    <div
      className={`animate-on-scroll delay-${Math.min(index * 100, 500)} group relative rounded-2xl overflow-hidden cursor-pointer`}
      style={{ height: '260px' }}
    >
      {/* Background image */}
      <img
        src={svc.cardImage}
        alt={svc.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark-to-gold gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(139,105,20,0.70) 100%)' }}
      />

      {/* Hover glow ring */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-[#F4A300]/0 group-hover:ring-[#F4A300]/70 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="font-heading font-black text-white/40 text-sm tracking-widest">{num}</span>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm group-hover:bg-[#F4A300]/80 transition-all duration-300">
            <i className={`${svc.icon} text-white text-base`} />
          </div>
        </div>

        {/* Bottom content */}
        <div>
          <span className="inline-block text-[#F4A300] text-xs font-heading font-semibold uppercase tracking-widest mb-2 bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-sm">
            {svc.tag}
          </span>
          <h3 className="font-heading font-black text-lg text-white mb-1.5 leading-tight group-hover:text-[#FFD97A] transition-colors duration-300">
            {svc.title}
          </h3>
          <p className="text-white/70 text-xs font-body leading-relaxed line-clamp-2 mb-2">
            {svc.desc}
          </p>
          <div className="flex items-center gap-1 text-white/60 group-hover:text-[#F4A300] text-xs font-heading font-semibold transition-colors duration-300">
            <span>Learn More</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FBF5E6]/50 to-[#FFF9E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14">
          <div className="animate-on-scroll">
            <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              / Our Specialties
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C] leading-tight">
              Comprehensive Dental<br />
              <span className="text-[#F4A300]">Solutions</span> For Everyone
            </h2>
          </div>
          <p className="text-gray-500 font-body text-sm max-w-xs mt-4 lg:mt-0 text-right animate-on-scroll">
            From routine checkups to advanced cosmetic procedures — we have all your dental needs covered under one roof.
          </p>
        </div>

        {/* 6-card image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVIEW_SERVICES.map((svc, idx) => (
            <Link to="/services" key={svc.id} className="block">
              <ServiceImageCard svc={svc} index={idx} />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-on-scroll">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            View All Services
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
