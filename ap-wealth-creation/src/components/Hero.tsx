import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-grid-pattern">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#26D07C]/10 blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[45%] rounded-full bg-[#0F763B]/20 blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-6 text-white tracking-tight"
            >
              Build Wealth Smarter, <br />
              <span className="text-[#26D07C]">Secure Your Future</span> Today
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-medium"
            >
              Personalized SIP planning, mutual fund investment, insurance and wealth management solutions designed for long-term financial growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button onClick={() => window.open('https://wa.me/66970168858', '_blank')} className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#021226] transition-all duration-300 bg-[#26D07C] border border-[#26D07C] rounded-xl hover:bg-[#1db86c] hover:shadow-[0_0_30px_rgba(38,208,124,0.4)] overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Book Free Consultation</span>
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex text-[#F2C94C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-300">Trusted by 5000+ Investors</span>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#021226]/80 via-transparent to-transparent z-10"></div>
              <img src="/hero-image.png" alt="Financial Consultation" className="w-full h-auto max-h-[600px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#26D07C]/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
