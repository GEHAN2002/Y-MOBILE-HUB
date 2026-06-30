import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import '../styles/navigation.css';

export default function Navigation() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const { getWishlistCount } = useWishlist();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">📱</span>
          Y MOBILE HUB
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop</Link>
          <a href="#brands" className="nav-link">Brands</a>
          <a href="#accessories" className="nav-link">Accessories</a>
          <a href="#deals" className="nav-link">Deals</a>
          <a href="#about" className="nav-link">About Us</a>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-search">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="nav-icons">
          <button className="icon-btn theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <Link to="/wishlist" className="icon-btn" title="Wishlist">
            ❤️
            {getWishlistCount() > 0 && <span className="badge">{getWishlistCount()}</span>}
          </Link>
          <Link to="/cart" className="icon-btn" title="Shopping Cart">
            🛒
            {getTotalItems() > 0 && <span className="badge">{getTotalItems()}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}