import Navlinks from "./Navlinks";

export default function Navbar() {
    const links = ["Home","FAQ","Products","Contact"]
    return (
        <div className="bg-[#D7CCC8] border-b border-[#3E2723]">
            <Navlinks links={links} />
        </div>
    )
}