import React from "react";
import ProductCard from "./ProductCard";

const newProducts = [
  {
    name: "Gaming Headset",
    price: 8000,
    image: "/accessories/headset.png",
  },
  {
    name: "Fast Charging Cable",
    price: 1200,
    image: "/accessories/cable.png",
  },
  {
    name: "Phone Case Pro",
    price: 1500,
    image: "/accessories/phonecase.png",
  },
];

function NewArrivals() {
  return (
    <section style={styles.section}>
      <h2>New Arrivals</h2>

      <div style={styles.grid}>
        {newProducts.map((p, i) => (
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

export default NewArrivals;