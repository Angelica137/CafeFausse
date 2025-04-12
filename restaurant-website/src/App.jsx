import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Header from './components/Header/Header';


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
