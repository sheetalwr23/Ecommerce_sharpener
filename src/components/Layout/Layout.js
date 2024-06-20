import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Helmet from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="layout-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main className="main-content">
        {<Toaster />}
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app - shop",
  description: "Mern stack project",
  keyword: "mern react mongodb nodejs",
  author: "Sheetal",
};
export default Layout;
