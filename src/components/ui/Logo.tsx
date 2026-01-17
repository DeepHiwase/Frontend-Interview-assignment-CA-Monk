// Custom Modules
import { cn } from "@/lib/utils";
// Assets
import { logo } from "@/assets";

const Logo = () => {
  return (
    <div className={cn("flex items-center gap-3", "font-semibold text-lg")}>
      <img src={logo} alt="CA Monk" className="size-6 object-cover " />
      CA Monk
    </div>
  );
};

export default Logo;
