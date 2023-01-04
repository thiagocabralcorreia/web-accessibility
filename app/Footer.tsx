import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="flex w-full items-center justify-center mb-3">
        <a
          title="Visit Thiago Cabral Correia's profile on GitHub"
          href="https://github.com/thiagocabralcorreia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-400 ease-out duration-500"
        >
          <FontAwesomeIcon className="h-9" icon={faGithub} />
        </a>
        <div className="mr-6" />
        <a
          title="Visit Thiago Cabral Correia's profile on LinkedIn"
          href="https://www.linkedin.com/in/thiago-cabral-correia/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-400 ease-out duration-500"
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
