module.exports = {
  purge: ["./src/_includes/**/*.njk", "./src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: "#66e0ff",
      },
    },
    fontFamily: {
      sans:
        'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
