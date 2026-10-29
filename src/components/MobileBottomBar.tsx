import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E8DFF2] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Direct Phone Call */}
        <a
          href="tel:+919247531304"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FAF7FC] active:bg-[#F4EEF9] border border-[#E8DFF2] text-[#845FA6] transition-colors"
        >
          <Phone className="w-5 h-5 text-[#845FA6] mb-0.5 animate-pulse" />
          <span className="text-[11px] font-bold">Call Direct</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919247531304?text=Hello%20Dr.%20Chandini%20Kotha,%20I%20would%20like%20to%20book%20a%20private%20kidney%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 active:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Book Appointment Modal */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#845FA6] active:bg-[#6E4990] text-white shadow-orvex-button transition-colors"
        >
          <Calendar className="w-5 h-5 text-[#F5E9CE] mb-0.5" />
          <span className="text-[11px] font-bold">Book Slot</span>
        </button>

      </div>
    </div>
  );
};
