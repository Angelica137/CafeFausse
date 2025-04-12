import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Header from './components/Header/Header';

// Placeholder components for routes that don't have full pages yet
const Reservations = () => <div className="page-container"><h2>Reservations Page Coming Soon</h2></div>;

const Gallery = () => <div className="page-container"><h2>Gallery Page Coming Soon</h2></div>;

function App() {
  const restaurantName = "Café Fausse";
  
  return (
    <Router>
      <div className="app">
        <Header restaurantName={restaurantName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
