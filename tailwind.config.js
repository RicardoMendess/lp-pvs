/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-texture': 'url(/images/prato-verde-page.png)',
        'logo-texture': 'url(/images/logo-letras-verdes.png)'
      }
    }
  },
  plugins: []
}
