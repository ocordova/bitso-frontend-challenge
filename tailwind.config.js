module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 2px 4px rgba(102,102,102,0.1)',
        md: '0 5px 10px rgba(102,102,102,0.12)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
