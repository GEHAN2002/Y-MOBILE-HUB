import React from 'react';
import Hero from '../components/Hero';
import DealOfTheDay from '../components/DealOfTheDay';
import ProductCard from '../components/ProductCard';
import '../styles/pages.css';

export default function Home() {
  const popularProducts = [
    { id: 1, name: 'Samsung Galaxy S24 Ultra', price: 1099, originalPrice: 1299, image: '📱', category: 'Samsung', rating: 4.9, discount: 15 },
    { id: 2, name: 'iPhone 15 Pro Max', price: 1199, originalPrice: 1399, image: '📱', category: 'Apple', rating: 4.9, discount: 14 },
    { id: 3, name: 'OnePlus 12', price: 799, originalPrice: 899, image: '📱', category: 'OnePlus', rating: 4.7, discount: 11 },
    { id: 4, name: 'Xiaomi 14', price: 699, originalPrice: 799, image: '📱', category: 'Xiaomi', rating: 4.6, discount: 12 },
    { id: 5, name: 'Google Pixel 8 Pro', price: 899, originalPrice: 999, image: '📱', category: 'Google', rating: 4.8, discount: 10 },
    { id: 6, name: 'Nothing Phone 2', price: 599, originalPrice: 699, image: '📱', category: 'Nothing', rating: 4.5, discount: 14 },
  ];

  return (
    <div className="page home-page">
      <Hero />
      <DealOfTheDay />

      <section className="popular-products">
        <div className="section-header">
          <h2>Popular Smartphones</h2>
          <a href="#" className="view-all">View All →</a>
        </div>
        <div className="products-grid">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-card promo-exchange">
          <h3>💱 Exchange Offer</h3>
          <p>Up to $150 Off on Exchange</p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="promo-card promo-delivery">
          <h3>🚚 Free Delivery</h3>
          <p>Free & Fast Delivery On All Orders</p>
          <button className="btn btn-secondary">Shop Now</button>
        </div>
        <div className="promo-card promo-offers">
          <h3>💰 Bank Offers</h3>
          <p>Up to 10% Instant Discounts</p>
          <button className="btn btn-secondary">View Offers</button>
        </div>
      </section>
    </div>
  );
}