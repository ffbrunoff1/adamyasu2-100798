/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
        accent: {
          gold: '#d4af37',
          blue: '#1e40af',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      },
    },
  },
  plugins: [],
};
