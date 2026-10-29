# Dr. Chandini Kotha - Personal Nephrologist Website

Official responsive, mobile-first personal portfolio website for **Dr. Chandini Kotha**, DM Nephrology, DNB General Medicine, Telangana State Gold Medalist (2022), Torrent Young Scholar Awardee, and Renal Transplant Physician.

## 🌟 Highlights
- **Independent Practice Branding**: Completely focused on Dr. Chandini's private practice in Karimnagar (zero hospital branding/dependencies).
- **Aesthetic**: Soft Lavender Mist (`#FAF8FC`), Royal Violet (`#6B4C85`), Champagne Medal Gold (`#C5A059`), and crisp medical white.
- **Mobile-First UX**:
  - Sticky bottom action bar (`Call Direct`, `WhatsApp`, `Book Slot`) for smartphone visitors.
  - One-tap WhatsApp booking with pre-filled consultation details.
  - Direct calling to `+91 9247531304`.
  - Responsive appointment request modal.
- **Clinical Sections**:
  - Hero Section featuring Dr. Chandini with kidney anatomy model & Gold Medal seal.
  - Trust Indicators: Telangana State Gold Medal (2022) & Torrent Young Scholar.
  - Early Warning Signs ("Don't ignore what your body is trying to tell you") covering creatinine, edema, foamy urine, and burning sensation.
  - 8 Specialized Kidney Services (CKD, Creatinine, Diabetic Kidney Disease, Hypertension, AKI, Dialysis, Transplant, Proteinuria).
  - 1-on-1 Consultation Experience & Doctor Biography.
  - Kidney Transplant Workup & Honest Dialysis Second Opinions.
  - Patient Guidance ("When Should You Consult a Nephrologist?").
  - Interactive FAQ Accordions.
  - Direct Patient Appointment Desk.
- **Technical & SEO**:
  - Schema.org `Physician` structured data for Google local search ranking.
  - Meta tags, OpenGraph previews, and canonical SEO tags.
  - Production bundle under 65 kB gzipped for near-instant 3G/4G loading.

---

## 🚀 Running Locally

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

---

## 📁 Project Structure
```
dr.chandini_website/
├── public/
│   ├── favicon.svg              # Custom kidney medical icon
│   └── images/
│       ├── doctor-hero.png      # Dr. Chandini hero image with kidney model
│       ├── doctor-consultation.png # 1-on-1 consultation & patient education
│       ├── kidney-care-3d.png   # 3D kidney care graphic
│       ├── kidney-shield.png    # Kidney protection shield
│       └── kidney-symptoms.jpg  # Symptom awareness visual
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive header
│   │   ├── Hero.tsx             # Hero with credentials & gold seal
│   │   ├── TrustBanner.tsx      # Gold medal & academic awards strip
│   │   ├── SymptomsSection.tsx  # "Don't ignore signs..." section
│   │   ├── ServicesSection.tsx  # 8 clinical services grid
│   │   ├── AboutDoctor.tsx      # Biography & philosophy
│   │   ├── TransplantDialysisSection.tsx # Transplant & dialysis second opinions
│   │   ├── WhenToConsult.tsx    # Patient consultation guidelines
│   │   ├── FaqSection.tsx       # Expandable FAQ accordions
│   │   ├── ContactSection.tsx   # Direct booking form & clinic info
│   │   ├── AppointmentModal.tsx # Popup appointment requester
│   │   ├── MobileBottomBar.tsx  # Sticky bottom action bar for mobile
│   │   └── Footer.tsx           # Elegant footer with disclaimer
│   ├── App.tsx                  # Main application orchestrator
│   ├── index.css                # Tailwind custom utility layers & gradients
│   └── main.tsx                 # Entrypoint
├── index.html                   # SEO tags, fonts & Schema.org JSON-LD
├── tailwind.config.js           # Custom lavender, plum, and gold color tokens
└── package.json
```
