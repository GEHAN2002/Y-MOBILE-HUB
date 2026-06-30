import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Upgrade Your<br />
            World with the<br />
            Latest <span className="highlight">Smartphones</span>
          </h1>
          <p>Explore top brands, unbeatable deals, and premium accessories – all in one place.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              🛍️ Shop Now
            </Link>
            <a href="#deals" className="btn btn-secondary">
              🎁 Explore Deals
            </a>
          </div>
        </div>
        <div className="hero-images">
          <div className="phone-showcase">
            <div className="phone phone-1">📱</div>
            <div className="phone phone-2">📱</div>
            <div className="phone phone-3">📱</div>
          </div>
        </div>
      </div>

      <div className="hero-features">
        <div className="feature">
          <span className="feature-icon">✅</span>
          <p><strong>100% Original</strong><br />Products</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⏱️</span>
          <p><strong>1 Year</strong><br />Warranty</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🚚</span>
          <p><strong>Fast & Secure</strong><br />Delivery</p>
        </div>
        <div className="feature">
          <span className="feature-icon">↩️</span>
          <p><strong>Easy Returns</strong><br />7 Days Policy</p>
        </div>
      </div>
    </section>
  );
}