import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>

      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  img: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#111",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductCard;