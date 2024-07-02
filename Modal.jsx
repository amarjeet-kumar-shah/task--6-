import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <img src={src} alt="" />
      <div className="modal-close" onClick={onClose}>&times;</div>
    </div>
  );
};

export default Modal;
