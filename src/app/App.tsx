import { ThemeProvider } from "./providers";
import { RootRouter } from "./routes/RootRouter";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RootRouter />
    </ThemeProvider>
  );
};
