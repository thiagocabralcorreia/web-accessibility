export default function About() {
  return (
    <div className="content-container">
      <h1>About</h1>

      <p className="main-text">
        This project was developed in order to achieve theoretical knowledge and
        practical application of web accessibility. For this purpose, good
        practices were followed, such as use of contrast, readable content,
        visual hierarchy, alternative theme, featured links, understandable
        interface and easy navigation, compatible with mouse or keyboard.
      </p>

      <p className="main-text">
        If you want to know more about building this website, fork this project
        on{" "}
        <a
          href="https://github.com/thiagocabralcorreia/web-accessibility"
          target="_blank"
          rel="noopener noreferrer"
          className="a-link"
        >
          GitHub
        </a>{" "}
        and feel free to explore the code.
      </p>
    </div>
  );
}
