import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const SipCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  // SIP Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvestment = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns)
    };
  };

  const results = calculateSIP();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] rounded-full bg-[#26D07C]/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#26D07C]/30 bg-[#26D07C]/10 text-[#26D07C] text-sm font-bold mb-6 tracking-wide uppercase"
          >
            <Calculator size={16} /> SIP Calculator
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Calculate Your <span className="text-[#26D07C]">Wealth</span>
          </motion.h2>
        </div>

        <div className="glass p-8 lg:p-12 rounded-[2rem] max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Inputs */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-bold">Monthly Investment</label>
                <span className="text-[#26D07C] font-extrabold bg-[#021226] px-3 py-1 rounded-lg">
                  {formatCurrency(monthlyInvestment)}
                </span>
              </div>
              <input 
                type="range" min="500" max="100000" step="500" 
                value={monthlyInvestment} 
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#26D07C]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-bold">Expected Return Rate (p.a)</label>
                <span className="text-[#26D07C] font-extrabold bg-[#021226] px-3 py-1 rounded-lg">
                  {expectedReturn}%
                </span>
              </div>
              <input 
                type="range" min="1" max="30" step="1" 
                value={expectedReturn} 
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#26D07C]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-bold">Time Period</label>
                <span className="text-[#26D07C] font-extrabold bg-[#021226] px-3 py-1 rounded-lg">
                  {years} Years
                </span>
              </div>
              <input 
                type="range" min="1" max="40" step="1" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#26D07C]"
              />
            </div>
          </div>

          {/* Results Visual */}
          <div className="lg:w-1/2 bg-[#021226]/50 rounded-3xl p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <TrendingUp size={120} />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-gray-400 font-semibold mb-1">Total Invested Amount</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(results.totalInvestment)}</p>
              </div>
              
              <div>
                <p className="text-gray-400 font-semibold mb-1">Estimated Returns</p>
                <p className="text-2xl font-bold text-[#26D07C]">{formatCurrency(results.estimatedReturns)}</p>
              </div>
              
              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-gray-400 font-bold uppercase tracking-widest mb-2 text-sm">Total Future Value</p>
                <p className="text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(38,208,124,0.3)]">
                  {formatCurrency(results.futureValue)}
                </p>
              </div>
            </div>
            
            {/* Visual Bar representation */}
            <div className="mt-10 h-4 w-full flex rounded-full overflow-hidden">
              <div 
                className="bg-white/20 h-full transition-all duration-500" 
                style={{ width: `${(results.totalInvestment / results.futureValue) * 100}%` }}
                title="Invested Amount"
              ></div>
              <div 
                className="bg-[#26D07C] h-full transition-all duration-500" 
                style={{ width: `${(results.estimatedReturns / results.futureValue) * 100}%` }}
                title="Estimated Returns"
              ></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-gray-500 mt-3 px-1 uppercase">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white/20"></span> Invested</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#26D07C]"></span> Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SipCalculator;
