// Node Modules
import { createBrowserRouter } from "react-router";
// Layouts
import RootLayout from "@/layouts/RootLayout";
// Pages
import HomePage from "@/pages/HomePage";
// Types
import type { RouteObject } from "react-router";
import RootErrorBoundary from "@/pages/RootErrorBoundary";
import BlogLayout from "@/layouts/BlogLayout";
import BlogDetailPage from "@/pages/BlogDetailPage";
import blogDetailLoader from "./loaders/blogDetailLoader";

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
];

const blogRouteChildren: RouteObject[] = [
  {
    path: ":blogId",
    element: <BlogDetailPage />,
    loader: blogDetailLoader,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,
  },
  {
    path: "/blogs",
    element: <BlogLayout />,
    children: blogRouteChildren,
  },
]);

export default router;
