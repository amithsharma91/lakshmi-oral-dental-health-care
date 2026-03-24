const INFO_ITEMS = [
  {
    icon: 'ri-map-pin-2-fill',
    label: 'Address',
    lines: [
      '1st Floor, #83/A, 5th Main, AECS Layout,',
      'Post Office Road, Sanjaynagar, Bangalore – 560094',
      '(Above Lakshmi Dental Clinic)',
    ],
    link: 'https://maps.app.goo.gl/SFcqEofddqDkpAB69',
    linkText: 'Get Directions',
  },
  {
    icon: 'ri-phone-fill',
    label: 'Phone',
    lines: ['+91 94481 78793'],
    link: 'tel:+919448178793',
    linkText: 'Call Now',
  },
  {
    icon: 'ri-mail-fill',
    label: 'Email',
    lines: ['lakshmidentalayurveda@gmail.com'],
    link: 'mailto:lakshmidentalayurveda@gmail.com',
    linkText: 'Send Email',
  },
  {
    icon: 'ri-time-fill',
    label: 'Timings',
    lines: ['Morning: 9:30 AM – 2:00 PM', 'Evening: 4:30 PM – 9:00 PM'],
    link: null,
    linkText: '',
  },
  {
    icon: 'ri-calendar-check-fill',
    label: 'Availability',
    lines: ['Open All 7 Days a Week'],
    link: null,
    linkText: '',
  },
];

export default function AyurvedaContact() {
  return (
    <section className="py-20 bg-[#2E7D32]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
          Find Us
        </p>
        <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">
          Visit Lakshmi Ayurvedalya
        </h2>
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-0.5 w-12 bg-[#F4A300]/60 rounded-full" />
          <i className="ri-leaf-line text-[#F4A300]" />
          <div className="h-0.5 w-12 bg-[#F4A300]/60 rounded-full" />
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INFO_ITEMS.map((item) => (
            <div
              key={item.label}
              className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 text-left transition-all duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4A300]/25 mb-4">
                <i className={`${item.icon} text-[#F4A300] text-lg`} />
              </div>
              <p className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-2">
                {item.label}
              </p>
              {item.lines.map((line) => (
                <p key={line} className="font-body text-white/80 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-[#F4A300] hover:text-amber-200 font-heading font-semibold text-xs transition-colors duration-200 cursor-pointer"
                >
                  {item.linkText}
                  <i className="ri-arrow-right-s-line" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
