import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/hero-image.webp';

const Hero = ({ altText }) => {
	return (
		<section className="hero">
			<div className="hero-image-container">
				<img 
					src={heroImage} 
					alt={altText || "Restaurant hero image"} 
					className="hero-image" />
			</div>
		</section>
	);
};

export default Hero;