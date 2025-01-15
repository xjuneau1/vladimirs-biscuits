import Process from "./components/Process";
import Testimonials from "./components/Testimonials";

export default function Learn(){
    return (
        <div className="flex flex-col justify-center w-full">
           <Process/>
           <Testimonials />
        </div>
    )
}