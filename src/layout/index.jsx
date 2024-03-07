import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
