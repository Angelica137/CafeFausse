import React from 'react';
import './Welcome.css';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div>
        <h2 className="welcome-title">
          Welcome to Café Fausse
        </h2>
        
        <p className="welcome-subtitle">
          Award Winning British Cuisine in the heart of Belgravia.
        </p>
        
        <p className="welcome-description">
          Discover Café Fausse, an exceptional dining experience where luxury meets artistry. 
          Indulge in exquisite French cuisine, crafted with precision, in an elegant setting 
          that celebrates the charm of Belgravia. Whether for an intimate evening or a grand 
          celebration, our renowned restaurant offers the perfect backdrop for unforgettable moments.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;