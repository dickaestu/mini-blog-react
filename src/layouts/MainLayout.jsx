import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
