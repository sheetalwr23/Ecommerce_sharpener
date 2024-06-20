import React from "react";
import Layout from "./../components/Layout/Layout";
import privacyImage from "../images/privacy.jpeg";

const PrivacyPolicy = () => {
  return (
    <Layout title={"Privacy Policy - Ecommer app"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* <h1 className="privacy-title">Privacy Policy</h1> */}
            <img src={privacyImage} alt="Privacy" className="privacy-image" />
            <p className="privacy-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
