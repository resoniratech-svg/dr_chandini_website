import React from 'react';
import { HeartHandshake, Shield, HelpCircle, CheckCircle2, Phone, Calendar, ShieldCheck } from 'lucide-react';

interface TransplantDialysisSectionProps {
  onOpenBooking: () => void;
}

export const TransplantDialysisSection: React.FC<TransplantDialysisSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="transplant" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F4EEF9]/30 to-[#FAF7FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EEF9] text-[#845FA6] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E8DFF2]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#845FA6]" />
            Advanced Renal Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#26212E] leading-tight">
            <span className="font-bold">Renal Transplant &</span> <br />
            <span className="italic text-[#845FA6]">Honest Dialysis Guidance</span>
          </h2>
          <p className="mt-3 text-base text-[#544D5E]">
            Decisions surrounding advanced kidney care can be overwhelming. Dr. Chandini Kotha provides objective, patient-first counsel, empowering families to make informed, confident choices.
          </p>
        </div>

        {/* Visual Protection Banner with Shield Graphic */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFF2] shadow-orvex-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Protective Kidney Shield Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFF2] shadow-sm bg-gradient-to-b from-[#FAF7FC] to-[#F4EEF9] p-3 max-w-xs sm:max-w-sm group">
                <img
                  src="/images/kidney-shield.png"
                  alt="Kidneys Protected by Shield - Renal Health"
                  className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8DFF2] shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#845FA6]" />
                  <span className="text-[11px] font-bold text-[#26212E]">Graft & Organ Shield</span>
                </div>
              </div>
            </div>

            {/* Right: Key Philosophy */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#845FA6] bg-[#F4EEF9] px-3 py-1 rounded-full border border-[#E8DFF2]">
                Kidney Protection Philosophy
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#26212E] mt-3 mb-2">
                Shielding Renal Health & Delaying Progression
              </h3>
              <p className="text-xs sm:text-sm text-[#544D5E] leading-relaxed mb-4">
                Whether you are exploring living donor transplantation or navigating hemodialysis, the central goal remains constant: protecting your cardiovascular health, maintaining your independence, and maximizing quality of life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#26212E] font-medium">
                <div className="p-3 rounded-xl bg-[#FAF7FC] border border-[#E8DFF2] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Immunosuppressive Balance</p>
                    <p className="text-[11px] text-[#7E768A]">Preventing organ rejection while guarding against infections.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7FC] border border-[#E8DFF2] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Timely AV Fistula Planning</p>
                    <p className="text-[11px] text-[#7E768A]">Creating natural vascular access to avoid painful neck lines.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Detailed Clinical Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Kidney Transplant Consultation Featuring Real Dr. Chandini */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#E8DFF2] shadow-orvex-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              {/* Doctor Transplant Photo (Framed with Dr. Chandini's Face & Model in Full View) */}
              <div className="h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-6 relative border border-[#E8DFF2]">
                <img
                  src="/images/transplant-card.jpg"
                  alt="Dr. Chandini Kotha - Renal Transplant Physician"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 z-20 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#845FA6] border border-[#E8DFF2] shadow-sm">
                  Dr. Chandini Kotha • Transplant Physician
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2]">
                  Renal Transplant Care
                </span>
                <Shield className="w-5 h-5 text-[#CCA762]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#26212E] mb-3">
                Kidney Transplant Evaluation & Post-Op Management
              </h3>

              <p className="text-xs sm:text-sm text-[#544D5E] leading-relaxed mb-5">
                A kidney transplant offers freedom and improved quality of life for eligible advanced kidney disease patients. As a qualified Renal Transplant Physician, Dr. Chandini guides you through every milestone:
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#26212E]">Pre-Transplant Recipient Workup</h5>
                    <p className="text-[11px] text-[#7E768A]">Complete cardiovascular, immunological, and organ fitness checks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#26212E]">Donor Evaluation & Compatibility</h5>
                    <p className="text-[11px] text-[#7E768A]">HLA cross-matching, ethical clearance guidance, and donor safety assessment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#26212E]">Lifelong Immunosuppressive Monitoring</h5>
                    <p className="text-[11px] text-[#7E768A]">Fine-tuning anti-rejection medications while minimizing infection risks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DFF2]">
              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-[#845FA6] bg-[#FAF7FC] hover:bg-[#F4EEF9] border border-[#E8DFF2] transition-all"
              >
                <Calendar className="w-4 h-4 text-[#845FA6]" />
                <span>Book Transplant Consultation</span>
              </button>
            </div>
          </div>

          {/* Card 2: Honest Dialysis Counseling & Second Opinions */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#E8DFF2] shadow-orvex-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              {/* Dialysis Image Banner */}
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 bg-[#FAF7FC] relative border border-[#E8DFF2]">
                <img
                  src="/images/service-dialysis.jpg"
                  alt="Dialysis Consultation & Planning"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#845FA6] border border-[#E8DFF2] shadow-sm">
                  Objective 2nd Opinions
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2]">
                  Second Opinions & Planning
                </span>
                <HelpCircle className="w-5 h-5 text-[#845FA6]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#26212E] mb-3">
                Dialysis Evaluation & Second Opinions
              </h3>

              <p className="text-xs sm:text-sm text-[#544D5E] leading-relaxed mb-5">
                Being told that you or your loved one needs dialysis can be frightening. Dr. Chandini provides unbiased, second opinions to determine whether dialysis is truly indicated or if medical preservation can be continued safely.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#26212E]">Is Dialysis Immediately Necessary?</h5>
                    <p className="text-[11px] text-[#7E768A]">Distinguishing reversible Acute Kidney Injury from permanent end-stage disease.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#26212E]">Hemodialysis vs. Peritoneal (CAPD)</h5>
                    <p className="text-[11px] text-[#7E768A]">Selecting the modality that fits the patient’s lifestyle, home setting, and cardiac health.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#26212E]">Vascular Access Planning (AV Fistula)</h5>
                    <p className="text-[11px] text-[#7E768A]">Timely fistula creation to avoid painful temporary neck catheters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DFF2]">
              <a
                href="tel:+919247531304"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-[#845FA6] hover:bg-[#6E4990] shadow-orvex-button transition-all"
              >
                <Phone className="w-4 h-4 text-[#F5E9CE]" />
                <span>Call for Dialysis Guidance: 9247531304</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
