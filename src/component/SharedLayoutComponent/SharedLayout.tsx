import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../NavbarComponent/NavbarComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <FooterComponent />
    </>
  );
};
export default SharedLayout;
