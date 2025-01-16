import FAQAccordian from "./components/FAQAccordian";
import faqs from "../../../public/faqs.json";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col bg-white rounded-lg w-11/12 md:w-3/4 my-16">
        <h1 className="text-center text-3xl text-black p-8">Explore our FAQs below!</h1>
        <FAQAccordian faqs={faqs} />
      </div>
    </div>
  );
}
