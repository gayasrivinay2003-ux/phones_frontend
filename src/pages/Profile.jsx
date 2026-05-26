import React from "react";

const Profile = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        No User Found
      </h1>

    );
  }

  return (

    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >

      <h1>Profile Page</h1>

      <img

        src={`https://phones-3.onrender.com/uploads/${user.profile}`}

        alt="profile"

        width="200"

        height="200"

        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}

      />

      <h2>{user.name}</h2>

      <h3>{user.email}</h3>

    </div>
  );
};

export default Profile;