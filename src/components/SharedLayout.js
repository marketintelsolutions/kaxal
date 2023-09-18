import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
