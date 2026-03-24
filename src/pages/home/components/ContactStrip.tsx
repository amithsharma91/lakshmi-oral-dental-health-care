const CONTACT_ITEMS = [
  {
    icon: 'ri-map-pin-2-line',
    title: 'Visit Us',
    lines: [
      '#83/A, Ground Floor, 5th Main,',
      'AECS Layout, Sanjaynagar,',
      'Bangalore 560094',
    ],
    accent: 'bg-[#FBF5E6] border-[#E0C970]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
    href: 'https://maps.app.goo.gl/SFcqEofddqDkpAB69',
    linkText: 'Get Directions',
  },
  {
    icon: 'ri-phone-line',
    title: 'Call Us',
    lines: ['+91 94481 78793'],
    accent: 'bg-[#FFF8E6] border-[#FECDAA]',
    iconBg: 'bg-[#FEEDD0]',
    iconColor: 'text-[#D4900A]',
    href: 'tel:+919448178793',
    linkText: 'Call Now',
  },
  {
    icon: 'ri-time-line',
    title: 'Clinic Hours',
    lines: [
      'Morning: 9:30 AM – 2:00 PM',
      'Evening: 4:30 PM – 9:00 PM',
      'Open All 7 Days',
    ],
    accent: 'bg-[#FBF5E6] border-[#E0C970]',
    iconBg: 'bg-[#E0C970]',
    iconColor: 'text-[#8B6914]',
    href: null,
    linkText: null,
  },
];

export default function ContactStrip() {
  return (
    <section className="py-14 bg-[#FFF9E9] border-t border-[#F0E8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${i * 100} flex items-start gap-5 p-6 rounded-2xl border ${item.accent} group hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.iconBg} flex-shrink-0 mt-0.5`}>
                <i className={`${item.icon} ${item.iconColor} text-xl`} />
              </div>
              {/* Content */}
              <div>
                <h4 className="font-heading font-bold text-[#4D3B0C] text-sm mb-1.5">{item.title}</h4>
                {item.lines.map((line, li) => (
                  <p key={li} className="font-body text-gray-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
                {item.href && item.linkText && (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer nofollow"
                    className={`inline-flex items-center gap-1 mt-3 font-body font-semibold text-xs cursor-pointer ${item.iconColor} hover:underline`}
                  >
                    {item.linkText}
                    <i className="ri-arrow-right-s-line" />
                  </a>
                )}
                {item.title === 'Clinic Hours' && (
                  <a
                    href="/contact#booking-form"
                    className="inline-flex items-center gap-1.5 mt-3 bg-[#F4A300] text-white text-xs font-heading font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-[#D4900A] transition-colors duration-200 whitespace-nowrap"
                  >
                    Book Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
