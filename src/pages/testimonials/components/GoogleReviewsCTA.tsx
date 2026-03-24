export default function GoogleReviewsCTA() {
  const whatsappMsg = encodeURIComponent(
    'Hi Dr. Yogesh! I just had a great experience at Lakshmi Oral & Dental Health Care. I\'d love to share my review!'
  );

  return (
    <section className="py-20 bg-[#FFF9E9]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-[#FFF8E6] rounded-full flex items-center justify-center">
          <i className="ri-heart-fill text-4xl text-[#F4A300]" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-heading font-extrabold text-gray-800 mb-4">
          Had a <span className="text-[#F4A300]">Great Experience?</span>
        </h2>

        <p className="text-gray-500 font-body text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Your review helps others find trusted dental care in Bangalore — and means the world to our team.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.google.com/search?q=Lakshmi+Oral+Dental+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap shadow-md"
          >
            <i className="ri-google-fill text-lg" />
            Write a Google Review
          </a>
          <a
            href={`https://wa.me/919448178793?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-fill text-lg" />
            Share on WhatsApp
          </a>
        </div>

        {/* Trust note */}
        <p className="text-gray-400 font-body text-xs mt-8">
          <i className="ri-lock-line mr-1" />
          Your privacy is respected — we never share personal data.
        </p>
      </div>
    </section>
  );
}
