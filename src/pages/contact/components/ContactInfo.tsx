import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-heading font-extrabold text-[#8B6914]">Clinic Details</h2>
        <p className="text-gray-500 font-body text-sm mt-1">Everything you need to reach us</p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-3">
        {/* Phone */}
        <a
          href="tel:+919448178793"
          className="flex items-start gap-4 bg-[#FFF9E9] rounded-xl border border-[#F0E8D0] px-5 py-4 hover:border-[#8B6914] transition-all duration-200 group cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-[#FBF5E6] rounded-xl flex-shrink-0 group-hover:bg-[#8B6914] transition-colors duration-200">
            <i className="ri-phone-fill text-[#8B6914] text-lg group-hover:text-white transition-colors duration-200" />
          </div>
          <div>
            <p className="text-gray-400 font-body text-xs uppercase tracking-widest mb-0.5">Call Us</p>
            <p className="text-[#F4A300] font-heading font-bold text-base">+91 94481 78793</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 bg-[#FFF9E9] rounded-xl border border-[#F0E8D0] px-5 py-4 hover:border-green-400 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-green-50 rounded-xl flex-shrink-0 group-hover:bg-green-500 transition-colors duration-200">
            <i className="ri-whatsapp-fill text-green-500 text-lg group-hover:text-white transition-colors duration-200" />
          </div>
          <div>
            <p className="text-gray-400 font-body text-xs uppercase tracking-widest mb-0.5">WhatsApp</p>
            <p className="text-green-600 font-heading font-bold text-base">+91 94481 78793</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:lakshmidentalayurveda@gmail.com"
          className="flex items-start gap-4 bg-[#FFF9E9] rounded-xl border border-[#F0E8D0] px-5 py-4 hover:border-[#F4A300] transition-all duration-200 group cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-[#FFF8E6] rounded-xl flex-shrink-0 group-hover:bg-[#F4A300] transition-colors duration-200">
            <i className="ri-mail-fill text-[#F4A300] text-lg group-hover:text-white transition-colors duration-200" />
          </div>
          <div>
            <p className="text-gray-400 font-body text-xs uppercase tracking-widest mb-0.5">Email</p>
            <p className="text-gray-700 font-heading font-semibold text-sm break-all">
              lakshmidentalayurveda@gmail.com
            </p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-start gap-4 bg-[#FFF9E9] rounded-xl border border-[#F0E8D0] px-5 py-4">
          <div className="w-10 h-10 flex items-center justify-center bg-[#FFF8E6] rounded-xl flex-shrink-0">
            <i className="ri-map-pin-fill text-[#F4A300] text-lg" />
          </div>
          <div>
            <p className="text-gray-400 font-body text-xs uppercase tracking-widest mb-0.5">Address</p>
            <p className="text-gray-700 font-body text-sm leading-relaxed">
              #83/A, Ground Floor, 5th Main,<br />
              AECS Layout, Post Office Road,<br />
              Sanjaynagar, Bangalore &ndash; 560094
            </p>
            <a
              href="https://maps.app.goo.gl/SFcqEofddqDkpAB69"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1 mt-2 text-[#8B6914] hover:text-[#F4A300] font-heading font-semibold text-xs transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-map-2-line" />
              Get Directions
              <i className="ri-arrow-right-s-line" />
            </a>
          </div>
        </div>
      </div>

      {/* Clinic Timings */}
      <div className="bg-[#FBF5E6] border-2 border-[#8B6914] rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-[#8B6914] rounded-lg">
            <i className="ri-time-fill text-white text-base" />
          </div>
          <h3 className="font-heading font-bold text-gray-800 text-base">Clinic Timings</h3>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center justify-between bg-[#FFF9E9] rounded-lg px-4 py-2.5">
            <span className="text-gray-500 font-body text-sm flex items-center gap-2">
              <i className="ri-sun-line text-[#F4A300]" />
              Morning Session
            </span>
            <span className="text-[#8B6914] font-heading font-bold text-sm">9:30 AM &ndash; 2:00 PM</span>
          </div>
          <div className="flex items-center justify-between bg-[#FFF9E9] rounded-lg px-4 py-2.5">
            <span className="text-gray-500 font-body text-sm flex items-center gap-2">
              <i className="ri-moon-line text-[#8B6914]" />
              Evening Session
            </span>
            <span className="text-[#8B6914] font-heading font-bold text-sm">4:30 PM &ndash; 9:00 PM</span>
          </div>
        </div>

        {/* Open 7 Days */}
        <div className="text-center mb-3">
          <span className="bg-[#8B6914] text-white font-semibold text-xs px-4 py-1.5 rounded-full font-body">
            <i className="ri-calendar-check-line mr-1" />
            Open All 7 Days Including Sunday
          </span>
        </div>

        {/* Days row */}
        <div className="flex items-center justify-between gap-1 mt-3">
          {DAYS.map((day) => (
            <div key={day} className="flex flex-col items-center gap-1">
              <span className="text-gray-500 font-body text-xs">{day}</span>
              <div className="w-7 h-7 flex items-center justify-center bg-[#8B6914] rounded-full">
                <i className="ri-check-line text-white text-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
