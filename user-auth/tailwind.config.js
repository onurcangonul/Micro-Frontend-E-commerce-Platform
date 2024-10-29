module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
      colors: {
        primary: "#017CC2",
        darkBlue: "#1C4771",
        lightBlue: "#90E0EF",
        success: "#4BB543",
        secondary: "#81819b",
      },
    },
  },
  plugins: [],
}
