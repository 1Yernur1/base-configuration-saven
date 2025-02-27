import { useCallback, useEffect, useMemo, useState } from "react";

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

  const setThemeWithStorage = useCallback(
    (newTheme: ThemeType) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    [storageKey]
  );

  const value = useMemo(
    () => ({ theme, setTheme: setThemeWithStorage }),
    [theme, setThemeWithStorage]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
