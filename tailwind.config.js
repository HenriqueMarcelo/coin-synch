/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '632px',
        md: '704px', // alterado
        // lg: '1016px',
        xl: '1248px', // alterado
        // '2xl': '1496px', //removido
      },
    },
    extend: {},
  },
  plugins: [],
}
