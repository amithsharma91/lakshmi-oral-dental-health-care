import { useState, useEffect } from 'react';
import { WHATSAPP_BOOK_URL } from '../../mocks/dental';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button with pulse ring */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
        <a
          href={WHATSAPP_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="relative flex w-14 h-14 items-center justify-center bg-[#25D366] hover:bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer group"
          aria-label="Book Appointment on WhatsApp"
        >
          <i className="ri-whatsapp-line text-2xl" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-body font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Book Appointment
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </span>
        </a>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-11 h-11 flex items-center justify-center bg-[#8B6914] hover:bg-[#6B5210] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        <i className="ri-arrow-up-line text-xl" />
      </button>
    </>
  );
}
