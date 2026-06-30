import React, { useState } from 'react';
import '../styles/image-showcase.css';

export default function ImageShowcase() {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <section className="image-showcase">
      <div className="showcase-tabs">
        <button 
          className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          🖼️ Image Gallery
        </button>
        <button 
          className={`tab ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          🤖 AI Generator
        </button>
        <button 
          className={`tab ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          📤 Upload Own
        </button>
      </div>

      <div className="showcase-content">
        {activeTab === 'gallery' && (
          <div className="tab-content">
            <h3>Professional Dark Mood Images</h3>
            <p>Browse curated collection of high-quality product images</p>
          </div>
        )}
        {activeTab === 'generator' && (
          <div className="tab-content">
            <h3>Generate Custom Images with AI</h3>
            <p>Create unique product images using AI prompts</p>
          </div>
        )}
        {activeTab === 'upload' && (
          <div className="tab-content">
            <h3>Upload Your Own Images</h3>
            <p>Use your own product photography</p>
          </div>
        )}
      </div>
    </section>
  );
}