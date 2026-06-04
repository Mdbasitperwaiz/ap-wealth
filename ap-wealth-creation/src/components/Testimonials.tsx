import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rohit Sharma',
      role: 'Software Engineer',
      content: 'AP Wealth helped me create a strong SIP strategy and long-term financial plan. Their platform is incredibly intuitive and their advice is spot on.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Priya Patel',
      role: 'Business Owner',
      content: 'The personalized wealth advisory service is exceptional. I highly recommend their portfolio management to any serious investor.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Amit Kumar',
      role: 'Doctor',
      content: 'Transparent process and excellent returns. They truly care about long-term financial growth and risk management.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0A2540]/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Trusted By <span className="text-[#26D07C]">Thousands</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass p-10 lg:p-14 rounded-3xl absolute inset-0 w-full"
              >
                <Quote className="text-[#26D07C]/20 w-24 h-24 absolute top-6 right-10 -z-10 rotate-180" />
                
                <div className="flex text-[#F2C94C] mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" className="mr-1" />
                  ))}
                </div>
                
                <p className="text-xl lg:text-3xl text-white italic mb-10 leading-relaxed font-medium drop-shadow-sm">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#26D07C]"
                  />
                  <div>
                    <h4 className="text-white font-extrabold text-lg">{testimonials[currentIndex].name}</h4>
                    <div className="text-sm font-bold text-[#26D07C] uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={handlePrev} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#26D07C] hover:text-[#021226] transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#26D07C] hover:text-[#021226] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
