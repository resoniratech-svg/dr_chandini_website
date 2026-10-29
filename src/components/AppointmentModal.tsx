import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle, Award } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Kidney Consultation',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Private Consultation Request - Dr. Chandini Kotha*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Condition:* ${encodeURIComponent(service)}%0A*Reports/Notes:* ${encodeURIComponent(notes || 'None')}`;
    window.open(`https://wa.me/919247531304?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-medical-dark/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar (Orvex Signature Lavender-Purple) */}
        <div className="bg-gradient-to-r from-[#845FA6] via-[#754E97] to-[#5C387D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#F5E9CE] text-xs font-bold uppercase tracking-wider mb-1">
            <Award className="w-4 h-4 text-[#CCA762]" />
            <span>Direct Doctor Consultation</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-white">
            Consult Dr. Chandini Kotha
          </h3>
          <p className="text-xs text-[#E8DFF2] mt-1">
            DM Nephrologist | DNB General Medicine | Karimnagar
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-medical-dark">
                Thank You, {name}!
              </h4>
              <p className="text-xs text-medical-muted mt-2">
                Your request has been forwarded to our WhatsApp desk. We will confirm your consultation slot shortly.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href="tel:+919247531304"
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-[#845FA6] bg-[#F4EEF9] border border-[#E8DFF2] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#845FA6]" />
                  Call Directly: 9247531304
                </a>
                <button
                  onClick={onClose}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-plum-400 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-plum-400 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1">
                  Reason for Visit *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-plum-400 bg-white"
                >
                  <option value="High Creatinine Evaluation">High Creatinine Evaluation</option>
                  <option value="Chronic Kidney Disease (CKD)">Chronic Kidney Disease (CKD)</option>
                  <option value="Diabetic Kidney Disease">Diabetic Kidney Disease</option>
                  <option value="Dialysis Second Opinion">Dialysis Second Opinion</option>
                  <option value="Kidney Transplant Consultation">Kidney Transplant Consultation</option>
                  <option value="Protein in Urine / Swelling">Protein in Urine / Swelling</option>
                  <option value="Hypertension & Kidney Health">Hypertension & Kidney Health</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-medical-dark uppercase tracking-wider mb-1">
                  Recent Creatinine or Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Creatinine 2.4, diabetic for 5 years"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-plum-400 bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#845FA6] hover:bg-[#6E4990] shadow-orvex-button transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#F5E9CE]" />
                  <span>Confirm Booking via WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href="tel:+919247531304"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#845FA6] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#845FA6]" />
                  <span>Or call directly: +91 9247531304</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
