"use client";

import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

//     <ThemeProvider enableSystem={true} attribute="class">
export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
