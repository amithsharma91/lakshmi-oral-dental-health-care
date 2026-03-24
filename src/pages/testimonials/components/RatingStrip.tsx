export default function RatingStrip() {
  return (
    <section className="bg-[#8B6914] py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        {/* Rating info */}
        <div className="flex flex-col md:flex-row items-center gap-4 flex-1 justify-center">
          {/* Big star */}
          <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0">
            <i className="ri-star-fill text-yellow-300 text-3xl" />
          </div>
          <div>
            <p className="text-white font-heading font-extrabold text-3xl leading-tight">
              4.9 / 5 Rating
            </p>
            <p className="text-white/80 font-body text-sm mt-0.5">
              Based on 500+ verified Google Reviews
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-14 bg-white/20" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <i key={s} className="ri-star-fill text-yellow-300 text-lg" />
            ))}
          </div>
          <a
            href="https://www.google.com/search?q=Lakshmi+Oral+Dental+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
