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
import UserDataManager from "./components/Store/UserDataManager";
import "./App.css";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [wishlistIsOpen, setWishlistIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const showCartHandler = () => setCartIsOpen(true);
  const hideCartHandler = () => setCartIsOpen(false);

  const showWishlistHandler = () => setWishlistIsOpen(true);
  const hideWishlistHandler = () => setWishlistIsOpen(false);

  const toggleAuthMode = () => {
    setAuthMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <CartProvider>

      <UserDataManager />

      <Header
        showCartHandler={showCartHandler}
        showWishlistHandler={showWishlistHandler}
        isLoggedIn={isLoggedIn}
        authMode={authMode}
        onToggleAuthMode={toggleAuthMode}
      />

      {isLoggedIn && cartIsOpen && <Cart showCartHandler={hideCartHandler} />}
      {isLoggedIn && wishlistIsOpen && (
        <WishlistModal show={wishlistIsOpen} onHide={hideWishlistHandler} />
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <AuthForm
                  authMode={authMode}
                  onToggleAuthMode={toggleAuthMode}
                />
              )
            }
          />
          {isLoggedIn ? (
            <>
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/product/:productId" element={<ProductPage />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/auth" />} />
          )}
        </Routes>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
