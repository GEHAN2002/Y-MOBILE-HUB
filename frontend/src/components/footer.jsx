import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Y-MOBILE-HUB. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#111",
    color: "white",
  },
};

export default Footer;