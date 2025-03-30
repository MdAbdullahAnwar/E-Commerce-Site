import React from "react";

const CartContext = React.createContext({
  items: [],
  wishlist: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateItemQuantity: (id, amount) => {},
  addToWishlist: (item) => {},
  removeFromWishlist: (id) => {},
  clearCart: () => {},
  totalAmount: 0,
});

export default CartContext;
