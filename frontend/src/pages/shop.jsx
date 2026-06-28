import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { name: "iPhone Case", price: 1500, image: "/accessories/phonecase.png" },
  { name: "Wireless Earbuds", price: 4500, image: "/accessories/earbuds.png" },
  { name: "Power Bank", price: 6500, image: "/accessories/powerbank.png" },
  { name: "Smart Watch", price: 12000, image: "/accessories/smartwatch.png" },
  { name: "USB Cable", price: 1200, image: "/accessories/cable.png" },
];

function Shop() {
  return (
    <div style={styles.container}>
      <h1>Shop Products</h1>

      <div style={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};

export default Shop;