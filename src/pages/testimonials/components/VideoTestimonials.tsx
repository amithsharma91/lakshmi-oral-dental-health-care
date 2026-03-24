import { useState, useEffect, useCallback, useRef } from 'react';

interface VideoPatient {
  id: number;
  name: string;
  treatment: string;
  quote: string;
  fullReview: string;
  videoUrl: string;
  orientation: 'portrait' | 'landscape' | 'unknown';
}

const VIDEO_PATIENTS: Omit<VideoPatient, 'orientation'>[] = [
  {
    id: 1,
    name: 'Savitha R.',
    treatment: 'Dental Implants',
    quote: 'Dr. Yogesh changed my smile completely!',
    fullReview:
      'I had been struggling with missing teeth for years and was very hesitant about implants. But Dr. Yogesh made the entire process so smooth and painless. The results are beyond what I expected — my confidence is back and I can eat everything normally again. Truly the best clinic in Bangalore.',
    videoUrl:
      'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/a10efacf-a571-484f-8810-fcf2fe05816b_WA_1774388319112.mp4?v=d63987f84adbcdb15add1b79fdfc2feb',
  },
  {
    id: 2,
    name: 'Ramesh K.',
    treatment: 'Root Canal Treatment',
    quote: 'Completely painless — I can\'t believe how easy it was',
    fullReview:
      'I was absolutely terrified of root canal treatment. I had delayed it for almost a year. But the team at Lakshmi Dental was so professional and caring. Dr. Yogesh explained every step and I felt zero pain throughout. The relief after was incredible. Highly recommend to anyone who is scared like I was.',
    videoUrl:
      'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f88e4d46-7ecb-42ff-8cd9-711fbe5b23e9_VID_20260325_030602.mp4?v=22730013100c2931d15cdf381cfe26dc',
  },
  {
    id: 3,
    name: 'Anitha M.',
    treatment: 'Teeth Whitening',
    quote: 'My smile has never looked this good in my life',
    fullReview:
      'I came in for teeth whitening and I am amazed by the results. My teeth are so many shades brighter after just one session. The clinic is spotlessly clean, the staff is so warm and professional, and Dr. Yogesh takes time to understand what you want. I will never go anywhere else for my dental care.',
    videoUrl:
      'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/d71793b0-3fa3-4042-ad15-0ce606587499_VID-20260324-WA0029.mp4?v=1269428e9730a837af7fc51ba5e79a41',
  },
  {
    id: 4,
    name: 'Suresh B.',
    treatment: 'Full Mouth Restoration',
    quote: 'Life changing experience — 24 years of expertise shows',
    fullReview:
      'After neglecting my teeth for many years I finally decided to do a full restoration. Dr. Yogesh\'s 24 years of experience truly shows — the planning was meticulous, the execution was perfect. I have a complete new set of teeth now and people cannot believe the transformation. Worth every rupee.',
    videoUrl:
      'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8ff981cf-ec16-43e8-b825-257cb83a5bc1_VID-20260324-WA0030.mp4?v=036ad87f3066e6f362732724bab5ed13',
  },
  {
    id: 5,
    name: 'Preethi N.',
    treatment: 'Orthodontics & Braces',
    quote: 'Best decision I made for my daughter\'s smile',
    fullReview:
      'We brought our daughter here for braces and the experience was wonderful from start to finish. Dr. Yogesh was patient and kind with her — she was so nervous initially. The treatment was on schedule and the results are absolutely beautiful. Her smile has transformed her confidence completely. Thank you Lakshmi Dental!',
    videoUrl:
      'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/4be71ef7-468d-4b59-a6ec-20044f0225f0_VID-20260321-WA0003.mp4?v=a30d1c49cb8d620128b7ee780aa9a3d1',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i} className="ri-star-fill text-sm text-[#F4A300]" />
      ))}
    </div>
  );
}

interface ModalProps {
  patient: VideoPatient;
  onClose: () => void;
}

