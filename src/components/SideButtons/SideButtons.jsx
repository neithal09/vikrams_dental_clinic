import React from 'react';
import { FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa';
import './SideButtons.css';

const SideButtons = () => {
  return (
    <div className="side-buttons">
      <a href="#" className="side-buttons__btn side-buttons__btn--arrow" aria-label="Navigate">
        <FaArrowRight />
      </a>
      <a
        href="https://wa.me/919820020221"
        target="_blank"
        rel="noopener noreferrer"
        className="side-buttons__btn side-buttons__btn--whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:+919820020221"
        className="side-buttons__btn side-buttons__btn--phone"
        aria-label="Call us"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default SideButtons;
