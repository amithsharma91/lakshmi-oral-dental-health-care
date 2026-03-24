import { Link } from 'react-router-dom';

const QUALIFICATIONS = [
  'MDS',
  'Dental Surgeon',
  'Oral Implantologist',
  'Cosmetic Dentist',
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 bg-[#FFF9E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: Doctor photo */}
          <div className="lg:w-2/5 flex justify-center animate-on-scroll-left">
            <div className="relative">
              {/* Decorative teal circle/ring behind image */}
              <div className="absolute -inset-4 rounded-full border-4 border-[#E0C970] z-0" />
              <div className="absolute -inset-8 rounded-full border-2 border-[#FBF5E6] z-0" />

              {/* Doctor image */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-6 ring-4 ring-[#8B6914]/20">
                <img
                  src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/c5bb17fa625d9e9e7b9f57aa5ff68efd.jpeg"
                  alt="Dr. Yogesh T.L. — MDS Dental Surgeon"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Orange badge overlay */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#F4A300] text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-heading font-black text-2xl leading-none">24+</p>
                <p className="font-body text-xs text-orange-100 mt-0.5 whitespace-nowrap">Years Experience</p>
              </div>

              {/* Since badge */}
              <div className="absolute -top-3 -left-3 z-20 bg-[#8B6914] text-white rounded-xl px-4 py-2 shadow-lg">
                <p className="font-body text-xs text-teal-200">Since</p>
                <p className="font-heading font-black text-lg leading-none">2002</p>
              </div>
            </div>
          </div>

          {/* Right: Bio content */}
          <div className="lg:w-3/5 animate-on-scroll-right">
            {/* Orange label */}
            <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              About Our Doctor
            </p>

            {/* Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C] mb-5 leading-tight">
              Meet{' '}
              <span className="text-[#8B6914]">Dr. Yogesh T.L.</span>
            </h2>

            {/* Bio */}
            <p className="font-body text-gray-600 text-base leading-relaxed mb-7">
              With over 24 years of excellence in dental care,{' '}
              <strong className="text-[#8B6914]">Dr. Yogesh T.L.</strong> is a renowned MDS specializing in Dental Surgery, Oral Implantology, and Cosmetic Dentistry. His patient-first approach has transformed thousands of smiles across Bangalore. Known for his gentle touch, precision, and use of cutting-edge dental technology, Dr. Yogesh brings world-class expertise right here to Sanjaynagar.
            </p>

            {/* Qualification chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {QUALIFICATIONS.map((q) => (
                <span
                  key={q}
                  className="bg-[#FBF5E6] border border-[#E0C970] text-[#8B6914] font-heading font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full whitespace-nowrap"
                >
                  {q}
                </span>
              ))}
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'ri-user-star-line', label: 'Patients Treated', val: '5000+ Cases' },
                { icon: 'ri-calendar-check-line', label: 'Open All 7 Days', val: 'Morning & Evening' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-[#F0E8D0] rounded-xl p-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E0C970] flex-shrink-0">
                    <i className={`${item.icon} text-[#8B6914] text-base`} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#8B6914] text-xs">{item.val}</p>
                    <p className="font-body text-gray-400 text-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Know More About Doctor
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
