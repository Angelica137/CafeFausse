import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";

const Home = () => {
  const restaurantName = "Cafe Fausse";

  return (
    <div className="home-container">
      <Header restaurantName={restaurantName} />
      <main className="home-content">
        {/* Main content of the home page will go here */}
      </main>
    </div>
  );
};

export default Home;