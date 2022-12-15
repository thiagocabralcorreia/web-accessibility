import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 max-w-5xl justify-center px-10 md:px-24 m-auto">
      <h1 className="text-blue-500 text-4xl lg:text-8xl md:text-6xl font-bold mb-10 md:mb-14">
        Web Accessibility
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-10">
        Web accessibility or eAccessibility is a social issue, essential for
        people with physical or situational disabilities, as well as users with
        low bandwidth. This inclusive practice allows provide equal access and
        equal opportunity. <b>The Internet should be for everyone.</b>
      </p>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-10">
        To remove barriers that can prevent someone with disability to access,
        navigate, or understand content on the Internet, is essential to design,
        develop and edit websites correctly, following{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline underline-offset-1"
        >
          Web Content Accessibility Guidelines (WCAG)
        </a>
        .
      </p>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-10">
        Visit the{" "}
        <Link href={"/tips"}>
          <span className="text-blue-500 underline underline-offset-1">
            tips page
          </span>
        </Link>{" "}
        to check out 20 recommendations for making Web content more accessible.
      </p>
    </div>
  );
}
