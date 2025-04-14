import React from "react";
import Hero from "../components/Hero/Hero";
import WelcomeSection from "../components/Welcome/Welcome";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import restaurantHeroImage from "../assets/images/hero-image.webp";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
			<Hero imageUrl={restaurantHeroImage} altText="Café Fausse Hero Image" />
			<WelcomeSection />
			<NewsLetter />
			
      <main className="home-content">
        {/* Main content of the home page will go here */}
      </main>
    </div>
  );
};

export default Home;