import { Link } from 'react-router-dom';

export default function TestimonialsCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4A300] to-[#8B6914]" />

      {/* Dot overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/30">
          <i className="ri-calendar-check-line" />
          Book Today
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 leading-tight">
          Join Our Family of <span className="text-orange-200">Happy Patients</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/90 font-body text-lg mb-10 max-w-xl mx-auto">
          Open all 7 days — Morning &amp; Evening appointments available
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="bg-white hover:bg-[#FFF9E9] text-[#8B6914] font-heading font-bold px-10 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
          >
            Book Your Appointment
          </Link>
          <a
            href="tel:+919448178793"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-heading font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill text-lg" />
            Call Us Now
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 font-body text-sm">
          <span className="flex items-center gap-2">
            <i className="ri-calendar-line text-[#F8C96E]" />
            Open All 7 Days
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="flex items-center gap-2">
            <i className="ri-shield-check-line text-[#F8C96E]" />
            Trusted Since 2002
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="flex items-center gap-2">
            <i className="ri-user-heart-line text-[#F8C96E]" />
            5000+ Happy Patients
          </span>
        </div>
      </div>
    </section>
  );
}
