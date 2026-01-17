import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const HomePage = () => {
  return <div className="flex justify-center items-center w-full min-h-screen">
    <Button asChild>
      <Link to={"/blogs/1"}>
        Blogs
      </Link>
    </Button>
  </div>;
};

export default HomePage;
