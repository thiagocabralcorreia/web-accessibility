import Link from "next/link";
import React from "react";
import { links } from "../constants";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <div
          title="Go home page"
          className="rounded-full bg-white dark:bg-black transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 px-2 py-3">
            WA
          </h2>
        </div>
      </Link>
      <div className="flex">
        {links.map((link) => {
          return (
            <React.Fragment key={link}>
              <div className="ml-10" />
              <NavLink navlink={link} />
            </React.Fragment>
          );
        })}
        <div title="Change the theme" className="max-sm:hidden ml-10">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
