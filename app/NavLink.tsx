import Link from "next/link";
import { NavLinkType } from "../typings";

interface NavLinkProps {
  navlink: NavLinkType;
}

function NavLink({ navlink }: NavLinkProps) {
  return (
    <Link href={`/${navlink}`}>
      <p className="nav-link">{navlink}</p>
    </Link>
  );
}

export default NavLink;
