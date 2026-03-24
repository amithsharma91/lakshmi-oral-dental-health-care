import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4A300] via-[#D4900A] to-[#8B6914]" />

      {/* Soft glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#8B6914]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white font-heading mb-4 leading-tight">
          Love What You See?
        </h2>

        {/* Subtext */}
        <p className="text-white/85 text-lg font-body mb-8 max-w-lg mx-auto leading-relaxed">
          Book your appointment and start your smile journey today
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8B6914] hover:bg-[#FFF9E9] font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap text-base border-2 border-white flex items-center gap-2"
          >
            <i className="ri-whatsapp-fill" />
            Book Appointment
          </a>
          <a
            href="tel:+919448178793"
            className="text-white border-2 border-white/60 hover:border-white hover:bg-white/15 font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap text-base"
          >
            <i className="ri-phone-line mr-2" />
            +91 94481 78793
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {[
            { icon: 'ri-calendar-check-line', text: 'Open 7 Days' },
            { icon: 'ri-shield-check-line', text: 'Trusted Since 2002' },
            { icon: 'ri-emotion-happy-line', text: '5000+ Happy Patients' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm font-body">
              <i className={`${item.icon} text-base`} />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
