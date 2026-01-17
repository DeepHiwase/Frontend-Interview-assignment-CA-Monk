// Components
import Logo from "./Logo";
import { Link } from "react-router";

const FOOTER_LINKS = [
  {
    id: 1,
    column: "Resources",
    links: [
      {
        id: 1,
        title: "Blog",
        href: "#",
      },
      {
        id: 2,
        title: "Webinars",
        href: "#",
      },
      {
        id: 3,
        title: "Case Studies",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    column: "Platform",
    links: [
      {
        id: 1,
        title: "Job Board",
        href: "#",
      },
      {
        id: 2,
        title: "Practice Tests",
        href: "#",
      },
      {
        id: 3,
        title: "Mentorship",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    column: "Connect",
    links: [
      {
        id: 1,
        title: "LinkedIn",
        href: "#",
      },
      {
        id: 2,
        title: "Twitter",
        href: "#",
      },
      {
        id: 3,
        title: "Instagram",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="grid sm:grid-cols-[1fr_3fr] grid-cols-[1fr]  p-4 items-start justify-self-center">
        <div className="">
          <Logo />
        </div>
        <div>
          <table className="grid sm:grid-cols-3 grid-cols-1 gap-x-20 gap-y-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.id}>
                <thead>
                  <tr>
                    <th>{col.column}</th>
                  </tr>
                </thead>
                <tbody>
                  {col.links.map((link) => (
                    <tr key={link.id}>
                      <td className="hover:underline transition delay-150">
                        <Link to={link.href}>{link.title}</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
            ))}
          </table>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
