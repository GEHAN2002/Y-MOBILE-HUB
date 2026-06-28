import React from "react";

const categories = [
  { name: "Chargers", img: "/accessories/charger.png" },
  { name: "Earbuds", img: "/accessories/earbuds.png" },
  { name: "Smart Watches", img: "/accessories/smartwatch.png" },
  { name: "Power Banks", img: "/accessories/powerbank.png" },
  { name: "Cables", img: "/accessories/cable.png" },
  { name: "Headsets", img: "/accessories/headset.png" },
];

function Categories() {
  return (
    <section style={styles.section}>
      <h2>Categories</h2>

      <div style={styles.grid}>
        {categories.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.img} alt={item.name} style={styles.img} />
            <p>{item.name}</p>
          </div>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  img: {
    width: "60px",
    height: "60px",
  },
};

export default Categories;