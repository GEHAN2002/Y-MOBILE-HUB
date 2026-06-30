import React, { useState } from 'react';
import '../styles/pages.css';

export default function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: '$999',
      image: '📱',
      category: 'Apple'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: '$899',
      image: '📱',
      category: 'Samsung'
    },
    {
      id: 3,
      name: 'Google Pixel 8',
      price: '$799',
      image: '📱',
      category: 'Google'
    },
    {
      id: 4,
      name: 'OnePlus 12',
      price: '$699',
      image: '📱',
      category: 'OnePlus'
    },
    {
      id: 5,
      name: 'Xiaomi 14 Ultra',
      price: '$649',
      image: '📱',
      category: 'Xiaomi'
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      price: '$149',
      image: '🎧',
      category: 'Accessories'
    },
    {
      id: 7,
      name: 'Phone Case Bundle',
      price: '$49',
      image: '🎒',
      category: 'Accessories'
    },
    {
      id: 8,
      name: 'Fast Charger 65W',
      price: '$39',
      image: '🔌',
      category: 'Accessories'
    }
  ]);

  return (
    <div className="page products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our wide range of mobile devices and accessories</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}