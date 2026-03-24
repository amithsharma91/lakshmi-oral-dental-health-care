import { Link } from 'react-router-dom';
import { GALLERY_IMAGES } from '../../../mocks/dental';

export default function GallerySnapshot() {
  return (
    <section className="py-20 bg-[#FBF5E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Clinic
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#4D3B0C]">
            A Glimpse of Our <span className="text-[#8B6914]">Clinic</span>
          </h2>
          <p className="font-body text-gray-500 text-base mt-3 max-w-md mx-auto">
            Modern infrastructure, state-of-the-art equipment, and a warm, welcoming environment.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 animate-on-scroll">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={`group overflow-hidden rounded-2xl cursor-pointer ${img.height} relative`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#8B6914]/0 group-hover:bg-[#8B6914]/50 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/90 transition-all duration-300 scale-0 group-hover:scale-100">
                  <i className="ri-zoom-in-line text-[#8B6914] text-xl" />
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#4D3B0C]/80 to-transparent">
                <p className="font-body text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            View Full Gallery
            <i className="ri-image-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
