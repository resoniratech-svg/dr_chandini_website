import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Award, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Symptoms', href: '#symptoms' },
    { name: 'Specialized Care', href: '#services' },
    { name: 'Transplant & Dialysis', href: '#transplant' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF7FC]/98 backdrop-blur-md shadow-sm py-3 border-b border-[#E8DFF2]' 
        : 'bg-[#FAF7FC]/90 backdrop-blur-sm py-4 border-b border-[#E8DFF2]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name (Healthy Kidney Logo) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="h-11 sm:h-12 w-auto flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/logo-healthy-kidney.png"
                alt="Healthy Kidney - Dr. Chandini Kotha"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#26212E] tracking-tight group-hover:text-[#845FA6] transition-colors">
                  Dr. Chandini Kotha
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F5E9CE]/50 text-[#A6823F] border border-[#CCA762]/40">
                  <Award className="w-3 h-3 text-[#CCA762]" />
                  Gold Medalist
                </span>
              </div>
              <p className="text-[11px] text-[#845FA6] font-bold tracking-wide">
                DM Nephrologist • DNB General Medicine
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-[#544D5E] hover:text-[#845FA6] hover:bg-[#F4EEF9] px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs (Orvex Signature Pill Buttons) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919247531304"
              className="flex items-center gap-2 text-xs xl:text-sm font-semibold text-[#845FA6] bg-white hover:bg-[#F4EEF9] px-4 py-2 rounded-full border border-[#E8DFF2] transition-all shadow-sm"
              title="Call Direct Consultation Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#845FA6]" />
              <span>9247531304</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 text-xs xl:text-sm font-semibold text-white bg-[#845FA6] hover:bg-[#6E4990] active:scale-95 px-5 py-2.5 rounded-full shadow-orvex-button hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4 text-[#F5E9CE]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919247531304"
              className="sm:hidden p-2 text-[#845FA6] bg-white border border-[#E8DFF2] rounded-full shadow-sm"
              aria-label="Call Doctor"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#26212E] hover:text-[#845FA6] rounded-xl hover:bg-[#F4EEF9]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7FC]/98 backdrop-blur-xl border-b border-[#E8DFF2] px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="pb-2.5 border-b border-[#E8DFF2] flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5E9CE]/50 text-[#A6823F] border border-[#CCA762]/30">
                <Award className="w-3.5 h-3.5 text-[#CCA762]" />
                Telangana State Gold Medalist (2022)
              </span>
              <span className="text-xs font-bold text-[#845FA6]">Karimnagar</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#26212E] hover:text-[#845FA6] py-2 border-b border-gray-100/50 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#845FA6]" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="tel:+919247531304"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#845FA6] bg-white py-2.5 rounded-xl border border-[#E8DFF2] shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#845FA6]" />
                Call Direct: +91 9247531304
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#845FA6] py-2.5 rounded-xl shadow-orvex-button"
              >
                <Calendar className="w-4 h-4 text-[#F5E9CE]" />
                Request Private Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
