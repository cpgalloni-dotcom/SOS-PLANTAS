/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          dark: '#0d2818',
          forest: '#1b4332',
          emerald: '#2d6a4f',
          leaf: '#40916c',
          mint: '#52b788',
          light: '#74c69d',
          pale: '#d8f3dc',
          cream: '#f4fbf5',
          water: '#2563eb',
          amber: '#e67e22',
          danger: '#dc2626'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'mobile': '0 -2px 10px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)',
        'card': '0 4px 20px -2px rgba(27, 67, 50, 0.08)'
      }
    },
  },
  plugins: [],
}
