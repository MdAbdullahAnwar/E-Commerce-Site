import React, { useState } from "react";
import "./Home.css";

const Home = () => {

    return (
    <section className="home">
      
        {/* Hero Section */}
        <div className="hero">
            <h1>WELCOME TO MOBILEMART</h1>
            <p>YOUR ONE-STOP DESTINATION FOR PREMIUM SMARTPHONES, UNBEATABLE PRICES, AND EXCLUSIVE DEALS!</p>
            <p>FIND THE LATEST DEVICES FROM TOP BRANDS, COMPARE FEATURES, AND MAKE THE SMARTEST CHOICE.</p>

            <a href="/store" className="cta-button">EXPLORE OUR COLLECTIONS</a>
        </div>

    
        {/* Special Offers */}
        <div className="special-offers">
            <h2>🔥Special Offers 🔥</h2>
            <p>LIMITED TIME DEALS ON THE LATEST SMARTPHONES. GRAB YOURS NOW!</p>
        </div>


        {/* Best Selling Phones */}
        <div className="best-selling">
        <h2>Best Selling Phones</h2>
        <div className="product-list">
            
            <div className="product">
            <img src="https://raw.githubusercontent.com/MdAbdullahAnwar/Phone-Store-Site/refs/heads/main/PhonesImage/Apple%20iPhone%2016%20Pro%20(Desert%20Titanium%2C%20128%20GB).webp" alt="iPhone 16 Pro" />
            <p className="product-name">Apple iPhone 16 Pro</p>
            <p className="product-price">₹1,20,000</p>
            </div>

            <div className="product">
            <img src="https://raw.githubusercontent.com/MdAbdullahAnwar/Phone-Store-Site/refs/heads/main/PhonesImage/SAMSUNG%20GALAXY%20F16.webp" alt="OnePlus 13R" />
            <p className="product-name">Samsung Galaxy F16</p>
            <p className="product-price">₹15,000</p>
            </div>

            <div className="product">
            <img src="https://raw.githubusercontent.com/MdAbdullahAnwar/Phone-Store-Site/refs/heads/main/PhonesImage/realme%20P3%20Ultra%205G%20(Glowing%20Lunar%20White%2C%20256%20GB).webp" alt="Oppo K12x" />
            <p className="product-name">RealMe P3 Ultra</p>
            <p className="product-price">₹27,000</p>
            </div>

            <div className="product">
            <img src="https://raw.githubusercontent.com/MdAbdullahAnwar/Phone-Store-Site/refs/heads/main/PhonesImage/Apple%20iPhone%2016e%20(Black%2C%20128%20GB).webp" alt="Samsung Galaxy F06" />
            <p className="product-name">Apple iPhone 16e</p>
            <p className="product-price">₹60,000</p>
            </div>

        </div>
        </div>


        {/* Customer Reviews */}
        <div className="reviews">
        <h2>CUSTOMER REVIEWS</h2>
        <div className="review-grid">
            <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul Verma" />
            <p>"Great experience shopping at MobileMart! The best prices & fast delivery!"</p>
            <span>- Rahul Verma</span>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sneha Mehta" />
            <p>"Amazing customer support! Helped me pick the perfect phone."</p>
            <span>- Sneha Mehta</span>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="Amit Sharma" />
            <p>"Fantastic deals! Got my dream phone at an incredible price!"</p>
            <span>- Amit Sharma</span>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Pooja Patel" />
            <p>"Quick delivery and authentic products! Will shop again."</p>
            <span>- Pooja Patel</span>
            <div className="rating">⭐⭐⭐⭐</div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Home;
