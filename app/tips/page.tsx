export default function Tips() {
  return (
    <div className="flex-1 max-w-5xl justify-center px-10 md:px-24 m-auto">
      <h1 className="text-blue-500 text-4xl lg:text-8xl md:text-6xl font-bold mb-10 md:mb-14">
        Accessibility Tips
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-10">
        According to Web Content Accessibility Guidelines (WCAG), accessibility
        involves a wide range of disabilities, including visual, auditory,
        physical, speech, cognitive, language, learning, and neurological
        disabilities. And, although it is not possible to address the needs of
        people with all types, combinations, and degrees of disability, the
        examples below can help most users.
      </p>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-10">
        To read in more detail about each tip, you can access the interactive
        title below to reveal an associated section of content.
      </p>
    </div>
  );
}
