import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <Outlet />
    </>
  );
};

export default RootLayout;