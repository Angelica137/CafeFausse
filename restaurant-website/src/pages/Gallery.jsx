import React, { useState } from 'react';
import './Gallery.css';

// Import images properly
import cafeInterior from '../assets/images/gallery-cafe-interior.webp';
import ribeyeSteak from '../assets/images/gallery-ribeye-steak.webp';
import specialEvent from '../assets/images/gallery-special-event.webp';
import heroImage from '../assets/images/hero-image.webp';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      src: cafeInterior,
      alt: 'Restaurant Interior',
      title: 'Our Elegant Space',
      description: 'A warm and inviting atmosphere for your dining experience.'
    },
    {
      src: ribeyeSteak,
      alt: 'Ribeye Steak',
      title: 'Signature Ribeye Steak',
      description: 'Perfectly cooked to your preference, served with seasonal vegetables.'
    },
    {
      src: specialEvent,
      alt: 'Special Event',
      title: 'Special Events',
      description: 'We host a variety of events from private parties to corporate gatherings.'
    },
    {
      src: heroImage,
      alt: 'Restaurant Hero Image',
      title: 'Welcome to Our Restaurant',
      description: 'Experience exceptional cuisine and service in a charming environment.'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = (selectedImage + direction + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div 
            className="gallery-item" 
            key={index} 
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage(-1)}>&#10094;</button>
            <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} />
            <button className="lightbox-nav lightbox-next" onClick={() => navigateImage(1)}>&#10095;</button>
            <div className="lightbox-caption">
              <h3>{galleryImages[selectedImage].title}</h3>
              <p>{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;