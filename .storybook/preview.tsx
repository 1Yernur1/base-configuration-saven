import "../src/main.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import { addons } from "@storybook/manager-api";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import React from "react";

import { ThemeProvider, ThemeType } from "../src/app/providers/";

const StorybookThemeSync = ({ theme }: { theme: ThemeType }) => {
  React.useEffect(() => {
    addons.setConfig({
      theme: theme === "dark" ? themes.dark : themes.light,
    });
  }, [theme]);

  return null;
};

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      return (
        <ThemeProvider defaultTheme="dark">
          <StorybookThemeSync theme={theme} />
          <Story />
        </ThemeProvider>
      );
    },
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
