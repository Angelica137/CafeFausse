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
			</div>
    </header>
  );
};

export default Header;