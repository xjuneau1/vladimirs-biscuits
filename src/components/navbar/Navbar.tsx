import Navlinks from "./Navlinks";

export default function Navbar() {
    const links = ["Home","FAQ","Products","Learn","Contact"]
    return (
        <div className="flex justify-center bg-[#FFF5E1] border-b border-[#3E2723] p-4 md:p-8">
            <Navlinks links={links} />
        </div>
    )
}