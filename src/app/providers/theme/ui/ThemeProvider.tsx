import { useEffect, useState } from "react";

import { ThemeProviderProps } from "../model/types/ThemeProviderProps";
import { ThemeType } from "../model/types/ThemeType";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = localStorage.getItem(storageKey) as ThemeType | null;
    return storedTheme || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.classList.add(appliedTheme);
  }, [theme]);

  const setThemeWithStorage = (newTheme: ThemeType) => {
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeWithStorage }}>
      {children}
    </ThemeContext.Provider>
  );
};
