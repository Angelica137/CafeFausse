import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import restaurantHeroImage from "../assets/images/hero-image.webp";
import "./Home.css";

const Home = () => {
  const restaurantName = "Cafe Fausse";

  return (
    <div className="home-container">
      <Header restaurantName={restaurantName} />
			<Hero imageUrl={restaurantHeroImage} altText="Cafe Fausse Hero Image" />
      <main className="home-content">
        {/* Main content of the home page will go here */}
      </main>
    </div>
  );
};

export default Home;