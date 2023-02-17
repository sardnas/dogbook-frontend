import { Outlet } from "react-router-dom";
import '../styles/NavBar.css';
import NavMenuLayout from "./NavMenuLayout";
import React from "react";

const Layout = () => {
  return (
    <>
      <NavMenuLayout />
      <Outlet />
    </>
  )
};

export default Layout;
