import Image from "next/image";
export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 ">
      
      <div className="flex flex-col items-center md:w-1/2">
        <h1 className="text-2xl font-extrabold text-center">Welcome to Vladimir's Biscuit Business!</h1>
        <h2 className="italic font-semibold text-center">
          "Biscuits so good, you’ll wish you had nine lives to enjoy them all!"
        </h2>
        <Image src="/vlad1.png" alt="picture of the owner/operator" width={300} height={500}/> 
      </div>
      
      <p className="text-center border rounded-lg p-4 md:w-1/2">
        At Vladimir’s Biscuit Business, every treat is made with love, care, and
        just the right amount of paw-sitivity. Whether you’re looking for a
        snack for your furry overlord or something to make them feel extra
        special, we’ve got biscuits that are the cat’s whiskers!
      </p>
    </div>
  );
}
