import React from 'react';
import './Gallery.css';
import ImageItem from './ImageItem';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image paths
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <ImageItem key={index} src={src} />
      ))}
    </div>
  );
};

export default Gallery;
