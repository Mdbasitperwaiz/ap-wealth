import React from 'react';
import { motion } from 'framer-motion';

const TrustPartners: React.FC = () => {
  const partners = [
    { name: 'HDFC Mutual Fund', logo: 'HDFC' },
    { name: 'ICICI Prudential', logo: 'ICICI' },
    { name: 'SBI Mutual Fund', logo: 'SBI' },
    { name: 'Axis Mutual Fund', logo: 'AXIS' },
    { name: 'Kotak Mutual Fund', logo: 'KOTAK' }
  ];

  return (
    <section className="py-12 border-b border-t border-white/5 bg-[#021226]/50 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trusted Partners & Affiliations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="text-2xl md:text-3xl font-black tracking-tighter text-gray-600 transition-all duration-300 group-hover:text-white group-hover:scale-110">
                {partner.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPartners;
