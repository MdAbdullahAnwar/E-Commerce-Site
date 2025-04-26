import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import CartContext from './CartContext';

const BASE_URL = "https://crudcrud.com/api/7b552eed4269478f92f9172d0ef54060";

const UserDataManager = () => {
  const { user } = useContext(AuthContext);
  const {
    setCartItems,
    setWishlistItems,
    cartItems,
    wishlistItems,
  } = useContext(CartContext);

  const getUserKey = () => {
    if (user?.email) {
      return user.email.replace(/[@.]/g, '');
    }
    return null;
  };

  const fetchData = async () => {
    const userKey = getUserKey();
    if (!userKey) return;

    try {
      const cartRes = await axios.get(`${BASE_URL}/cart${userKey}`);
      const wishlistRes = await axios.get(`${BASE_URL}/wishlist${userKey}`);
      setCartItems(cartRes.data);
      setWishlistItems(wishlistRes.data);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  // Load user-specific data on login
  useEffect(() => {
    if (user?.email) {
      fetchData();
    }
  }, [user]);

  // Store cart and wishlist whenever they change
  useEffect(() => {
    const userKey = getUserKey();
    if (!userKey) return;

    const syncData = async () => {
      try {
        await axios.delete(`${BASE_URL}/cart${userKey}`);
        await Promise.all(cartItems.map(item => axios.post(`${BASE_URL}/cart${userKey}`, item)));

        await axios.delete(`${BASE_URL}/wishlist${userKey}`);
        await Promise.all(wishlistItems.map(item => axios.post(`${BASE_URL}/wishlist${userKey}`, item)));
      } catch (err) {
        console.error('Error syncing user data:', err);
      }
    };

    if (cartItems.length || wishlistItems.length) {
      syncData();
    }
  }, [cartItems, wishlistItems]);

  return null;
};

export default UserDataManager;
