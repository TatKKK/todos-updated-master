/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        'red':'#d40511',
        'pink':'#ff69b4',
        'navy':'#000080',
        'yellow' :'#ffff00',
        'blue':'#4169e1',
        'gray': '#8492a6',
        'light': '#fff',
        'white':'#ffffff'
      }
    },
  },
  plugins: [],
}

