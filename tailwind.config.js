module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      primary: "#319795",
      info: "#3182CE",
      overview: "#2D3748",
      footergray: "#00000033",
      "river-bed": {
        DEFAULT: "#4A5568",
        50: "#718096",
        100: "#4A5568"
      },
      select: {
        DEFAULT: "#81E6D9",
        50: "#E6FFFA",
        75: "#d4fff6",
        100: "#81E6D9"
      },
      bgborder: {
        DEFAULT: "#CBD5E0",
        50: "#F7FAFC",
        75: "#EBF4FF",
        100: "#CBD5E0"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
