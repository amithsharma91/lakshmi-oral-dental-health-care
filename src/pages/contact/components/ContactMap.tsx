// ... existing code ...
export default function ContactMap() {
  return (
    <section className="bg-[#FFF9E9] pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-9 h-9 flex items-center justify-center bg-[#FFF8E6] rounded-xl">
            <i className="ri-map-pin-fill text-[#F4A300] text-lg" />
          </div>
          <h2 className="font-heading font-extrabold text-gray-800 text-xl">Find Us Here</h2>
          <span className="text-gray-400 font-body text-sm ml-1">
            83/A, 5th Main, AECS Layout, Sanjaynagar, Bangalore
          </span>
        </div>

        {/* Map embed */}
        <div className="w-full rounded-t-2xl overflow-hidden" style={{ height: '450px' }}>
          <iframe
            title="Lakshmi Oral & Dental Health Care Location"
            src="https://www.google.com/maps?q=83%2FA%2C+5th+Main+Rd%2C+2nd+Stage%2C+AECS+Layout%2C+Sanjayanagara%2C+Bengaluru%2C+Karnataka+560094&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Google Maps Button */}
        <div className="flex justify-center py-5 bg-[#FBF5E6] rounded-b-2xl border-t border-[#F0E8D0]">
          <a
            href="https://maps.app.goo.gl/SFcqEofddqDkpAB69"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2.5 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-map-pin-fill text-lg" />
            Open in Google Maps
            <i className="ri-external-link-line text-base" />
          </a>
        </div>
      </div>
    </section>
  );
}
