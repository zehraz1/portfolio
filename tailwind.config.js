/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway' :['Raleway']
      },
      colors:{
        customGrey: '#211F23',
        customPurple: '#B292FF',
        customGray: '#717171',
      }
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.hide-scrollbar': {
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none',    /* Firefox */
      },
      '.hide-scrollbar::-webkit-scrollbar': {
        'display': 'none',            /* Chrome, Safari, and Opera */
      },
    });
  },],
}
