import React from "react";
import ProductList from "../Product/ProductList";
import "./Store.css";

const Store = () => {
  return (
    <section className="store-container">
      <div className="store-banner">
        <h1 className="store-title">MOBILEMART STORE</h1>
        <p className="store-subtitle">
          DISCOVER THE BEST MOBILE DEVICES AT UNBEATABLE PRICES!
        </p>
      </div>
      <ProductList />
    </section>
  );
};

export default Store;
