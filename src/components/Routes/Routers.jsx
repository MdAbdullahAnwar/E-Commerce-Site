import { Route, Routes } from "react-router-dom";
import Home from "../Layout/Home";
import Store from "../Layout/Store";
import About from "../Layout/About";
import ContactUs from "../Layout/ContactUs";
import ProductPage from "../Product/ProductPage";
import AuthForm from "../Auth/AuthForm";

const Routers = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  );
};

export default Routers;
