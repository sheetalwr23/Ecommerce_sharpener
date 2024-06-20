import React from "react";
import Layout from "../components/Layout/Layout";
const Pagenotfound = () => {
  return (
    <Layout title={"Page not found"}>
      <div className="pagenotfound-container">
        <h1 className="pagenotfound-title">404</h1>
        <h2 className="pagenotfound-subtitle">Oops!Page Not Found</h2>
        <p className="pagenotfound-text">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
