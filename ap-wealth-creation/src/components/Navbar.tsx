import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Plans', 'Testimonials', 'Contact'];

  return (
    <header
      className={`sticky top-0 z-[1000] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#021226]/80 backdrop-blur-[15px] border-b border-white/5 py-4 shadow-lg' 
          : 'bg-transparent py-4 lg:py-6 shadow-none'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[40px] flex items-center justify-between">
        
        {/* Left: Logo Section */}
        <div className="flex-1 flex items-center justify-start">
          <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-2 cursor-pointer group">
            <img src="/logo.png" alt="AP Wealth Logo" className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform" />
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight leading-none mb-0.5">AP Wealth Creation</h1>
              <p className="text-[#26D07C] text-[10px] lg:text-xs font-semibold italic leading-none">Invest Right. Grow Smart.</p>
            </div>
          </a>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="hidden lg:flex flex-none items-center gap-[40px]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-gray-300 hover:text-[#26D07C] transition-colors duration-300 relative group py-2"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#26D07C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Right: Empty space for balance / Mobile toggle */}
        <div className="flex-1 flex justify-end">
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A2540] border-b border-white/10 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-gray-300 hover:text-[#26D07C]"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
