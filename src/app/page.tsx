import About from "@/components/home/About";
import Intro from "@/components/home/Intro";
import ShopButton from "@/components/home/ShopButton";
import Header from "@/components/home/Header";
export default function Home() {
  return (
    <div className="text-white flex flex-col items-center">
      <Header />
      <Intro />
      <ShopButton />
      <About />
    </div>
  );
}
