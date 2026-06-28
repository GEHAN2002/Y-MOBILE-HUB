import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={styles.item}>
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#fff",
    marginBottom: "10px",
  },
};

export default Cart;