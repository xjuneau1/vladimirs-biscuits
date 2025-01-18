interface NavlinksProps {
  links: string[];
}

const Navlinks: React.FC<NavlinksProps> = ({ links }) => {
  const handleGetHref = (link: string) => {
    if (link === "Home") {
      return "/";
    } else if (link === "Learn") {
      return "/biscuit-making";
    } else {
      return `/${link.toLowerCase()}`;
    }
  };
  return (
    <ul className="flex md:ml-auto">
      {links.map((link, index) => {
        return (
          <li key={index} className="text-[#4B3F37] mx-2 md:mx-4 border-b border-[#000000]">
            <a href={handleGetHref(link)}>{link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
