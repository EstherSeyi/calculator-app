module.exports = {
  // mode: "jit",
  purge: [
    "./src/**/*.html",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.jsx",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    float: false,
  },
  theme: {
    colors: {
      bg: {
        main: "var(--main-bg-color)",
        element: "var(--element-bg-color)",
        screen: "var(--screen-bg-color)",
      },
      key: {
        bg: "var(--key-bg-color)",
        shadow: "var(--key-shadow-color)",
        element: "var(--key-element-color)",
        shadow2: "var(--key-shadow-color2)",
        bg2: "var(--key-bg-color2)",
        shadow3: "var(--key-shadow-color3)",
      },
      misc: {
        primary: "var(--primary-text-color)",
        accent: "var(--accent-text-color)",
        white: "#ffffff",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
