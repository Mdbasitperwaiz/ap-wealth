import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Plans: React.FC = () => {
  const plans = [
    {
      name: 'BEGINNER PLAN',
      range: '₹50,000 to ₹5,00,000',
      returns: '2-3%',
      features: [
        'Diversified portfolio',
        'Quarterly review',
        'Insurance coverage',
        'Email support',
        'Investment resources'
      ],
      popular: false
    },
    {
      name: 'GROWTH PLAN',
      range: '₹5,00,000 to ₹20,00,000',
      returns: '3–6%',
      features: [
        'Advanced strategies',
        'Monthly review',
        'Insurance planning',
        'Dedicated manager',
        'Tax optimization',
        'LAS facility'
      ],
      popular: true
    },
    {
      name: 'PREMIUM WEALTH',
      range: '₹25,00,000 to 1 Cr',
      returns: '2-6%',
      features: [
        'Premium portfolio management',
        'Weekly tracking',
        'VIP solutions',
        'Personal advisor',
        '24/7 support',
        'Exclusive opportunities'
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] rounded-full bg-[#26D07C]/5 blur-[120px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Investment <span className="text-[#26D07C]">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-medium text-lg max-w-2xl mx-auto"
          >
            Choose the perfect wealth creation plan tailored to your financial goals and portfolio size.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-[2rem] p-8 flex flex-col h-full shadow-lg hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(38,208,124,0.15)] transition-all duration-500 border ${
                plan.popular 
                  ? 'border-[#26D07C]/50 md:scale-105 z-10 bg-[#0A2540] shadow-[0_0_30px_rgba(38,208,124,0.15)]' 
                  : 'border-white/10 glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#26D07C] text-[#021226] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 mt-4">
                <h3 className={`text-sm tracking-widest font-bold mb-4 uppercase ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>{plan.name}</h3>
                <div className={`text-2xl lg:text-3xl font-extrabold mb-4 ${plan.popular ? 'text-white' : 'text-white'}`}>{plan.range}</div>
                <div className={`text-sm font-bold py-1.5 px-4 rounded-full inline-block border ${plan.popular ? 'border-[#26D07C]/30 bg-[#26D07C]/10 text-[#26D07C]' : 'border-white/10 bg-white/5 text-gray-300'}`}>
                  Expected Returns: {plan.returns}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-[#26D07C]/20 text-[#26D07C]' : 'bg-white/10 text-gray-300'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium ${plan.popular ? 'text-gray-200' : 'text-gray-400'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.open('https://wa.me/66970168858', '_blank')} className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-[#26D07C] text-[#021226] hover:bg-[#1db86c] shadow-[0_0_20px_rgba(38,208,124,0.3)]' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
