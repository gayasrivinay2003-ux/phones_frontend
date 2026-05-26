import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [profile, setProfile] =
    useState(null);

  const navigate = useNavigate();

  function handleRegister(e) {

    e.preventDefault();

    // FormData
    const formData =
      new FormData();

    formData.append(
      "name",
      name
    );

    formData.append(
      "email",
      email
    );

    formData.append(
      "password",
      password
    );

    formData.append(
      "profile",
      profile
    );

    fetch(
      "https://phones-3.onrender.com/register",
      {

        method: "POST",

        body: formData,

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

          localStorage.setItem(

            "user",

            JSON.stringify(data.user)

          );

          navigate("/profile");

        }

      })

      .catch((error) => {

        console.log(error);

        alert("Something went wrong");

      });
  }

  return (

    <div className="register-page">

      <div className="register-card">

        <h1 className="register-title">
          Register
        </h1>

        <form
          className="register-form"
          onSubmit={handleRegister}
        >

          <input
            className="register-input"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="register-input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            className="register-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {/* IMAGE INPUT */}
          <input
            type="file"
            onChange={(e) =>
              setProfile(
                e.target.files[0]
              )
            }
          />

          <button
            className="register-btn"
            type="submit"
          >

            Register

          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;