import React from 'react';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021226] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-[#26D07C]/5 blur-[150px] -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-3 mb-6 cursor-pointer group">
              <img src="/logo.png" alt="AP Wealth Logo" className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform" />
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight leading-none mb-1 group-hover:text-[#26D07C] transition-colors">AP Wealth Creation</h2>
                <p className="text-[#26D07C] text-xs font-bold italic leading-none">Invest Right. Grow Smart.</p>
              </div>
            </a>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
              Your trusted partner for disciplined investing, long-term wealth creation, and transparent financial planning.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#26D07C] hover:text-[#021226] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#26D07C] hover:text-[#021226] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#26D07C] hover:text-[#021226] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#26D07C] hover:text-[#021226] transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Plans', 'Testimonials', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 font-medium hover:text-[#26D07C] hover:pl-2 transition-all text-sm flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-extrabold text-lg mb-6 tracking-wide">Services</h3>
            <ul className="space-y-4">
              {['Mutual Funds', 'SIP Planning', 'Insurance', 'Financial Planning'].map((item, idx) => (
                <li key={idx}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 font-medium hover:text-[#26D07C] hover:pl-2 transition-all text-sm flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-extrabold text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#26D07C] mt-1 shrink-0" />
                <span className="text-gray-400 text-sm font-medium leading-relaxed">
                  Corporate office – flat no – 102,<br/>DD Apartment, ashiyana mor,<br/>khajpura, patna -14
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#26D07C] shrink-0" size={18} />
                <a href="tel:+66970168858" className="text-gray-400 text-sm font-medium hover:text-[#26D07C] transition-colors">+66970168858</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#26D07C] shrink-0" size={18} />
                <a href="mailto:Apwealthcreation@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">Apwealthcreation@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/66970168858" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-medium hover:text-[#26D07C] transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-medium text-sm">
            &copy; 2026 AP Wealth Creation. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm font-bold text-gray-500">
            <a href="/privacy" className="hover:text-[#26D07C] transition-colors cursor-pointer">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#26D07C] transition-colors cursor-pointer">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
