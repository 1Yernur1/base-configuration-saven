import { Button } from "@/shared/components/ui/button";

import { ThemeProvider } from "./providers";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Button>Click me</Button>
    </ThemeProvider>
  );
};
