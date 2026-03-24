const TIMELINE_EVENTS = [
  {
    year: '2002',
    title: 'Lakshmi Oral & Dental Health Care Founded',
    desc: 'Dr. Yogesh T.L. established the clinic in Sanjaynagar with a vision to deliver compassionate, world-class dental care.',
    color: 'bg-[#8B6914]',
    textColor: 'text-[#8B6914]',
    borderColor: 'border-[#E0C970]',
    icon: 'ri-hospital-line',
  },
  {
    year: '2005',
    title: 'Expanded to Cosmetic Dentistry',
    desc: 'Launched comprehensive cosmetic services including teeth whitening, smile design, and porcelain veneers.',
    color: 'bg-[#F4A300]',
    textColor: 'text-[#F4A300]',
    borderColor: 'border-[#FECDAA]',
    icon: 'ri-sparkling-2-line',
  },
  {
    year: '2010',
    title: 'Introduced Dental Implant Procedures',
    desc: 'Became one of the early adopters of dental implantology in Bangalore with advanced titanium implant systems.',
    color: 'bg-[#6B5210]',
    textColor: 'text-[#6B5210]',
    borderColor: 'border-[#E0C970]',
    icon: 'ri-award-line',
  },
  {
    year: '2015',
    title: 'Adopted Digital Imaging & 3D Scanning',
    desc: 'Upgraded to state-of-the-art digital OPG, CBCT scanning and computerized treatment planning tools.',
    color: 'bg-[#D4900A]',
    textColor: 'text-[#D4900A]',
    borderColor: 'border-[#FECDAA]',
    icon: 'ri-scan-line',
  },
  {
    year: '2020',
    title: 'Launched Laser Dentistry Services',
    desc: 'Introduced minimally-invasive laser dentistry for precise, painless gum treatments and cavity removal.',
    color: 'bg-[#8B6914]',
    textColor: 'text-[#8B6914]',
    borderColor: 'border-[#E0C970]',
    icon: 'ri-flashlight-line',
  },
  {
    year: '2024',
    title: '5000+ Happy Patients Milestone',
    desc: 'Celebrated a landmark achievement — over 5000 patients with transformed smiles and renewed confidence.',
    color: 'bg-[#F4A300]',
    textColor: 'text-[#F4A300]',
    borderColor: 'border-[#FECDAA]',
    icon: 'ri-emotion-happy-line',
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-20 bg-[#FFF9E9] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our History
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C]">
            Our Journey Since{' '}
            <span className="text-[#8B6914]">2002</span>
          </h2>
          <p className="font-body text-gray-500 text-base mt-4 max-w-md mx-auto">
            Two decades of milestones, innovations, and countless smiles transformed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E0C970] via-[#F4A300] to-[#E0C970] -translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`animate-on-scroll delay-${Math.min(i * 100, 500)} relative flex flex-col md:flex-row items-center gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-[#FFF9E9] border ${event.borderColor} border-l-4 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group`} style={{ borderLeftColor: isLeft ? '' : 'transparent', borderRightColor: isLeft ? 'transparent' : '' }}>
                      {/* Year badge */}
                      <span className={`inline-block ${event.color} text-white font-heading font-black text-sm px-3 py-1 rounded-full mb-3`}>
                        {event.year}
                      </span>
                      <h3 className="font-heading font-bold text-[#4D3B0C] text-base mb-2">{event.title}</h3>
                      <p className="font-body text-gray-500 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center flex-shrink-0 z-10">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-full ${event.color} shadow-lg border-4 border-[#FFF9E9]`}>
                      <i className={`${event.icon} text-white text-xl`} />
                    </div>
                  </div>

                  {/* Spacer on opposite side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>

          {/* End cap */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="bg-gradient-to-br from-[#8B6914] to-[#F4A300] rounded-full px-6 py-3 shadow-lg">
              <p className="font-heading font-bold text-white text-sm">And the journey continues...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
