import React from 'react';
import { AlertCircle, Flame, Droplets, Activity, Clock, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SymptomsSectionProps {
  onOpenBooking: () => void;
}

export const SymptomsSection: React.FC<SymptomsSectionProps> = ({ onOpenBooking }) => {
  const symptoms = [
    {
      icon: Activity,
      title: 'Elevated Creatinine or Low eGFR',
      tag: 'Lab Indicator',
      desc: 'Routine blood test showing creatinine > 1.2 mg/dL. Often completely silent with no early physical pain.',
      tagColor: 'bg-[#F4EEF9] text-[#845FA6] border-[#E8DFF2]',
      iconColor: 'bg-[#FAF7FC] text-[#845FA6] border-[#E8DFF2]',
    },
    {
      icon: Droplets,
      title: 'Swelling (Edema) in Feet & Face',
      tag: 'Fluid Retention',
      desc: 'Morning eye puffiness or swollen ankles that leave an indent when pressed (fluid retention).',
      tagColor: 'bg-[#F4EEF9] text-[#845FA6] border-[#E8DFF2]',
      iconColor: 'bg-[#FAF7FC] text-[#845FA6] border-[#E8DFF2]',
    },
    {
      icon: Droplets,
      title: 'Foamy, Bubbly, or Dark Urine',
      tag: 'Proteinuria Warning',
      desc: 'Frothy urine like beaten eggs (indicating protein leakage) or pink/cola-colored blood in urine.',
      tagColor: 'bg-[#F4EEF9] text-[#845FA6] border-[#E8DFF2]',
      iconColor: 'bg-[#FAF7FC] text-[#845FA6] border-[#E8DFF2]',
    },
    {
      icon: Clock,
      title: 'Frequent Night Urination',
      tag: 'Bladder & Kidney Rhythm',
      desc: 'Waking up 3+ times at night to urinate, or noticing a sudden drop in daily urine output.',
      tagColor: 'bg-[#F4EEF9] text-[#845FA6] border-[#E8DFF2]',
      iconColor: 'bg-[#FAF7FC] text-[#845FA6] border-[#E8DFF2]',
    },
    {
      icon: Flame,
      title: 'Burning Sensation or Pelvic Pain',
      tag: 'Urinary Distress',
      desc: 'Persistent burning, pain, or pressure in lower abdomen/back during or after urination.',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconColor: 'bg-rose-50 text-rose-600 border-rose-200',
    },
    {
      icon: ShieldAlert,
      title: 'Uncontrolled BP & Chronic Fatigue',
      tag: 'Systemic Sign',
      desc: 'Blood pressure that stays high despite medication, accompanied by persistent exhaustion and poor appetite.',
      tagColor: 'bg-[#FAF3E0] text-[#7A5B1E] border-[#F5E9CE]',
      iconColor: 'bg-[#FAF3E0] text-[#CCA762] border-[#F5E9CE]',
    },
  ];

  return (
    <section id="symptoms" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7FC] via-[#F4EEF9]/50 to-[#FAF7FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EEF9] text-[#845FA6] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DFF2]">
            <AlertCircle className="w-3.5 h-3.5 text-[#845FA6]" />
            Early Warning Signs
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#26212E]">
            Don't Ignore What Your Body Is Trying to Tell You
          </h2>
          <p className="mt-3 text-base text-[#544D5E]">
            Kidney conditions are often called <em className="text-[#845FA6] font-medium">silent illnesses</em> because they can progress without obvious pain. Timely evaluation protects remaining kidney filters.
          </p>
        </div>

        {/* 2-Column Split: Medical Visual + Interactive Symptom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-5 border border-[#E8DFF2] shadow-orvex-card sticky top-28">
              
              {/* Image Container with Visual Anatomy */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFF2] bg-[#FAF7FC] shadow-inner group p-1">
                <img
                  src="/images/kidney-health-board.jpg"
                  alt="Dr. Chandini Kotha explaining Kidney Health and Symptoms whiteboard to patient"
                  className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Visual Pill Overlay */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E8DFF2] shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#845FA6] animate-pulse"></span>
                  <span className="text-xs font-bold text-[#26212E]">Recognize Signs Early</span>
                </div>
              </div>

              {/* Informational Guidance */}
              <div className="mt-5 px-2">
                <h4 className="font-serif font-bold text-lg text-[#26212E] mb-1.5">
                  Kidneys Have No Pain Receptors Inside
                </h4>
                <p className="text-xs text-[#544D5E] leading-relaxed mb-4">
                  Unless there is a stone or infection, kidney disease does not usually cause sharp pain. Damage often shows up first as <strong>swelling, fatigue, or abnormal blood & urine lab tests</strong>.
                </p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#26212E]">
                    <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0" />
                    <span>Early detection halts disease progression</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#26212E]">
                    <CheckCircle2 className="w-4 h-4 text-[#845FA6] shrink-0" />
                    <span>Specialized diet & medication adjustments</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#845FA6] hover:bg-[#6E4990] shadow-orvex-button transition-all flex items-center justify-center gap-2"
                >
                  <span>Review Your Symptoms with Dr. Chandini</span>
                  <ArrowRight className="w-4 h-4 text-[#F5E9CE]" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: 6 Clear Symptom Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {symptoms.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-[#E8DFF2] shadow-orvex-card hover:border-[#845FA6] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-11 h-11 rounded-xl ${item.iconColor} border flex items-center justify-center shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#26212E] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#544D5E] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8DFF2]/60 text-[11px] font-semibold text-[#845FA6] flex items-center gap-1.5">
                    <span>Clinical indicator</span>
                    <span className="text-[#CCA762]">•</span>
                    <span className="text-[#7E768A]">Requires KFT & Urine check</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
