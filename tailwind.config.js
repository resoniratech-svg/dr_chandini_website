/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact Orvex Health Reference Palette
        orvex: {
          purple: '#845FA6',       // Exact signature primary purple (button & footer)
          purpleDark: '#6E4990',   // Hover state
          purpleLight: '#A584C8',  // Accent & icons
          lilac: '#C5B0E0',        // Delicate scrub lilac
          lavender50: '#FAF7FC',   // Page background tint
          lavender100: '#F4EEF9',  // Light section gradient
          lavender200: '#E8DFF2',  // Card border
          gold: '#CCA762',         // Champagne gold ribbons & badge rim
          goldLight: '#F5E9CE',    // Gold highlight
          goldDark: '#A6823F',     // Gold text
          charcoal: '#26212E',     // Serif headline dark charcoal
          body: '#544D5E',         // Clean readable body slate
          muted: '#7E768A',        // Secondary muted text
        },
        plum: {
          DEFAULT: '#845FA6',
          50: '#FAF7FC',
          100: '#F4EEF9',
          200: '#E8DFF2',
          600: '#845FA6',
          700: '#6E4990',
          800: '#583675',
          900: '#3D2054',
        },
        gold: {
          DEFAULT: '#CCA762',
          light: '#F5E9CE',
          dark: '#A6823F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'orvex-button': '0 8px 24px -4px rgba(132, 95, 166, 0.35)',
        'orvex-card': '0 10px 30px -8px rgba(132, 95, 166, 0.08), 0 0 0 1px rgba(232, 223, 242, 0.7)',
        'orvex-badge': '0 6px 20px -2px rgba(204, 167, 98, 0.25)',
      }
    },
  },
  plugins: [],
}
