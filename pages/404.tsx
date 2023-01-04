import Link from "next/link";

export default function PageNotFoun() {
  return (
    <div className="h-screen content-container">
      <div className="w-full h-24 flex items-center justify-between px-10 md:px-24 mb-14 md:mb-24" />
      <h1 className="text-6xl md:text-8xl">404 Error</h1>
      <p className="text-xl text-gray-700 mb-2">Sorry, page not found.</p>
      <div className="pl-1" />
      <Link href={"/"}>
        <p className="text-xl a-link">Return to homepage.</p>
      </Link>
    </div>
  );
}
