import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Y-MOBILE-HUB</h1>
          <p>Your one-stop destination for premium mobile devices and accessories</p>
          <Link to="/products" className="cta-button">
            Explore Products
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Best Prices</h3>
            <p>Get the best deals on all mobile devices and accessories</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery to your doorstep</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💯</div>
            <h3>Quality Assured</h3>
            <p>All products are genuine and quality tested</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Customer Support</h3>
            <p>24/7 customer support for all your needs</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Shop?</h2>
        <p>Browse our latest collection of mobile devices</p>
        <Link to="/products" className="cta-button-secondary">
          View All Products
        </Link>
      </section>
    </div>
  );
}