import { Route, Routes } from "react-router-dom";
import ProductList from "../Product/ProductList";
import About from "../Layout/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/store" element={<ProductList />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
