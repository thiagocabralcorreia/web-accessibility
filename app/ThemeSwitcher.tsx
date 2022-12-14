"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <button
        type="button"
        style={{ width: "50px", height: "50px" }}
        aria-label="Light and Dark Mode Toggle Button"
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
      >
        {currentTheme === "light" ? "🌞" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
