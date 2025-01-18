import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Image from "next/image";
export default function Learn(){
    return (
        <div className="flex flex-col justify-center w-full">
           <Process/>
           <div className="flex flex-col-reverse md:flex-row flex-wrap justify-center items-center my-16">
           <Testimonials />
           <Image src="/vlad-biscuits.webp" alt="vladimir making biscuits" width={250} height={250} className="rounded-full md:h-[400px] md:w-[400px] mb-8 md:mb-0"/>
           </div>
        </div>
    )
}