import React from 'react';
import '../styles/features-panel.css';

export default function FeaturesPanel() {
  return (
    <aside className="features-panel">
      <div className="panel-header">
        <h3>✨ NEW FEATURES</h3>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🌙</div>
        <div className="feature-content">
          <h4>Light / Dark Theme Toggle</h4>
          <p>Seamless switch between light and dark modes.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🔥</div>
        <div className="feature-content">
          <h4>Deal of the Day</h4>
          <p>Daily exclusive offers with dynamic countdown.</p>
          <span className="new-badge">NEW</span>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🔍</div>
        <div className="feature-content">
          <h4>Smart Search</h4>
          <p>Real-time search with product suggestions.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">❤️</div>
        <div className="feature-content">
          <h4>Wishlist</h4>
          <p>Save your favorite products for later.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🔒</div>
        <div className="feature-content">
          <h4>Secure Checkout</h4>
          <p>Multiple payment options with 100% secure transactions.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">📱</div>
        <div className="feature-content">
          <h4>PWA Support</h4>
          <p>Install as app and get a native app-like experience.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🔔</div>
        <div className="feature-content">
          <h4>Live Notifications</h4>
          <p>Get updates on orders, offers & new arrivals.</p>
          <span className="new-badge">NEW</span>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">↩️</div>
        <div className="feature-content">
          <h4>Easy Returns</h4>
          <p>Hassle-free returns within 7 days return policy.</p>
        </div>
      </div>

      <div className="panel-footer">
        <h4>📖 INSTRUCTIONS</h4>
        <ol>
          <li>Extract the project folder.</li>
          <li>Open the folder in VS Code.</li>
          <li>Open terminal and run:</li>
          <li><code>npm install</code></li>
          <li><code>npm run dev</code></li>
          <li>Project will run on: <code>http://localhost:5173</code></li>
          <li>Use the theme toggle (☀️/🌙) in the header to switch between light and dark modes.</li>
        </ol>
      </div>
    </aside>
  );
}