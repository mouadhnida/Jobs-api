/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        'main': "#2E8A99",
        'main1': "#0E2954",
        'main2': "#1F6E8C",
        'main3': "#84A7A1"

      },
      screens: {
        'm-sm': {'max': '639px'},
        // => @media (max-width: 640px) { ... }
  
        'm-md': {'max': '767px'},
        // => @media (max-width: 768px) { ... }
  
        'm-lg': {'max': '1023px'},
        // => @media (max-width: 1024px) { ... }
  
        'm-xl':  {'max': '1279px'},
        // => @media (max-width: 1280px) { ... }
  
        'm-2xl': {'max': '1535px'},
        // => @media (max-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}


