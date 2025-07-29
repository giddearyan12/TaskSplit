// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#000' }
        }
      },
      animation: {
        typewriter: 'typewriter 3s steps(30) 1s forwards',
        blink: 'blink 0.7s infinite'
      }
    }
  },
  plugins: []
};
