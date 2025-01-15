import About from "@/components/navbar/home/About";
import Intro from "@/components/navbar/home/Intro";
import ShopButton from "@/components/navbar/home/ShopButton";
import Header from "@/components/navbar/home/Header";
export default function Home() {
  return (
    <div className="text-white flex flex-col items-center w-screen">
      <Header />
      <Intro />
      <ShopButton />
      <About />
    </div>
  );
}
