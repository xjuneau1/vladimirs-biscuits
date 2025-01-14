interface NavlinksProps {
  links: string[];
}

const Navlinks: React.FC<NavlinksProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => {
        return (
          <li key={index}>
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
