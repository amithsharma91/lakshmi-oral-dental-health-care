const CATEGORIES = ['All', 'Clinic Interior', 'Before & After', 'Treatments', 'Team & Staff'];

interface FilterTabsProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <section className="bg-[#FFF9E9] py-8 border-b border-[#F0E8D0] sticky top-20 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-250 cursor-pointer whitespace-nowrap border-2 ${
                active === cat
                  ? 'bg-[#8B6914] border-[#8B6914] text-white'
                  : 'bg-transparent border-[#8B6914] text-[#8B6914] hover:bg-[#FBF5E6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
