// Node Modules
import { isRouteErrorResponse, useRouteError, Link } from "react-router";
// Components
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="grow container pt-32 pb-12 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-semibold sm:text-4xl">
          {isRouteErrorResponse(error)
            ? "Hmmm, that page doesn't exists."
            : "Something went wrong"}
        </h1>

        <p
          className="max-w-[55ch] mt-4 mb-6
            text-muted-foreground text-center
            sm:text-lg"
        >
          {isRouteErrorResponse(error)
            ? "You can get back on track and manage your tasks with ease."
            : "We're working on fixing this issue. Please try again later."}
        </p>

        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default RootErrorBoundary;
