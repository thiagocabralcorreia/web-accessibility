import Link from "next/link";
import { links } from "../constants";
import NavLink from "./NavLink";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <div className="rounded-full bg-white">
          <h2 className="text-3xl font-bold text-blue-500 px-2 py-3">WA</h2>
        </div>
      </Link>
      <div className="flex">
        {links.map((link) => {
          return <NavLink key={link} navlink={link} />;
        })}
      </div>
    </header>
  );
}

export default Header;
