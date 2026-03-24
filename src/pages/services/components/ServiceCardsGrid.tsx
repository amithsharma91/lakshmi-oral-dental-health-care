import { Link } from 'react-router-dom';
import { DENTAL_SERVICES } from '../../../mocks/dental';

function ServiceImageCard({ svc, index }: { svc: typeof DENTAL_SERVICES[0]; index: number }) {
  const num = String(svc.id).padStart(2, '0');
  return (
    <div
      className={`animate-on-scroll delay-${Math.min(index * 80, 400)} group relative rounded-2xl overflow-hidden cursor-pointer`}
      style={{ height: '280px' }}
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
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(139,105,20,0.72) 100%)' }}
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
          <h3 className="font-heading font-black text-xl text-white mb-2 leading-tight group-hover:text-[#FFD97A] transition-colors duration-300">
            {svc.title}
          </h3>
          <p className="text-white/70 text-xs font-body leading-relaxed line-clamp-2 mb-3">
            {svc.desc}
          </p>
          <div className="flex items-center gap-1.5 text-white/60 group-hover:text-[#F4A300] text-xs font-heading font-semibold transition-colors duration-300">
            <span>Explore Service</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCardsGrid() {
  return (
    <section className="py-20 bg-[#F0E8D0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            All Treatments
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C] mb-3">
            Choose Your <span className="text-[#F4A300]">Treatment</span>
          </h2>
          <p className="font-body text-gray-500 text-base max-w-lg mx-auto">
            From routine care to advanced surgical procedures — every treatment performed with precision and compassion.
          </p>
        </div>

        {/* Image card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DENTAL_SERVICES.map((svc, i) => (
            <Link to="/contact" key={svc.id} className="block">
              <ServiceImageCard svc={svc} index={i} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
