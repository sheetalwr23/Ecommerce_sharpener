import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src="/images/aboutus.jpeg"
              alt="aboutus"
              className="about-image mb-4"
            />
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
