import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ value, label, prefix = '', suffix = '' }: { value: number, label: string, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="glass p-8 lg:p-10 rounded-[2rem] text-center hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(38,208,124,0.15)] hover:border-[#26D07C]/40 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-[#26D07C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="text-5xl lg:text-6xl font-extrabold text-[#26D07C] mb-4 relative z-10 tracking-tighter drop-shadow-md">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest relative z-10">{label}</div>
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter value={120} label="Assets Managed" prefix="₹" suffix="Cr+" />
          <AnimatedCounter value={500} label="Happy Clients" suffix="+" />
          <AnimatedCounter value={8} label="Years Experience" suffix="+" />
          <AnimatedCounter value={95} label="Client Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
