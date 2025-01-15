interface NavlinksProps {
  links: string[];
}

const Navlinks: React.FC<NavlinksProps> = ({ links }) => {
  return (
    <ul className="flex md:ml-auto">
      {links.map((link, index) => {
        return (
          <li key={index} className="mx-4 border-b border-[#000000]">
            <a href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
