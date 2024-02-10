/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          title: "#011b34",  
          text: '#303030',
          lightBlue: '#38B6FF',
          blue:'#17538E',
          lightBG:"#80c5d6",
          red:"#ff0000",
          pink:"#ff00bf"
        }
      },
      // Animation for the menu
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translate3d(0, -40px, 0);' },
          '100%': { opacity: 1, transform: 'translateZ(0);' }
        },
        topLine: {
          '50%, 100%': { transform: 'translateY(2px) rotate(-45deg);' }
        },
        topLineClose: {
          '0%': { transform: 'translateY(2px) rotate(-45deg);' },
          '50%, 100%': { transform: 'translateY(0px) rotate(0)' }
        },
        middleLine: {
          '20%, 100%': { opacity: 0 }
        },
        middleLineClose: {
          '0%': { opacity: 0 },
          '20%, 100%': { opacity: 1 }
        },
        bottomLine: {
          '50%, 100%': { transform: 'translateY(-11px) rotate(45deg);' }
        },
        bottomLineClose: {
          '0%': { transform: 'translateY(-11px) rotate(45deg);' },
          '50%, 100%': { transform: 'translateY(0px) rotate(0deg);' }
        },
        styles_rotate: {
          '0%': { transform: 'rotate(0deg) scale(4)' },
          '100%': { transform: 'rotate(-1turn) scale(4)' }
        }
      },
      animation: {
        fadeInDown: 'fadeInDown 1s linear backwards',
        topLine: 'topLine 1s linear forwards',
        topLineClose: 'topLineClose 1s linear forwards',
        middleLine: 'middleLine 1s linear forwards',
        middleLineClose: 'middleLineClose 1s linear forwards',
        bottomLine: 'bottomLine 1s linear forwards',
        bottomLineClose: 'bottomLineClose 1s linear forwards',
        styles_rotate: 'styles_rotate 7s linear infinite'
      }
    },
  },
  plugins: [],
}

