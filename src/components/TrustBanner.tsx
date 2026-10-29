import React from 'react';
import { Award, GraduationCap, ShieldCheck, HeartHandshake, UserCheck } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  const trustPoints = [
    {
      icon: Award,
      title: 'State Gold Medalist (2022)',
      subtitle: 'Telangana State Top Rank in Nephrology',
      badgeColor: 'text-[#CCA762]',
      bgColor: 'bg-[#F5E9CE]/40 border-[#CCA762]/30',
    },
    {
      icon: GraduationCap,
      title: 'Torrent Scholar Award',
      subtitle: 'Recognized for clinical acumen & research',
      badgeColor: 'text-[#845FA6]',
      bgColor: 'bg-[#F4EEF9] border-[#E8DFF2]',
    },
    {
      icon: ShieldCheck,
      title: 'Dual Specialization',
      subtitle: 'DM Nephrology + DNB General Medicine',
      badgeColor: 'text-[#845FA6]',
      bgColor: 'bg-[#F4EEF9] border-[#E8DFF2]',
    },
    {
      icon: HeartHandshake,
      title: 'Renal Transplant Care',
      subtitle: 'Pre-transplant workup & post-op care',
      badgeColor: 'text-[#845FA6]',
      bgColor: 'bg-[#F4EEF9] border-[#E8DFF2]',
    },
    {
      icon: UserCheck,
      title: 'Direct Personal Care',
      subtitle: 'Continuous doctor-patient relationship',
      badgeColor: 'text-[#845FA6]',
      bgColor: 'bg-[#F4EEF9] border-[#E8DFF2]',
    },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-orvex-card border border-[#E8DFF2] p-5 sm:p-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-3 sm:p-3.5 rounded-2xl transition-all border border-transparent hover:border-[#E8DFF2] hover:bg-[#F4EEF9]/60 group ${
                  idx === 0 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bgColor} border flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.badgeColor}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-black leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-black font-medium mt-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
