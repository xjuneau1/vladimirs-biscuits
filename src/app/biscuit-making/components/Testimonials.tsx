export default function Testimonials() {
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-3xl p-2">Testimonials</h1>
      <h2 className="text-xl mt-2">Happy Customers Speak Out</h2>
      <h3 className="text-lg italic mb-2">"The proof is in the purring!"</h3>
      <ol className="flex flex-col items-center list-disc p-8 md:p-0 md:my-4">
        <li className="p-2">
          🐾 “Vladimir’s biscuits are better than belly rubs—yes, I said it!” -
          Mittens, Ragdoll
        </li>
        <li className="p-2">
          🐾 “As a discerning senior cat, I can confirm these biscuits are
          timeless.” - Mr. Snuggles, British Shorthair
        </li>
        <li className="p-2">
        🐾 “I used to ignore my human, but now I follow them everywhere when
        they have these"
        </li>
      </ol>
    </div>
  );
}
