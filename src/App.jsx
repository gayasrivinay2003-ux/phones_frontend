import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>

      {/* Navbar */}

      <nav
        style={{
          padding: "20px",
          backgroundColor: "black",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
      </nav>

      {/* Pages */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;