import React from 'react';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface WhenToConsultProps {
  onOpenBooking: () => void;
}

export const WhenToConsult: React.FC<WhenToConsultProps> = ({ onOpenBooking }) => {
  const criteria = [
    {
      title: 'Persistent Elevated Serum Creatinine',
      desc: 'Any blood report indicating creatinine above normal range, even slightly elevated (e.g. 1.3 - 2.0 mg/dL).',
    },
    {
      title: 'Diabetes for Over 5 Years',
      desc: 'Diabetic kidney disease can progress without symptoms. Annual screening with a nephrologist is critical.',
    },
    {
      title: 'Protein or Blood in Routine Urine Tests',
      desc: 'Trace, 1+, or higher protein/albumin in urine, or microscopic blood detected during a checkup.',
    },
    {
      title: 'Difficult-to-Control High Blood Pressure',
      desc: 'BP that remains high despite taking 2 or more medications, signaling potential renal artery involvement.',
    },
    {
      title: 'Unexplained Swelling in Ankles or Face',
      desc: 'Morning facial puffiness or heavy, swollen legs that leave an indent when pressed (pitting edema).',
    },
    {
      title: 'Seeking a Clear Second Opinion on Dialysis',
      desc: 'Before initiating dialysis, ensure all reversible factors (AKI, dehydration, drug toxicities) have been ruled out.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FAF7FC] via-[#F4EEF9] to-[#FAF7FC] relative border-y border-[#E8DFF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFF2] shadow-orvex-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Image & Guidance */}
            <div className="lg:col-span-5">
              
              {/* Contextual Medical Image - Dr. Chandini Consultation */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFF2] shadow-sm mb-5 group h-64 sm:h-72">
                <img
                  src="/images/consult-card.jpg"
                  alt="Dr. Chandini Kotha - Personalized Kidney Consultation Review"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#845FA6] border border-[#E8DFF2] shadow-sm">
                  Personalized Lab Report Review
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#845FA6] bg-[#F4EEF9] px-3 py-1 rounded-full border border-[#E8DFF2]">
                Patient Consultation Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#26212E] mt-3 leading-snug">
                When Should You Consult a Nephrologist?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#544D5E] leading-relaxed">
                Most kidney conditions do not cause bodily pain in their early stages. Waiting for pain or severe weakness often means discovering disease late.
              </p>

              {/* Warning Notice Box with Warm Champagne Gold styling */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#FAF3E0] border border-[#F5E9CE] text-[#6E4E10] flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-[#CCA762] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  <strong>Important:</strong> If your recent lab report shows an elevated creatinine or low eGFR, do not ignore it. Early intervention preserves kidney life.
                </p>
              </div>

              <div className="mt-5">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#845FA6] hover:bg-[#6E4990] shadow-orvex-button transition-all"
                >
                  <span>Book Early Evaluation</span>
                  <ArrowRight className="w-4 h-4 text-[#F5E9CE]" />
                </button>
              </div>
            </div>

            {/* Right Column: 6 Criteria Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {criteria.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white border border-[#E8DFF2] hover:border-[#845FA6] shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#845FA6] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#26212E] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#544D5E] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
