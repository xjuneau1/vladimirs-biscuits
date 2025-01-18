
interface ProcessStep {
  title: string;
  info: string;
  quote: string;
  why: string;
  subtitle: string;
}
const process:ProcessStep[] = [
  {
    title: "Ingredient Selection",
    info: "Vladimir personally oversees the selection of fresh, natural ingredients. We use wholesome components like organic catnip, real tuna, and farm-fresh cheddar. No artificial flavors or preservatives make it past Vladimir’s discerning whiskers.",
    quote: '"Every great biscuit starts with the finest ingredients."',
    why: "Cats have sensitive tummies, and we prioritize their health with top-quality, feline-friendly ingredients.",
    subtitle: "Why It Matters:",
  },
  {
    title: "Paw-fect Kneading",
    info: "This is where Vladimir shines! Our biscuits are paw-kneaded with care to ensure the dough reaches the ideal texture. This step is essential for that irresistible crunch cats love.",
    quote: '"The secret to great biscuits? A masterful knead."',
    why: "Kneading also doubles as Vladimir’s favorite part—it’s his way of putting a little extra love into every batch.",
    subtitle: "Behind the Scenes:",
  },
  {
    title: "Baking with Care",
    info: "Once the dough is prepared, it’s carefully shaped into delightful biscuits and baked at a precise temperature. This locks in flavor while creating a perfectly crisp texture.",
    quote: '"Slow-baked to purrfection."',
    why: "We believe in baking, not frying, to keep our biscuits healthy without compromising on taste or quality.",
    subtitle: "Why It Matters:",
  },
  {
    title: "Whisker-Worthy Quality Check",
    info: "Every batch undergoes rigorous quality control, personally conducted by Vladimir. He sniffs, inspects, and, of course, tastes the biscuits to ensure they meet his high standards.",
    quote: '"Only the best biscuits get Vladimir’s paw of approval."',
    why: "Vladimir has a 99.9% approval rate—he’s quite the perfectionist!",
    subtitle: "Fun Fact:",
  },
  {
    title: "Paw-stamped Packaging",
    info: "Once the biscuits pass Vladimir’s inspection, they’re carefully packaged in eco-friendly, recyclable materials. Each package is sealed with Vladimir’s signature paw-stamp, a guarantee of authenticity and quality.",
    quote: '"From our paws to yours."',
    why: "Each order includes a handwritten note (well, paw-written) from Vladimir to show his appreciation for your support.",
    subtitle: "Customer Perk:",
  },
];

const Process:React.FC =()=> {
  return (
    <div className="flex flex-col items-center text-[#FDF6E3] w-full my-8 p-8 md:p-0">
      <h1 className="text-4xl md:text-5xl text-center font-bold p-2">
        The Biscuit-Making Process
      </h1>
      <h2 className="text-xl md:text-2xl text-center font-semibold p-2">
        From Scratch to Snack: How Vladimir Does It
      </h2>
      <ol className="flex flex-col items-center w-full md:w-1/2">
        {process.map((step, index) => {
          return (
            <li key={index} className="p-4 my-4 font-bold">
              <h1 className="text-2xl md:text-xl text-center font-semibold p-2">
                {step.title}
              </h1>
              <h2 className="text-xs md:text-sm text-center italic py-2">{step.quote}</h2>
              <span className="font-normal p-4">{step.info}</span>
              <div className="my-2">
                <div className="text-xl md:text-lg font-semibold mt-4">
                  {step.subtitle}
                </div>
                <div className="text-sm md:text-md font-normal pt-2">{step.why}</div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Process