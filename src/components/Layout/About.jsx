import "./About.css";
import MobileMart from "../../assets/PhonesImage/MobileMart.png";

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      <div>
        <img src={MobileMart} alt="MobileMart" />
        
        <p>Welcome to MobileMart! We are committed to providing high-quality mobile phones at the best prices. Our team ensures the latest gadgets are available for you.</p>    

        <p>At MobileMart, we prioritize customer satisfaction by offering a seamless shopping experience, secure payment options, and fast delivery. Our expert support team is always ready to assist you in choosing the perfect device that fits your needs.</p>

        <p>Explore our wide range of smartphones from top brands, enjoy exclusive discounts, and stay ahead with the latest technology – all at MobileMart!</p>
      </div>
    </section>
  );
};

export default About;
