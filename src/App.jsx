import React, { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import WishlistModal from "./components/Wishlist/WishlistModal";
import Header from "./components/Header/Header";
import Footer from "./components/Layout/Footer";
import AuthContext from "./components/Store/AuthContext";
import AuthForm from "./components/Auth/AuthForm";
import Home from "./components/Layout/Home";
import Store from "./components/Layout/Store";
import About from "./components/Layout/About";
import ContactUs from "./components/Layout/ContactUs";
import ProductPage from "./components/Product/ProductPage";
import "./App.css";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [wishlistIsOpen, setWishlistIsOpen] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const showCartHandler = () => setCartIsOpen(true);
  const hideCartHandler = () => setCartIsOpen(false);
  
  const showWishlistHandler = () => setWishlistIsOpen(true);
  const hideWishlistHandler = () => setWishlistIsOpen(false);

  return (
    <CartProvider>
      {/* Always Show Header */}
      <Header showCartHandler={showCartHandler} showWishlistHandler={showWishlistHandler} />

      {/* Cart & Wishlist Only When Logged In */}
      {isLoggedIn && (
        <>
          {cartIsOpen && <Cart showCartHandler={hideCartHandler} />}
          {wishlistIsOpen && <WishlistModal show={wishlistIsOpen} onHide={hideWishlistHandler} />}
        </>
      )}

      <main>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/auth" element={<AuthForm />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </main>

      {/* Always Show Footer */}
      <Footer />
    </CartProvider>
  );
}

export default App;
