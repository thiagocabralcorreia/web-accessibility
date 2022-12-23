import Accordion from "../Accordion";
import { Tip } from "../../typings";

const fetchTips = async () => {
  const res = await fetch(
    "https://private-67be38-eaccessibility.apiary-mock.com/tips"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Tips() {
  const response = await fetchTips();
  const data = response.body.data;

  return (
    <div className="content-container">
      <h1>Accessibility Tips</h1>

      <p className="main-text">
        According to Web Content Accessibility Guidelines (WCAG), accessibility
        involves a wide range of disabilities, including visual, auditory,
        physical, speech, cognitive, language, learning, and neurological
        disabilities. And, although it is not possible to address the needs of
        people with all types, combinations, and degrees of disability, the
        examples below can help most users.
      </p>

      <p className="main-text">
        To read in more detail about each tip, you can access the interactive
        title below to reveal an associated section of content.
      </p>
      <div className="w-full pt-14">
        <div className="w-full max-w-5xl rounded-2xl">
          {data.map((tip: Tip) => {
            return <Accordion tip={tip} key={tip.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
