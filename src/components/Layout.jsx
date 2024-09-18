import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
