import React from "react";

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1>Welcome to Y-MOBILE-HUB</h1>
        <p>Best Mobile Phones & Accessories in One Place</p>
        <button style={styles.button}>Shop Now</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "400px",
    backgroundImage: "url('/banners/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#ff6600",
    color: "white",
    cursor: "pointer",
  },
};

export default Hero;