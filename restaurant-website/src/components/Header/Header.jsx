import React from "react";
import "./Header.css";

const Header = ({ restaurantName }) => {
  return (
    <header className="header">
      <h1 className="restaurant-name">{restaurantName}</h1>
    </header>
  );
};

export default Header;