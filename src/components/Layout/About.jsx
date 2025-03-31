import "./About.css";
import MobileMart from "../../assets/PhonesImage/MobileMart.png";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="about-header">
          <h1 className="about-title">ABOUT MOBILEMART</h1>
          <p className="about-subtitle">
            YOUR TRUSTED DESTINATION FOR HIGH-QUALITY SMARTPHONES & THE LATEST TECH!
          </p>
        </div>

      <section id="about">
        <div className="about-content">
          <img src={MobileMart} alt="MobileMart" className="about-image" />
          
          <p className="about-text">
            Welcome to <strong>MobileMart!</strong> We are committed to providing high-quality mobile phones at the best prices.
            Our team ensures the latest gadgets are available for you.
          </p>    

          <p className="about-text">
            At <strong>MobileMart</strong>, we prioritize customer satisfaction by offering a seamless shopping experience, 
            secure payment options, and fast delivery. Our expert support team is always ready to assist you in choosing the perfect device that fits your needs.
          </p>

          <p className="about-text">
            Explore our wide range of smartphones from top brands, enjoy exclusive discounts, 
            and stay ahead with the latest technology – all at <strong>MobileMart!</strong>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
