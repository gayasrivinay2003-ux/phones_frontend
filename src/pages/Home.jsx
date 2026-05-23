import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  return (
    <div className="home-container">

      {/* Navbar */}
      <div className="navbar">

        <h2 className="logo">
          📱 Vinay Mobile Store
        </h2>

        {/* Search */}
        <div className="search-box">

          <input
            type="text"
            placeholder="Search mobiles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>🔍</button>

        </div>

        {/* Icons */}
        <div className="nav-icons">

          <span>❤️ Wishlist</span>

          <span>🛒 Cart</span>

          <span>👤 Login</span>

        </div>

      </div>


      {/* Banner */}
      <div className="banner">

        <h1>
          Welcome to Vinay Mobile Store
        </h1>

        <p>
          Best Deals on Smartphones
        </p>

        <button
          className="shop-btn"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>

      </div>


      {/* Offers */}
      <div className="offers-section">

        <div className="offer-card">
          🔥 50% OFF on Apple Mobiles
        </div>

        <div className="offer-card">
          ⚡ Free Earbuds with OnePlus
        </div>

        <div className="offer-card">
          🎁 Exchange Offers Available
        </div>

      </div>


      {/* Categories */}
      <div className="categories">

        <div className="category-card">
          📱 Apple
        </div>

        <div className="category-card">
          📱 Samsung
        </div>

        <div className="category-card">
          📱 Vivo
        </div>

        <div className="category-card">
          📱 Oppo
        </div>

        <div className="category-card">
          📱 Realme
        </div>

      </div>


      {/* Features */}
      <div className="features">

        <div className="feature-box">

          <h3>🚚 Free Delivery</h3>

          <p>Fast delivery all over India</p>

        </div>

        <div className="feature-box">

          <h3>💳 Secure Payment</h3>

          <p>100% secure payment methods</p>

        </div>

        <div className="feature-box">

          <h3>⭐ Best Quality</h3>

          <p>Top branded smartphones</p>

        </div>

      </div>


      {/* Footer */}
      <div className="footer">

        <h2>Vinay Mobile Store</h2>

        <p>
          Best online mobile shopping website
        </p>

        <p>
          📞 +91 9392802139
        </p>

        <p>
          📧 vinaymobilestore@gmail.com
        </p>

      </div>

    </div>
  );
};

export default Home;