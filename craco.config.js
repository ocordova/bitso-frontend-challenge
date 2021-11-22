module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  jest: {
    configure: {
      setupFilesAfterEnv: "./jest-setup.ts"
    }
  }
}
