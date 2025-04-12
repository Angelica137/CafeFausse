import React from "react";
import Hero from "../components/Hero/Hero";
import Address from "../components/Address/Address";
import WelcomeSection from "../components/Welcome/Welcome";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import restaurantHeroImage from "../assets/images/hero-image.webp";
import "./Home.css";

const Home = () => {
	const address = "47 Mayfair Gardens Belgravia, London, SW1X 9BZ";
	const phone = "+44 (0)20 7235 0000";
	const email = "info@cafefausse.co.uk";
  return (
    <div className="home-container">
			<Hero imageUrl={restaurantHeroImage} altText="Café Fausse Hero Image" />
			<WelcomeSection />
			<NewsLetter />
			<Address address={address} phone={phone} email={email} />
      <main className="home-content">
        {/* Main content of the home page will go here */}
      </main>
    </div>
  );
};

export default Home;