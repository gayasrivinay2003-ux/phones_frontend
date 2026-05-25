import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;