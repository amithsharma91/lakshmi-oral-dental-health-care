import { WHATSAPP_BOOK_URL } from '../../../mocks/dental';

export default function QuickActions() {
  return (
    <section className="bg-[#FFF9E9] py-14">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-gray-400 font-body text-sm uppercase tracking-widest mb-3 font-semibold">
          Prefer Direct Contact?
        </p>
        <h2 className="text-3xl font-heading font-extrabold text-gray-800 mb-8">
          Reach Us <span className="text-[#8B6914]">Instantly</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp */}
          <a
            href={WHATSAPP_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white font-heading font-bold text-base px-10 py-4 rounded-2xl transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-whatsapp-fill text-2xl" />
            </div>
            Book on WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+919448178793"
            className="flex items-center gap-3 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-bold text-base px-10 py-4 rounded-2xl transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-phone-fill text-2xl" />
            </div>
            Call Us Now
          </a>
        </div>

        <p className="text-gray-400 font-body text-sm mt-6">
          <i className="ri-time-line text-[#8B6914] mr-1" />
          Available Mon – Sun, 9:30 AM – 9:00 PM
        </p>
      </div>
    </section>
  );
}
