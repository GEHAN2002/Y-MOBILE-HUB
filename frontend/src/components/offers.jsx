import React from "react";

function Offers() {
  return (
    <section style={styles.section}>
      <div style={styles.box}>
        <h2>🔥 Special Offer</h2>
        <p>Up to 30% OFF on all accessories this week!</p>
        <button style={styles.button}>Grab Deal</button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
  },
  box: {
    backgroundColor: "#111",
    color: "white",
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#ff6600",
    color: "white",
    cursor: "pointer",
  },
};

export default Offers;