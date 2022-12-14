"use client";
import { ThemeProvider } from "next-themes";
import GlobalStyle from "../styles/global";
import { ThemeContextProvider } from "../context/ThemeContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider enableSystem={true}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </ThemeProvider>
    </>
  );
}
