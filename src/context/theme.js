import React from "react";

function getInitialTheme(_) {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: theme1)");
    if (userMedia.matches) {
      return "theme1";
    }
  }

  return "theme1";
}

const ThemeContext = React.createContext();

function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isTheme1 = theme === "theme1";

    if (isTheme1 && root.classList.contains("theme2")) {
      root.classList.remove("theme2");
    } else if (isTheme1 && root.classList.contains("theme3")) {
      root.classList.remove("theme3");
    }

    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(
    (_) => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };
