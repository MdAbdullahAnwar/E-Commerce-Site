import React, { useState, useContext, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import WishlistModal from "./components/Wishlist/WishlistModal";
import Header from "./components/Header/Header";
import Footer from "./components/Layout/Footer";
import AuthContext from "./components/Store/AuthContext";
import UserDataManager from "./components/Store/UserDataManager";
import Loader from "./components/UI/Loader"; 
import "./App.css";

// Lazy loaded components
const AuthForm = lazy(() => import("./components/Auth/AuthForm"));
const Home = lazy(() => import("./components/Layout/Home"));
const Store = lazy(() => import("./components/Layout/Store"));
const About = lazy(() => import("./components/Layout/About"));
const ContactUs = lazy(() => import("./components/Layout/ContactUs"));
const ProductPage = lazy(() => import("./components/Product/ProductPage"));

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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/auth"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <AuthForm authMode={authMode} onToggleAuthMode={toggleAuthMode} />
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
        </Suspense>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
