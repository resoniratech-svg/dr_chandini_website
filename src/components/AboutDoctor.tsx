import React from 'react';
import { Award, GraduationCap, ShieldCheck, HeartHandshake, CheckCircle2, Calendar } from 'lucide-react';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic 1-on-1 Kidney Consultation Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-orvex-card bg-white group">
              <img
                src="/images/dr-chandini-consultation.png"
                alt="Dr. Chandini Kotha explaining kidney anatomy and treatment to a patient"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-white border-t border-[#E8DFF2]">
                <p className="text-xs font-semibold text-[#26212E] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0" />
                  <span>Unhurried 1-on-1 patient education, clear test explanations & diet guidance</span>
                </p>
              </div>
            </div>

            {/* Decorative Gold & Purple Accent Card (Orvex Style) */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-gradient-to-br from-[#845FA6] via-[#754E97] to-[#5C387D] text-white rounded-2xl p-4.5 shadow-xl max-w-xs border border-[#CCA762]/50 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#F5E9CE]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F5E9CE]">Telangana Gold Medalist</p>
                  <p className="text-[11px] text-[#E8DFF2]">Nephrology Excellence (2022)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Clinical Philosophy */}
          <div className="lg:col-span-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EEF9] text-[#845FA6] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E8DFF2]">
              <GraduationCap className="w-3.5 h-3.5 text-[#845FA6]" />
              About Dr. Chandini Kotha
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#26212E] leading-tight">
              <span className="font-bold">A Personal Approach to</span> <br />
              <span className="italic text-[#845FA6]">Complex Kidney Health</span>
            </h2>

            <p className="mt-4 text-base text-[#544D5E] leading-relaxed">
              Dr. Chandini Kotha is a distinguished Nephrologist and Renal Transplant Physician practicing in Karimnagar, Telangana. With dual post-graduate degrees in <strong className="text-[#26212E]">DNB General Medicine</strong> and <strong className="text-[#845FA6]">DM Nephrology</strong>, she brings a comprehensive, systemic perspective to kidney treatment.
            </p>

            <p className="mt-3 text-sm text-[#7E768A] leading-relaxed">
              Having been awarded the prestigious <strong>Telangana State Gold Medal in 2022</strong> as well as the nationwide <strong>Torrent Young Scholar Award</strong>, Dr. Chandini is recognized for rigorous clinical acumen and deep academic commitment.
            </p>

            {/* Core Pillars */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFF2] shadow-orvex-card">
                <div className="flex items-center gap-2 font-bold text-[#26212E] text-sm mb-1.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#845FA6]" />
                  Dual Medical Foundation
                </div>
                <p className="text-xs text-[#7E768A] leading-relaxed">
                  Her DNB in General Medicine ensures diabetes, heart health, and blood pressure are treated in complete harmony with the kidneys.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFF2] shadow-orvex-card">
                <div className="flex items-center gap-2 font-bold text-[#26212E] text-sm mb-1.5">
                  <HeartHandshake className="w-4.5 h-4.5 text-[#845FA6]" />
                  Dedicated 1-on-1 Care
                </div>
                <p className="text-xs text-[#7E768A] leading-relaxed">
                  In her private practice, consultations are never rushed. Every patient receives direct attention and customized dietary protocols.
                </p>
              </div>
            </div>

            {/* Verified Qualifications List */}
            <div className="mt-6 pt-5 border-t border-[#E8DFF2]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#26212E] mb-3">
                Key Credentials & Distinctions:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26212E] font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CCA762] shrink-0"></span>
                  <span><strong>DM Nephrology</strong> (Super-Speciality)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#845FA6] shrink-0"></span>
                  <span><strong>DNB General Medicine</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CCA762] shrink-0"></span>
                  <span><strong>Telangana State Gold Medal (2022)</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#845FA6] shrink-0"></span>
                  <span><strong>Torrent Young Scholar Award</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#845FA6] shrink-0"></span>
                  <span>Renal Transplant Physician</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#845FA6] shrink-0"></span>
                  <span>Direct Private Practice in Karimnagar</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#845FA6] hover:bg-[#6E4990] shadow-orvex-button transition-all"
              >
                <Calendar className="w-4 h-4 text-[#F5E9CE]" />
                <span>Schedule a 1-on-1 Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
