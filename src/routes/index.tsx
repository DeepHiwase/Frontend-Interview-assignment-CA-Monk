// Node Modules
import { createBrowserRouter } from "react-router";
// Layouts
import RootLayout from "@/layouts/RootLayout";
// Pages
import HomePage from "@/pages/HomePage";
// Types
import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: rootRouteChildren,
  },
]);

export default router;
