const BADGES = ['BAMS', 'Panchakarma Specialist', 'Holistic Wellness', 'Classical Ayurveda'];

export default function AyurvedaDoctorBio() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* LEFT: Photo */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              {/* Outer green ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#2E7D32]/40 z-0" />
              <div className="absolute -inset-8 rounded-3xl border border-[#A5D6A7] z-0" />

              {/* Photo container */}
              <div className="relative z-10 w-72 sm:w-80 overflow-hidden rounded-3xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20Indian%20female%20Ayurvedic%20doctor%20wearing%20white%20coat%20BAMS%20physician%20calm%20confident%20expression%20green%20botanical%20plants%20in%20background%20warm%20natural%20lighting%20studio%20portrait%20authentic%20wellness%20clinic%20green%20nature%20elements%20professional%20medical%20portrait%20photography%20clean%20soft%20background%20saree%20or%20professional%20attire%20warm%20smile&width=400&height=500&seq=ayurveda-doctor-ashwini-001&orientation=portrait"
                  alt="Dr. Ashwini Yogesh — BAMS, Ayurveda Physician & Panchakarma Specialist"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                />
              </div>

              {/* BAMS badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-[#2E7D32] text-white rounded-xl px-4 py-2.5 shadow-lg">
                <p className="font-heading font-black text-lg leading-none">BAMS</p>
                <p className="font-body text-green-200 text-xs mt-0.5">Qualified</p>
              </div>

              {/* Ayurveda tag */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-[#F4A300] text-white rounded-2xl px-5 py-3.5 shadow-xl">
                <p className="font-heading font-black text-lg leading-none">Ayurveda</p>
                <p className="font-body text-orange-100 text-xs mt-0.5 whitespace-nowrap">Physician</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Bio */}
          <div className="lg:w-7/12">
            {/* Label */}
            <p className="text-[#2E7D32] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
              Meet Our Ayurveda Expert
            </p>

            {/* Name */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#1A1A1A] mb-2 leading-tight">
              Dr. Ashwini Yogesh
            </h2>

            {/* Title */}
            <p className="font-heading font-semibold text-[#2E7D32] text-lg sm:text-xl mb-6">
              BAMS — Ayurveda Physician &amp; Panchakarma Specialist
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10 bg-[#2E7D32] rounded-full" />
              <div className="h-0.5 w-6 bg-[#F4A300] rounded-full" />
              <div className="h-0.5 w-3 bg-gray-200 rounded-full" />
            </div>

            {/* Badge - BAMS Qualified */}
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] font-heading font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-wide">
              <i className="ri-shield-check-line" />
              BAMS Qualified Ayurveda Physician
            </div>

            {/* Bio */}
            <p className="font-body text-[#555] text-sm sm:text-base leading-relaxed mb-8">
              Dr. Ashwini Yogesh is a highly qualified Ayurveda physician specializing in classical Panchakarma and holistic wellness. She provides personalized treatments to restore balance, boost immunity, and ensure complete wellbeing. Her patient-first approach combines the wisdom of traditional Ayurvedic science with modern diagnostic understanding.
            </p>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="bg-[#F1F8E9] border border-[#A5D6A7] text-[#2E7D32] font-heading font-semibold text-xs px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
