import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);



  // Add item to cart or update quantity
  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
          // If item exists, update quantity properly (increase by 1)
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1, // Increase by 1 only
          };
          return updatedItems;
      }
  
      // If new item, add with quantity 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };


    
  // Remove item from cart completely
  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };



  // Update item quantity (+ or -)
  const updateItemQuantityHandler = (id, amount) => {
    setItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
          // If quantity is 0, the item is NOT added to `acc` (which removes it)
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };
  


  // Add to wishlist
  const addToWishlistHandler = (item) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((wishlistItem) => wishlistItem.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };



  // Remove from wishlist
  const removeFromWishlistHandler = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };



  // Clear the entire cart after a purchase
  const clearCartHandler = () => {
    setItems([]); // Empty the cart
  };


  
  // Calculate total amount correctly
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  


  
  return (
    <CartContext.Provider
      value={{
        items,
        wishlist,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateItemQuantity: updateItemQuantityHandler,
        addToWishlist: addToWishlistHandler,
        removeFromWishlist: removeFromWishlistHandler,
        clearCart: clearCartHandler,
        totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
