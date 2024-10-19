export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Ajusta según tus carpetas y extensiones
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors:{
        'primary': '#090b28',
      }
    },
  },
  plugins: [],
}
