import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/66970168858"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#020C1B] px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Chat with us
        {/* Triangle pointer */}
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-[6px] border-transparent border-l-white"></div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
