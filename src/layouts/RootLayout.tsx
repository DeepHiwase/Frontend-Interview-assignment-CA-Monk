// Node Modules
import { Outlet } from "react-router";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TailwindIndicator from "@/components/TailwindIndicator";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Header />

        <main className="grow">
          <Outlet />
        </main>

        <Footer />
      </div>
      <TailwindIndicator />
    </>
  );
};

export default RootLayout;
