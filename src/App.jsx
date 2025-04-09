import React, { useState } from "react";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import WishlistModal from "./components/Wishlist/WishlistModal";
import Header from "./components/Header/Header";
import Routers from "./components/Routes/Routers";
import Footer from "./components/Layout/Footer";
import "./App.css";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [wishlistIsOpen, setWishlistIsOpen] = useState(false);

  const showCartHandler = () => setCartIsOpen(true);
  const hideCartHandler = () => setCartIsOpen(false);

  const showWishlistHandler = () => setWishlistIsOpen(true);
  const hideWishlistHandler = () => setWishlistIsOpen(false);

  return (
    <CartProvider>
      {cartIsOpen && <Cart showCartHandler={hideCartHandler} />}
      {wishlistIsOpen && <WishlistModal show={wishlistIsOpen} onHide={hideWishlistHandler} />}
      
      <Header 
        showCartHandler={showCartHandler} 
        showWishlistHandler={showWishlistHandler} 
      />
      
      {/* Routing System */}
      <Routers />


      <Footer />

    </CartProvider>
  );
}

export default App;
