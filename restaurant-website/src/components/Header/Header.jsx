import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ restaurantName }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    
    // Toggle the menu-open class on the body element
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Check if we're on mobile based on window width
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 750;
      setIsMobile(isMobileView);
      
      // If switching from mobile to desktop view with open menu
      if (!isMobileView && menuOpen) {
        setMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    // Set initial value
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkMobile);
      // Make sure to clean up by removing the class when component unmounts
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-content">
        {isMobile ? (
          <>
            <div className="mobile-logo-container">
              <Link to="/" className="logo-link" onClick={closeMenu}>
                <h1 className="restaurant-name">{restaurantName}</h1>
              </Link>
            </div>
            <div className={`hamburger-menu ${menuOpen ? 'fixed' : ''}`} onClick={toggleMenu}>
              <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
              <nav>
                <ul>
                  <li><Link to="/reservations" className="nav-link" onClick={closeMenu}>Reservations</Link></li>
                  <li><Link to="/menu" className="nav-link" onClick={closeMenu}>Menu</Link></li>
                  <li><Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link></li>
                  <li><Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link></li>
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <>
            <div className="left-nav">
              <nav>
                <ul>
                  <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
                  <li><Link to="/menu" className="nav-link">Menu</Link></li>
                </ul>
              </nav>
            </div>
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <h1 className="restaurant-name">{restaurantName}</h1>
              </Link>
            </div>
            <div className="right-nav">
              <nav>
                <ul>
                  <li><Link to="/about" className="nav-link">About Us</Link></li>
                  <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;