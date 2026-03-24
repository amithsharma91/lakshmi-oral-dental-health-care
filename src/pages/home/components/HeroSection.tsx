import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=bright%20modern%20dental%20clinic%20interior%20wide%20angle%20panoramic%20view%20clean%20professional%20dental%20chairs%20teal%20white%20accents%20equipment%20stunning%20beautiful%20soft%20natural%20lighting%20no%20people&width=1920&height=1080&seq=newhero1&orientation=landscape"
          alt="Lakshmi Oral & Dental Health Care Clinic"
          className="w-full h-full object-cover object-center scale-105"
          style={{ transform: 'scale(1.08)' }}
        />
        {/* Teal-to-orange gradient overlay at 70% opacity */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(139,105,20,0.72) 0%, rgba(77,59,12,0.75) 40%, rgba(244,163,0,0.65) 100%)' }} />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Centered content */}
      <div
        className={`relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-7">
          <i className="ri-shield-star-fill text-[#F4A300] text-sm" />
          <span className="text-white font-body text-sm font-semibold tracking-wide whitespace-nowrap">
            Bangalore&apos;s Most Trusted Dental Clinic
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading font-black text-white leading-tight mb-5">
          <span
            className={`block text-5xl sm:text-6xl lg:text-7xl transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Where Beautiful
          </span>
          <span
            className={`block text-5xl sm:text-6xl lg:text-7xl text-[#F4A300] transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Smiles Begin
          </span>
        </h1>

        {/* Decorative divider */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-400 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-px w-16 bg-[#F4A300]/60" />
          <i className="ri-tooth-line text-[#F4A300] text-xl" />
          <div className="h-px w-16 bg-[#F4A300]/60" />
        </div>

        {/* Subtext */}
        <p
          className={`font-body text-white/90 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Led by <strong className="text-[#F8C96E] font-semibold">Dr. Yogesh T.L., MDS</strong> — Dental Surgeon, Oral Implantologist &amp; Cosmetic Dentist.{' '}
          <span className="text-white/80">Practicing Since 2002.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-xl"
          >
            <i className="ri-whatsapp-fill" />
            Book Appointment
          </a>
          <Link
            to="/services"
            className="bg-transparent hover:bg-white/15 border-2 border-white text-white font-heading font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            <i className="ri-tooth-line" />
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
