import React, { useRef } from 'react';
import { useImages } from '../context/ImageContext';
import '../styles/product-card.css';

export default function ProductCard({ product }) {
  const { getImage, uploadImage } = useImages();
  const fileInputRef = useRef(null);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const displayImage = getImage(product.id, product.image);
  const isCustomImage = displayImage && displayImage.startsWith('data:');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(product.id, file);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {isCustomImage || (displayImage && displayImage.includes('/')) ? (
          <>
            <img 
              src={displayImage} 
              alt={product.name} 
              className="product-image"
            />
            <div className="image-overlay">
              <button 
                className="upload-btn-overlay"
                onClick={() => fileInputRef.current?.click()}
                title="Change image"
              >
                📷 Change
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="product-image-emoji">{displayImage}</div>
            <div className="image-overlay">
              <button 
                className="upload-btn-overlay"
                onClick={() => fileInputRef.current?.click()}
                title="Upload image"
              >
                📷 Upload
              </button>
            </div>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
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
        <button className="add-to-cart-btn">🛒 Add to Cart</button>
      </div>
    </div>
  );
}