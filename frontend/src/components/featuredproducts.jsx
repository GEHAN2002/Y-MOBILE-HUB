import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Wireless Earbuds",
    price: 4500,
    image: "/accessories/earbuds.png",
  },
  {
    name: "Smart Watch",
    price: 12000,
    image: "/accessories/smartwatch.png",
  },
  {
    name: "Power Bank",
    price: 6500,
    image: "/accessories/powerbank.png",
  },
];

function FeaturedProducts() {
  return (
    <section style={styles.section}>
      <h2>Featured Products</h2>

      <div style={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
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

export default FeaturedProducts;