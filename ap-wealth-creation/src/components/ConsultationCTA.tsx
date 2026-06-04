import React from 'react';
import { motion } from 'framer-motion';

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0A2540] to-[#021226] border border-white/10 p-12 lg:p-24 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Inner Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#26D07C]/10 blur-[100px] -z-10 rounded-full"></div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Start Building Your <span className="text-[#26D07C]">Financial Future</span> Today
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of successful investors who trust AP Wealth Creation to manage and grow their wealth.
          </p>
          
          <button onClick={() => window.open('https://wa.me/66970168858', '_blank')} className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-extrabold text-[#021226] transition-all duration-300 bg-[#26D07C] rounded-2xl hover:bg-[#1db86c] hover:shadow-[0_0_40px_rgba(38,208,124,0.5)] hover:scale-105 overflow-hidden">
            <span className="relative z-10">Book Free Consultation</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
