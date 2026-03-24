import { Link } from 'react-router-dom';

export default function ServicesCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #8B6914 0%, #4D3B0C 50%, #F4A300 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/15 border border-white/25 mx-auto mb-6">
          <i className="ri-question-line text-white text-3xl" />
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
          Not Sure Which Treatment<br className="hidden sm:block" /> You Need?
        </h2>
        <p className="font-body text-white/85 text-base sm:text-lg mb-3 max-w-xl mx-auto">
          Book a free consultation — Dr. Yogesh will guide you to the right treatment.
        </p>
        <p className="font-body text-white/60 text-sm mb-10">
          Open all 7 days · Morning 9:30AM–2PM · Evening 4:30PM–9PM
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-bold px-9 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-xl border-2 border-[#F4A300]"
          >
            <i className="ri-calendar-check-line" />
            Book Consultation Now
          </Link>
          <a
            href="tel:+919448178793"
            className="bg-transparent hover:bg-white/10 border-2 border-white/50 text-white font-heading font-bold px-9 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill" />
            +91 94481 78793
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {['Walk-ins Welcome', 'No Hidden Charges', 'Flexible Appointments'].map((tag) => (
            <div key={tag} className="flex items-center gap-1.5 text-white/80 font-body text-xs sm:text-sm">
              <i className="ri-checkbox-circle-fill text-[#F4A300] text-base" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
