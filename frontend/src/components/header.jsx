import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Y-MOBILE-HUB</div>

      <nav style={styles.nav}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/accessories">Accessories</a>
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#111",
    color: "white",
    alignItems: "center",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
};

export default Header;