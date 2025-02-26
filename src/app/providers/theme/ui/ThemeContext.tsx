import { createContext } from "react";

import { ThemeContextType } from "../model/types/ThemeContextType";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
