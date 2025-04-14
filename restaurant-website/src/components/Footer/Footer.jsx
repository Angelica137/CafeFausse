import React from 'react';
import './Footer.css';
import { Phone, Mail } from 'lucide-react'; // Import Lucide icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address-container">
          <div className="address-block">
            <p className="address-line">1234 Culinary Ave</p>
            <p className="address-line">Suite 100</p>
            <p className="address-line">Washington, DC 20002</p>
          </div>
          
          <div className="contact-info">
            <div className="phone-container">
              <span className="phone-icon">
                <Phone size={18} strokeWidth={2} />
              </span>
              <span className="phone-number">(202) 555-4567</span>
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
              <p className="hours-title">Monday–Saturday: 5:00 PM – 11:00 PM</p>
            </div>
            
            <div className="hours-section">
              <p className="hours-title">Sunday: 5:00 PM – 9:00 PM</p>
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