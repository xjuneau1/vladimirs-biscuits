import Image from "next/image";
export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full h-full p-4 md:p-12 text-[#4E342E]">
      
      <div className="flex flex-col justify-center items-center md:w-1/2">
        
        <div className="flex w-full">
          <div className="animate-wiggle">
            <Image
              src="/vlad1.png"
              alt="picture of the owner/operator"
              width={300}
              height={500}
            />
          </div>
          <div className="animate-wiggle">
            <Image
              src="/vlad1.png"
              alt="picture of the owner/operator"
              width={300}
              height={500}
              className="transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden border">
        <Image
          src="/cat-prints.webp" // Replace with your actual image path
          alt="Background for text section"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <p className="relative z-10 text-center p-12 md:p-24 bg-opacity-70 bg-[#D7CCC8]">
          At Vladimir’s Biscuit Business, every treat is made with love, care, and
          just the right amount of paw-sitivity. Whether you’re looking for a
          snack for your furry overlord or something to make them feel extra
          special, we’ve got biscuits that are the cat’s whiskers!
        </p>
      </div>
    </div>
  );
}