function VideoModal({ patient, onClose }: ModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  const isPortrait = patient.orientation === 'portrait';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative mx-auto"
        style={{ width: isPortrait ? 'min(360px, 90vw)' : 'min(900px, 95vw)' }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 cursor-pointer transition-transform hover:scale-110"
          style={{ background: '#F4A300' }}
          aria-label="Close video"
        >
          <i className="ri-close-line text-xl" />
        </button>

        {/* Video Player */}
        <div
          className="w-full rounded-xl overflow-hidden bg-black"
          style={{ aspectRatio: isPortrait ? '9/16' : '16/9' }}
        >
          <video
            ref={videoRef}
            src={patient.videoUrl}
            controls
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Patient Info Below Video */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-white text-base font-heading">{patient.name}</span>
            <span
              className="text-white text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: '#F4A300' }}
            >
              {patient.treatment}
            </span>
            <StarRow />
          </div>
          <p className="text-gray-300 font-body text-sm leading-relaxed italic">
            &ldquo;{patient.fullReview}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

interface VideoCardProps {
  patient: VideoPatient;
  onPlay: (patient: VideoPatient) => void;
  onOrientationDetected: (id: number, orientation: 'portrait' | 'landscape') => void;
}

function VideoCard({ patient, onPlay, onOrientationDetected }: VideoCardProps) {
  const hiddenVideoRef = useRef<HTMLVideoElement>(null);
  const isPortrait = patient.orientation === 'portrait';
  const isUnknown = patient.orientation === 'unknown';

  const handleMetadata = useCallback(() => {
    const v = hiddenVideoRef.current;
    if (!v) return;
    const { videoWidth, videoHeight } = v;
    if (videoWidth && videoHeight) {
      onOrientationDetected(patient.id, videoHeight > videoWidth ? 'portrait' : 'landscape');
    }
  }, [patient.id, onOrientationDetected]);

  const thumbnailAspect = isPortrait ? '9/16' : '16/9';
  const thumbnailHeight = isPortrait ? '320px' : '200px';

  return (
    <div
      className={`bg-[#FFF9E9] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group flex flex-col ${
        isPortrait ? '' : 'md:col-span-1'
      }`}
      style={{ borderTop: '4px solid #8B6914', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(139,105,20,0.2)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
      }}
      onClick={() => onPlay(patient)}
    >
      {/* Hidden video for metadata detection */}
      {isUnknown && (
        <video
          ref={hiddenVideoRef}
          src={patient.videoUrl}
          preload="metadata"
          muted
          className="hidden absolute"
          onLoadedMetadata={handleMetadata}
          aria-hidden="true"
        />
      )}

      {/* Video Thumbnail Area */}
      <div
        className="relative overflow-hidden bg-black flex items-center justify-center"
        style={{
          height: thumbnailHeight,
          aspectRatio: isUnknown ? '16/9' : thumbnailAspect,
          maxHeight: isPortrait ? '340px' : '220px',
        }}
      >
        <video
          src={patient.videoUrl}
          preload="metadata"
          muted
          playsInline
          className="w-full h-full"
          style={{ objectFit: isPortrait ? 'cover' : 'cover', pointerEvents: 'none' }}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            if (v.videoWidth && v.videoHeight) {
              onOrientationDetected(patient.id, v.videoHeight > v.videoWidth ? 'portrait' : 'landscape');
            }
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-60"
              style={{ background: 'rgba(244,163,0,0.5)', transform: 'scale(1.3)' }}
            />
            <div
              className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{ background: '#F4A300' }}
            >
              <i className="ri-play-fill text-white text-2xl ml-1" />
            </div>
          </div>
        </div>

        {/* Orientation badge */}
        {!isUnknown && (
          <div
            className="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(139,105,20,0.85)' }}
          >
            <i className={`ri-${isPortrait ? 'smartphone' : 'tv'}-line mr-1`} />
            {isPortrait ? 'Portrait' : 'Landscape'}
          </div>
        )}
      </div>

      {/* Patient Details */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2 gap-2">
          <p className="font-heading font-bold text-[#1A1A1A] text-base leading-tight">{patient.name}</p>
          <span
            className="text-white text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0"
            style={{ background: '#F4A300' }}
          >
            {patient.treatment}
          </span>
        </div>

        <StarRow />

        <p className="text-[#555555] font-body text-sm italic mt-2 mb-3 leading-relaxed flex-1">
          &ldquo;{patient.quote}&rdquo;
        </p>

        <span
          className="flex items-center gap-1.5 font-heading font-bold text-sm cursor-pointer mt-auto"
          style={{ color: '#8B6914' }}
        >
          Watch Story
          <i className="ri-arrow-right-line" />
        </span>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const [patients, setPatients] = useState<VideoPatient[]>(
    VIDEO_PATIENTS.map((p) => ({ ...p, orientation: 'unknown' as const }))
  );
  const [activePatient, setActivePatient] = useState<VideoPatient | null>(null);

  const handleClose = useCallback(() => setActivePatient(null), []);

  const handleOrientationDetected = useCallback(
    (id: number, orientation: 'portrait' | 'landscape') => {
      setPatients((prev) =>
        prev.map((p) => (p.id === id && p.orientation === 'unknown' ? { ...p, orientation } : p))
      );
    },
    []
  );

  const handlePlay = useCallback(
    (patient: VideoPatient) => {
      const updated = patients.find((p) => p.id === patient.id) ?? patient;
      setActivePatient(updated);
    },
    [patients]
  );

  // Separate portrait and landscape for layout
  const portraitPatients = patients.filter((p) => p.orientation === 'portrait');
  const landscapePatients = patients.filter((p) => p.orientation === 'landscape');
  const unknownPatients = patients.filter((p) => p.orientation === 'unknown');

  const renderCard = (patient: VideoPatient) => (
    <VideoCard
      key={patient.id}
      patient={patient}
      onPlay={handlePlay}
      onOrientationDetected={handleOrientationDetected}
    />
  );

  return (
    <section className="py-20 bg-[#F0E8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-[#8B6914] font-semibold text-sm uppercase tracking-widest font-body">
            Real Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-800 mt-2 mb-4">
            Watch Their <span style={{ color: '#F4A300' }}>Smile Journeys</span>
          </h2>
          <p className="text-gray-500 font-body text-base max-w-xl mx-auto">
            Hear directly from our patients about their experience at Lakshmi Dental — in their own words.
          </p>
        </div>

        {/* Videos Grid — portrait videos in narrower columns, landscape in wider */}
        {unknownPatients.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {unknownPatients.map(renderCard)}
          </div>
        )}

        {/* Landscape videos — 2 per row (wider) */}
        {landscapePatients.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {landscapePatients.map(renderCard)}
          </div>
        )}

        {/* Portrait videos — 3-4 per row (narrower cards) */}
        {portraitPatients.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {portraitPatients.map(renderCard)}
          </div>
        )}
      </div>

      {/* Fullscreen Video Modal */}
      {activePatient && (
        <VideoModal patient={activePatient} onClose={handleClose} />
      )}
    </section>
  );
}
