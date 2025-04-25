import React, { useState, useEffect, useContext, useCallback } from "react";
import CartContext from "./CartContext";
import AuthContext from "../Store/AuthContext";

const API_BASE = "https://crudcrud.com/api/37a3d2b8afcb4f0fbb86e28b06d3d419";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  // Get fresh sanitized email from auth context
  const getSanitizedEmail = useCallback(() => {
    return authCtx.email ? authCtx.email.replace(/[@.]/g, "") : "guest";
  }, [authCtx.email]);

  // Load user-specific data
  const loadUserData = useCallback(async (userEmail) => {
    setIsLoading(true);
    try {
      const [cartRes, wishlistRes] = await Promise.all([
        fetch(`${API_BASE}/cart${userEmail}`),
        fetch(`${API_BASE}/wishlist${userEmail}`)
      ]);

      const cartData = cartRes.ok ? await cartRes.json() : [];
      const wishlistData = wishlistRes.ok ? await wishlistRes.json() : [];

      setItems(cartData.length > 0 ? cartData[0].cartItems || [] : []);
      setWishlist(wishlistData.length > 0 ? wishlistData[0].items || [] : []);
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle user changes
  useEffect(() => {
    const userEmail = getSanitizedEmail();
    
    // Clear previous user's data immediately
    setItems([]);
    setWishlist([]);
    
    // Load new user's data
    loadUserData(userEmail);

    return () => {
      // Cleanup on unmount or before next effect runs
      setItems([]);
      setWishlist([]);
    };
  }, [authCtx.email, getSanitizedEmail, loadUserData]);

  // Sync functions that always use current user's email
  const syncCartWithBackend = useCallback(async (cartItems) => {
    const userEmail = getSanitizedEmail();
    try {
      const res = await fetch(`${API_BASE}/cart${userEmail}`);
      const data = await res.json();

      if (data.length > 0) {
        await fetch(`${API_BASE}/cart${userEmail}/${data[0]._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems }),
        });
      } else {
        await fetch(`${API_BASE}/cart${userEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems }),
        });
      }
    } catch (error) {
      console.error("Cart sync error:", error);
    }
  }, [getSanitizedEmail]);

  const syncWishlistWithBackend = useCallback(async (wishlistItems) => {
    const userEmail = getSanitizedEmail();
    try {
      const res = await fetch(`${API_BASE}/wishlist${userEmail}`);
      const data = await res.json();

      if (data.length > 0) {
        await fetch(`${API_BASE}/wishlist${userEmail}/${data[0]._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: wishlistItems }),
        });
      } else {
        await fetch(`${API_BASE}/wishlist${userEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: wishlistItems }),
        });
      }
    } catch (error) {
      console.error("Wishlist sync error:", error);
    }
  }, [getSanitizedEmail]);

  // Cart operations
  const addItemToCartHandler = useCallback(async (item) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(i => i.id === item.id);
      const updatedItems = existingIndex >= 0
        ? prev.map((i, idx) => 
            idx === existingIndex ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...item, quantity: 1 }];
      
      syncCartWithBackend(updatedItems);
      return updatedItems;
    });
  }, [syncCartWithBackend]);

  const removeItemFromCartHandler = useCallback(async (id) => {
    setItems(prev => {
      const updatedItems = prev.filter(item => item.id !== id);
      syncCartWithBackend(updatedItems);
      return updatedItems;
    });
  }, [syncCartWithBackend]);

  const updateItemQuantityHandler = useCallback(async (id, amount) => {
    setItems(prev => {
      const updatedItems = prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
        .filter(item => item.quantity > 0);
      
      syncCartWithBackend(updatedItems);
      return updatedItems;
    });
  }, [syncCartWithBackend]);

  // Wishlist operations
  const addToWishlistHandler = useCallback(async (item) => {
    setWishlist(prev => {
      if (!prev.some(i => i.id === item.id)) {
        const updatedWishlist = [...prev, item];
        syncWishlistWithBackend(updatedWishlist);
        return updatedWishlist;
      }
      return prev;
    });
  }, [syncWishlistWithBackend]);

  const removeFromWishlistHandler = useCallback(async (id) => {
    setWishlist(prev => {
      const updatedWishlist = prev.filter(item => item.id !== id);
      syncWishlistWithBackend(updatedWishlist);
      return updatedWishlist;
    });
  }, [syncWishlistWithBackend]);

  const clearCartHandler = useCallback(async () => {
    setItems([]);
    await syncCartWithBackend([]);
  }, [syncCartWithBackend]);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        wishlist,
        isLoading,
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