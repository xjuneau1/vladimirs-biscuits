"use client";
import React, { useState } from "react";
interface FAQ {
  id: number;
  question: string;
  answer: string;
}
interface FAQAccordianProps {
  faqs: FAQ[];
}
const FAQAccordian: React.FC<FAQAccordianProps> = ({ faqs }) => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);
  const handleCardClick = (id: number) => {
    setActiveFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col items-center w-full text-black">
      {faqs.map((faq) => {
        return (
          <div
            key={faq.id}
            onClick={() => handleCardClick(faq.id)}
            className={`flex flex-col min-h-min cursor-pointer transition-all duration-300 ease-in-out text-center bg-white w-full ${
              faq.id === 1 ? "border-t border-b" : "border-b"
            }${faq.id === 14 ? "border-=none" : ""}`}
          >
            {activeFaqId === faq.id ? (
              <div className="flex flex-col">
                <h2 className="text-xl font-bold w-full p-4">
                  {faq.question}
                </h2>
                <div className="max-h-min p-2  md:p-6">{faq.answer}</div>
              </div>
            ) : (
              <h2 className={`text-xl p-4 font-bold ${activeFaqId === faq.id ? "": ""}`}>{faq.question}</h2>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordian;
