import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { API_URL } from '../config';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Mutual Funds',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Construct WhatsApp message
    const messageText = `*New Consultation Inquiry* 📊\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Investment Interest:* ${formData.interest}\n\n*Message:*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/66970168858?text=${encodedMessage}`;
    setRedirectUrl(whatsappUrl);

    // Call the backend in background (fire-and-forget) so it logs if running
    try {
      fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => console.log('Backend not running, redirected directly to WhatsApp.'));
    } catch (error) {
      // Ignore network errors since WhatsApp is primary
    }

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', interest: 'Mutual Funds', message: '' });
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] rounded-full bg-[#26D07C]/5 blur-[120px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Get In <span className="text-[#26D07C]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-medium text-lg max-w-2xl mx-auto"
          >
            Have questions? Our wealth advisors are here to help you navigate your financial journey.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 glass p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'success' && (
                <div className="bg-[#26D07C]/10 border border-[#26D07C]/50 text-[#26D07C] p-5 rounded-xl text-center font-bold text-sm leading-relaxed">
                  Inquiry prepared! Redirecting you to WhatsApp to send your request...
                  <div className="mt-3 pt-3 border-t border-[#26D07C]/20 text-xs font-normal">
                    If you were not automatically redirected,{' '}
                    <a
                      href={redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-[#26D07C] hover:text-[#1db86c] inline-flex items-center gap-1"
                    >
                      click here to open WhatsApp
                    </a>.
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-center font-bold">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all text-base" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required autoComplete="tel" inputMode="tel" className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all text-base" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" inputMode="email" className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all text-base" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Investment Interest</label>
                <div className="relative">
                  <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all appearance-none text-base cursor-pointer">
                    <option value="Mutual Funds" className="bg-[#021226]">Mutual Funds</option>
                    <option value="SIP Planning" className="bg-[#021226]">SIP Planning</option>
                    <option value="Portfolio Management" className="bg-[#021226]">Portfolio Management</option>
                    <option value="Insurance" className="bg-[#021226]">Insurance</option>
                    <option value="Other" className="bg-[#021226]">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all resize-none text-base" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-[#26D07C] text-[#021226] font-bold py-4 rounded-xl hover:bg-[#1db86c] hover:shadow-[0_0_20px_rgba(38,208,124,0.3)] transition-all duration-300 disabled:opacity-50 text-base cursor-pointer">
                {status === 'loading' ? 'Preparing WhatsApp Message...' : 'Submit Inquiry via WhatsApp'}
              </button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <div className="glass p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-white/10">
              <h3 className="text-2xl font-extrabold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="bg-[#26D07C]/10 text-[#26D07C] p-3 rounded-xl mt-1 shadow-inner">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Office</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      AP Wealth Creation<br />
                      Corporate office – flat no – 102,<br />
                      DD Apartment, ashiyana mor,<br />
                      khajpura, patna -14
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-[#26D07C]/10 text-[#26D07C] p-3 rounded-xl shadow-inner">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-gray-400 font-medium">+66970168858</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-[#26D07C]/10 text-[#26D07C] p-3 rounded-xl shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-gray-400 font-medium">Apwealthcreation@gmail.com</p>
                  </div>
                </div>
              </div>

              <button onClick={() => window.open('https://wa.me/66970168858', '_blank')} className="mt-6 sm:mt-10 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all duration-300 cursor-pointer">
                <MessageCircle size={22} /> Chat with us on WhatsApp
              </button>
            </div>

            {/* Real Google Map Embed */}
            <div className="bg-[#021226]/50 rounded-[2rem] h-56 overflow-hidden relative border border-white/10 shadow-2xl group">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=DD%20Apartment%2C%20Ashiana%20More%2C%20Khajpura%2C%20Patna%20800014&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] saturate-[80%] opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <button 
                onClick={() => window.open('https://maps.google.com/?q=DD+Apartment,+Ashiana+More,+Khajpura,+Patna+800014', '_blank')}
                className="absolute bottom-4 right-4 md:hidden bg-[#26D07C] text-[#021226] px-4 py-2 rounded-xl text-xs font-bold shadow-lg hover:bg-[#1db86c] transition-all flex items-center gap-1.5 cursor-pointer z-10"
              >
                <MapPin size={12} /> Open Maps
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
