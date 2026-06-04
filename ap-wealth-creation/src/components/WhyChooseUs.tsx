import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, ShieldCheck, UserCheck, BarChart3, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    { title: 'SIP Planning', desc: 'Smart investment planning', icon: <TrendingUp size={24} /> },
    { title: 'Wealth Management', desc: 'Long-term financial growth', icon: <Wallet size={24} /> },
    { title: 'Insurance Solutions', desc: 'Protect your future', icon: <ShieldCheck size={24} /> },
    { title: 'Expert Guidance', desc: 'Professional advice', icon: <UserCheck size={24} /> },
    { title: 'Portfolio Analysis', desc: 'Data driven decisions', icon: <BarChart3 size={24} /> },
    { title: 'Fast Support', desc: 'Quick customer assistance', icon: <Zap size={24} /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] rounded-full bg-[#0F763B]/10 blur-[120px] -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Why Choose <span className="text-[#26D07C]">AP Wealth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-medium text-lg"
          >
            Experience the difference with our proven, research-driven approach to wealth creation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[20px] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(38,208,124,0.15)] hover:border-[#26D07C]/40 transition-all duration-300 h-full flex flex-col group"
            >
              <div className="bg-[#26D07C]/10 text-[#26D07C] w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#26D07C] group-hover:text-[#021226] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
