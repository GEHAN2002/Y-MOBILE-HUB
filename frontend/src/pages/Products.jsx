import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/pages.css';

export default function Products() {
  const [products] = useState([
    { id: 1, name: 'Samsung Galaxy S24 Ultra', price: 1099, originalPrice: 1299, image: '📱', category: 'Samsung', rating: 4.9, discount: 15 },
    { id: 2, name: 'iPhone 15 Pro Max', price: 1199, originalPrice: 1399, image: '📱', category: 'Apple', rating: 4.9, discount: 14 },
    { id: 3, name: 'iPhone 15 Pro', price: 999, originalPrice: 1099, image: '📱', category: 'Apple', rating: 4.9 },
    { id: 4, name: 'OnePlus 12', price: 799, originalPrice: 899, image: '📱', category: 'OnePlus', rating: 4.7, discount: 11 },
    { id: 5, name: 'Xiaomi 14 Ultra', price: 899, originalPrice: 999, image: '📱', category: 'Xiaomi', rating: 4.8, discount: 10 },
    { id: 6, name: 'Google Pixel 8 Pro', price: 899, originalPrice: 999, image: '📱', category: 'Google', rating: 4.8, discount: 10 },
    { id: 7, name: 'Xiaomi 14', price: 699, originalPrice: 799, image: '📱', category: 'Xiaomi', rating: 4.6, discount: 12 },
    { id: 8, name: 'Nothing Phone 2', price: 599, originalPrice: 699, image: '📱', category: 'Nothing', rating: 4.5, discount: 14 },
    { id: 9, name: 'Wireless Earbuds Pro', price: 149, image: '🎧', category: 'Accessories', rating: 4.4 },
    { id: 10, name: 'Phone Case Bundle', price: 49, image: '🎒', category: 'Accessories', rating: 4.3 },
    { id: 11, name: 'Fast Charger 65W', price: 39, image: '🔌', category: 'Accessories', rating: 4.6 },
    { id: 12, name: 'Screen Protector', price: 19, image: '🛡️', category: 'Accessories', rating: 4.5 },
  ]);

  return (
    <div className="page products-page">
      <div className="products-header">
        <h1>All Products</h1>
        <p>Discover our complete range of mobile devices and accessories</p>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}