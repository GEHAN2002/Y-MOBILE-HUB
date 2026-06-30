import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import '../styles/product-card.css';

export default function ProductCard({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image">{product.image}</div>
        <button
          className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          title="Add to wishlist"
        >
          ❤️
        </button>
        {product.discount && (
          <div className="discount-badge">{product.discount}% OFF</div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <div className="rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-value">{product.rating}</span>
        </div>
        <div className="price-section">
          <span className="price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}