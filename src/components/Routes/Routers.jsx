import { Route, Routes } from "react-router-dom";
import Home from "../Layout/Home";
import Store from "../Layout/Store";
import About from "../Layout/About";
import ContactUs from "../Layout/ContactUs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
