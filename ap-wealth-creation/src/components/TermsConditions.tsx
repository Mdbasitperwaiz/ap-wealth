import React from 'react';
import { ArrowLeft, FileText, Mail, Phone, MapPin, Globe } from 'lucide-react';

const TermsConditions: React.FC = () => {
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
              <FileText size={36} />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
              <p className="text-gray-400 text-sm mt-1 font-semibold">Last Updated: {currentDate}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 font-medium leading-relaxed">
            <p>
              Welcome to **AP Wealth Creation** ("Company", "we", "our", "us"). By accessing or using{' '}
              <a href="https://apweathcreation.co.in" target="_blank" rel="noopener noreferrer" className="text-[#26D07C] hover:underline font-bold">
                apweathcreation.co.in
              </a>
              , you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our website.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">1.</span> Website Use
              </h2>
              <p className="text-gray-400">
                You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">2.</span> Services
              </h2>
              <p className="text-gray-400">
                AP Wealth Creation provides information about our products, services, and business activities. We reserve the right to modify, suspend, or discontinue any service without prior notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">3.</span> Intellectual Property Rights
              </h2>
              <p className="text-gray-400">
                All content on this website, including text, graphics, logos, images, designs, and other materials, is the property of AP Wealth Creation unless otherwise stated. Unauthorized reproduction, distribution, or use is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">4.</span> User Submissions
              </h2>
              <p className="text-gray-400">
                If you submit inquiries, feedback, or other information through our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>The information must be accurate and lawful.</li>
                <li>You grant us the right to use such information for responding to inquiries and improving our services.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">5.</span> Privacy
              </h2>
              <p className="text-gray-400">
                Your use of this website is also governed by our Privacy Policy. By using the website, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">6.</span> Third-Party Links
              </h2>
              <p className="text-gray-400">
                Our website may contain links to third-party websites for your convenience. We do not endorse or take responsibility for the content, privacy practices, or services of any third-party website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">7.</span> Disclaimer
              </h2>
              <p className="text-gray-400">
                The information provided on this website is for general informational purposes only. While we strive to keep information accurate and up to date, we make no guarantees regarding its completeness, accuracy, or reliability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">8.</span> Limitation of Liability
              </h2>
              <p className="text-gray-400">
                AP Wealth Creation shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">9.</span> Changes to Terms
              </h2>
              <p className="text-gray-400">
                We reserve the right to update or modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting on this page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">10.</span> Governing Law
              </h2>
              <p className="text-gray-400">
                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from these terms shall be subject to the jurisdiction of the courts in India.
              </p>
            </section>

            <section className="space-y-6 border-t border-white/10 pt-8 mt-12">
              <h2 className="text-xl lg:text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="text-[#26D07C]">11.</span> Contact Information
              </h2>
              <p className="text-gray-400">
                For any questions regarding these Terms & Conditions, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <Globe className="text-[#26D07C] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Website</h4>
                    <a href="https://apweathcreation.co.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#26D07C] transition-colors">
                      apweathcreation.co.in
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

export default TermsConditions;
