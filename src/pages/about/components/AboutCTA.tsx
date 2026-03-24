import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';

export default function AboutCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4A300 0%, #D4900A 40%, #8B6914 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/15 border border-white/25 mx-auto mb-6">
          <i className="ri-calendar-check-line text-white text-3xl" />
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
          Begin Your Smile<br />Transformation Today
        </h2>
        <p className="font-body text-white/85 text-base sm:text-lg mb-3 max-w-xl mx-auto">
          Book a consultation with Dr. Yogesh T.L. — Open all 7 days including Sunday.
        </p>
        <p className="font-body text-white/60 text-sm mb-10">
          Morning 9:30 AM – 2:00 PM &nbsp;·&nbsp; Evening 4:30 PM – 9:00 PM
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#FFF9E9] text-[#D4900A] font-heading font-bold px-9 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-xl"
          >
            <i className="ri-whatsapp-fill" />
            Book Appointment
          </a>
          <a
            href="tel:+919448178793"
            className="bg-transparent hover:bg-white/10 border-2 border-white/50 text-white font-heading font-bold px-9 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill" />
            +91 94481 78793
          </a>
        </div>

        {/* Trust badge */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {['Open 7 Days a Week', '5000+ Happy Patients', 'MDS Certified Doctor'].map((tag) => (
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
