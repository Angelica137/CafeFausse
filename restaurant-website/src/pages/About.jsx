import React from 'react';
import './About.css';
import chefImage from '../assets/images/dan-rooney-qm6yxe7SjWg-unsplash.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Café Fausse</h1>
      </div>
      
      <section className="about-content">
        <div className="about-image-container">
          <img src={chefImage} alt="Chef Louis Fausse" className="about-image" />
        </div>
        
        <div className="about-text">
          <p>
            Nestled in the prestigious heart of Belgravia, Café Fausse stands as an epitome of culinary excellence and timeless luxury. A two-Michelin-star steakhouse, it is the creation of <strong>Chef Louis Fausse</strong>, a master of his craft whose name has become synonymous with perfection in the world of fine dining.
          </p>
          
          <p>
            At Café Fausse, every detail is thoughtfully curated to offer a sophisticated dining experience that goes beyond mere meals — it is a celebration of the senses. Chef Louis, with his world-renowned expertise and unwavering passion for the finest cuts of meat, brings to life a menu where exceptional steak is not just a dish, but a work of art. Dry-aged to perfection, each steak is a testament to craftsmanship, served with carefully selected sides and sauces that elevate the very concept of dining.
          </p>
          
          <div className="quote-container">
            <blockquote>
              "Cooking is not just about ingredients, it's about bringing together the exceptional and the ordinary to create something memorable."
            </blockquote>
            <cite>— Chef Louis Fausse</cite>
          </div>
          
          <p>
            Steeped in the rich tradition of French gastronomy, the restaurant's ambiance is one of understated grandeur, where the elegance of classic design harmonizes with modern touches. The soft glow of chandeliers, the finest linens, and impeccable service create an atmosphere where guests are treated with the utmost care and respect, making every visit an unforgettable occasion.
          </p>
          
          <p>
            Café Fausse is not just a restaurant — it is a destination. A place where discerning diners can indulge in a refined culinary journey, one that celebrates the finest ingredients, exceptional technique, and the art of great service. It is here that excellence is not a goal but a standard, and where the pursuit of perfection is evident in every plate, every glass of wine, and every smile of the team who serves you.
          </p>
          
          <p>
            With two Michelin stars and a legacy built on passion, precision, and dedication, Café Fausse continues to set the standard for luxury dining in London. Here, we invite you to experience the finest in haute cuisine, where every meal is a celebration of the artistry of cooking, and every moment is one to be cherished.
          </p>
        </div>
      </section>
      
      <section className="awards-section">
        <h2>Awards & Recognition</h2>
        <div className="awards-container">
          <div className="award">
            <div className="award-icon michelin"></div>
            <h3>Two Michelin Stars</h3>
            <p>Recognized for exceptional cuisine and worth a detour</p>
          </div>
          <div className="award">
            <div className="award-icon fine-dining"></div>
            <h3>London's Finest Dining</h3>
            <p>Voted among London's top 5 luxury restaurants</p>
          </div>
          <div className="award">
            <div className="award-icon culinary"></div>
            <h3>Culinary Excellence</h3>
            <p>Chef Louis Fausse named Chef of the Year</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;