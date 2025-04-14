import React from 'react';
import './Footer.css';
import { Phone, Mail } from 'lucide-react'; // Import Lucide icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address-container">
          <div className="address-block">
            <p className="address-line">47 Mayfair Gardens</p>
            <p className="address-line">Belgravia</p>
            <p className="address-line">London</p>
            <p className="address-line">SW1X 9BZ</p>
          </div>
          
          <div className="contact-info">
            <div className="phone-container">
              <span className="phone-icon">
                <Phone size={18} strokeWidth={2} />
              </span>
              <span className="phone-number">+44 (0)20 7235 0000</span>
            </div>
            
            <div className="email-container">
              <span className="email-icon">
                <Mail size={18} strokeWidth={2} />
              </span>
              <span className="email">info@cafefausse.co.uk</span>
            </div>
          </div>
          
          <div className="hours">
            <div className="hours-section">
              <p className="hours-title">Lunch: 12 - 3:30pm (Wed - Sun)</p>
            </div>
            
            <div className="hours-section">
              <p className="hours-title">Dinner: 6:30 - 11:30pm (Wed - Sun)</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Café Fausse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;