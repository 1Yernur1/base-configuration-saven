import { Button } from "@/shared/components/ui/button";

import { ThemeProvider } from "./providers";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen grid place-items-center">
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  );
};
