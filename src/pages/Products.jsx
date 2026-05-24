import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {

  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {

    fetch("https://phones-3.onrender.com/")
      .then((response) => response.json())
      .then((data) => {
        setPhones(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // Add Cart
  function addToCart(phone) {
    setCart([...cart, phone]);
  }

  // Remove Cart
  function removeFromCart(phone) {
    const updatedCart = cart.filter(
      (item) => item !== phone
    );

    setCart(updatedCart);
  }

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  // Search Filter
  const filteredPhones = phones.filter(
  (phone) =>
    phone &&
    phone.phone_name &&
    phone.phone_name
      .toLowerCase()
      .includes(search.toLowerCase())
);

  return (
    <div>

      {/* Top Bar */}
      <div className="top-bar">

        <h1>📱 Products Page</h1>

        <input
          type="text"
          placeholder="Search Mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <h2>🛒 Cart : {cart.length}</h2>

      </div>

      {/* Total */}
      <h2 className="total-price">
        Total Price : ₹ {totalPrice}
      </h2>

      {/* Products */}
      <div className="products-container">

        {filteredPhones.map((phone, index) => {

          const added = cart.includes(phone);

          return (
            <div
              key={index}
              className="product-card"
            >

              <h4 className="offer">
                🔥 20% OFF
              </h4>

              <img
                src={phone.image}
                alt={phone.phone_name}
                className="product-image"
              />

              <h2 className="product-name">
                {phone.phone_name}
              </h2>

              <h3 className="product-details">
                Brand : {phone.brand}
              </h3>

              <h3 className="product-details product-price">
                Price : ₹ {phone.price}
              </h3>

              <h3 className="product-details">
                RAM : {phone.ram}
              </h3>

              <h3 className="product-details">
                Storage : {phone.storage}
              </h3>

              <h3 className="rating">
                ⭐⭐⭐⭐⭐
              </h3>

              {
                added ? (
                  <div>

                    <button className="added-btn">
                      ✅ Added
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(phone)
                      }
                    >
                      ❌ Remove
                    </button>

                  </div>
                ) : (
                  <div>

                    <button
                      className="add-cart-btn"
                      onClick={() =>
                        addToCart(phone)
                      }
                    >
                      🛒 Add To Cart
                    </button>

                    <button className="buy-btn">
                      ⚡ Buy Now
                    </button>

                  </div>
                )
              }

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Products;