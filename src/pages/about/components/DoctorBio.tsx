const QUALIFICATIONS = [
  'MDS (Master of Dental Surgery)',
  'Dental Surgeon',
  'Oral Implantologist',
  'Cosmetic Dentist',
  'Practicing Since 2002 — 24+ Years Experience',
];

const MINI_STATS = [
  { value: '24+', label: 'Years' },
  { value: '5000+', label: 'Patients' },
  { value: '10+', label: 'Specializations' },
];

export default function DoctorBio() {
  return (
    <section className="py-20 bg-[#FFF9E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* LEFT: Doctor Photo */}
          <div className="lg:w-5/12 flex justify-center animate-on-scroll-left">
            <div className="relative">
              {/* Outer decorative rings */}
              <div className="absolute -inset-5 rounded-3xl border-2 border-[#E0C970] z-0" />
              <div className="absolute -inset-10 rounded-3xl border border-[#FBF5E6] z-0" />

              {/* Photo */}
              <div className="relative z-10 w-72 sm:w-80 overflow-hidden rounded-3xl">
                <img
                  src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/c5bb17fa625d9e9e7b9f57aa5ff68efd.jpeg"
                  alt="Dr. Yogesh T.L. — MDS, Dental Surgeon, Oral Implantologist"
                  className="w-full h-96 sm:h-[440px] object-cover object-top"
                />
              </div>

              {/* Practicing since badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-[#F4A300] text-white rounded-2xl px-5 py-3.5 shadow-xl">
                <p className="font-heading font-black text-2xl leading-none">2002</p>
                <p className="font-body text-xs text-orange-100 mt-0.5 whitespace-nowrap">Practicing Since</p>
              </div>

              {/* MDS badge top-left */}
              <div className="absolute -top-4 -left-4 z-20 bg-[#8B6914] text-white rounded-xl px-4 py-2.5 shadow-lg">
                <p className="font-heading font-black text-lg leading-none">MDS</p>
                <p className="font-body text-[#E0C970] text-xs mt-0.5">Qualified</p>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-5 -left-6 z-20 bg-[#FFF9E9] border border-gray-100 rounded-2xl px-4 py-3 shadow-xl hidden sm:block">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-body text-xs text-gray-500">Walk-ins Welcome</span>
                </div>
                <p className="font-heading font-black text-[#8B6914] text-sm">Open 7 Days</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Bio Content */}
          <div className="lg:w-7/12 animate-on-scroll-right">
            {/* Orange label */}
            <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
              Your Trusted Dental Expert
            </p>

            {/* Name */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#4D3B0C] mb-2 leading-tight">
              Dr. Yogesh T.L.
            </h2>

            {/* Subheading */}
            <p className="font-heading font-semibold text-[#8B6914] text-lg sm:text-xl mb-6">
              MDS, Dental Surgeon &amp; Oral Implantologist
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10 bg-[#F4A300] rounded-full" />
              <div className="h-0.5 w-6 bg-[#C9A840] rounded-full" />
              <div className="h-0.5 w-3 bg-gray-200 rounded-full" />
            </div>

            {/* Bio paragraph */}
            <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
              Dr. Yogesh T.L. is a highly accomplished dental professional with over 24 years of experience in transforming smiles across Bangalore. As a renowned MDS specializing in Dental Surgery, Oral Implantology, and Cosmetic Dentistry, his patient-first philosophy and use of the latest dental technology have made Lakshmi Oral &amp; Dental Health Care one of Bangalore&apos;s most trusted clinics.
            </p>

            {/* Qualifications list */}
            <ul className="space-y-3 mb-8">
              {QUALIFICATIONS.map((q) => (
                <li key={q} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E0C970] flex-shrink-0">
                    <i className="ri-checkbox-circle-fill text-[#8B6914] text-sm" />
                  </div>
                  <span className="font-body text-gray-700 text-sm sm:text-base">{q}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {MINI_STATS.map((s) => (
                <div key={s.label} className="bg-gradient-to-br from-[#8B6914] to-[#9E7A18] rounded-2xl p-4 text-center">
                  <p className="font-heading font-black text-white text-2xl sm:text-3xl leading-none">{s.value}</p>
                  <p className="font-body text-[#E0C970] text-xs mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
