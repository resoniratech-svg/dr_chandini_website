import React from 'react';
import { Phone, MessageCircle, MapPin, Award, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#775299] text-white pt-14 pb-24 lg:pb-14 relative border-t-2 border-[#CCA762]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-sm border border-[#CCA762] shrink-0">
                <img
                  src="/images/logo-healthy-kidney.png"
                  alt="Healthy Kidney - Dr. Chandini Kotha"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Dr. Chandini Kotha</h3>
                <p className="text-xs text-[#F5E9CE] font-bold tracking-wide">
                  DM Nephrologist • DNB General Medicine
                </p>
              </div>
            </div>

            <p className="text-xs text-white/90 leading-relaxed max-w-sm mb-4">
              Telangana State Gold Medalist (2022) and Renal Transplant Physician dedicated to evidence-based, compassionate kidney care in Karimnagar.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#F5E9CE] px-3.5 py-1.5 rounded-full bg-white/10 border border-[#CCA762]/50 shadow-sm">
              <Award className="w-4 h-4 text-[#F5E9CE]" />
              <span className="font-medium">Telangana State Gold Medalist | Torrent Scholar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5E9CE] mb-4">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs text-white/90">
              <li>
                <a href="#services" className="hover:text-[#F5E9CE] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5E9CE]"></span>
                  <span>Chronic Kidney Disease (CKD)</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5E9CE] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5E9CE]"></span>
                  <span>High Creatinine Evaluation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5E9CE] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5E9CE]"></span>
                  <span>Diabetic Nephropathy</span>
                </a>
              </li>
              <li>
                <a href="#transplant" className="hover:text-[#F5E9CE] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5E9CE]"></span>
                  <span>Renal Transplant Guidance</span>
                </a>
              </li>
              <li>
                <a href="#transplant" className="hover:text-[#F5E9CE] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5E9CE]"></span>
                  <span>Dialysis Second Opinions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5E9CE] mb-4">
              Direct Practice Desk
            </h4>
            
            <div className="space-y-3.5 text-xs text-white/90">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+919247531304" className="hover:text-[#F5E9CE] font-bold text-sm text-white">
                  +91 9247531304
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="https://wa.me/919247531304?text=Hello%20Dr.%20Chandini%20Kotha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#F5E9CE]"
                >
                  WhatsApp: +91 9247531304
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 leading-relaxed">
                  Karimnagar, Telangana — Private Practice Consultations
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 px-3.5 py-2 rounded-full transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Orvex Signature Solid Bottom Strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/80 gap-3">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#F5E9CE]">
            <span>drchandininephro.com</span>
            <span>•</span>
            <span>+91 9247531304</span>
            <span>•</span>
            <span>Karimnagar, Telangana</span>
          </div>
          <p className="text-[11px] text-white/70">
            © {new Date().getFullYear()} Dr. Chandini Kotha. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
