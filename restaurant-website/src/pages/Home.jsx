import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Address from "../components/Address/Address";
import restaurantHeroImage from "../assets/images/hero-image.webp";
import "./Home.css";

const Home = () => {
  const restaurantName = "Cafe Fausse";
	const address = "47 Mayfair Gardens Belgravia, London, SW1X 9BZ";
	const phone = "+44 (0)20 7235 0000";
	const email = "info@cafefausse.co.uk";
  return (
    <div className="home-container">
      <Header restaurantName={restaurantName} />
			<Hero imageUrl={restaurantHeroImage} altText="Cafe Fausse Hero Image" />
			<Address address={address} phone={phone} email={email} />
      <main className="home-content">
        {/* Main content of the home page will go here */}
      </main>
    </div>
  );
};

export default Home;