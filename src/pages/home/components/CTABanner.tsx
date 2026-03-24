import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';

export default function CTABanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #8B6914 0%, #4D3B0C 45%, #F4A300 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
          Ready for Your Best Smile?
        </h2>
        <p className="font-body text-white/85 text-base sm:text-lg mb-3 max-w-xl mx-auto">
          Book your appointment today — we&apos;re open all 7 days including Sunday.
        </p>
        <p className="font-body text-white/65 text-sm mb-10">
          Morning 9:30AM – 2:00PM &nbsp;|&nbsp; Evening 4:30PM – 9:00PM
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#FFF9E9] text-[#D4900A] font-heading font-bold px-9 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-xl border-2 border-[#F4A300]/30"
          >
            <i className="ri-whatsapp-fill" />
            Book Appointment Now
          </a>
          <a
            href="tel:+919448178793"
            className="bg-transparent hover:bg-white/10 border-2 border-white/50 text-white font-heading font-bold px-9 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill" />
            +91 94481 78793
          </a>
        </div>
      </div>
    </section>
  );
}
