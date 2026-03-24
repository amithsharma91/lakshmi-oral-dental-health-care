import { useState } from 'react';

const THERAPIES = [
  {
    name: 'Vamana',
    icon: 'ri-water-flash-line',
    tag: 'Detoxification',
    description: 'Therapeutic emesis that releases accumulated toxins via sweat. Relieves chronic stress, improves joint mobility, and restores respiratory balance.',
    image: 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/37915fdb-be69-462b-93cd-ee24ba7e268b_Vamana-Therapy-1.jpg.jpeg?v=b80ed1782601833cc463f2d3fb26ee10',
  },
  {
    name: 'Basti',
    icon: 'ri-medicine-bottle-line',
    tag: 'Colon Cleanse',
    description: 'Medicated enema therapy that deeply cleanses the colon. Highly effective for constipation, joint issues, and Vata-related disorders.',
    image: 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/75d6a9f1-d4d9-4670-b9ab-7eb393592403_bastis-oil-pulling-300x200.jpg.jpeg?v=9c306c4d0d564a7c87cd603de3b9f80e',
  },
  {
    name: 'Nasya',
    icon: 'ri-psychotherapy-line',
    tag: 'Nasal Therapy',
    description: 'Nasal administration of herbal oils for respiratory detoxification. Enhances immunity, improves mood, and supports mental clarity.',
    image: 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/6934e7d5-60d2-4b83-8584-1192d845a041_images.jpeg?v=d6754a33abf9f3596fbd27f983e1e1ec',
  },
  {
    name: 'Raktamokshana',
    icon: 'ri-heart-pulse-line',
    tag: 'Blood Purification',
    description: 'Ancient blood purification technique that effectively treats chronic skin conditions, inflammation, and blood-borne toxicity.',
    image: 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/b43d93dc-db97-44fc-a0de-1150847fb4d9_raktamochan-list-img-new-22-1.jpg.jpeg?v=33661230c8632270313d2d9a2b33df6e',
  },
  {
    name: 'Shirodhara',
    icon: 'ri-brain-line',
    tag: 'Mind & Soul',
    description: 'Gentle stream of warm medicated oil poured on the forehead. Achieves profound mental balance, improves focus, and boosts overall immunity.',
    image: 'https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/4e582adc-4042-4eb7-a07b-9368f590af81_images-1.jpeg?v=223344c2dded2f842a306d4a5bc67e69',
  },
];

export default function PanchakarmaSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#2E7D32]/10 text-[#2E7D32] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Signature Therapies
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#1A1A1A] mb-4">
            Panchakarma Therapies
          </h2>
          <p className="font-body text-[#555] text-base max-w-xl mx-auto">
            Five classical purification treatments — the cornerstone of Ayurvedic healing and rejuvenation
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-12 bg-[#2E7D32] rounded-full" />
            <i className="ri-leaf-line text-[#2E7D32]" />
            <div className="h-0.5 w-12 bg-[#2E7D32] rounded-full" />
          </div>
        </div>

        {/* Therapy cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {THERAPIES.map((therapy) => {
            const isActive = active === therapy.name;
            return (
              <div
                key={therapy.name}
                onMouseEnter={() => setActive(therapy.name)}
                onMouseLeave={() => setActive(null)}
                className="relative overflow-hidden rounded-2xl cursor-default group"
                style={{ height: '420px' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={therapy.image}
                    alt={therapy.name}
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}
                  />
                </div>

                {/* Gradient overlay — stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15 transition-opacity duration-300" />

                {/* Green top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#2E7D32]" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F4A300] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {therapy.tag}
                  </span>
                </div>

                {/* Icon top right */}
                <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <i className={`${therapy.icon} text-white text-lg`} />
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-black text-white text-xl mb-2 tracking-wide">
                    {therapy.name}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="font-body text-white/85 text-sm leading-relaxed mb-3">
                      {therapy.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#F4A300] text-xs font-semibold">
                      <i className="ri-leaf-fill text-sm" />
                      Classical Panchakarma
                    </div>
                  </div>
                  {/* Collapsed hint */}
                  {!isActive && (
                    <p className="text-white/60 text-xs mt-1">Hover to learn more</p>
                  )}
                  {/* Animated underline */}
                  <div className={`mt-3 h-0.5 bg-[#F4A300] rounded-full transition-all duration-500 ${isActive ? 'w-full' : 'w-8'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#555] text-sm mt-10 font-body">
          All therapies are performed under the supervision of{' '}
          <span className="text-[#2E7D32] font-semibold">Dr. Ashwini Yogesh, BAMS</span>
        </p>
      </div>
    </section>
  );
}
