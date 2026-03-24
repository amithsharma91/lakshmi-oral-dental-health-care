import { useState, useEffect } from 'react';
import { GALLERY_FULL } from '../../../mocks/dental';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

interface PhotoGridProps {
  activeFilter: string;
}

export default function PhotoGrid({ activeFilter }: PhotoGridProps) {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });
  const [visible, setVisible] = useState(false);

  const filtered: GalleryImage[] =
    activeFilter === 'All'
      ? GALLERY_FULL
      : GALLERY_FULL.filter((img) => img.category === activeFilter);

  // Animate grid re-render on filter change
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [activeFilter]);

  const openLightbox = (index: number) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const prev = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index - 1 + filtered.length) % filtered.length,
    }));

  const next = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + 1) % filtered.length,
    }));

  // Close on Escape key
  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox.open, filtered.length]);

  return (
    <section className="py-20 bg-[#FFF9E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Count badge */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-heading">
            {activeFilter === 'All' ? 'All Photos' : activeFilter}
            <span className="ml-2 text-sm font-normal text-gray-400 font-body">
              ({filtered.length} photos)
            </span>
          </h2>
          <span className="text-sm text-gray-400 font-body hidden sm:block">
            Click any image to view full size
          </span>
        </div>

        {/* Masonry Grid using CSS columns */}
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid mb-4 group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#8B6914]/0 group-hover:bg-[#8B6914]/75 transition-all duration-300 flex flex-col items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 mb-3 mx-auto">
                    <i className="ri-zoom-in-line text-[#8B6914] text-xl" />
                  </div>
                  <p className="text-white text-xs text-center font-body font-medium px-4 leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>

              {/* Category pill */}
              <div className="absolute top-2 left-2 bg-[#8B6914]/90 text-white text-xs font-body px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-body">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox.open && filtered[lightbox.index] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Content — stop propagation so clicking image doesn't close */}
          <div
            className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-0 -mt-10 -mr-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white cursor-pointer transition-colors z-10"
            >
              <i className="ri-close-line text-xl" />
            </button>

            {/* Main Image */}
            <div className="relative w-full rounded-xl overflow-hidden">
              <img
                src={filtered[lightbox.index].src}
                alt={filtered[lightbox.index].alt}
                className="w-full max-h-[70vh] object-contain object-center rounded-xl"
              />

              {/* Prev Arrow */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#8B6914] text-white cursor-pointer transition-all duration-200"
              >
                <i className="ri-arrow-left-s-line text-xl" />
              </button>

              {/* Next Arrow */}
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#8B6914] text-white cursor-pointer transition-all duration-200"
              >
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 text-center">
              <p className="text-white font-body text-sm leading-relaxed">
                {filtered[lightbox.index].caption}
              </p>
              <p className="text-white/50 text-xs mt-1 font-body">
                {lightbox.index + 1} / {filtered.length}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1 max-w-full">
              {filtered.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setLightbox((lb) => ({ ...lb, index: idx }))}
                  className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-150 ${
                    idx === lightbox.index
                      ? 'border-[#F4A300] scale-105'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
