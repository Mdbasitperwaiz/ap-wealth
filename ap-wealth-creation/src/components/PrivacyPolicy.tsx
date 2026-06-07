import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#021226] text-white selection:bg-[#26D07C] selection:text-[#021226]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#26D07C]/5 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#0F763B]/10 blur-[150px]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#021226]/80 backdrop-blur-[15px] border-b border-white/5 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="AP Wealth Logo" className="h-8 w-auto" />
            <span className="font-extrabold text-xs tracking-widest text-[#26D07C] uppercase">AP Wealth</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="glass rounded-[2.5rem] p-8 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Accent light decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#26D07C]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-8">
            <div className="bg-[#26D07C]/10 text-[#26D07C] p-4 rounded-2xl shadow-inner">
              <ShieldCheck size={36} />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
              <p className="text-gray-400 text-sm mt-1 font-semibold">Last Updated: {currentDate}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 font-medium leading-relaxed">
            <p>
              At **AP Wealth Creation**, we value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and safeguard your data when you visit{' '}
              <a href="https://apwealthcreation.co.in" target="_blank" rel="noopener noreferrer" className="text-[#26D07C] hover:underline font-bold">
                apwealthcreation.co.in
              </a>
              .
            </p>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">1.</span> Information We Collect
              </h2>
              <p className="text-gray-400">
                We collect personal information that you voluntarily provide to us when you fill out contact forms, request a consultation, or interact with our services on our website. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Name</li>
                <li>Phone Number / WhatsApp Number</li>
                <li>Email Address</li>
                <li>Financial interest preferences (e.g., SIP, Mutual Funds)</li>
                <li>Any messages or details provided in inquiry text areas</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">2.</span> How We Use Your Information
              </h2>
              <p className="text-gray-400">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>To contact you regarding your requested wealth management consultation.</li>
                <li>To address inquiries and provide financial product options tailored to your needs.</li>
                <li>To improve our website layout, customer service channels, and overall client experience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">3.</span> Sharing of Information
              </h2>
              <p className="text-gray-400">
                We respect your confidentiality. We do not sell, rent, trade, or share your personal details with third-party service providers or third parties for promotional or marketing purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">4.</span> Cookies & Analytics
              </h2>
              <p className="text-gray-400">
                We may use basic cookies or tracking tools to analyze general web traffic statistics and page performance. This helps us ensure that our website remains responsive and optimized for mobile and desktop viewports.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">5.</span> Security
              </h2>
              <p className="text-gray-400">
                We take standard organizational and technical measures to secure your personal data. However, please remember that no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-6 border-t border-white/10 pt-8 mt-12">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">6.</span> Contact Us
              </h2>
              <p className="text-gray-400">
                If you have any questions or concerns about our Privacy Policy, please reach out to us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <Globe className="text-[#26D07C] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Website</h4>
                    <a href="https://apwealthcreation.co.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#26D07C] transition-colors">
                      apwealthcreation.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <Mail className="text-[#26D07C] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Email</h4>
                    <a href="mailto:Apwealthcreation@gmail.com" className="text-gray-400 text-sm hover:text-[#26D07C] transition-colors">
                      Apwealthcreation@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <Phone className="text-[#26D07C] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Phone</h4>
                    <a href="tel:+66970168858" className="text-gray-400 text-sm hover:text-[#26D07C] transition-colors">
                      +66970168858
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <MapPin className="text-[#26D07C] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      AP Wealth Creation<br />
                      Corporate office – flat no – 102,<br />
                      DD Apartment, ashiyana mor,<br />
                      khajpura, patna -14
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm font-semibold">
        &copy; {new Date().getFullYear()} AP Wealth Creation. All Rights Reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
