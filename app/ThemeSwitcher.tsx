"use client";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  function toggleTheme() {
    currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <Switch
      checked={currentTheme === "light" ? false : true}
      onChange={toggleTheme}
      className={`${
        currentTheme === "light"
          ? "max-sm:bg-blue-500 bg-sky-600"
          : "max-sm:bg-blue-900 bg-sky-900"
      }
      relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${
          currentTheme === "light" ? "translate-x-0" : "translate-x-9"
        }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}

export default ThemeSwitcher;
