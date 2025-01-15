import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full my-8">
      <h1 className="text-center text-3xl font-bold my-2">About Vladimir</h1>

      <div className="flex flex-col w-full items-center justify-center my-2">
        <div className="w-full md:w-1/2">
          <h2 className="text-center">
            Meet the Mastermind Behind the Biscuits
          </h2>
          <h3 className="text-center italic">
            "The only thing sharper than Vladimir’s claws is his business
            sense!"
          </h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
          <p className="my-4 text-center text-lg w-full md:w-1/2 p-8 md:p-16">
            Vladimir’s story is one of inspiration and hard work (and plenty of
            naps). As a kitten, he discovered his passion for kneading dough and
            hasn’t looked back since. Today, he’s the proud CEO, Head Biscuit
            Designer, and Quality Control Officer of Vladimir’s Biscuit
            Business. Every recipe is tested and approved by Vladimir himself
            (trust us, he’s very picky).
          </p>

          <Image
            src="/business-cat.webp"
            alt=""
            width={300}
            height={300}
            className="rounded-full mt-8 md:mt-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center my-4">
        <h2 className="text-2xl font-bold">Vladimir’s Promise</h2>
        <ul className="flex flex-col items-center list-disc text-sm md:text-lg">
          <li>Freshly made biscuits, no shortcuts!</li>
          <li>Only the finest ingredients for your feline friends.</li>
          <li>100% whisker-approved products.</li>
        </ul>
      </div>
      <div className="flex flex-col items-center my-2">
        <h2 className="text-xl font-semibold">Fun Fact!</h2>
        <p className="text-center">
          Vladimir insists on paw-stamping every package to ensure authenticity
          (or so he claims).
        </p>
      </div>
    </div>
  );
}
