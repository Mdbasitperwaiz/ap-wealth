import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Wallet, ShieldCheck, FileText, Umbrella, UserCheck, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { title: 'Mutual Funds', desc: 'Diversified portfolios tailored to financial goals', icon: <LineChart size={32} /> },
    { title: 'SIP Planning', desc: 'Systematic investment planning for disciplined wealth creation', icon: <Wallet size={32} /> },
    { title: 'Insurance', desc: 'Comprehensive life, health and asset protection', icon: <ShieldCheck size={32} /> },
    { title: 'Tax Planning', desc: 'Strategic tax-saving investments under section 80C', icon: <FileText size={32} /> },
    { title: 'Retirement Planning', desc: 'Secure your post-retirement life with smart allocations', icon: <Umbrella size={32} /> },
    { title: 'Financial Consultation', desc: '1-on-1 personalized wealth advisory and strategy', icon: <UserCheck size={32} /> }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6"
          >
            Premium <span className="text-[#26D07C]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-medium text-lg"
          >
            Comprehensive financial solutions designed to help you achieve your wealth creation goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(38,208,124,0.1)] hover:border-[#26D07C]/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#26D07C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="bg-[#0A2540] text-[#26D07C] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-[#26D07C]/20 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow font-medium leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">{service.desc}</p>
              
              <button onClick={() => window.open('https://wa.me/66970168858', '_blank')} className="text-[#26D07C] font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm mt-auto relative z-10 uppercase tracking-wider bg-transparent border-none p-0 cursor-pointer text-left">
                Book Consultation <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
