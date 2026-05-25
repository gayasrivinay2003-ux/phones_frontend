import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  function handleLogin(e) {

    e.preventDefault();

    fetch(
      "https://phones-3.onrender.com/login",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),

      }
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        console.log(data);

        // Save Token
        localStorage.setItem(
          "token",
          data.token
        );

        alert("Login Success");

        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="login-title">Login</h1>

        <form className="login-form" onSubmit={handleLogin}>

          <input
            className="login-input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">Login</button>

        </form>

      </div>
    </div>
  );
};

export default Login;