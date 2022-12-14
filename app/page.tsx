export default function Home() {
  return (
    <div className="flex-1 max-w-screen-sm justify-center mx-auto">
      <h1 className="text-center text-blue-400 text-6xl font-sans font-bold m-12">
        Web Accessibility
      </h1>

      <p className="text-xl mb-10">
        Web accessibility or eAccessibility is a social issue, essential for
        people with physical or situational disabilities, as well as users with
        low bandwidth. This inclusive practice allows provide equal access and
        equal opportunity. <b>The Internet should be for everyone.</b>
      </p>

      <p className="text-xl mb-10">
        To remove barriers that can prevent someone with disability to access,
        navigate, or understand content on the Internet, is essential to design,
        develop and edit websites correctly, following{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG)
        </a>
        .
      </p>
    </div>
  );
}