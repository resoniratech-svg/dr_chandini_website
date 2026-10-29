import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  Heart, 
  Activity, 
  Filter, 
  Zap, 
  HelpCircle, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Hero Carousel Slides State
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/doctor-hero.png',
      alt: 'Dr. Chandini Kotha - DM Nephrologist explaining 3D kidney model to patient',
      title: 'Dr. Chandini Kotha',
      subtitle: 'DM Nephrologist & Renal Transplant Physician',
      badgeTitle: 'State Gold Medalist',
      badgeSub: '2022',
      tag: 'Direct Practice • Karimnagar',
    },
    {
      image: '/images/kidney-health-board.jpg',
      alt: 'Dr. Chandini Kotha explaining Kidney anatomy and core functions to patient',
      title: 'Kidney Anatomy & Functions',
      subtitle: 'Filtration, Electrolyte Balance, BP Regulation & Hormones',
      badgeTitle: 'Patient Education',
      badgeSub: 'Clinical Care',
      tag: 'Core Renal Health',
    },
    {
      image: '/images/hero-consultation.png',
      alt: 'Dr. Chandini Kotha reviewing diagnostic lab reports and ultrasound 1-on-1 with patient',
      title: '1-on-1 Report Evaluation',
      subtitle: 'Detailed Review of Creatinine, eGFR & Diagnostic Scans',
      badgeTitle: 'Dedicated Care',
      badgeSub: '1-on-1',
      tag: 'Unhurried Consultations',
    },
    {
      image: '/images/hero-transplant.png',
      alt: 'Dr. Chandini Kotha explaining Kidney Transplant board and graft model',
      title: 'Kidney Transplant Care',
      subtitle: 'Graft Evaluation, Pre-Transplant Workup & Post-Op Protection',
      badgeTitle: 'Transplant Care',
      badgeSub: 'Expertise',
      tag: 'Advanced Renal Support',
    },
  ];

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-[#FAF7FC] via-[#F4EEF9] to-[#FAF7FC] overflow-hidden">
      
      {/* Decorative Orvex-Style Soft Lavender Aura & Delicate Gold Wave */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#E8DFF2]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F4EEF9]/80 rounded-full blur-2xl pointer-events-none -z-10" />
      
      {/* Delicate Gold Wave Arc */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[300px] border-t-2 border-[#CCA762]/30 rounded-full transform -rotate-12 pointer-events-none -z-10" />

      {/* 🫘 Full Complete Screen 3D Kidney Care & Protection Visual Background (Hands Shielding Healthy Kidneys) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/hero-kidney-protection-fullscreen.png"
          alt="Kidney Care & Protection - Preserving Natural Kidney Function"
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-50 lg:opacity-60 transition-opacity"
        />
        {/* Soft atmospheric gradient wash ensuring headline text, doctor credentials & CTA buttons stay 100% crisp & legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7FC]/65 via-[#FAF7FC]/25 to-[#FAF7FC]/55 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Prestigious Recognition Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFF2] shadow-sm mb-3">
              <Award className="w-4 h-4 text-[#CCA762]" />
              <span className="text-xs sm:text-sm font-semibold text-[#544D5E]">
                Telangana State Gold Medalist (2022) • Torrent Scholar
              </span>
            </div>

            {/* Main Headline (Orvex Style: Bold Serif + Purple Italic Serif) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#26212E] leading-[1.14] tracking-tight">
              <span className="font-bold">Your Health.</span> <br />
              <span className="italic font-normal text-[#845FA6]">Our Priority.</span>
            </h1>

            {/* Doctor Subhead */}
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-[#845FA6]">
              <span className="font-extrabold text-black">Dr. Chandini Kotha</span>
              <span className="text-[#CCA762]">•</span>
              <span className="text-black font-bold text-xs sm:text-base">DM Nephrology | DNB General Medicine</span>
            </div>

            {/* 📱 MOBILE HERO SLIDER (Visible on Mobile First Screen, Full Uncropped Images) */}
            <div className="block lg:hidden w-full my-5">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-orvex-card bg-white max-w-[320px] sm:max-w-sm mx-auto group">
                
                {/* Images Slides Container - Edge-to-Edge 9:16 Aspect Ratio (Zero Gaps) */}
                <div className="relative w-full aspect-[9/16] overflow-hidden bg-[#FAF7FC]">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover object-center"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}

                  {/* Floating Gold Seal on Mobile */}
                  <div className="absolute top-3 left-3 w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-[#F5E9CE] via-[#CCA762] to-[#A6823F] shadow-orvex-badge z-20">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#845FA6] to-[#5C387D] flex flex-col items-center justify-center text-center p-1 text-white">
                      <Award className="w-3 h-3 text-[#F5E9CE] mb-0.5" />
                      <span className="text-[8px] font-bold uppercase tracking-tight text-[#F5E9CE] leading-tight">
                        {heroSlides[currentSlide].badgeTitle}
                      </span>
                      <span className="text-[7px] text-[#E8DFF2]">
                        {heroSlides[currentSlide].badgeSub}
                      </span>
                    </div>
                  </div>

                  {/* Slide Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#26212E] hover:bg-white flex items-center justify-center shadow-md z-20 active:scale-95 transition-all"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#26212E] hover:bg-white flex items-center justify-center shadow-md z-20 active:scale-95 transition-all"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full border border-[#E8DFF2] shadow-sm">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`transition-all rounded-full ${
                          i === currentSlide ? 'w-4 h-1.5 bg-[#845FA6]' : 'w-1.5 h-1.5 bg-[#845FA6]/30'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                </div>

                {/* Clean Orvex Card Footer (Below the photo, never obscuring it!) */}
                <div className="p-3.5 bg-white border-t border-[#E8DFF2] z-20 relative">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-serif font-bold text-sm text-[#26212E] leading-tight">
                        {heroSlides[currentSlide].title}
                      </p>
                      <p className="text-[11px] text-[#544D5E] mt-0.5 line-clamp-1">
                        {heroSlides[currentSlide].subtitle}
                      </p>
                    </div>
                    <span className="shrink-0 text-[10px] font-semibold text-[#845FA6] bg-[#F4EEF9] px-2 py-0.5 rounded-full border border-[#E8DFF2]">
                      {heroSlides[currentSlide].tag}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Core Value Paragraph */}
            <p className="mt-2 lg:mt-4 text-base sm:text-lg md:text-xl text-black font-semibold leading-relaxed max-w-xl">
              We help patients understand their kidney health and focus on what matters most — <strong className="text-[#845FA6] font-extrabold">Preserving Natural Kidney Function.</strong>
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-5 lg:mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="group flex-1 sm:flex-none flex items-center justify-between gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#845FA6] hover:bg-[#6E4990] active:scale-95 shadow-orvex-button hover:shadow-lg transition-all"
              >
                <span>Book Direct Consultation</span>
                <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#845FA6] flex items-center justify-center transition-colors">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </div>
              </button>

              <a
                href="https://wa.me/919247531304?text=Hello%20Dr.%20Chandini%20Kotha,%20I%20would%20like%20to%20consult%20regarding%20kidney%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#845FA6] bg-white hover:bg-[#F4EEF9] border-2 border-[#E8DFF2] shadow-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919247531304"
                className="hidden sm:flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-white hover:bg-[#F4EEF9] border-2 border-[#E8DFF2] shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#845FA6]" />
                <span>9247531304</span>
              </a>
            </div>

            {/* Location Notice */}
            <div className="mt-3.5 flex items-center gap-2 text-xs sm:text-sm text-black font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Available for direct in-person consultation in <strong className="text-black font-extrabold">Karimnagar, Telangana</strong></span>
            </div>

            {/* Trust checkmarks in Clean White Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-black w-full max-w-xl">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border-2 border-[#E8DFF2] shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#845FA6] shrink-0" />
                <span>Dedicated 1-on-1 Consultations</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border-2 border-[#E8DFF2] shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#845FA6] shrink-0" />
                <span>Dual Qualification (DNB Med + DM Nephro)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border-2 border-[#E8DFF2] shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#845FA6] shrink-0" />
                <span>Early Creatinine & CKD Stabilization</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border-2 border-[#E8DFF2] shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#845FA6] shrink-0" />
                <span>Honest Second Opinions on Dialysis</span>
              </div>
            </div>

          </div>

          {/* 💻 DESKTOP HERO SLIDER (Cycles All 4 Images Smoothly, Full Uncropped Images) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
            
            {/* Slider Card Container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-orvex-card bg-white w-full max-w-[340px] group">
              
              {/* Image Slides Stack - Edge-to-Edge 9:16 Aspect Ratio (Zero Gaps) */}
              <div className="relative w-full aspect-[9/16] overflow-hidden bg-[#FAF7FC]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>

              {/* Clean Orvex Card Footer (Below the photo, never obscuring it!) */}
              <div className="p-4 bg-white border-t border-[#E8DFF2] z-20 relative">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-serif font-bold text-base text-[#26212E] leading-tight">
                      {heroSlides[currentSlide].title}
                    </p>
                    <p className="text-xs text-[#544D5E] mt-0.5">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-[#845FA6] bg-[#F4EEF9] px-3 py-1 rounded-full border border-[#E8DFF2]">
                    {heroSlides[currentSlide].tag}
                  </span>
                </div>
              </div>

              {/* Prev / Next Slider Arrows (Hover Visible) */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-[230px] -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#26212E] backdrop-blur-md flex items-center justify-center shadow-lg transition-all z-20 opacity-0 group-hover:opacity-100"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-[230px] -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#26212E] backdrop-blur-md flex items-center justify-center shadow-lg transition-all z-20 opacity-0 group-hover:opacity-100"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Top-Right Dot Indicators */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20 bg-white/85 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#E8DFF2] shadow-sm">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all rounded-full ${
                      i === currentSlide ? 'w-5 h-2 bg-[#845FA6]' : 'w-2 h-2 bg-[#845FA6]/30 hover:bg-[#845FA6]/60'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Circular Gold Seal (Desktop) - Updates with Current Slide */}
            <div className="absolute -top-4 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-br from-[#F5E9CE] via-[#CCA762] to-[#A6823F] shadow-orvex-badge z-20">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#845FA6] via-[#754E97] to-[#5C387D] flex flex-col items-center justify-center text-center p-2 text-white">
                <div className="flex items-center gap-0.5 mb-0.5 text-[#F5E9CE]">
                  <Award className="w-4 h-4 text-[#F5E9CE]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-tight text-[#F5E9CE] leading-tight">
                  {heroSlides[currentSlide].badgeTitle}
                </span>
                <span className="text-[9px] text-[#E8DFF2] font-medium">
                  {heroSlides[currentSlide].badgeSub}
                </span>
              </div>
            </div>

            {/* Floating Experience Pill (Desktop) */}
            <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E8DFF2] rounded-2xl px-4 py-2.5 shadow-md flex items-center gap-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-[#F4EEF9] text-[#845FA6] flex items-center justify-center border border-[#E8DFF2]">
                <Heart className="w-4 h-4 text-[#845FA6]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#26212E]">1-on-1 Kidney Care</p>
                <p className="text-[11px] text-[#7E768A]">Unhurried consultations</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Feature Card Bar (5 Services Strip) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFF2] shadow-orvex-card">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#F4EEF9]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2] flex items-center justify-center mb-2.5">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#26212E]">Chronic Kidney Disease</h4>
              <p className="text-[11px] text-[#7E768A] mt-0.5">Early Stage Preservation</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#F4EEF9]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2] flex items-center justify-center mb-2.5">
                <Filter className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#26212E]">High Creatinine & eGFR</h4>
              <p className="text-[11px] text-[#7E768A] mt-0.5">Root-Cause Evaluation</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#F4EEF9]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2] flex items-center justify-center mb-2.5">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#26212E]">Diabetic Nephropathy</h4>
              <p className="text-[11px] text-[#7E768A] mt-0.5">Targeted Renal Shielding</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#F4EEF9]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2] flex items-center justify-center mb-2.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#26212E]">Dialysis Counseling</h4>
              <p className="text-[11px] text-[#7E768A] mt-0.5">Honest Second Opinions</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#F4EEF9]/60 transition-colors col-span-2 md:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-[#F4EEF9] text-[#845FA6] border border-[#E8DFF2] flex items-center justify-center mb-2.5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#26212E]">Transplant Guidance</h4>
              <p className="text-[11px] text-[#7E768A] mt-0.5">Workup & Lifelong Care</p>
            </div>

          </div>

          {/* Orvex Signature Bottom Row: "Compassionate Science. Healthier Kidneys. + Button" */}
          <div className="mt-6 pt-6 border-t border-[#E8DFF2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg sm:text-xl font-serif text-[#26212E]">
                <span className="font-bold">Compassionate Science.</span>{' '}
                <span className="italic text-[#845FA6]">Healthier Kidneys.</span>
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="group flex items-center gap-3 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#845FA6] hover:bg-[#6E4990] active:scale-95 shadow-orvex-button transition-all"
            >
              <span>Schedule Direct Consultation</span>
              <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#845FA6] flex items-center justify-center transition-colors">
                <Heart className="w-3 h-3 fill-current" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
