import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [uploadedImages, setUploadedImages] = useState({});

  const uploadImage = (productId, imageFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImages(prev => ({
        ...prev,
        [productId]: e.target.result
      }));
    };
    reader.readAsDataURL(imageFile);
  };

  const getImage = (productId, defaultImage) => {
    return uploadedImages[productId] || defaultImage;
  };

  return (
    <ImageContext.Provider value={{ uploadedImages, uploadImage, getImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImages() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within ImageProvider');
  }
  return context;
}