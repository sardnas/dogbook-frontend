import { Outlet } from "react-router-dom";
import '../styles/NavBar.css';
import NavMenuLayout from "./NavMenuLayout";

const Layout = () => {
  return (
    <>
      <NavMenuLayout />
      <Outlet />
    </>
  )
};

export default Layout;
