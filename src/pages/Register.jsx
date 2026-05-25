import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Register = () => {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  function handleRegister(e) {

    e.preventDefault();

    fetch(
      "https://phones-3.onrender.com/register",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          name,
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

        alert(data.message);

        if (
          data.message ===
          "User registered successfully"
        ) {

          navigate("/login");

        }

      })

      .catch((error) => {

        console.log(error);

        alert("Something went wrong");

      });
  }

  return (
    <div>

      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

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
          Register
        </button>

      </form>

    </div>
  );
};

export default Register;