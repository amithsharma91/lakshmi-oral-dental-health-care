import { useEffect, useRef } from 'react';

export default function GalleryHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-6');
    }, 100);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914] via-[#9E7A18] to-[#F4A300]" />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Light flare */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#F4A300]/20 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div
          ref={heroRef}
          className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          {/* Badge */}
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border border-white/30">
            Visual Tour
          </span>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-heading">
            Our Gallery
          </h1>

          {/* Subtext */}
          <p className="text-white/85 text-lg max-w-xl mx-auto font-body leading-relaxed">
            A glimpse into our clinic, treatments, and smile transformations
          </p>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="relative h-12 overflow-hidden">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12" fill="#FFF9E9">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}
