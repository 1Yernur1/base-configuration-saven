import { ReactNode } from "react";

import { ThemeType } from "./ThemeType";

export type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeType;
  storageKey?: string;
};
