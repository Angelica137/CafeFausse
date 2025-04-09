import React from "react";
import "./Header.css";

const Header = ({ restaurantName }) => {
  return (
    <header className="header">
			<div className="header-content">
				<div className="logo-container">
					<h1 className="restaurant-name">{restaurantName}</h1>
				</div>
			</div>
    </header>
  );
};

export default Header;