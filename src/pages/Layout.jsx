import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/navbar";
import Footer from "../components/Home/Footer/footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
  );
};

export default Layout;
