// components/Address/Address.jsx
import React from 'react';
import './Address.css';

const Address = () => {
  return (
    <div className="address-container">
      <div className="address-block">
        <p className="address-line">47 Mayfair Gardens</p>
        <p className="address-line">Belgravia</p>
        <p className="address-line">London</p>
        <p className="address-line">SW1X 9BZ</p>
      </div>
      
      <div className="contact-info">
        <div className="phone-container">
          <span className="phone-icon">☎</span>
          <span className="phone-number">+44 (0)20 7235 0000</span>
        </div>
        
        <div className="email-container">
          <span className="email-icon">✉</span>
          <span className="email">info@cafefausse.co.uk</span>
        </div>
      </div>
      
      <div className="hours">
        <div className="hours-section">
          <p className="hours-title">Lunch: 12 - 3:30pm (Wednesday - Sunday)</p>
        </div>
        
        <div className="hours-section">
          <p className="hours-title">Dinner: 6:30 - 11:30pm (Wednesday - Sunday)</p>
        </div>
      </div>
    </div>
  );
};

export default Address;