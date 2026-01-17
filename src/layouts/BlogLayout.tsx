// Node Modules
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";
// Components
import BlogSidebar from "@/components/BlogSidebar";

const BlogLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen max-w-7xl mx-auto grid grid-cols-12 gap-8 px-4 mt-16 pb-8">
        {/* Sidebar - horizontal scroll on mobile, vertical on desktop */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-3 md:sticky md:top-20 md:self-start">
          <BlogSidebar />
        </aside>

        {/* Main content */}
        <main className="col-span-12 md:col-span-8 lg:col-span-9">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default BlogLayout;
