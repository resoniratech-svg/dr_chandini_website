import React from 'react';

interface KidneyBackgroundProps {
  className?: string;
  opacity?: string;
  gradientWash?: string;
}

export const KidneyBackground: React.FC<KidneyBackgroundProps> = ({
  className = '',
  opacity = 'opacity-35 lg:opacity-45',
  gradientWash = 'from-[#FAF7FC]/85 via-[#FAF7FC]/55 to-[#FAF7FC]/85'
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden ${className}`}>
      <img
        src="/images/hero-kidney-protection-fullscreen.png"
        alt="Kidney Care & Protection Background"
        aria-hidden="true"
        className={`w-full h-full object-cover object-center ${opacity} transition-opacity`}
      />
      {/* Soft atmospheric gradient wash ensuring typography, doctor credentials & cards stay 100% crisp & legible */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradientWash} pointer-events-none`} />
    </div>
  );
};
