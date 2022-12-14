import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "next-themes";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface IThemeContext {
  currentTheme: "light" | "dark";
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      <ThemeProvider theme={theme === "dark" ? dark : light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}

export { ThemeContextProvider, useThemeContext };
