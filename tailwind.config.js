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
  plugins: [],
}
