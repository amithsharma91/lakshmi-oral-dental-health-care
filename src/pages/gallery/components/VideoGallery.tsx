import { useState, useEffect, useRef } from 'react';

const VIDEO_URL = 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/4cfdbcd9-054d-4ffd-ac60-b02ddd216976_VID-20260310-WA0008.mp4?v=a07d0c8cb942aedbc89f627ca622b73b';
const COVER_IMG = 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/64531af4-a562-4614-a7af-559472d3a5ee_IMG-20260310-WA0009.jpg?v=981f046270c138c9a5732e74292e5c3e';

const VIDEO_URL_2 = 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/053be7db-4aef-40fb-994f-eee73b1416e0_With-expert-dental-team_20260320_201304_0001-1.mp4?v=93bad2c1a1761e474addcd12f3d01461';

const VIDEOS = [
  {
    id: 1,
    title: 'Dental Implant Procedure at Lakshmi Dental',
    thumb: COVER_IMG,
    src: VIDEO_URL,
    available: true,
  },
  {
    id: 2,
    title: 'With Our Expert Dental Team',
    thumb: '',
    src: VIDEO_URL_2,
    available: true,
  },
  {
    id: 3,
    title: 'Patient Treatment at Lakshmi Oral & Dental Health Care',
    thumb: '',
    src: 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/dc317bed-90e7-452f-932e-8303861e4ecd_WA_1774389512495.mp4?v=c3fbf6cd73d57370e430b3f72ce5e462',
    available: true,
  },
  {
    id: 4,
    title: 'Clinic Tour — Lakshmi Oral & Dental Health Care',
    thumb: 'https://readdy.ai/api/search-image?query=dental%20clinic%20tour%20video%20thumbnail%20modern%20interior%20reception%20treatment%20rooms%20clean%20professional%20teal%20white%20elegant%20bangalore%20india%20cinematic%20wide%20angle%20shot&width=640&height=360&seq=vid3&orientation=landscape',
    src: '',
    available: false,
  },
];

export default function VideoGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (video: { src: string; title: string }) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalOpen]);

  return (
    <section className="py-20 bg-[#F0E8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-3 font-body">
            Watch &amp; Learn
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-heading mb-3">
            Our Treatment Videos
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto font-body">
            See how we work — patient procedures, clinic tour, and expert tips
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className={`group rounded-xl overflow-hidden bg-[#FFF9E9] border border-[#F0E8D0] ${video.available ? 'cursor-pointer' : 'cursor-default'}`}
              style={{ boxShadow: 'none' }}
              onClick={video.available ? () => openModal({ src: video.src, title: video.title }) : undefined}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden w-full bg-black" style={{ aspectRatio: '9/16' }}>
                {video.available && !video.thumb ? (
                  <video
                    src={video.src}
                    className="w-full h-full object-cover object-top"
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      (e.target as HTMLVideoElement).currentTime = 1;
                    }}
                  />
                ) : (
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${video.available ? 'group-hover:scale-105' : ''}`}
                  />
                )}
                {/* Dark overlay */}
                <div className={`absolute inset-0 bg-black/35 transition-all duration-300 ${video.available ? 'group-hover:bg-black/50' : ''}`} />

                {/* Play Button — only for available videos */}
                {video.available ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-[#F4A300] group-hover:scale-110 transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-[#F4A300] animate-ping opacity-40" />
                      <i className="ri-play-fill text-white text-2xl ml-1 relative z-10" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20">
                      <i className="ri-time-line text-white text-2xl" />
                    </div>
                  </div>
                )}

                {/* Badge */}
                <div className={`absolute bottom-3 right-3 text-white text-xs px-2 py-1 rounded font-body ${video.available ? 'bg-[#8B6914]' : 'bg-black/70'}`}>
                  {video.available ? 'Watch Now' : 'Video Coming Soon — Stay Tuned!'}
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className={`font-semibold text-gray-800 text-sm font-heading leading-snug transition-colors duration-200 ${video.available ? 'group-hover:text-[#8B6914]' : ''}`}>
                  {video.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-body flex items-center gap-1">
                  <i className="ri-play-circle-line text-[#F4A300]" />
                  Lakshmi Oral &amp; Dental Health Care
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-sm mt-8 font-body italic">
          <i className="ri-youtube-line text-[#F4A300] mr-1" />
          Subscribe to our YouTube channel for treatment walkthroughs and clinic updates coming soon.
        </p>
      </div>

      {/* Fullscreen Video Modal */}
      {modalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          <div
            className="relative mx-4"
            style={{ width: 'min(380px, 90vw)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#F4A300] hover:bg-[#8B6914] text-white cursor-pointer transition-colors z-10 whitespace-nowrap"
            >
              <i className="ri-close-line text-xl" />
            </button>

            {/* Video player */}
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '9/16' }}>
              <video
                ref={videoRef}
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            </div>

            {/* Video title below */}
            <div className="mt-4 text-center">
              <p className="text-white font-heading font-bold text-lg">
                {selectedVideo.title}
              </p>
              <p className="text-white/60 text-sm font-body mt-1">
                Lakshmi Oral &amp; Dental Health Care — Sanjaynagar, Bangalore
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
