import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ALL_REVIEWS } from '../../../mocks/dental';

const DISPLAY_REVIEWS = ALL_REVIEWS.slice(0, 6);

function GoogleGLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C6.51 42.62 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

function RatingSummary() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-on-scroll">
      <div
        className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-[#F0E8D0]"
        style={{ boxShadow: '0 2px 16px rgba(139,105,20,0.08)' }}
      >
        {/* Stars block */}
        <div className="flex flex-col items-center">
          <span className="font-heading font-black text-4xl text-[#8B6914] leading-none">4.9</span>
          <div className="flex gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="ri-star-fill text-[#F4A300] text-sm" />
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="w-px h-12 bg-[#F0E8D0]" />
        {/* Info block */}
        <div>
          <p className="font-heading font-bold text-gray-800 text-sm">Based on <span className="text-[#8B6914]">120+ reviews</span></p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <GoogleGLogo size={16} />
            </div>
            <span className="text-gray-500 text-xs font-body">Verified on Google</span>
          </div>
        </div>
        {/* Divider */}
        <div className="w-px h-12 bg-[#F0E8D0]" />
        {/* Badge */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9E9] rounded-full border border-[#F4A300]/30">
            <i className="ri-award-fill text-[#F4A300] text-lg" />
          </div>
          <span className="text-xs text-gray-500 font-body mt-1 whitespace-nowrap">Top Rated</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  }, [updateArrows]);

  return (
    <section className="py-20 bg-[#FFF9E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-[#8B6914] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Patient Stories
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C]">
            What Our Patients <span className="text-[#F4A300]">Say</span>
          </h2>
          <p className="text-gray-500 font-body text-base mt-3 max-w-lg mx-auto">
            Real reviews from real patients — straight from Google
          </p>
        </div>

        {/* Rating summary */}
        <RatingSummary />

        {/* Slider wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#F0E8D0] text-[#8B6914] transition-all duration-200 cursor-pointer hover:bg-[#8B6914] hover:text-white hover:border-[#8B6914] ${canScrollLeft ? 'opacity-100 shadow-sm' : 'opacity-30 pointer-events-none'}`}
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onScroll={updateArrows}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {DISPLAY_REVIEWS.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 border border-[#F0E8D0] hover:border-[#F4A300]/60 transition-all duration-300 flex flex-col relative overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Background quote */}
                <i className="ri-double-quotes-l text-[#8B6914]/8 text-7xl absolute top-2 left-3 leading-none pointer-events-none" />

                {/* Stars + Google logo */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <i key={si} className="ri-star-fill text-[#F4A300] text-base" />
                    ))}
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <GoogleGLogo size={18} />
                  </div>
                </div>

                {/* Review text — clamped to 4 lines */}
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-5 flex-1 relative z-10 italic line-clamp-4">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-[#F0E8D0] mb-4" />

                {/* Patient info + button */}
                <div className="flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${t.color} flex-shrink-0`}>
                      <span className="font-heading font-bold text-white text-xs">{t.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-gray-800 text-sm truncate">{t.name}</p>
                      <p className="text-green-600 text-xs font-body mt-0.5 flex items-center gap-1">
                        <i className="ri-checkbox-circle-fill text-green-500 text-xs" />
                        Verified Patient
                      </p>
                    </div>
                  </div>
                  <a
                    href={t.googleLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-[#8B6914] border border-[#8B6914]/30 px-2.5 py-1.5 rounded-full hover:bg-[#8B6914] hover:text-white hover:border-[#8B6914] transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GoogleGLogo size={11} />
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#F0E8D0] text-[#8B6914] transition-all duration-200 cursor-pointer hover:bg-[#8B6914] hover:text-white hover:border-[#8B6914] ${canScrollRight ? 'opacity-100 shadow-sm' : 'opacity-30 pointer-events-none'}`}
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {DISPLAY_REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const card = el.children[i] as HTMLElement;
                card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                setTimeout(updateArrows, 350);
              }}
              className="w-2 h-2 rounded-full bg-[#8B6914]/30 hover:bg-[#F4A300] transition-all duration-200 cursor-pointer"
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 animate-on-scroll">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Read All Reviews
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

      </div>
    </section>
  );
}
