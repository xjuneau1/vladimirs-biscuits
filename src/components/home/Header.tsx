import GradientText from "@/components/effects/GradientText";

export default function Header() {
  return (
    <div className="w-full">
      <div className="my-4 md:my-8">
        <GradientText>Welcome to Vladimir's Biscuit Business!</GradientText>
      </div>
      <h2 className="text-sm md:text-lg italic font-semibold text-center">
        "Biscuits so good, you’ll wish you had nine lives to enjoy them all!"
      </h2>
    </div>
  );
}
