import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    'Personalized Guidance',
    'Wealth Management',
    'SIP & Mutual Funds',
    'Financial Planning'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover bg-center bg-no-repeat -z-20"
      ></div>
      {/* rgba(2,18,38,0.55) dark overlay */}
      <div className="absolute inset-0 bg-[#021226]/55 -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          
          {/* Glass Card Content Box */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[48%] bg-white/10 backdrop-blur-[20px] rounded-[24px] p-8 lg:p-[50px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/20"
          >
            <div className="mb-8">
              <span className="inline-block text-[#00C853] font-bold text-sm tracking-widest uppercase mb-4">
                ABOUT AP WEALTH CREATION
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                What Makes Us <span className="text-[#00C853]">Different?</span>
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed font-medium">
                AP Wealth Creation provides personalized financial management solutions designed to help individuals and families build long-term wealth, achieve financial goals, and secure their future through expert guidance, SIP planning, investment strategies, and wealth management.
              </p>
            </div>

            {/* Feature Points - 2 Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-[#00C853] shrink-0" />
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <button onClick={() => window.open('https://wa.me/66970168858', '_blank')} className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#021226] transition-all duration-300 bg-[#00C853] rounded-xl hover:bg-[#00e65f] hover:shadow-[0_0_25px_rgba(0,200,83,0.4)] hover:-translate-y-1 w-full sm:w-auto cursor-pointer">
                Book Free Consultation
              </button>
              <button onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white hover:-translate-y-1 w-full sm:w-auto cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
