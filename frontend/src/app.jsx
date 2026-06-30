import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FeaturesPanel from './components/FeaturesPanel';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import './styles/app.css';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation />
      <div className="app-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FeaturesPanel />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <WishlistProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </WishlistProvider>
      </ThemeProvider>
    </Router>
  );
}