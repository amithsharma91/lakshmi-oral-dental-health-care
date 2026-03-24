const BENEFITS = [
  { text: 'Boosts immunity naturally' },
  { text: 'Improves physical strength' },
  { text: 'Enhances memory & intellect' },
  { text: 'Improves digestion & absorption' },
  { text: 'Better hearing & vision' },
  { text: 'Improves skin complexion' },
  { text: 'Prevents infections & diseases' },
];

export default function SwarnabinduSection() {
  return (
    <section className="py-20 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#2E7D32] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Special Ayurvedic Service
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#1A1A1A] mb-3">
            Swarnabindu Prasana
          </h2>
          <p className="font-heading font-semibold text-[#F4A300] text-xl mb-4">
            Immunization on Pushya Nakshatra
          </p>
          <div className="inline-flex items-center gap-2 bg-[#F4A300]/20 border border-[#F4A300] text-[#B8760A] font-heading font-semibold text-sm px-5 py-2 rounded-full mb-4">
            <i className="ri-parent-line" />
            For Babies &amp; Children (1–16 Years)
          </div>
          <p className="font-heading font-bold text-2xl text-[#2E7D32] mt-2 italic">
            &ldquo;Give Your Baby Golden Drops of Health&rdquo;
          </p>
        </div>

        {/* 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Baby image */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Golden frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-[#F4A300]/50 z-0" />
              <div className="absolute -inset-6 rounded-3xl border border-[#F4A300]/25 z-0" />
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=cute%20healthy%20Indian%20baby%20child%20golden%20drops%20ayurvedic%20swarna%20natural%20warm%20golden%20tones%20joyful%20healthy%20infant%20toddler%20mother%20caring%20soft%20fabric%20blanket%20natural%20sunlight%20wellness%20traditional%20Indian%20setting%20bright%20cheerful%20healthy%20baby%20portrait%20warm%20amber%20tones%20background%20professional%20lifestyle%20photography%20soft%20focus&width=400&height=480&seq=swarnabindu-baby-001&orientation=portrait"
                  alt="Swarnabindu Prasana — Ayurvedic immunization for babies and children"
                  className="w-full h-[380px] object-cover object-top"
                />
              </div>
              {/* Pushya badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#F4A300] text-white font-heading font-bold text-xs px-5 py-2.5 rounded-full shadow-xl whitespace-nowrap">
                <i className="ri-moon-star-line mr-1.5" />
                Pushya Nakshatra Day
              </div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 border border-[#F4A300]/30">
              <p className="font-heading font-bold text-[#2E7D32] text-lg mb-6">
                Benefits of Swarnabindu Prasana:
              </p>
              <ul className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <li key={benefit.text} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F4A300] flex-shrink-0">
                      <i className="ri-check-line text-white font-bold text-sm" />
                    </div>
                    <span className="font-body text-[#1A1A1A] text-base">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              {/* Gold accent */}
              <div className="mt-8 p-4 bg-[#FFF8E1] border border-[#F4A300]/40 rounded-2xl">
                <div className="flex items-start gap-3">
                  <i className="ri-star-line text-[#F4A300] text-xl flex-shrink-0 mt-0.5" />
                  <p className="font-body text-[#555] text-sm leading-relaxed">
                    Swarnabindu Prasana is administered on auspicious <strong className="text-[#2E7D32]">Pushya Nakshatra</strong> days — a time when Ayurvedic texts indicate maximum absorption and efficacy of gold-based preparations for children&apos;s immunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
