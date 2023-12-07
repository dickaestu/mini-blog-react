import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="h-screen"></div>
      <Footer />
    </>
  );
};

export default MainLayout;
