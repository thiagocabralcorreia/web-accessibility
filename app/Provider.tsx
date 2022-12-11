"use client";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { useState } from "react";

//     <ThemeProvider enableSystem={true} attribute="class">
export default function Provider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(light);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </>
  );
}
