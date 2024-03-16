import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ header, footer, children }) {
  return (
    <div>
      {header ? <Header /> : null}
      {children}
      {footer ? <Footer /> : null}
    </div>
  );
}

export default Layout;
