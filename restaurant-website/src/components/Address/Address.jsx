import React from "react";
import "./Address.css";

const Address = ({ address, phone, email }) => {
	return (
		<div className="address-container" data-testid="address-container">
			<p>{address}</p>
			<p>{phone}</p>
			<p>{email}</p>
		</div>
	);
};

export default Address;