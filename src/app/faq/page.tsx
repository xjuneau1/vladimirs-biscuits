import FAQAccordian from "./components/FAQAccordian";
import faqs from "../../../public/faqs.json";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col items-center p-2 my-8 text-white">
        <h1 className="text-2xl p-4">Welcome to our FAQ page!</h1>
        <p className="text-center">Here we have selected a handful of common questions Vladimir receives in regards to his biscuits, let us know if you have any further questions!</p>
      </div>
      <div className="flex flex-col bg-white rounded-lg w-full sm:h-[900px] md:h-[1000px] lg:h-[960px] md:w-3/4 mt-8">
        <h1 className="text-center text-3xl text-black p-8">Click or tap the FAQs below!</h1>
        <FAQAccordian faqs={faqs} />
      </div>
      <div className="flex flex-col w-full items-center text-white p-8 my-12">
        <h1 className="text-xl p-2 my-2">Still have questions?</h1>
        <a className="p-2 my-2 border" href="/contact">Contact Us</a>
      </div>
    </div>
  );
}
