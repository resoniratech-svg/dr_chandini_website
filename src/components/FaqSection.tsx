import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is a nephrologist, and how is it different from a urologist?',
      a: 'A nephrologist is an internal medicine super-specialist focused on the medical preservation of kidney function, treating kidney disease (CKD/AKI), high creatinine, electrolyte imbalances, dialysis, and kidney transplants. A urologist is a surgeon treating anatomical and surgical issues of the urinary tract, like kidney stones and prostate enlargement.'
    },
    {
      q: 'Who is a qualified kidney specialist in Karimnagar?',
      a: 'Dr. Chandini Kotha is a DM Nephrologist, DNB General Medicine, and Renal Transplant Physician practicing in Karimnagar, Telangana. Recognized with the prestigious Telangana State Gold Medal in 2022 and Torrent Young Scholar Award, she provides dedicated personal nephrology consultations.'
    },
    {
      q: 'Does high creatinine always mean permanent kidney failure?',
      a: 'No. Elevated serum creatinine can occur due to dehydration, heavy physical stress, acute infection, or temporary medication effects (Acute Kidney Injury). Dr. Chandini evaluates creatinine alongside eGFR, urine tests, and clinical history to determine whether it is reversible.'
    },
    {
      q: 'Can chronic kidney disease (CKD) be treated or stopped from progressing?',
      a: 'Yes, especially with early detection. While scarred kidney filters cannot always be renewed, proper blood pressure regulation, specialized dietary adjustments, glycemic control, and modern renoprotective medicines can successfully stabilize kidney function and delay or avoid the need for dialysis.'
    },
    {
      q: 'When should a person with diabetes see Dr. Chandini?',
      a: 'Anyone who has had diabetes for more than 5 years, or anyone with elevated urine albumin (protein), rising blood pressure, or a creatinine test out of range should have a baseline nephrology consultation to protect their kidneys.'
    },
    {
      q: 'How do I book a consultation with Dr. Chandini Kotha?',
      a: 'You can book directly by calling +91 9247531304 or messaging via WhatsApp. Direct appointments ensure dedicated, unhurried time with Dr. Chandini without hospital queuing.'
    },
    {
      q: 'What reports should I bring for my first kidney consultation?',
      a: 'Please bring your most recent Kidney Function Test (Serum Creatinine, Blood Urea, Electrolytes), Complete Urine Examination (CUE) or Urine Albumin-Creatinine Ratio (UACR), Ultrasound Abdomen (KUB) scan if available, and a list of all current diabetes/BP medications.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-plum-700 text-xs font-bold uppercase tracking-wider mb-3 border border-purple-200">
            <HelpCircle className="w-3.5 h-3.5 text-plum-600" />
            Patient Questions & Clarity
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-medical-dark">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-medical-body">
            Clear, honest answers regarding kidney conditions, creatinine levels, and consultation booking.
          </p>
        </div>

        {/* Accordions in Crisp White + Purple Focus */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-plum-300 bg-purple-50/40 shadow-sm' 
                    : 'border-purple-100 bg-white hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-medical-dark pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#845FA6] text-white rotate-180' : 'bg-[#F4EEF9] text-[#845FA6]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-medical-body leading-relaxed border-t border-purple-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card in Orvex Aesthetic */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#FAF7FC] via-white to-[#F4EEF9] border border-[#E8DFF2] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="font-bold text-[#26212E] text-base">
              Have a specific question about your reports?
            </h4>
            <p className="text-xs text-[#544D5E] mt-0.5">
              Contact our direct care desk for assistance or consultation scheduling.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919247531304"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#845FA6] bg-white border border-[#E8DFF2] hover:bg-[#FAF7FC] transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#845FA6]" />
              <span>9247531304</span>
            </a>
            <a
              href="https://wa.me/919247531304?text=Hello%20Dr.%20Chandini,%20I%20have%20a%20question%20regarding%20my%20kidney%20report."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
