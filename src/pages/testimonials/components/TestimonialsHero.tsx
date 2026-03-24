import { useEffect, useRef } from 'react';

export default function TestimonialsHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914] to-[#F4A300]" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative arc */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,80 1440,20 L1440,80 Z" fill="#FFF9E9" />
        </svg>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 text-center px-4 pt-32 pb-28 max-w-4xl mx-auto w-full">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/30">
          <i className="ri-chat-quote-line" />
          Real Stories
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-5">
          What Our <span className="text-[#F8C96E]">Patients</span> Say
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Real experiences from real smiles —<br />
          5000+ happy patients and counting
        </p>

        {/* Stat Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-white font-body text-sm font-semibold">
            <i className="ri-star-fill text-yellow-300 text-base" />
            5-Star Rated
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-white font-body text-sm font-semibold">
            <i className="ri-user-heart-line text-[#F8C96E] text-base" />
            5000+ Patients
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-white font-body text-sm font-semibold">
            <i className="ri-shield-check-line text-amber-200 text-base" />
            24+ Years Trusted
          </div>
        </div>
      </div>
    </section>
  );
}
