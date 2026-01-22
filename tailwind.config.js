/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#3b82f6',
        dark: '#000000',
        card: '#0a0a0a'
      },
      boxShadow: {
        'glass': '0 24px 80px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
}
