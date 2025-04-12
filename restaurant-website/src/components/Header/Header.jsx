import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ restaurantName }) => {
  return (
    <header className="header">
      <div className="header-content">
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
      </div>
    </header>
  );
};

export default Header;