// Node Modules
import { Link, useLocation } from "react-router";
// Custom Modules
import { cn } from "@/lib/utils";
// Components
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const Header = () => {
  const location = useLocation();

  return (
    <header className={cn("fixed z-40 top-0 left-0", "w-full")}>
      <div className="h-16 p-4 flex justify-between items-center border-b backdrop-blur-3xl">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Nav Links */}
        <NavLinks />

        {/* Profile */}
        {location.pathname !== "/register" && (
          <Button asChild>
            <Link to="/profile">Profile</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
