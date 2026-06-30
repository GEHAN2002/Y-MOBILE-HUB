import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">📱 Y-MOBILE-HUB</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}