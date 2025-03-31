import { Route, Routes } from "react-router-dom";
import Home from "../Layout/Home";
import Store from "../Layout/Store";
import About from "../Layout/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
