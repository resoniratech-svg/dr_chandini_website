import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle, Send, Award } from 'lucide-react';
import { KidneyBackground } from './KidneyBackground';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Chronic Kidney Disease (CKD)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Consultation Request - Dr. Chandini Kotha*%0A%0A*Patient Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Concern/Service:* ${encodeURIComponent(formData.service)}%0A*Additional Details:* ${encodeURIComponent(formData.notes || 'None')}`;
    window.open(`https://wa.me/919247531304?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 sm:py-12 bg-gradient-to-b from-[#FAF7FC] via-[#F4EEF9]/40 to-[#FAF7FC] relative overflow-hidden">
      {/* 🫘 Kidney Care & Protection Visual Background */}
      <KidneyBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info, Clinic Image & Highlights */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-plum-700 bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200">
              Direct Patient Desk
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-black mt-3 leading-tight">
              Book Your Private Consultation
            </h2>

            <p className="mt-3 text-sm sm:text-base text-black font-medium leading-relaxed mb-6">
              Consult directly with <strong className="text-black font-bold">Dr. Chandini Kotha</strong> for expert kidney evaluation, dialysis planning, or transplant workup in Karimnagar. We value your time with dedicated, scheduled appointments.
            </p>

            {/* Clinic Environment Image */}
            <div className="relative rounded-2xl overflow-hidden border border-purple-100 shadow-sm mb-6 group">
              <img
                src="/images/clinic-consultation.jpg"
                alt="Dr. Chandini Kotha Private Practice Clinic Karimnagar"
                className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-xs font-bold text-white">Private Practice Consultation Suite</p>
                <p className="text-[11px] text-[#E8DFF2]">Karimnagar, Telangana • 1-on-1 Dedicated Time</p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              
              {/* Phone Card */}
              <a
                href="tel:+919247531304"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8DFF2] hover:border-[#845FA6] shadow-card-white hover:shadow-elevated transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] group-hover:bg-[#845FA6] group-hover:text-white text-[#845FA6] flex items-center justify-center transition-colors shrink-0 border border-[#E8DFF2]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-black uppercase tracking-wider">Direct Consultation Line</p>
                  <p className="text-base sm:text-lg font-extrabold text-black group-hover:text-[#845FA6] transition-colors">
                    +91 9247531304
                  </p>
                  <p className="text-xs text-[#845FA6] font-bold">Click to Call Directly</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919247531304?text=Hello%20Dr.%20Chandini%20Kotha,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-emerald-200 hover:border-emerald-300 shadow-card-white hover:shadow-elevated transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white text-emerald-600 flex items-center justify-center transition-colors shrink-0 border border-emerald-200">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-black uppercase tracking-wider">Instant WhatsApp Booking</p>
                  <p className="text-sm sm:text-base font-extrabold text-black group-hover:text-emerald-700 transition-colors">
                    Chat on WhatsApp (9247531304)
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold">Send Reports & Confirm Slot</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8DFF2] shadow-card-white">
                <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] text-[#845FA6] flex items-center justify-center shrink-0 border border-[#E8DFF2]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#7E768A] uppercase tracking-wider">Consultation Location</p>
                  <p className="text-sm font-bold text-[#26212E]">
                    Karimnagar, Telangana
                  </p>
                  <p className="text-xs text-[#544D5E] mt-0.5">
                    Private clinic consultations with pre-scheduled appointments.
                  </p>
                </div>
              </div>

              {/* Credential Seal */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#F4EEF9] to-[#FAF3E0] border border-[#CCA762]/30">
                <Award className="w-5 h-5 text-[#CCA762] shrink-0" />
                <p className="text-xs text-[#26212E] font-medium">
                  <strong>Telangana State Gold Medalist (2022)</strong> • Dedicated 1-on-1 Kidney Care
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Consultation Request Form in Crisp White */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-elevated">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-medical-dark">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-medical-muted mt-1">
                  Fill in your details below. You will be connected directly to our appointment desk with your information prepared.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    Request Initiated Successfully!
                  </h4>
                  <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto">
                    Your appointment request has opened in WhatsApp. If it didn't open automatically, you can directly call us at <strong>+91 9247531304</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Patient Name */}
                  <div>
                    <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-plum-400 focus:border-transparent text-sm text-medical-dark placeholder:text-gray-400 bg-white shadow-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-plum-400 focus:border-transparent text-sm text-medical-dark placeholder:text-gray-400 bg-white shadow-sm"
                    />
                  </div>

                  {/* Consultation Reason / Condition */}
                  <div>
                    <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1.5">
                      Primary Kidney Concern *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-plum-400 focus:border-transparent text-sm text-medical-dark bg-white shadow-sm"
                    >
                      <option value="Chronic Kidney Disease (CKD)">Chronic Kidney Disease (CKD)</option>
                      <option value="High Creatinine / Abnormal Kidney Blood Test">High Creatinine / Abnormal Kidney Blood Test</option>
                      <option value="Diabetic Kidney Disease">Diabetic Kidney Disease</option>
                      <option value="Hypertension & Kidney Health">Hypertension & Kidney Health</option>
                      <option value="Acute Kidney Injury (AKI)">Acute Kidney Injury (AKI)</option>
                      <option value="Dialysis Second Opinion / Planning">Dialysis Second Opinion / Planning</option>
                      <option value="Kidney Transplant Consultation">Kidney Transplant Consultation</option>
                      <option value="Protein in Urine (Foamy Urine) / Swelling">Protein in Urine (Foamy Urine) / Swelling</option>
                      <option value="General Kidney Health Checkup">General Kidney Health Checkup</option>
                    </select>
                  </div>

                  {/* Notes / Reports */}
                  <div>
                    <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1.5">
                      Latest Creatinine / eGFR or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Creatinine is 2.1 mg/dL, diabetic for 6 years, swelling in ankles..."
                      className="w-full px-4 py-3 rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-plum-400 focus:border-transparent text-sm text-medical-dark placeholder:text-gray-400 bg-white shadow-sm"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-semibold text-base text-white bg-[#845FA6] hover:bg-[#6E4990] active:scale-[0.99] shadow-orvex-button hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#F5E9CE]" />
                      <span>Send Appointment Request via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-medical-muted mt-2">
                      🔒 Your medical details remain private and confidential.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
