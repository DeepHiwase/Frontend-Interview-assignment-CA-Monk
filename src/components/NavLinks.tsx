import { Link } from "react-router";
import { Button } from "./ui/button";

type NavLink = {
  id: number;
  title: string;
  href: string;
};

const NavLinksInfo: NavLink[] = [
  {
    id: 1,
    title: "Tool",
    href: "#",
  },
  {
    id: 2,
    title: "Practice",
    href: "#",
  },
  {
    id: 3,
    title: "Events",
    href: "#",
  },
  {
    id: 4,
    title: "Job Board",
    href: "#",
  },
  {
    id: 5,
    title: "Points",
    href: "#",
  },
];

const NavLinks = () => {
  return (
    <nav className="hidden sm:flex md:gap-2">
      {NavLinksInfo.map(({ id, href, title }) => (
        <Button asChild key={id} variant={"ghost"}>
          <Link to={href}>{title}</Link>
        </Button>
      ))}
    </nav>
  );
};

export default NavLinks;
