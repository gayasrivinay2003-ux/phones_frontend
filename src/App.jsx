import React from "react";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";

import About from "./pages/About";

import Products from "./pages/Products";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Profile from "./pages/Profile";

import ProtectedRoute from "./pages/ProtectedRoute";

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

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          About
        </Link>

        <Link
          to="/products"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Products
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Register
        </Link>

        <Link
          to="/profile"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Profile
        </Link>

      </nav>

      {/* Routes */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Products Route */}

        <Route
          path="/products"
          element={

            <ProtectedRoute>

              <Products />

            </ProtectedRoute>

          }
        />

        {/* Profile Route */}

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </div>
  );
};

export default App;