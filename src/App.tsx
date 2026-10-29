import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { SymptomsSection } from './components/SymptomsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutDoctor } from './components/AboutDoctor';
import { TransplantDialysisSection } from './components/TransplantDialysisSection';
import { WhenToConsult } from './components/WhenToConsult';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeService, setActiveService] = useState('Chronic Kidney Disease (CKD)');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setActiveService(service);
    }
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setActiveService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-lavender-50 flex flex-col selection:bg-plum-100 selection:text-plum-900">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trust Badges */}
        <TrustBanner />

        {/* Symptoms Section ("Don't ignore signs...") */}
        <SymptomsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Core Clinical Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* About Dr. Chandini (1-on-1 Consultation) */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* Transplant & Dialysis Second Opinions */}
        <TransplantDialysisSection onOpenBooking={() => handleOpenBooking('Kidney Transplant Consultation')} />

        {/* When to Consult Guide */}
        <WhenToConsult onOpenBooking={() => handleOpenBooking()} />

        {/* Patient FAQs */}
        <FaqSection />

        {/* Direct Appointment Contact Desk */}
        <ContactSection initialService={activeService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Bar (Call | WhatsApp | Book) */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={activeService}
      />
    </div>
  );
};

export default App;
