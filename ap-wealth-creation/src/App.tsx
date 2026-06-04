import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustPartners from './components/TrustPartners';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import SipCalculator from './components/SipCalculator';
import Contact from './components/Contact';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminDashboard from './components/AdminDashboard';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  // Simple routing for the admin dashboard and legal pages
  if (window.location.pathname === '/admin') {
    return <AdminDashboard />;
  }

  if (window.location.pathname === '/terms' || window.location.pathname === '/terms-and-conditions') {
    return <TermsConditions />;
  }

  if (window.location.pathname === '/privacy' || window.location.pathname === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  return (
    <div className="min-h-screen font-sans selection:bg-[#26D07C] selection:text-[#021226]">
      <Navbar />
      <main>
        <Hero />
        <TrustPartners />
        <About />
        <WhyChooseUs />
        <Services />
        <Statistics />
        <Plans />
        <Testimonials />
        <SipCalculator />
        <Contact />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
