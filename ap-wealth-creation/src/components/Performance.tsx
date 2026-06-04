import React from 'react';
import { motion } from 'framer-motion';

const Performance: React.FC = () => {
  const bars = [
    { label: 'Average Annual Returns', value: 14.5, color: 'bg-[#0F763B]' },
    { label: 'Client Retention', value: 98, color: 'bg-[#F2C94C]' },
    { label: 'Portfolio Success Rate', value: 95, color: 'bg-blue-500' }
  ];

  const stats = [
    { value: '₹500Cr+', label: 'Assets Managed' },
    { value: '10K+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Expert Advisors' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left - Progress Bars */}
          <div className="lg:w-1/2 w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-[#0F172A] mb-10"
            >
              Performance That <span className="text-[#0F763B]">Speaks</span>
            </motion.h2>

            <div className="space-y-8">
              {bars.map((bar, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-700">{bar.label}</span>
                    <span className="text-[#0F172A]">{bar.value}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (idx * 0.2) }}
                      className={`h-full rounded-full ${bar.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(15,118,59,0.1)] hover:border-[#0F763B]/50 border border-gray-100 shadow-sm transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0F763B] mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Performance;
