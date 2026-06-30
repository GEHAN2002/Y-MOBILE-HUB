import React, { useState } from 'react';
import '../styles/image-gallery.css';

export default function ImageGallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      title: 'Dark Mood Smartphone',
      description: 'Cinematic dark mood professional smartphone showcase',
      url: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&q=80',
      prompt: 'A sleek dark mode product showcase of a premium smartphone, neon blue and purple lighting, cinematic lighting, studio photography style'
    },
    {
      id: 2,
      title: 'Neon Tech Aesthetic',
      description: 'Modern smartphone with neon lighting effects',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
      prompt: 'Premium smartphone with neon blue and purple glow, dark background, cyberpunk aesthetic, dramatic shadows'
    },
    {
      id: 3,
      title: 'Dark Studio Setup',
      description: 'Professional dark mood product photography',
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80',
      prompt: 'Dark mood studio photography of smartphones, professional lighting, reflective surfaces, moody atmosphere'
    },
    {
      id: 4,
      title: 'Cyber Showcase',
      description: 'Futuristic dark aesthetic device showcase',
      url: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&q=80',
      prompt: 'Futuristic dark UI hologram style smartphone showcase, glowing neon elements, cyber aesthetic'
    }
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="image-gallery">
      <div className="gallery-header">
        <h2>🎨 Dark Mood Product Images</h2>
        <p>High-quality product images with professional dark aesthetic</p>
      </div>

      <div className="gallery-grid">
        {images.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.url} alt={image.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <button className="view-btn">View & Use</button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.url} alt={selectedImage.title} className="modal-image" />
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <div className="prompt-section">
                <h4>📝 AI Prompt Used:</h4>
                <p className="prompt-text">{selectedImage.prompt}</p>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={() => {
                  navigator.clipboard.writeText(selectedImage.url);
                  alert('Image URL copied!');
                }}>
                  📋 Copy URL
                </button>
                <button className="btn btn-secondary">
                  💾 Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}