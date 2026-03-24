const SPECIALIZATIONS = [
  {
    icon: 'ri-surgical-mask-line',
    title: 'Dental Surgery',
    desc: 'Expert in all forms of oral surgical procedures including extractions, wisdom tooth removal, and maxillofacial surgeries performed with precision and care.',
    color: 'from-[#8B6914] to-[#9E7A18]',
    borderColor: 'border-[#8B6914]',
    tag: 'Surgical Excellence',
  },
  {
    icon: 'ri-award-line',
    title: 'Oral Implantology',
    desc: 'Specializing in single, multiple, and full-mouth dental implants that look, feel, and function like natural teeth using advanced implant technology.',
    color: 'from-[#F4A300] to-[#D4900A]',
    borderColor: 'border-[#F4A300]',
    tag: 'Implant Specialist',
  },
  {
    icon: 'ri-sparkling-2-line',
    title: 'Cosmetic Dentistry',
    desc: 'From teeth whitening and smile designing to veneers and bonding — crafting beautiful confident smiles tailored to each patient.',
    color: 'from-[#6B5210] to-[#8B6914]',
    borderColor: 'border-[#6B5210]',
    tag: 'Smile Design',
  },
  {
    icon: 'ri-flask-line',
    title: 'Clinical Excellence',
    desc: 'Our clinic maintains world-class sterilization protocols, an in-house dental laboratory, advanced digital X-ray imaging, and cutting-edge 3D intraoral scanning technology — ensuring every procedure meets the highest standards of safety, precision, and patient care.',
    color: 'from-[#8B6914] to-[#F4A300]',
    borderColor: 'border-[#8B6914]',
    tag: 'High-Class Infrastructure',
  },
];

export default function Specializations() {
  return (
    <section className="py-20 bg-[#F0E8D0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Core Expertise
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C]">
            Areas of <span className="text-[#F4A300]">Expertise</span>
          </h2>
          <p className="font-body text-gray-500 text-base mt-4 max-w-lg mx-auto">
            Two decades of honing specialized skills across the most complex and impactful areas of modern dentistry.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {SPECIALIZATIONS.map((spec, i) => (
            <div
              key={spec.title}
              className={`animate-on-scroll delay-${i * 150} group bg-[#FFF9E9] rounded-2xl p-8 border-t-4 ${spec.borderColor} border-b-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${spec.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${spec.icon} text-white text-3xl`} />
              </div>

              {/* Tag pill */}
              <span className="inline-block bg-[#FBF5E6] text-[#8B6914] font-body text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                {spec.tag}
              </span>

              {/* Title */}
              <h3 className="font-heading font-black text-xl text-[#4D3B0C] mb-3 group-hover:text-[#8B6914] transition-colors">
                {spec.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-500 text-sm leading-relaxed flex-1">
                {spec.desc}
              </p>

              {/* Bottom accent line */}
              <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${spec.color} group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
