import React, { useState } from 'react';
import './ImageItem.css';
import Modal from './Modal';

const ImageItem = ({ src }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="image-item">
      <img src={src} alt="" onClick={() => setIsOpen(true)} />
      {isOpen && <Modal src={src} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ImageItem;
