import Link from "next/link";

export default function PageNotFoun() {
  return (
    <div className="h-screen flex-1 max-w-5xl justify-center px-10 md:px-24 m-auto">
      <div className="w-full h-24 flex items-center justify-between px-10 md:px-24 mb-14 md:mb-24" />
      <h1 className="text-blue-500 self-auto text-6xl md:text-8xl font-bold mb-10 md:mb-14">
        404 Error
      </h1>
      <p className="text-xl text-gray-700 mb-2">Sorry, page not found.</p>
      <div className="pl-1" />
      <Link href={"/"}>
        <p className="text-xl text-blue-500 underline underline-offset-1 hover:text-indigo-500">
          Return to homepage.
        </p>
      </Link>
    </div>
  );
}
