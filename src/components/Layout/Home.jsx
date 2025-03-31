import React, { useState } from "react";
import "./Home.css";

const Home = () => {

    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim() !== "") {
          setSubscribed(true);
          setEmail(""); 
        }
    };

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
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="iPhone 16 Pro" />
            <p className="product-name">iPhone 16 Pro</p>
            <p className="product-price">₹1,20,000</p>
            </div>

            <div className="product">
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" alt="OnePlus 13" />
            <p className="product-name">OnePlus 13</p>
            <p className="product-price">₹70,000</p>
            </div>

            <div className="product">
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" alt="Oppo K12x" />
            <p className="product-name">Oppo K12x</p>
            <p className="product-price">₹13,000</p>
            </div>

            <div className="product">
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" alt="Samsung Galaxy F06" />
            <p className="product-name">Samsung Galaxy F06</p>
            <p className="product-price">₹10,000</p>
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


        {/* Newsletter Signup */}
        <div className="newsletter">
            <h2>Subscribe to Our Newsletter</h2>
            {!subscribed ? (
            <>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
            </>
            ) : (
                <p className="success-message">Thank you for subscribing!</p>
            )}
        </div>

    </section>
  );
};

export default Home;
