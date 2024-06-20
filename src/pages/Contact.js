import React from "react";
import Layout from "../components/Layout/Layout";
import contactImage from "../images/contact.png";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-grid">
            <img src={contactImage} alt="Contact" className="contact-image" />
            <div className="contact-text">
              <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
              <p className="text-justify mt-2">
                Any query and info about product feel free to call anytime we
                are 24x7 available
              </p>
              <p className="mt-3">
                <BiMailSend /> : www.help@ecommerceapp.com
              </p>
              <p className="mt-3">
                <BiPhoneCall /> : 012-3456789
              </p>
              <p className="mt-3">
                <BiSupport /> : 1800-0000-0000 (toll free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
