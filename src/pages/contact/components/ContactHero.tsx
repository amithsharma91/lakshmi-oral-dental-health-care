import { useEffect, useRef } from 'react';

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914] to-[#F4A300]" />

      {/* Dot overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 70" className="block w-full" preserveAspectRatio="none">
          <path d="M0,70 C400,0 1040,70 1440,20 L1440,70 Z" fill="#FFF9E9" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 text-center px-4 pt-32 pb-24 max-w-3xl mx-auto w-full">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/30">
          <i className="ri-map-pin-2-line" />
          We're Here For You
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-5">
          Get In <span className="text-[#F8C96E]">Touch</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/90 font-body text-lg max-w-xl mx-auto leading-relaxed">
          Book an appointment or walk in — we're open all 7 days including Sunday
        </p>
      </div>
    </section>
  );
}
