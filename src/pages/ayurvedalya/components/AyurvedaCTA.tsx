import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';

export default function AyurvedaCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gold-to-green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4A300] via-[#C8890A] to-[#2E7D32] z-0" />
      {/* Subtle leaf pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=subtle%20Ayurvedic%20botanical%20leaf%20mandala%20pattern%20texture%20seamless%20repeat%20golden%20green%20tones%20transparent%20overlay%20decorative%20Indian%20traditional%20motif%20healing%20herbs%20botanical%20illustration%20minimal%20simple%20line%20art%20on%20light%20background&width=1440&height=600&seq=ayurveda-cta-pattern-001&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mx-auto mb-6">
          <i className="ri-leaf-fill text-white text-3xl" />
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">
          Begin Your Healing Journey Today
        </h2>
        <p className="font-body text-white/90 text-lg mb-10 max-w-xl mx-auto">
          Authentic Ayurveda &amp; Panchakarma at Sanjaynagar — restore balance, heal holistically
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2E7D32] hover:bg-[#F1F8E9] font-heading font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-whatsapp-fill" />
            Book Consultation
          </a>
          <a
            href="tel:+919448178793"
            className="border-2 border-white text-white hover:bg-white/20 font-heading font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-phone-fill" />
            Call Now
          </a>
        </div>

        {/* Address note */}
        <p className="font-body text-white/70 text-sm mt-8">
          <i className="ri-map-pin-2-line mr-1.5" />
          1st Floor, #83/A, 5th Main, AECS Layout, Sanjaynagar, Bangalore
        </p>
      </div>
    </section>
  );
}
