import Link from "next/link";

export default function Home() {
  return (
    <div className="content-container">
      <h1>Web Accessibility</h1>

      <p className="main-text">
        Web accessibility or eAccessibility is a social issue, essential for
        people with physical or situational disabilities, as well as users with
        low bandwidth. This inclusive practice allows provide equal access and
        equal opportunity. <b>The Internet should be for everyone.</b>
      </p>

      <p className="main-text">
        To remove barriers that can prevent someone with disability to access,
        navigate, or understand content on the Internet, is essential to design,
        develop and edit websites correctly, following{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
          className="a-link"
        >
          Web Content Accessibility Guidelines (WCAG)
        </a>
        .
      </p>

      <p className="main-text">
        If you plan to create a website with digital accessibility and a great
        user experience, visit the{" "}
        <Link href={"/tips"}>
          <span className="a-link">tips page</span>
        </Link>{" "}
        to check out 20 recommendations for making Web content more accessible.
      </p>
    </div>
  );
}
