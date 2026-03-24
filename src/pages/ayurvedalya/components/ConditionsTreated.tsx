import { useState } from 'react';

const CONDITIONS = [
  'Diabetes', 'Cholesterol', 'Thyroid', 'Obesity', 'Depression',
  'Anxiety', 'Stress', 'Eczema', 'Dandruff', 'Psoriasis',
  'Insomnia', 'Indigestion', 'Constipation', 'Acidity', 'Detoxification',
  'Tonsillitis', 'Beauty Therapy', 'Acne', 'Hair Fall', 'PCOS/PCOD',
  'Sciatica', 'Blood Pressure', 'Premature Greying', 'Dysmenorrhea', 'Eager to Conceive',
  'Asthma', 'Diet Counselling', 'Neck & Spine Care', 'Child Development', 'Respiratory Infection',
  'Allergic Rhinitis', 'Frequent Fever', 'Allergy', 'Chronic Knee Pain', 'Neck & Back Pain',
  'Post-Op Joint Care', 'Osteo/Rheumatoid Arthritis', 'Spondylosis', 'Frozen Shoulder',
];

export default function ConditionsTreated() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#F1F8E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F4A300] font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            We Treat
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#1A1A1A] mb-4">
            Authentic &amp; Classical Treatments
          </h2>
          <p className="font-body text-[#555] text-base max-w-xl mx-auto">
            Ayurvedic solutions for <strong className="text-[#2E7D32] font-semibold">35+ conditions</strong> — holistic care that heals from within
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-0.5 w-12 bg-[#2E7D32] rounded-full" />
            <i className="ri-leaf-line text-[#2E7D32]" />
            <div className="h-0.5 w-12 bg-[#2E7D32] rounded-full" />
          </div>
        </div>

        {/* Conditions Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {CONDITIONS.map((condition) => (
            <button
              key={condition}
              onMouseEnter={() => setHovered(condition)}
              onMouseLeave={() => setHovered(null)}
              className={`font-body font-medium text-sm px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                hovered === condition
                  ? 'bg-[#F4A300] border-[#F4A300] text-white scale-105'
                  : 'bg-[#2E7D32] border-[#2E7D32] text-white hover:bg-[#F4A300] hover:border-[#F4A300] hover:scale-105'
              }`}
            >
              {condition}
            </button>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-body text-[#555] text-sm mt-10 italic">
          ...and many more conditions. Consult Dr. Ashwini Yogesh for a personalized assessment.
        </p>
      </div>
    </section>
  );
}
