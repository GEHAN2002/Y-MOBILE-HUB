import React, { useState } from 'react';
import '../styles/ai-image-generator.css';

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const presetPrompts = [
    {
      title: 'Dark Cinematic Phone',
      text: 'A sleek dark mood product showcase of a premium smartphone, neon blue and purple lighting, cinematic lighting, studio photography style, professional product shot, reflective surface, dramatic shadows, cyberpunk aesthetic, ultra detailed, 4K, moody atmosphere'
    },
    {
      title: 'Neon Tech Setup',
      text: 'Premium smartphone with neon blue and purple glow, dark background, cyberpunk aesthetic, dramatic shadows, futuristic, high detail, professional studio lighting'
    },
    {
      title: 'Dark Fantasy Phone',
      text: 'Magical dark mood smartphone showcase, glowing runes around the device, mysterious atmosphere, dark fantasy aesthetic, moody lighting, highly detailed, cinematic composition'
    },
    {
      title: 'Minimal Dark Aesthetic',
      text: 'Minimal dark aesthetic phone display, black and grey tones, soft lighting from window, shadows on surface, modern artistic style, calm and emotional atmosphere, ultra realistic'
    }
  ];

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt first!');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call (you can replace with actual API)
    setTimeout(() => {
      setGeneratedImages(prev => [{
        id: Date.now(),
        prompt: prompt,
        url: `https://via.placeholder.com/400x400?text=Generated+Image`,
        timestamp: new Date().toLocaleString()
      }, ...prev]);
      
      alert('📢 To generate real AI images, you need:\n\n1. Midjourney: discord.gg/midjourney\n2. DALL-E: openai.com\n3. Stable Diffusion: stablediffusion.com\n\nCopy this prompt and paste it there!');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="ai-generator">
      <div className="generator-header">
        <h2>🤖 AI Image Generator for Products</h2>
        <p>Generate dark mood product images using AI</p>
      </div>

      <div className="generator-container">
        <div className="prompt-section">
          <h3>Enter Your Prompt</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your ideal product image... (Dark mood, lighting, style, etc.)"
            className="prompt-textarea"
            rows="4"
          />
          <button 
            className="btn btn-primary generate-btn"
            onClick={handleGenerateImage}
            disabled={isLoading}
          >
            {isLoading ? '⏳ Processing...' : '✨ Generate Image'}
          </button>
        </div>

        <div className="presets-section">
          <h3>📌 Quick Presets</h3>
          <div className="presets-grid">
            {presetPrompts.map((preset, idx) => (
              <button
                key={idx}
                className="preset-btn"
                onClick={() => setPrompt(preset.text)}
                title={preset.text}
              >
                {preset.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {generatedImages.length > 0 && (
        <div className="generated-images">
          <h3>🎨 Generated Images</h3>
          <div className="images-grid">
            {generatedImages.map(img => (
              <div key={img.id} className="generated-item">
                <img src={img.url} alt="Generated" />
                <p className="gen-prompt">{img.prompt.substring(0, 50)}...</p>
                <small>{img.timestamp}</small>
                <button className="copy-prompt-btn" onClick={() => {
                  navigator.clipboard.writeText(img.prompt);
                  alert('Prompt copied!');
                }}>📋 Copy Prompt</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="ai-tools-info">
        <h3>🛠️ Recommended AI Tools</h3>
        <div className="tools-grid">
          <div className="tool-card">
            <h4>Midjourney</h4>
            <p>Best quality, Discord-based</p>
            <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
          <div className="tool-card">
            <h4>DALL-E 3</h4>
            <p>ChatGPT integration, easy to use</p>
            <a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
          <div className="tool-card">
            <h4>Stable Diffusion</h4>
            <p>Free, open source</p>
            <a href="https://stablediffusionweb.com" target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
          <div className="tool-card">
            <h4>Leonardo AI</h4>
            <p>Free credits daily</p>
            <a href="https://leonardo.ai" target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        </div>
      </div>
    </section>
  );
}