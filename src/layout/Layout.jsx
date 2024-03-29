import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ navbar, footer, isHomepage, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {navbar && <Navbar isHomepage={isHomepage} />}
      <div className="flex flex-col flex-grow mt-16 tablet:mt-20">
        {children}
      </div>
      {footer && <Footer />}
    </div>
  );
}

export default Layout;
