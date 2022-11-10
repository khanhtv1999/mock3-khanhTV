import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../NavbarComponent/NavbarComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import SidebarMobile from "../SidebarMobileComponent/SidebarMobile";

const SharedLayout = () => {
  return (
    <>
      <SidebarMobile />
      <Navbar />
      <Outlet />
      <FooterComponent />
    </>
  );
};
export default SharedLayout;
