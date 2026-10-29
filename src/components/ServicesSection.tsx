import React from 'react';
import { 
  HeartHandshake, 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  Zap, 
  HelpCircle, 
  Sparkles, 
  ArrowUpRight,
  Filter,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { KidneyBackground } from './KidneyBackground';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'ckd',
      title: 'Chronic Kidney Disease (CKD)',
      icon: Activity,
      image: '/images/service-ckd.jpg',
      tag: 'Disease Staging',
      summary: 'Timely evaluation, disease staging, and personalized kidney preservation therapy.',
      keyFocus: ['eGFR Monitoring', 'Dietary Guidance', 'Slowing Progression', 'Electrolyte Balance']
    },
    {
      id: 'creatinine',
      title: 'High Creatinine & eGFR',
      icon: Filter,
      image: '/images/service-creatinine.jpg',
      tag: 'Lab Root Cause',
      summary: 'Detailed root-cause analysis. High creatinine does not always mean permanent kidney failure.',
      keyFocus: ['Root Cause Analysis', 'Medication Review', 'Reversibility Check', 'Follow-up Protocol']
    },
    {
      id: 'diabetic',
      title: 'Diabetic Kidney Disease',
      icon: Zap,
      image: '/images/service-diabetes.jpg',
      tag: 'Sugar & Renal Care',
      summary: 'Specialized nephrological protection for individuals living with diabetes.',
      keyFocus: ['Microalbuminuria Test', 'Glycemic Optimization', 'Renoprotective Meds', 'Routine Screening']
    },
    {
      id: 'hypertension',
      title: 'Hypertension & Kidney Health',
      icon: Stethoscope,
      image: '/images/service-hypertension.jpg',
      tag: 'BP & Nephrons',
      summary: 'Evaluation and management of resistant or kidney-induced high blood pressure.',
      keyFocus: ['Resistant BP Control', 'Renal Artery Health', 'Cardio-Renal Protection', 'Lifestyle Planning']
    },
    {
      id: 'aki',
      title: 'Acute Kidney Injury (AKI)',
      icon: ShieldCheck,
      image: '/images/service-aki.jpg',
      tag: 'Emergency Recovery',
      summary: 'Rapid evaluation and aggressive reversal of sudden drops in renal function.',
      keyFocus: ['Emergency Reversal', 'Fluid Management', 'Toxin Clearance', 'Complete Recovery']
    },
    {
      id: 'dialysis',
      title: 'Dialysis Guidance & Planning',
      icon: HelpCircle,
      image: '/images/service-dialysis.jpg',
      tag: 'Objective 2nd Opinion',
      summary: 'Objective counseling on hemodialysis, peritoneal dialysis (CAPD), and vascular access.',
      keyFocus: ['Honest Second Opinions', 'Hemodialysis vs CAPD', 'AV Fistula Guidance', 'Quality of Life']
    },
    {
      id: 'transplant',
      title: 'Kidney Transplant Care',
      icon: HeartHandshake,
      image: '/images/service-transplant.jpg',
      tag: 'Transplant Physician',
      summary: 'Specialist pre-transplant workup, donor evaluation, and long-term post-transplant care.',
      keyFocus: ['Pre-Transplant Workup', 'Donor Compatibility', 'Immunosuppression Care', 'Rejection Prevention']
    },
    {
      id: 'proteinuria',
      title: 'Protein in Urine & Glomerular',
      icon: Sparkles,
      image: '/images/service-proteinuria.jpg',
      tag: 'Nephrotic Evaluation',
      summary: 'Diagnostic workup for foamy urine, swelling, hematuria, and nephrotic syndromes.',
      keyFocus: ['24-Hr Urine Protein', 'Glomerulonephritis', 'Swelling (Edema) Control', 'Immune Therapies']
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 bg-gradient-to-b from-[#FAF7FC] via-[#F4EEF9]/40 to-[#FAF7FC] relative overflow-hidden">
      {/* 🫘 Kidney Care & Protection Visual Background */}
      <KidneyBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EEF9] text-[#845FA6] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E8DFF2]">
              <Stethoscope className="w-3.5 h-3.5 text-[#845FA6]" />
              Comprehensive Clinical Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-black">
              Specialized Kidney Care & Consultation
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black font-medium">
              Dr. Chandini Kotha delivers evidence-based nephrology evaluations, blending deep general medicine expertise with advanced kidney sub-specialization.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-[#544D5E] bg-[#FAF7FC] border border-[#E8DFF2] px-3.5 py-2 rounded-xl">
            <span className="font-bold text-[#845FA6]">Private Consultations:</span> In-person in Karimnagar
          </div>
        </div>

        {/* Spotlight Visual Feature Banner with 3D Kidneys Image */}
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-[#26212E] via-[#38264A] to-[#26212E] text-white p-6 sm:p-10 shadow-elevated border border-[#845FA6]/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#CCA762]/40 text-[#F5E9CE] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#CCA762]" />
                <span>Advanced Renal Science</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Preserving Kidney Function at Every Stage
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#E8DFF2] leading-relaxed max-w-xl">
                Every kidney contains approximately one million microscopic filtering units (nephrons). Once lost, nephrons cannot be regenerated. Dr. Chandini's clinical protocols focus on shielding remaining filters, optimizing cardiovascular balance, and avoiding unnecessary invasive procedures.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#E8DFF2]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CCA762] shrink-0" />
                  <span>Precision Creatinine & eGFR Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CCA762] shrink-0" />
                  <span>Targeted Diabetic Renal Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CCA762] shrink-0" />
                  <span>Glomerular Disease & Proteinuria Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CCA762] shrink-0" />
                  <span>Renal Replacement & Transplant Guidance</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => onSelectService('Chronic Kidney Disease (CKD)')}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-[#26212E] bg-white hover:bg-[#FAF7FC] transition-all shadow-sm flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#845FA6]" />
                  <span>Book Consultation for Kidney Care</span>
                </button>
              </div>
            </div>

            {/* Banner Right Image (Best Urologist & Kidney Care in Karimnagar) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl bg-white p-2 max-w-xs sm:max-w-sm group">
                <img
                  src="/images/urologist-karimnagar.jpg"
                  alt="Best Urologist in Karimnagar - Advanced Urological & Kidney Care"
                  className="w-full h-auto object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 8 Specialized Service Cards Grid With High-Res Contextual Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-purple-100 hover:border-plum-300 shadow-card-white hover:shadow-elevated transition-all duration-300"
              >
                <div>
                  {/* Service Top Image Banner */}
                  <div className="h-36 w-full overflow-hidden relative bg-purple-50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/70 via-transparent to-black/20" />
                    
                    {/* Floating Specialty Tag */}
                    <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-plum-900 border border-purple-200 shadow-sm">
                      {service.tag}
                    </span>

                    {/* Floating Icon */}
                    <div className="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-plum-700 flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service Body Content */}
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-extrabold text-black group-hover:text-[#845FA6] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-black font-medium leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="mt-3.5 pt-3 border-t border-purple-50">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#845FA6] mb-1.5">
                        Clinical Focus:
                      </p>
                      <ul className="space-y-1 text-xs text-black font-semibold">
                        {service.keyFocus.slice(0, 3).map((focus, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#845FA6] shrink-0"></span>
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#845FA6] hover:text-[#6E4990] py-2 border-t border-[#E8DFF2] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Book for this condition</span>
                    <ArrowUpRight className="w-4 h-4 text-[#CCA762]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
