import React from "react";
import "./Header.css";

const Header = ({ restaurantName }) => {
  return (
    <header className="header">
			<div className="header-content">
				<div className="left-nav">
					<nav>
						<ul>
							<li><a href="/reservations" className="nav-link">Make a Reservation</a></li>
							<li><a href="/menu" className="nav-link">Menu</a></li>
						</ul>
					</nav>
				</div>
				<div className="logo-container">
					<h1 className="restaurant-name">{restaurantName}</h1>
				</div>
				<div className="right-nav">
					<nav>
						<ul>
							<li><a href="/about" className="nav-link">About Us</a></li>
							<li><a href="/gallery" className="nav-link">Gallery</a></li>
						</ul>
					</nav>
				</div>
			</div>
    </header>
  );
};

export default Header;