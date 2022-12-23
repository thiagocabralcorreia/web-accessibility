export default function About() {
  return (
    <div className="flex-1 max-w-5xl justify-center px-10 md:px-24 m-auto">
      <h1 className="text-blue-500 text-4xl lg:text-8xl md:text-6xl font-bold mb-10 md:mb-14">
        About
      </h1>

      <p className="text-xl text-gray-700 mb-8 md:mb-10">
        This project was developed in order to achieve theoretical knowledge and
        practical application of web accessibility. For this purpose, good
        practices were followed, such as use of contrast, readable content,
        visual hierarchy, alternative theme, featured links, understandable
        interface and easy navigation, compatible with mouse or keyboard.
      </p>

      <p className="text-xl text-gray-700 mb-8 md:mb-10">
        If you want to know more about building this website, fork this project
        on{" "}
        <a
          href="https://github.com/thiagocabralcorreia/web-accessibility"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline underline-offset-1 hover:text-indigo-500"
        >
          GitHub
        </a>{" "}
        and feel free to explore the code.
      </p>
    </div>
  );
}
