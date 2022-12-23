import Link from "next/link";

function Header() {
  return (
    <header className="w-full h-24 flex items-center justify-between px-10 md:px-24 mb-14 md:mb-24 bg-gradient-to-r from-blue-500 to-cyan-500">
      <Link href={"/"}>
        <div className="rounded-full bg-white">
          <h1 className="text-3xl font-bold text-blue-500 px-2 py-3">WA</h1>
        </div>
      </Link>
      <div className="flex">
        <Link href={"/tips"}>
          <p className="text-xl font-bold text-white">TIPS</p>
        </Link>
        <div className="mr-10" />
        <Link href={"/about"}>
          <p className="text-xl font-bold text-white">ABOUT</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
