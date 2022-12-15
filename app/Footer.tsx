import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="w-full items-center justify-center py-8 px-10 md:px-24 mt-24 bg-stone-200">
      <div className="flex w-full items-center justify-center mb-3">
        <a
          href="https://github.com/thiagocabralcorreia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 ease-out duration-500"
        >
          <FontAwesomeIcon className="h-9 pr-6" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-cabral-correia/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 ease-out duration-500"
        >
          <FontAwesomeIcon className="h-9" icon={faLinkedin} />
        </a>
      </div>
      <p className="text-xl text-center">
        © 2022 | WA | Next.js project by Thiago Cabral Correia
      </p>
    </footer>
  );
}

export default Footer;
