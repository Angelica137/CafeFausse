import React from 'react';
import './About.css';
import chefImage from '../assets/images/dan-rooney-qm6yxe7SjWg-unsplash.jpg';

import jamesBeardAwardImage from '../assets/images/james-beard-award.jpg'; 
import bestFineDiningImage from '../assets/images/best-fine-dining.png'; 
import worldCulinaryAwardImage from '../assets/images/world-culinary-award.png'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Café Fausse</h1>
      </div>
      
      <section className="about-content">
        <div className="about-image-container">
          <img src={chefImage} alt="Chef Antonio Rossi" className="about-image" />
        </div>
        
        <div className="about-text">
          <p>
            Nestled in the prestigious heart of Belgravia, Café Fausse stands as an epitome of culinary excellence and timeless luxury. Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.
          </p>
          
          <h2>Our Founders</h2>
          
          <h3>Chef Antonio Rossi</h3>
          <p>
            With over 25 years of culinary experience, Chef Antonio Rossi brings his Tuscan heritage and passion for authentic Italian cuisine to Café Fausse. Born and raised in Florence, Antonio began his journey in his grandmother's kitchen before training at the prestigious Culinary Institute of Milan. His career has taken him through renowned kitchens across Europe, including three years at a three-Michelin-star restaurant in Paris. Antonio's philosophy centers on honoring traditional techniques while embracing innovation, resulting in dishes that are both familiar and surprising.
          </p>
          
          <h3>Maria Lopez</h3>
          <p>
            As the business visionary behind Café Fausse, Maria Lopez combines her keen entrepreneurial instincts with a lifelong passion for hospitality. With a background in luxury hotel management and an MBA from London Business School, Maria has created the perfect environment for Antonio's culinary artistry to flourish. Her attention to detail extends from the restaurant's elegant décor to its impeccable service standards. Maria's commitment to creating memorable dining experiences has earned Café Fausse its reputation as a destination for discerning food lovers.
          </p>
          
          <div className="quote-container">
            <blockquote>
              "Cooking is not just about ingredients, it's about bringing together the exceptional and the ordinary to create something memorable."
            </blockquote>
            <cite>— Chef Antonio Rossi</cite>
          </div>
          
          <h2>Our Commitment</h2>
          
          <h3>Unforgettable Dining Experience</h3>
          <p>
            At Café Fausse, every detail is thoughtfully curated to offer a sophisticated dining experience that goes beyond mere meals — it is a celebration of the senses. The soft glow of chandeliers, the finest linens, and impeccable service create an atmosphere where guests are treated with the utmost care and respect, making every visit an unforgettable occasion.
          </p>
          
          <h3>Culinary Excellence</h3>
          <p>
            With two Michelin stars and a legacy built on passion, precision, and dedication, Café Fausse continues to set the standard for luxury dining in London. Chef Antonio, with his world-renowned expertise and unwavering passion for fine cuisine, brings to life a menu where each dish is not just food, but a work of art. Every plate is a testament to craftsmanship, served with carefully selected accompaniments that elevate the very concept of dining.
          </p>
          
          <h3>Locally Sourced Ingredients</h3>
          <p>
            Our commitment to quality begins with our ingredients. We work closely with local farmers, fishermen, and artisanal producers to source the finest seasonal produce available. By maintaining strong relationships with our suppliers, we ensure that only the freshest, most ethically sourced ingredients make their way into our kitchen. This farm-to-table approach not only results in superior flavors but also supports the local economy and reduces our environmental impact.
          </p>
        </div>
      </section>
      
      <section className="awards-section">
        <h2>Awards & Recognition</h2>
        <div className="awards-container">
          <div className="award">
            <div className="award-icon">
              <img src={jamesBeardAwardImage} alt="James Beard Foundation Award" className="award-image" />
            </div>
            <h3>Restaurant of the Year 2023</h3>
            <p>Award for Excellence in Culinary Arts</p>
          </div>
          <div className="award">
            <div className="award-icon">
              <img src={bestFineDiningImage} alt="Best Fine Dining Experience" className="award-image" />
            </div>
            <h3>Best Fine Dining Experience 2023</h3>
            <p>Recognized for exceptional cuisine and worth a detour</p>
          </div>
          <div className="award">
            <div className="award-icon">
              <img src={worldCulinaryAwardImage} alt="World Culinary Award" className="award-image" />
            </div>
            <h3>Culinary Excellence 2022</h3>
            <p>Chef Antonio Rossi recognized for global contribution to fine dining</p>
          </div>
        </div>
      </section>
      
      <section className="reviews-section">
        <h2>What People Are Saying</h2>
        <div className="reviews-container">
          <div className="review">
            <div className="review-content">
              <p className="review-text">"Exceptional ambiance and unforgettable flavors."</p>
              <p className="review-author">– Gourmet Review</p>
            </div>
          </div>
          
          <div className="review">
            <div className="review-content">
              <p className="review-text">"A must-visit restaurant for food enthusiasts."</p>
              <p className="review-author">– The Daily Bite</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;