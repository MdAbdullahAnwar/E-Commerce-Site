import React, { useState, Suspense } from "react";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import WishlistModal from "./components/Wishlist/WishlistModal";
import Header from "./components/Header/Header";
import Footer from "./components/Layout/Footer";
import UserDataManager from "./components/Store/UserDataManager";
import Loader from "./components/UI/Loader";
import Routers from "./components/Routes/Routers";
import "./App.css";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [wishlistIsOpen, setWishlistIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const toggleAuthMode = () => {
    setAuthMode(prev => prev === "login" ? "signup" : "login");
  };

  return (
    <CartProvider>
      <UserDataManager />
      <Header
        showCartHandler={() => setCartIsOpen(true)}
        showWishlistHandler={() => setWishlistIsOpen(true)}
        authMode={authMode}
        onToggleAuthMode={toggleAuthMode}
      />

      {/* Modals */}
      {cartIsOpen && <Cart showCartHandler={() => setCartIsOpen(false)} />}
      {wishlistIsOpen && (
        <WishlistModal show={wishlistIsOpen} onHide={() => setWishlistIsOpen(false)} />
      )}

      <main>
        <Suspense fallback={<Loader />}>
          <Routers authMode={authMode} onToggleAuthMode={toggleAuthMode} />
        </Suspense>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;