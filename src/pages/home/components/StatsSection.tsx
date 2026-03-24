import { useState, useEffect, useRef } from 'react';
import { HOME_STATS } from '../../../mocks/dental';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-14 bg-[#8B6914] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {HOME_STATS.map((stat, i) => (
            <div key={i} className="relative text-center py-8 px-4 group">
              {/* Vertical divider */}
              {i < HOME_STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#F4A300]/40" />
              )}

              <div className="flex flex-col items-center">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <div className="w-10 h-0.5 bg-[#F4A300] rounded-full my-3" />
                <p className="font-body text-amber-100 text-sm sm:text-base font-medium whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
