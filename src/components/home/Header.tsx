import GradientText from "@/components/effects/GradientText";

export default function Header() {
  return (
    <div className="w-full">
      <div className="my-4 md:my-24">
        {/* <GradientText>Welcome to Vladimir's Biscuit Business!</GradientText> */}
        <h1
          className="text-5xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-yellow-500
                    font-semibold p-2 my-8  
                    drop-shadow-[-4px_4px_0px_rgba(0,0,0,0.5)] 
                    transform rotate-4 skew-x-6
                    animate-pulse
                    "
        >
          Welcome to Vladimir's Biscuit Business!
        </h1>
      </div>
      <h2 className="text-sm md:text-lg italic font-semibold text-center">
        "Biscuits so good, you’ll wish you had nine lives to enjoy them all!"
      </h2>
    </div>
  );
}
